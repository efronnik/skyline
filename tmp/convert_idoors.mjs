import fs from 'node:fs'
import path from 'node:path'

const assimpjs = (await import('assimpjs')).default
const ajs = await assimpjs()

const src = 'C:/Users/nussi/Downloads/IDoors_2026_3D/IDors_2026_3D.fbx'
const maps = 'C:/Users/nussi/Downloads/IDoors_2026_3D/maps'
const outDir = 'C:/Users/nussi/dveri/tmp/idoors-3d'
fs.mkdirSync(outDir, { recursive: true })

const files = new ajs.FileList()
files.AddFile('IDors_2026_3D.fbx', fs.readFileSync(src))
for (const name of fs.readdirSync(maps)) {
  files.AddFile(`maps/${name}`, fs.readFileSync(path.join(maps, name)))
  files.AddFile(name, fs.readFileSync(path.join(maps, name)))
}

const jsonResult = ajs.ConvertFileList(files, 'assjson')
if (!jsonResult.IsSuccess() || jsonResult.FileCount() === 0) {
  console.error('json fail', jsonResult.GetErrorCode())
  process.exit(1)
}
const json = JSON.parse(new TextDecoder().decode(jsonResult.GetFile(0).GetContent()))
fs.writeFileSync(path.join(outDir, 'scene.json'), JSON.stringify(json, null, 2))

function walk(node, depth = 0, acc = []) {
  acc.push({
    name: node.name,
    meshes: node.meshes,
    children: (node.children || []).length,
    transformation: node.transformation
  })
  for (const child of node.children || []) walk(child, depth + 1, acc)
  return acc
}

const nodes = walk(json.rootnode)
console.log('meshes', json.meshes?.length, 'materials', json.materials?.length, 'nodes', nodes.length)
console.log('--- materials ---')
for (const [i, mat] of (json.materials || []).entries()) {
  const props = Object.fromEntries((mat.properties || []).map(p => [p.key, p.value]))
  console.log(i, mat.name || props['?mat.name'] || props['$mat.name'], Object.keys(props))
}
console.log('--- meshes ---')
for (const [i, mesh] of (json.meshes || []).entries()) {
  console.log(i, mesh.name, 'verts', mesh.vertices?.length / 3 | 0, 'faces', mesh.faces?.length, 'mat', mesh.materialindex)
}
console.log('--- nodes ---')
for (const n of nodes) console.log(n.name, n.meshes, 'kids', n.children)

const glb = ajs.ConvertFileList(files, 'glb2')
if (!glb.IsSuccess() || glb.FileCount() === 0) {
  console.error('glb fail', glb.GetErrorCode())
} else {
  fs.writeFileSync(path.join(outDir, 'idoors.glb'), glb.GetFile(0).GetContent())
  console.log('glb bytes', glb.GetFile(0).GetContent().length)
}

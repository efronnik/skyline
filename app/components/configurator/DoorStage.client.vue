<script setup lang="ts">
import { animate, createTimeline } from 'animejs'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { getLeafFinish, type LeafFinish } from '~/data/doorFinishes'

const props = defineProps<{
  edge: 'silver' | 'black'
  leaf: LeafFinish
  wall: string
  floor: string
  side: 'left' | 'right'
  swing: 'in' | 'out'
  handlePos: 'standard' | 'high' | 'custom'
  threshold: 'yes' | 'no'
  height: 'standard' | 'ceiling' | 'custom'
  opened: boolean
}>()

const emit = defineEmits<{
  leafClick: []
  handleClick: []
  sillClick: []
}>()

const host = ref<HTMLElement | null>(null)
const reduced = useReducedMotion()
const { play, stop } = useAnimeJob()

const edgeTones = {
  silver: 0xc5c2ba,
  black: 0x1c1916
}

const handleHeight = {
  standard: 1050,
  high: 1420,
  custom: 780
}

const heightScale = {
  standard: 0.88,
  ceiling: 1,
  custom: 1.06
}

const OPEN_DEG = 87

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let controls: OrbitControls | null = null
let frame = 0
let leafPivot: THREE.Group | null = null
let handleMesh: THREE.Object3D | null = null
let sillMesh: THREE.Mesh | null = null
let doorRoot: THREE.Group | null = null
let wallMesh: THREE.Mesh | null = null
let floorMesh: THREE.Mesh | null = null
let frameMesh: THREE.Mesh | null = null
let leafMeshes: THREE.Mesh[] = []
let edgeMeshes: THREE.Mesh[] = []
let sillDroppedY = 0
let sillRetractedY = 0
let primed = false
const textures = new Map<string, THREE.Texture>()
const pointer = new THREE.Vector2()
const raycaster = new THREE.Raycaster()
const clickable: THREE.Object3D[] = []
let pointerDown = new THREE.Vector2()
let resizeObs: ResizeObserver | null = null

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return
    child.geometry.dispose()
    const materials = Array.isArray(child.material) ? child.material : [child.material]
    for (const material of materials) material.dispose()
  })
}

function paintMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.62,
    metalness: 0,
    vertexColors: false
  })
}

function metal(color: number) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.78,
    roughness: 0.28,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2
  })
}

function bake(mesh: THREE.Mesh) {
  mesh.updateWorldMatrix(true, false)
  const geometry = mesh.geometry.clone()
  geometry.applyMatrix4(mesh.matrixWorld)
  geometry.deleteAttribute('color')
  const baked = new THREE.Mesh(geometry, paintMaterial())
  baked.name = mesh.name
  return baked
}

function shrinkLeaf(mesh: THREE.Mesh, inset: number) {
  const geometry = mesh.geometry
  geometry.computeBoundingBox()
  const box = geometry.boundingBox
  if (!box) return
  const center = box.getCenter(new THREE.Vector3())
  const size = box.getSize(new THREE.Vector3())
  const sx = Math.max(0.2, (size.x - inset * 2) / size.x)
  const sy = Math.max(0.2, (size.y - inset * 2) / size.y)
  geometry.translate(-center.x, -center.y, -center.z)
  geometry.scale(sx, sy, 1)
  geometry.translate(center.x, center.y, center.z)
}

async function textureFor(id: LeafFinish) {
  const finish = getLeafFinish(id)
  if (!finish.map) return null
  const cached = textures.get(finish.map)
  if (cached) return cached
  const map = await new THREE.TextureLoader().loadAsync(finish.map)
  map.colorSpace = THREE.SRGBColorSpace
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  map.anisotropy = 8
  textures.set(finish.map, map)
  return map
}

async function applyLeaf() {
  for (const mesh of leafMeshes) {
    const material = mesh.material
    if (!(material instanceof THREE.MeshStandardMaterial)) continue
    material.map = null
    material.vertexColors = false
    material.color.set(0xffffff)
    material.roughness = 0.62
    material.metalness = 0
    material.needsUpdate = true
  }
}

function doorAngle() {
  const dir = props.swing === 'out' ? -1 : 1
  return props.opened ? dir * OPEN_DEG : 0
}

function sillY() {
  return props.threshold === 'yes' && !props.opened ? sillDroppedY : sillRetractedY
}

function rad(deg: number) {
  return THREE.MathUtils.degToRad(deg)
}

function snapDoor() {
  if (leafPivot) leafPivot.rotation.y = rad(doorAngle())
  if (handleMesh) {
    handleMesh.position.y = handleHeight[props.handlePos]
    handleMesh.rotation.z = 0
  }
  if (sillMesh) {
    sillMesh.position.y = sillY()
    const material = sillMesh.material
    if (material instanceof THREE.MeshStandardMaterial) {
      material.transparent = true
      material.opacity = props.threshold === 'yes' ? 1 : 0
    }
    sillMesh.visible = props.threshold === 'yes'
  }
}

function playDoor() {
  if (!leafPivot || !primed) return
  if (reduced.value) {
    stop('door')
    snapDoor()
    return
  }

  const angle = rad(doorAngle())
  const hasSeal = props.threshold === 'yes' && !!sillMesh
  const tl = createTimeline({ defaults: { composition: 'replace' } })

  if (props.opened) {
    if (hasSeal && sillMesh)
      tl.add(sillMesh.position, { y: sillRetractedY, duration: 220, ease: 'inOutQuad' }, 0)
    if (handleMesh) {
      tl.add(handleMesh.rotation, { z: rad(8), duration: 160, ease: 'outQuad' }, 40)
      tl.add(handleMesh.rotation, { z: 0, duration: 280, ease: 'inOutQuad' }, 180)
    }
    tl.add(leafPivot.rotation, { y: angle, duration: 980, ease: 'inOutCubic' }, hasSeal ? 90 : 0)
  } else {
    if (handleMesh) {
      tl.add(handleMesh.rotation, { z: rad(8), duration: 150, ease: 'outQuad' }, 0)
      tl.add(handleMesh.rotation, { z: 0, duration: 320, ease: 'inOutQuad' }, 160)
    }
    tl.add(leafPivot.rotation, { y: 0, duration: 920, ease: 'inOutCubic' }, 40)
    if (hasSeal && sillMesh)
      tl.add(sillMesh.position, { y: sillDroppedY, duration: 300, ease: 'outCubic' }, 740)
  }

  play('door', tl)
}

function playHandle() {
  if (!handleMesh || !primed) return
  if (reduced.value) {
    handleMesh.position.y = handleHeight[props.handlePos]
    return
  }
  play(
    'handle',
    animate(handleMesh.position, {
      y: handleHeight[props.handlePos],
      duration: 540,
      ease: 'inOutCubic',
      composition: 'replace'
    })
  )
}

function playSill() {
  if (!sillMesh || !primed) return
  const show = props.threshold === 'yes'
  sillMesh.visible = true
  const material = sillMesh.material
  if (reduced.value) {
    sillMesh.position.y = sillY()
    if (material instanceof THREE.MeshStandardMaterial) material.opacity = show ? 1 : 0
    sillMesh.visible = show
    return
  }
  if (material instanceof THREE.MeshStandardMaterial) {
    material.transparent = true
    play(
      'sill-fade',
      animate(material, {
        opacity: show ? 1 : 0,
        duration: 280,
        ease: show ? 'outCubic' : 'inQuad',
        composition: 'replace',
        onComplete: () => {
          if (sillMesh) sillMesh.visible = show
        }
      })
    )
  }
  play(
    'sill',
    animate(sillMesh.position, {
      y: sillY(),
      duration: 360,
      ease: 'outCubic',
      composition: 'replace'
    })
  )
}

function playEdge() {
  if (!edgeMeshes.length) return
  const target = new THREE.Color(edgeTones[props.edge])
  const colors = edgeMeshes
    .map(mesh => mesh.material)
    .filter((material): material is THREE.MeshStandardMaterial => material instanceof THREE.MeshStandardMaterial)
    .map(material => material.color)
  if (reduced.value) {
    for (const color of colors) color.copy(target)
    return
  }
  play(
    'edge',
    animate(colors, {
      r: target.r,
      g: target.g,
      b: target.b,
      duration: 480,
      ease: 'outQuad',
      composition: 'replace'
    })
  )
}

function playRoomColor(slot: 'wall' | 'floor', mesh: THREE.Mesh | null, hex: string) {
  if (!mesh) return
  const material = mesh.material
  if (!(material instanceof THREE.MeshStandardMaterial)) return
  const target = new THREE.Color(hex)
  if (reduced.value) {
    material.color.copy(target)
    return
  }
  play(
    slot,
    animate(material.color, {
      r: target.r,
      g: target.g,
      b: target.b,
      duration: 420,
      ease: 'outQuad',
      composition: 'replace'
    })
  )
}

function playHeight() {
  if (!doorRoot) return
  if (reduced.value) {
    doorRoot.scale.y = heightScale[props.height]
    rebuildWall()
    frameCamera()
    return
  }
  play(
    'height',
    animate(doorRoot.scale, {
      y: heightScale[props.height],
      duration: 560,
      ease: 'inOutCubic',
      composition: 'replace',
      onComplete: () => {
        rebuildWall()
        frameCamera()
      }
    })
  )
}

function rebuildWall() {
  if (!scene || !doorRoot || !frameMesh) return
  const closed = leafPivot?.rotation.y ?? 0
  if (leafPivot) leafPivot.rotation.y = 0
  doorRoot.updateWorldMatrix(true, true)
  const opening = new THREE.Box3().setFromObject(frameMesh)
  if (wallMesh) {
    scene.remove(wallMesh)
    wallMesh.geometry.dispose()
    const material = wallMesh.material
    if (material instanceof THREE.Material) material.dispose()
  }
  wallMesh = makeWall(opening)
  scene.add(wallMesh)
  if (leafPivot) leafPivot.rotation.y = closed
}

function wallFront(opening: THREE.Box3) {
  let front = opening.max.z
  for (const mesh of leafMeshes) {
    const box = new THREE.Box3().setFromObject(mesh)
    if (box.max.z > front) front = box.max.z
  }
  return front
}

function applySide() {
  if (!doorRoot) return
  doorRoot.scale.x = props.side === 'right' ? -1 : 1
  rebuildWall()
}

function frameCamera() {
  if (!doorRoot || !camera || !controls) return
  const closed = leafPivot ? leafPivot.rotation.y : 0
  if (leafPivot) leafPivot.rotation.y = 0
  doorRoot.updateWorldMatrix(true, true)
  const box = new THREE.Box3().setFromObject(doorRoot)
  if (leafPivot) leafPivot.rotation.y = closed
  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())
  const span = Math.max(size.x, size.y)
  const dist = (span * 0.52) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)
  camera.position.set(center.x + dist * 0.22, center.y + span * 0.05, center.z + dist * 1.08)
  controls.target.set(center.x, center.y - span * 0.04, center.z)
  camera.near = Math.max(1, dist / 50)
  camera.far = dist * 24
  camera.updateProjectionMatrix()
  controls.minDistance = dist * 0.55
  controls.maxDistance = dist * 2.2
  controls.update()
}

function makeWall(opening: THREE.Box3) {
  const pad = 4
  const ox0 = opening.min.x - pad
  const ox1 = opening.max.x + pad
  const oy0 = Math.max(0, opening.min.y - 2)
  const oy1 = opening.max.y + pad
  const W = 2400
  const H = 2800
  const shape = new THREE.Shape()
  shape.moveTo(-W, 0)
  shape.lineTo(W, 0)
  shape.lineTo(W, H)
  shape.lineTo(-W, H)
  shape.closePath()
  const hole = new THREE.Path()
  hole.moveTo(ox0, oy0)
  hole.lineTo(ox1, oy0)
  hole.lineTo(ox1, oy1)
  hole.lineTo(ox0, oy1)
  hole.closePath()
  shape.holes.push(hole)
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 96,
    bevelEnabled: false,
    curveSegments: 1
  })
  geometry.translate(0, 0, wallFront(opening) - 96)
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      color: props.wall,
      roughness: 0.94,
      metalness: 0,
      side: THREE.DoubleSide
    })
  )
  mesh.name = 'wall'
  return mesh
}

function addEdgeBand(box: THREE.Box3, parent: THREE.Object3D) {
  if (!scene) return
  const w = box.max.x - box.min.x
  const h = box.max.y - box.min.y
  const d = box.max.z - box.min.z
  const cx = (box.min.x + box.max.x) / 2
  const cy = (box.min.y + box.max.y) / 2
  const cz = (box.min.z + box.max.z) / 2
  const band = 3.2
  const wrap = 2
  const parts: THREE.Mesh[] = [
    new THREE.Mesh(new THREE.BoxGeometry(band, h, d + wrap), metal(edgeTones[props.edge])),
    new THREE.Mesh(new THREE.BoxGeometry(band, h, d + wrap), metal(edgeTones[props.edge])),
    new THREE.Mesh(new THREE.BoxGeometry(w + band * 2, band, d + wrap), metal(edgeTones[props.edge])),
    new THREE.Mesh(new THREE.BoxGeometry(w + band * 2, band, d + wrap), metal(edgeTones[props.edge]))
  ]
  parts[0].position.set(box.min.x - band / 2, cy, cz)
  parts[1].position.set(box.max.x + band / 2, cy, cz)
  parts[2].position.set(cx, box.max.y + band / 2, cz)
  parts[3].position.set(cx, box.min.y - band / 2, cz)
  for (const part of parts) {
    part.name = 'edge-band'
    part.renderOrder = 1
    scene.add(part)
    parent.attach(part)
    edgeMeshes.push(part)
  }
}

function makeHandle(box: THREE.Box3) {
  const group = new THREE.Group()
  group.name = 'handle'
  const barGeo = new THREE.CylinderGeometry(6, 6, 168, 20)
  barGeo.rotateZ(Math.PI / 2)
  const bar = new THREE.Mesh(barGeo, metal(edgeTones[props.edge]))
  const plate = new THREE.Mesh(new THREE.BoxGeometry(188, 18, 4), metal(edgeTones[props.edge]))
  plate.position.z = -8
  group.add(plate)
  group.add(bar)
  group.position.set(box.max.x - 120, handleHeight.standard, box.max.z + 10)
  group.userData.part = 'handle'
  return group
}

function makeSill(box: THREE.Box3) {
  const width = box.max.x - box.min.x - 16
  const material = metal(edgeTones[props.edge])
  material.transparent = true
  const sill = new THREE.Mesh(new THREE.BoxGeometry(width, 18, 36), material)
  sill.name = 'sill'
  sillDroppedY = box.min.y + 2
  sillRetractedY = box.min.y + 16
  sill.position.set((box.min.x + box.max.x) / 2, sillRetractedY, box.max.z + 4)
  sill.userData.part = 'sill'
  return sill
}

function makeHinges(box: THREE.Box3) {
  if (!scene || !doorRoot || !leafPivot) return
  const ys = [box.min.y + 240, (box.min.y + box.max.y) * 0.5, box.max.y - 240]
  const z = (box.min.z + box.max.z) / 2
  const hx = box.min.x
  for (const y of ys) {
    const cup = new THREE.Mesh(new THREE.BoxGeometry(12, 46, 24), metal(edgeTones[props.edge]))
    cup.position.set(hx - 2, y, z)
    cup.name = 'hinge-cup'
    scene.add(cup)
    doorRoot.attach(cup)
    edgeMeshes.push(cup)

    const pin = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, 50, 12), metal(edgeTones[props.edge]))
    pin.position.set(hx, y, z)
    pin.name = 'hinge-pin'
    scene.add(pin)
    doorRoot.attach(pin)
    edgeMeshes.push(pin)

    const flap = new THREE.Mesh(new THREE.BoxGeometry(28, 40, 6), metal(edgeTones[props.edge]))
    flap.position.set(hx + 16, y, z + 8)
    flap.name = 'hinge-flap'
    scene.add(flap)
    leafPivot.attach(flap)
    edgeMeshes.push(flap)
  }
}

function makeProceduralLeaf() {
  const leaf = new THREE.Mesh(new THREE.BoxGeometry(800, 1996, 40), paintMaterial())
  leaf.position.set(400, 1000, 20)
  leaf.name = 'leaf'
  const frame = new THREE.Mesh(new THREE.BoxGeometry(804, 2000, 42), metal(edgeTones[props.edge]))
  frame.position.set(400, 1002, 20)
  frame.name = 'Alu'
  return { leaf, frame }
}

function setupDoor(root: THREE.Object3D | null) {
  let leaf: THREE.Mesh | null = null
  let frame: THREE.Mesh | null = null

  if (root) {
    root.updateWorldMatrix(true, true)
    root.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return
      if (child.name === 'Box2131637310') leaf = bake(child)
      if (child.name === 'Alu') frame = bake(child)
    })
    root.visible = false
    scene?.remove(root)
    disposeObject(root)
  }

  if (!leaf || !frame) {
    const built = makeProceduralLeaf()
    leaf = built.leaf
    frame = built.frame
  }

  if (!scene) return

  frame.material = metal(edgeTones[props.edge])
  scene.add(leaf)
  scene.add(frame)
  const leafBox = new THREE.Box3().setFromObject(leaf)
  shrinkLeaf(leaf, 1.8)

  doorRoot = new THREE.Group()
  leafPivot = new THREE.Group()
  leafPivot.position.set(leafBox.min.x, 0, (leafBox.min.z + leafBox.max.z) / 2)
  scene.add(doorRoot)
  doorRoot.add(leafPivot)
  doorRoot.attach(frame)
  frameMesh = frame
  leafPivot.attach(leaf)

  addEdgeBand(leafBox, leafPivot)
  makeHinges(leafBox)

  const handle = makeHandle(leafBox)
  scene.add(handle)
  leafPivot.attach(handle)
  handleMesh = handle

  const sill = makeSill(leafBox)
  scene.add(sill)
  leafPivot.attach(sill)
  sillMesh = sill

  leaf.userData.part = 'leaf'
  leafMeshes = [leaf]
  edgeMeshes.push(frame, sill)
  handle.traverse((child) => {
    if (child instanceof THREE.Mesh) edgeMeshes.push(child)
  })

  doorRoot.updateWorldMatrix(true, true)
  const assembled = new THREE.Box3().setFromObject(doorRoot)
  doorRoot.position.set(
    -(assembled.min.x + assembled.max.x) / 2,
    -assembled.min.y,
    -(assembled.min.z + assembled.max.z) / 2
  )
  doorRoot.updateWorldMatrix(true, true)

  rebuildWall()

  clickable.splice(0, clickable.length, leaf, sill, handle)
}

function onPointerDown(event: PointerEvent) {
  pointerDown.set(event.clientX, event.clientY)
}

function onPointerUp(event: PointerEvent) {
  if (!camera || !host.value) return
  if (Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y) > 6) return
  const rect = host.value.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(pointer, camera)
  const hit = raycaster.intersectObjects(clickable, true)[0]
  let part = hit?.object.userData.part as string | undefined
  if (!part) part = hit?.object.parent?.userData.part as string | undefined
  if (part === 'handle') emit('handleClick')
  else if (part === 'sill') emit('sillClick')
  else if (part === 'leaf' || hit) emit('leafClick')
}

function tick() {
  frame = requestAnimationFrame(tick)
  controls?.update()
  if (renderer && scene && camera) renderer.render(scene, camera)
}

function resize() {
  if (!host.value || !renderer || !camera) return
  const width = host.value.clientWidth
  const height = host.value.clientHeight
  if (width < 2 || height < 2) return
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(async () => {
  await nextTick()
  if (!host.value) return
  try {
  scene = new THREE.Scene()
  scene.background = null
  camera = new THREE.PerspectiveCamera(28, 1, 1, 12000)
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  host.value.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.maxPolarAngle = Math.PI / 1.85
  controls.minPolarAngle = Math.PI / 5
  controls.enablePan = false
  if (reduced.value) controls.enableRotate = false

  scene.add(new THREE.HemisphereLight(0xf4f2ee, 0x8a8680, 1.05))
  const key = new THREE.DirectionalLight(0xffffff, 1.55)
  key.position.set(900, 2200, 1600)
  scene.add(key)
  const fill = new THREE.DirectionalLight(0xf2f0ec, 0.62)
  fill.position.set(-1200, 900, 600)
  scene.add(fill)
  const rim = new THREE.DirectionalLight(0xf7f4ee, 0.32)
  rim.position.set(200, 1400, -800)
  scene.add(rim)

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(3600, 1600),
    new THREE.MeshStandardMaterial({ color: props.floor, roughness: 0.9, metalness: 0 })
  )
  floor.rotation.x = -Math.PI / 2
  floor.position.set(0, 0, 800)
  floor.name = 'floor'
  scene.add(floor)
  floorMesh = floor

  let gltfScene: THREE.Object3D | null = null
  try {
    const gltf = await new GLTFLoader().loadAsync('/models/idoors.glb')
    scene.add(gltf.scene)
    gltfScene = gltf.scene
  } catch {
    gltfScene = null
  }

  setupDoor(gltfScene)
  await applyLeaf()
  applySide()
  if (doorRoot) doorRoot.scale.y = heightScale[props.height]
  snapDoor()
  primed = true
  frameCamera()
  resize()
  tick()
  host.value.addEventListener('pointerdown', onPointerDown)
  host.value.addEventListener('pointerup', onPointerUp)
  window.addEventListener('resize', resize)
  resizeObs = new ResizeObserver(resize)
  resizeObs.observe(host.value)
  } catch (error) {
    console.error(error)
    if (host.value) host.value.dataset.error = error instanceof Error ? error.message : 'stage'
  }
})

watch(() => props.leaf, applyLeaf)
watch(() => props.edge, playEdge)
watch(() => props.wall, hex => playRoomColor('wall', wallMesh, hex))
watch(() => props.floor, hex => playRoomColor('floor', floorMesh, hex))
watch(() => props.handlePos, playHandle)
watch(() => props.threshold, playSill)
watch(() => props.opened, playDoor)
watch(() => props.swing, playDoor)
watch(() => props.side, () => {
  applySide()
  frameCamera()
})
watch(() => props.height, playHeight)

onUnmounted(() => {
  primed = false
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', resize)
  resizeObs?.disconnect()
  host.value?.removeEventListener('pointerdown', onPointerDown)
  host.value?.removeEventListener('pointerup', onPointerUp)
  controls?.dispose()
  if (scene) disposeObject(scene)
  for (const map of textures.values()) map.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <div ref="host" class="stage" />
</template>

<style scoped>
.stage {
  position: absolute;
  inset: 0;
  cursor: grab;
  touch-action: none;
}

.stage :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

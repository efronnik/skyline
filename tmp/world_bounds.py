import json
from pathlib import Path

data = json.loads(Path(r'c:\Users\nussi\dveri\tmp\idoors-3d\scene.json').read_text(encoding='utf-8'))

mats = []
for mat in data['materials']:
    name = '?'
    for prop in mat.get('properties', []):
        if prop['key'] in ('?mat.name', '$mat.name'):
            name = prop['value']
            break
    mats.append(name)

def mat4(values):
    if not values:
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
    return values

def mul(a, b):
    out = [0] * 16
    for r in range(4):
        for c in range(4):
            out[r * 4 + c] = sum(a[r * 4 + k] * b[k * 4 + c] for k in range(4))
    return out

def xform(m, x, y, z):
    return (
        m[0] * x + m[1] * y + m[2] * z + m[3],
        m[4] * x + m[5] * y + m[6] * z + m[7],
        m[8] * x + m[9] * y + m[10] * z + m[11]
    )

world = {}

def walk(node, parent):
    local = mat4(node.get('transformation'))
    m = mul(parent, local)
    for index in node.get('meshes') or []:
        world[index] = m
    for child in node.get('children') or []:
        walk(child, m)

walk(data['rootnode'], mat4(None))

print('i  name               mat            dx     dy     dz      cx      cy      cz')
for i, mesh in enumerate(data['meshes']):
    m = world.get(i, mat4(None))
    verts = mesh['vertices']
    xs, ys, zs = [], [], []
    for n in range(0, len(verts), 3):
        x, y, z = xform(m, verts[n], verts[n + 1], verts[n + 2])
        xs.append(x); ys.append(y); zs.append(z)
    dx, dy, dz = max(xs) - min(xs), max(ys) - min(ys), max(zs) - min(zs)
    cx, cy, cz = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2, (min(zs) + max(zs)) / 2
    print(f'{i:2} {mesh["name"][:18]:18} {mats[mesh["materialindex"]][:14]:14} {dx:7.0f} {dy:7.0f} {dz:7.0f}  {cx:8.0f} {cy:8.0f} {cz:8.0f}')

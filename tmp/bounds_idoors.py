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

def aabb(verts):
    xs = verts[0::3]
    ys = verts[1::3]
    zs = verts[2::3]
    return min(xs), min(ys), min(zs), max(xs), max(ys), max(zs)

print('i  name               mat            dx     dy     dz      cx      cy      cz')
for i, mesh in enumerate(data['meshes']):
    x0, y0, z0, x1, y1, z1 = aabb(mesh['vertices'])
    dx, dy, dz = x1 - x0, y1 - y0, z1 - z0
    cx, cy, cz = (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2
    print(f'{i:2} {mesh["name"][:18]:18} {mats[mesh["materialindex"]][:14]:14} {dx:7.0f} {dy:7.0f} {dz:7.0f}  {cx:8.0f} {cy:8.0f} {cz:8.0f}')

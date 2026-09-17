from pathlib import Path
import shutil
from PIL import Image

src = Path(r'C:\Users\nussi\Downloads\IDoors_2026_3D\maps')
dst = Path(r'c:\Users\nussi\dveri\public\models\maps')
dst.mkdir(parents=True, exist_ok=True)

rename = {
    'Dub dimchatyi (mocco).jpg': 'oak-mocha.jpg',
    'Dub otbeleny2.jpg': 'oak-bleached.jpg',
    'Dub ser brash.jpg': 'oak-grey.jpg',
    'Pecan.jpg': 'pecan.jpg',
    'Venge temny2.jpg': 'wenge.jpg'
}

for old, new in rename.items():
    image = Image.open(src / old).convert('RGB')
    image.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
    out = dst / new
    image.save(out, quality=82, optimize=True)
    print(new, image.size, out.stat().st_size)

glb_src = Path(r'c:\Users\nussi\dveri\tmp\idoors-3d\idoors.glb')
glb_dst = Path(r'c:\Users\nussi\dveri\public\models\idoors.glb')
glb_dst.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(glb_src, glb_dst)
print('glb', glb_dst.stat().st_size)

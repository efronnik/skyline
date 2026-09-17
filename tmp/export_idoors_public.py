from pathlib import Path
import pymupdf
from PIL import Image

src = Path(r'C:\Users\nussi\Downloads\WEB - Papa Carlo - Catalog 2026 UA_EN.pdf')
public = Path(r'c:\Users\nussi\dveri\public\images')
tmp = Path(r'c:\Users\nussi\dveri\tmp\catalog')
doc = pymupdf.open(src)

# Copy catalog photos into public
pairs = {
    'idoors-00.jpeg': 'idoors-black.jpg',
    'idoors-04.jpeg': 'idoors-gray.jpg',
    'idoors-05.jpeg': 'idoors-interior-dark.jpg',
    'idoors-03.jpeg': 'idoors-interior-light.jpg',
}
for src_name, dest_name in pairs.items():
    data = (tmp / src_name).read_bytes()
    (public / dest_name).write_bytes(data)
    print('copied', dest_name)

# Render install page and crop the iDoors aluminum-frame block
page = doc[19]
pix = page.get_pixmap(matrix=pymupdf.Matrix(2.4, 2.4), alpha=False)
raw = tmp / 'page-20-hi.png'
pix.save(raw)
im = Image.open(raw)
w, h = im.size
print('page20', w, h)

# Lower half: iDoors Standard / INSIDE drywall + plaster + H-profile
# Title starts around 48% of page
top = int(h * 0.455)
crop = im.crop((int(w * 0.04), top, int(w * 0.96), int(h * 0.98)))
crop.save(public / 'idoors-install.jpg', quality=88, optimize=True)
print('install', crop.size)

# Split Standard vs INSIDE columns for the two drywall+plaster stacks
# After crop, left column Standard, right INSIDE
cw, ch = crop.size
mid = cw // 2
pad = 12
standard = crop.crop((0, 0, mid - pad, int(ch * 0.88)))
inside = crop.crop((mid + pad, 0, cw, int(ch * 0.88)))
standard.save(public / 'idoors-install-standard.jpg', quality=88, optimize=True)
inside.save(public / 'idoors-install-inside.jpg', quality=88, optimize=True)
print('standard', standard.size, 'inside', inside.size)

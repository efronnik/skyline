from pathlib import Path
import pymupdf

out = Path(r'c:\Users\nussi\dveri\tmp\catalog')
out.mkdir(parents=True, exist_ok=True)
doc = pymupdf.open(r'C:\Users\nussi\Downloads\WEB - Papa Carlo - Catalog 2026 UA_EN.pdf')

page = doc[11]
for i, img in enumerate(page.get_images(full=True)):
    info = doc.extract_image(img[0])
    path = out / f'idoors-{i:02d}.{info["ext"]}'
    path.write_bytes(info['image'])
    print(path.name, info['width'], info['height'])

page20 = doc[19]
print('page20 images', len(page20.get_images(full=True)))
for i, img in enumerate(page20.get_images(full=True)):
    info = doc.extract_image(img[0])
    path = out / f'install-{i:02d}.{info["ext"]}'
    path.write_bytes(info['image'])
    print(path.name, info['width'], info['height'])

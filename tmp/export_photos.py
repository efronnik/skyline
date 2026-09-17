from pathlib import Path
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

register_heif_opener()

raw = Path('tmp/drive-raw')
out = Path('public/images')


def load(name: str) -> Image.Image:
    matches = list(raw.rglob(name))
    if not matches:
        raise FileNotFoundError(name)
    image = Image.open(matches[0])
    return ImageOps.exif_transpose(image).convert('RGB')


def crop(image: Image.Image, left: float, top: float, right: float, bottom: float) -> Image.Image:
    width, height = image.size
    return image.crop((int(width * left), int(height * top), int(width * right), int(height * bottom)))


def save(image: Image.Image, name: str, max_side: int = 2200, quality: int = 82) -> None:
    image = image.copy()
    image.thumbnail((max_side, max_side))
    dest = out / name
    image.save(dest, 'JPEG', quality=quality, optimize=True, progressive=True)
    print(f'{dest.name:28} {image.size[0]}x{image.size[1]:4}  {dest.stat().st_size // 1024}kb')


interiors = sorted(raw.rglob('iDoors*.jpeg'))
print('interiors', [path.name for path in interiors])
first, _second, third, fourth, fifth = [ImageOps.exif_transpose(Image.open(path)).convert('RGB') for path in interiors]

hallway = load('2856B351-361D-44A1-98F5-06E98418A0BE.JPG')
save(crop(fifth, 0, 0.18, 1, 0.63), 'hero-wall.jpg', 2400)
save(crop(third, 0.14, 0, 1, 1), 'interior-flush.jpg')
save(hallway, 'after-flush.jpg')
save(fifth, 'project-gallery.jpg')
save(first, 'project-living-oak.jpg')
save(crop(fifth, 0, 0.18, 1, 0.82), 'product-sliding.jpg')
save(fourth, 'product-glass.jpg')
save(crop(third, 0.14, 0, 1, 1), 'project-office.jpg')
save(fourth, 'project-bedroom.jpg')

save(load('IMG_6743.HEIC'), 'detail-gap.jpg')
save(load('IMG_6850.HEIC'), 'detail-hinge.jpg')
save(load('IMG_6849.HEIC'), 'detail-handle.jpg')

paint = load('IMG_6746.HEIC')
plaster = load('IMG_6742.HEIC')
save(crop(paint, 0.32, 0.12, 0.78, 0.78), 'material-paint.jpg', 1200)
save(crop(plaster, 0.55, 0.08, 1, 0.72), 'material-plaster.jpg', 1200)
save(crop(fourth, 0, 0, 0.28, 1), 'material-glass.jpg', 1200)

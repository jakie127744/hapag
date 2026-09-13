# -*- coding: utf-8 -*-
"""
Add your own photographs to the archive.

Drop image files into images-inbox/ (or the project root), named after the dish,
then run:

    npm run add-images

The file name is matched against recipe slugs and titles, so all of these work:

    beef-kulma.jpg
    Beef kulma.jpg
    sinigang na hipon.png
    Puto Bumbong.jpeg

Each image is rotated upright, resized to 1600px wide, saved as JPEG into
public/images/recipes/<slug>.jpg and wired into data/recipes.ts. An image you
add replaces whatever was there before, and any Wikimedia attribution on that
recipe is dropped, since the photograph is now yours.

Options:
    --dry-run   report what would happen and change nothing
"""
import io
import os
import re
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is required:  pip install Pillow")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INBOX = os.path.join(ROOT, 'images-inbox')
DEST = os.path.join(ROOT, 'public', 'images', 'recipes')
DATA = os.path.join(ROOT, 'data', 'recipes.ts')
EXT = ('.jpg', '.jpeg', '.png', '.webp', '.avif')
MAX_WIDTH = 1600
DRY = '--dry-run' in sys.argv


def norm(x):
    return re.sub(r'[^a-z0-9]+', '-', x.lower()).strip('-')


def recipes_from_source(src):
    """Read slug and title straight out of the data file."""
    out = []
    for m in re.finditer(r'slug: "([^"]+)", title: "([^"]+)"', src):
        out.append((m.group(1), m.group(2)))
    return out


def find_inputs():
    files = []
    for folder in (INBOX, ROOT):
        if not os.path.isdir(folder):
            continue
        for f in sorted(os.listdir(folder)):
            if f.lower().endswith(EXT) and not f.startswith('.'):
                files.append(os.path.join(folder, f))
        # only the root's top level, never recurse into node_modules or public
    return files


def prune_orphans(src):
    """Delete photographs nothing points at any more.

    Replacing a Wikimedia photo with your own leaves the old file behind, and
    those add up. Both reference styles are resolved: local() names the file
    directly, commons() slugifies the Commons filename the same way the data
    file does.
    """
    used = set(re.findall(r'local\("([^"]+)"\)', src))
    for f in re.findall(r'commons\("([^"]+)"\)', src):
        stem = os.path.splitext(f)[0].lower()
        used.add(re.sub(r'[^a-z0-9]+', '-', stem).strip('-')[:60] + '.jpg')

    if not os.path.isdir(DEST):
        return 0
    removed = 0
    for name in os.listdir(DEST):
        if name not in used:
            os.remove(os.path.join(DEST, name))
            removed += 1
    return removed


def main():
    if not os.path.isdir(INBOX) and not DRY:
        os.makedirs(INBOX, exist_ok=True)

    src = io.open(DATA, encoding='utf-8').read()
    recipes = recipes_from_source(src)
    by_slug = {s: s for s, _ in recipes}
    by_title = {norm(t): s for s, t in recipes}

    inputs = find_inputs()
    if not inputs:
        print('No images found. Put files in images-inbox/ named after the dish,')
        print('for example  images-inbox/beef-kulma.jpg  or  images-inbox/Beef kulma.jpg')
        return

    added, skipped = 0, []
    for path in inputs:
        stem = norm(os.path.splitext(os.path.basename(path))[0])
        slug = by_slug.get(stem) or by_title.get(stem)
        if not slug:
            skipped.append((os.path.basename(path), 'no recipe matches this name'))
            continue

        target = os.path.join(DEST, slug + '.jpg')
        if DRY:
            print('would add  %-34s -> %s' % (os.path.basename(path), slug))
            added += 1
            continue

        try:
            im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
        except Exception as e:
            skipped.append((os.path.basename(path), 'could not read: %s' % e))
            continue

        if im.width > MAX_WIDTH:
            im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
        os.makedirs(DEST, exist_ok=True)
        im.save(target, 'JPEG', quality=82, optimize=True, progressive=True)

        # Point the recipe at it, replacing any previous image and attribution.
        i = src.index('slug: "%s"' % slug)
        j = src.find('slug: "', i + 10)
        j = j if j > 0 else len(src)
        seg = src[i:j]
        seg = re.sub(r'\n\s*image: [^\n]*\n?', '\n', seg)
        seg = re.sub(r'\n\s*imageSource: [^\n]*\n?', '\n', seg)
        m = re.search(r'\n(\s*)ingredients: \[', seg)
        seg = seg[:m.start()] + '\n%simage: local("%s.jpg"),' % (m.group(1), slug) + seg[m.start():]
        src = src[:i] + seg + src[j:]

        os.remove(path)
        print('added      %-34s -> %s  (%dx%d)' % (
            os.path.basename(path), slug, im.width, im.height))
        added += 1

    if not DRY and added:
        io.open(DATA, 'w', encoding='utf-8').write(src)
        removed = prune_orphans(src)
        if removed:
            print('removed %d image%s no longer referenced' % (removed, '' if removed == 1 else 's'))

    print('\n%s %d image%s' % ('would add' if DRY else 'added', added, '' if added == 1 else 's'))
    if skipped:
        print('skipped %d:' % len(skipped))
        for name, why in skipped:
            print('  %-34s %s' % (name, why))


if __name__ == '__main__':
    main()

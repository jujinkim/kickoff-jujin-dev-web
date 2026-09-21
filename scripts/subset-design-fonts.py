"""Regenerate locally hosted demo subsets. Requires fonttools and brotli."""
from pathlib import Path
from tempfile import TemporaryDirectory
import hashlib
import json
import urllib.request
from fontTools import subset

root = Path(__file__).resolve().parent.parent
directory = root / "public/fonts"
manifest = json.loads((directory / "manifest.json").read_text())
text = "".join(p.read_text() for p in (root / "src/components/demos").glob("*.astro"))
text += "".join(chr(i) for i in range(32, 127))
with TemporaryDirectory(prefix="design-fonts-") as temporary:
    for entry in manifest:
        data = urllib.request.urlopen(entry["source"], timeout=60).read()
        if hashlib.sha256(data).hexdigest() != entry["sourceSha256"]:
            raise RuntimeError(f"Upstream changed: {entry['source']}; review manifest first")
        source = Path(temporary) / "source.ttf"
        source.write_bytes(data)
        options = subset.Options()
        options.flavor = "woff2"
        options.layout_features = ["*"]
        options.name_IDs = ["*"]
        options.name_legacy = True
        options.name_languages = ["*"]
        font = subset.load_font(str(source), options)
        sub = subset.Subsetter(options)
        sub.populate(text=text)
        sub.subset(font)
        subset.save_font(font, str(directory / entry["file"]), options)
        entry["characters"] = "".join(chr(c) for c in sorted(font.getBestCmap()))
        print(entry["file"])
(directory / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")

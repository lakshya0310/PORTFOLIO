#!/usr/bin/env python3
"""Sync publications from the Google Scholar profile into scholar.json. Re-run to refresh."""
import datetime
import json
import pathlib
import re
import time
import urllib.request

USER_ID = "lW9weggAAAAJ"
PROFILE = f"https://scholar.google.com/citations?user={USER_ID}&hl=en"
OUT = pathlib.Path("/app/frontend/src/data/scholar.json")
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"


def fetch(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            return urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "ignore")
        except Exception:
            if i == tries - 1:
                raise
            time.sleep(2 * (i + 1))


def clean(s):
    return s.replace("\u202a", "").replace("\u202c", "").strip()


html = fetch(PROFILE)
name_m = re.search(r"<title>(.*?)</title>", html, re.S)
name = clean(name_m.group(1)) if name_m else USER_ID
name = name.replace(" - Google Scholar", "").strip() or USER_ID

pubs = []
rows = re.split(r'<tr class="gsc_a_tr', html)[1:]
for row in rows:
    t = re.search(r'<a href="([^"]*)"[^>]*class="gsc_a_at"[^>]*>(.*?)</a>', row, re.S)
    if not t:
        continue
    url = t.group(1).replace("&amp;", "&")
    if url.startswith("/"):
        url = "https://scholar.google.com" + url
    title = re.sub(r"<[^>]+>", "", t.group(2)).strip()
    grays = [re.sub(r"<[^>]+>", "", g).strip() for g in re.findall(r'<div class="gs_gray">(.*?)</div>', row, re.S)]
    y = re.search(r'class="gsc_a_h[^"]*"[^>]*>\s*(\d{4})', row)
    c = re.search(r'href="https://scholar\.google\.com/scholar\?cites[^"]*"[^>]*>\s*(\d+)', row)
    pubs.append({
        "title": title,
        "authors": grays[0] if grays else "",
        "venue": grays[1] if len(grays) > 1 else "",
        "year": y.group(1) if y else "",
        "citations": int(c.group(1)) if c else 0,
        "url": url,
    })

data = {
    "profileName": name,
    "profileUrl": PROFILE,
    "syncedAt": datetime.date.today().isoformat(),
    "publications": pubs,
}
OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
print(f"synced {len(pubs)} publication(s) from {name} -> {OUT}")

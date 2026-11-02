# Lakshya Jindal — Portfolio

Personal portfolio of Lakshya Jindal — integrated B.Tech + M.S. (by Research) student in ECE at
IIIT Hyderabad and Undergraduate Researcher at the Robotics Research Centre.
Live at https://lakshya0310.github.io/PORTFOLIO/

Static React single-page site (Create React App + craco, Tailwind, Framer Motion, Lenis).
No backend, no database.

## Development

```bash
yarn install
yarn start
```

## Deployment (GitHub Pages)

This repo auto-deploys to GitHub Pages on every push to `master`/`main` via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml):

1. Builds the React app with `yarn build`
2. Copies `build/index.html` to `build/404.html` (fallback so unknown URLs render the site)
3. Publishes `build/` to the `gh-pages` branch (orphan commit), which GitHub Pages serves

**One-time setup** (already done): Repo → Settings → Pages → Source →
"Deploy from a branch" → `gh-pages` / root.

Content lives in:

- `src/data/portfolio.js` — bio, projects, skills, honors, CV links
- `src/data/scholar.json` — publications synced from Google Scholar
  (`python3 scripts/scholar_sync.py` to refresh)
- `public/data/` — domain CV PDFs
- `public/lakshya.jpg` — profile photo, `public/og-image.jpg` — social share card

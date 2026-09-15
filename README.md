# Ashwin Krishnamurthy, personal site

Static site. No build step, no dependencies. Images are already in place.

## Publish on GitHub Pages

1. Create a new repo named `portfolio`. That publishes to `https://greatash7.github.io/portfolio`.

   Do **not** name the repo `greatash7.github.io`: that address already serves Ashtronomy, and this site would replace it.
2. Upload **the contents of this folder** to the repo root (not the folder itself). `index.html` must sit at the top level.
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder: `/ (root)` → Save.
4. Wait about a minute, then load the URL Pages shows you.

## Files

- `index.html`, `projects.html`, `about.html`, `contact.html`: the four pages
- `images/`: every photo, CAD render, and astrophoto used on the site
- `support.js`: required runtime, do not delete
- `assets/Ashwin-Krishnamurthy-Resume.pdf`: replace this file to update the resume download
- `.nojekyll`: tells GitHub Pages to serve files as-is

## Remaining placeholders

One slot left. Drop a file into `images/` and swap the placeholder `<span>` for an `<img>`:

```html
<img src="images/your-file.png" alt="describe it" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block" />
```

- You at the McLaren Symposium with the poster (projects page)

Everything else is filled with your real photos. `files/ngc2194-poster.pdf` is linked from the NGC 2194 section.

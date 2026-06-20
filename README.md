# Federico Trucchia — Portfolio

A self-contained portfolio website. Plain HTML, CSS and a little JavaScript — **no build step, no frameworks, nothing to compile.** You edit a file, save it, refresh the page. That's the whole workflow.

It's designed to live on **GitHub Pages**, which hosts it for free at a public URL.

---

## What's in here

```
index.html            ← the homepage: intro + project index
style.css             ← all the styling (edit colours/fonts here)
main.js               ← tiny script for the footer year + scroll animations
projects/
  01lamp.html         ← one file per project
  blocks.html
  …
  _template.html      ← COPY THIS to add a new project
assets/
  img/                ← put your images here
  files/              ← put PDFs / decks / downloads here
README.md             ← this file
```

Every project from your deck is already written up, with clearly marked
placeholders showing exactly where to drop images, videos and files.

---

## Part 1 — Get it online (one time, ~10 minutes)

You don't need the command line. The easiest path is GitHub's website.

**1. Make a GitHub account** at https://github.com (free).

**2. Create a repository.**
   - Click the **+** (top-right) → **New repository**.
   - Name it **exactly** `yourusername.github.io` (replace with your real username).
     This special name makes your site appear at `https://yourusername.github.io`.
   - Set it to **Public**. Don't add a README (you already have one). Click **Create repository**.

**3. Upload the files.**
   - On the new repo page, click **uploading an existing file**.
   - Drag in **everything inside this folder** — `index.html`, `style.css`, `main.js`,
     and the `projects` and `assets` folders. (Drag the *contents*, not the outer folder.)
   - Scroll down, click **Commit changes**.

**4. Turn on GitHub Pages.**
   - Go to the repo's **Settings** tab → **Pages** (left sidebar).
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Branch: **main**, folder: **/ (root)**. Click **Save**.

**5. Visit your site.** After a minute or two it's live at
   `https://yourusername.github.io`. (Pages can take a few minutes the first time.)

That's it. From now on, any file you change and commit goes live automatically.

---

## Part 2 — Editing day to day

You have two ways to edit, pick whichever feels comfortable:

- **In the browser (simplest):** open any file in your repo on github.com and click
  the **pencil icon** to edit, then **Commit changes**. Good for quick text tweaks.
- **On your computer (nicer for bigger changes):** install
  [GitHub Desktop](https://desktop.github.com), clone the repo, edit files in any
  text editor, then **Commit** and **Push**. To preview before publishing, just
  **double-click `index.html`** to open it in your browser — everything works locally.

> Tip: the fonts load from Google Fonts, so previewing locally needs an internet
> connection to look exactly right. The layout works regardless.

---

## Part 3 — Adding your story (the fun part)

### Add an image
1. Put the image file in `assets/img/` (e.g. `blocks-surface.jpg`).
2. In the project page, find a placeholder block like this:
   ```html
   <figure><div class="media-ph"><span>HERO — …</span></div>
     <figcaption>placeholder — replace with your own image</figcaption></figure>
   ```
3. Replace it with:
   ```html
   <figure><img src="../assets/img/blocks-surface.jpg" alt="BLOCKS glowing surface">
     <figcaption>The elastomer surface, lit</figcaption></figure>
   ```
   (On `index.html`, use `assets/img/…` — no `../`. Inside `projects/`, use `../assets/img/…`.)

### Add a YouTube video
Find the video on YouTube and copy the ID — the part after `v=` in the URL
(`https://www.youtube.com/watch?v=`**`dQw4w9WgXcQ`**). Then replace a video
placeholder with:
```html
<div class="video"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="LUMI demo" allowfullscreen loading="lazy"></iframe></div>
```

### Add a downloadable file (PDF, deck, drawing)
1. Put the file in `assets/files/` (e.g. `lumi-pitch.pdf`).
2. Link it:
   ```html
   <a class="file" href="../assets/files/lumi-pitch.pdf" download>
     <span class="file__ext">PDF</span><span>LUMI investor pitch</span>
     <span class="file__meta">download</span></a>
   ```

### Add a whole new project
1. Copy `projects/_template.html` and rename it, e.g. `projects/new-thing.html`.
2. Fill in the CAPS placeholders inside it.
3. Open `index.html`, find the project list, and copy one existing row:
   ```html
   <a class="index-row" href="projects/new-thing.html">
     <span class="cell-num">09</span>
     <span class="cell-name">New Thing<small>One-line description.</small></span>
     <span class="cell-place">PLACE</span>
     <span class="cell-role">Your role</span>
     <span class="cell-year">2025</span>
     <span class="cell-go">↗</span>
   </a>
   ```

### Fix the placeholders I left for you
On `index.html`, search for `ADD-YOUR-` and replace:
- your email address,
- your LinkedIn URL,
- a link to your CV.

---

## Part 4 — Make it yours

- **Colours & fonts:** open `style.css`. The block at the very top (`:root { … }`)
  holds every colour and typeface as a named variable — change one value and it
  updates everywhere. The accent colour is `--accent`.
- **Reorder projects:** projects appear in the order their rows sit in `index.html`.
  Drag rows up or down (and renumber the `cell-num` values if you like).
- **Custom domain (optional, later):** if you buy a domain like `trucchia.design`,
  GitHub Pages can use it — **Settings → Pages → Custom domain**. Worth doing before
  you put the link on a CV; it reads more professionally than `*.github.io`.

---

## Quick reference

| I want to…            | Do this |
|-----------------------|---------|
| Change wording        | Edit the relevant `.html`, commit. |
| Add a project         | Copy `projects/_template.html`, add a row to `index.html`. |
| Add an image          | Drop it in `assets/img/`, swap a `media-ph` for an `<img>`. |
| Add a video           | Paste the YouTube ID into a `.video` iframe. |
| Add a download        | Drop it in `assets/files/`, link it with `<a class="file">`. |
| Change the accent col. | Edit `--accent` in `style.css`. |

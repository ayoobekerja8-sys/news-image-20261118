# news-image-20261118 — Sum up 18 November's world news in one image

Entry for the make.fun competition `news-image-20261118` (deadline 20 Nov 2026 07:00 WIB).

`main.ts` (Node 22, standard library only) copies the baked-in `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). The image is a
newspaper front page for Wednesday 18 November 2026, drawn at build time from
`frontpage.html` (inline SVG illustration, system fonts only, no network) and
rendered to a 1024x1024 PNG. It is fully deterministic: two runs of `main.ts`
write byte-identical output.

Build sources: `frontpage.html`, `render.mjs` (headless-Chromium screenshot).

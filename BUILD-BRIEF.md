# BUILD BRIEF — news-image-20261118

## Goal
Build the entry for make.fun competition `news-image-20261118`: "Sum up 18 November's
world news in one image". Deadline 20 Nov 2026 07:00 WIB. Prize pool USD 250, top 50 entries.
An AI judge (no news feed) compares images pairwise and picks the one that best sums up
its day's world news. Judging criteria, most important first: (1) it names the day and shows
specific events of that day; (2) selection and breadth — most consequential stories across
regions and fields; (3) it reads — a viewer who missed the day can tell what happened from
the image alone, each story clear from its picture and short labels, nothing false or
self-contradictory; (4) faithful, no hype or speculation as fact; (5) craft — one clear
composition, clean, legible at about 300 pixels across, no smears, artefacts or garbled text.

## Hard constraints (from the kit RULES.txt)
- `main.ts` (Node 22, standard library only) at repo root; writes exactly one image to
  `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). Keep the starter's copy
  behaviour: copy the baked-in `entry.png` beside it.
- Image: whole PNG or JPEG, at most 1 MiB, at most 1024x1024 pixels.
- No network at run time. The program runs twice and both runs must write the same bytes
  (deterministic — copying a fixed file satisfies this).
- Replace the starter `entry.png` (512x512 placeholder) with the real 1024x1024 image.
- No payments, no secrets, no credentials anywhere in the repo or commits.

## Verified facts — USE ONLY THESE. Do not invent numbers, names, quotes or events.
All were reported on Wednesday 18 November 2026 (or first reported that day) by multiple
news sources. The day is Wednesday 18 November 2026.

1. LEAD — GULF WAR WIDENS. Early Wednesday, Iran fired drones at US installations in
   Kuwait (Ali Al Salem Air Base) and Bahrain; Bahrain said it intercepted the attacks; no
   casualties or damage reported in either country. This followed US fighter jets striking
   a Revolutionary Guard missile launch site on Qeshm Island in the Strait of Hormuz on
   Tuesday. Iran also shot down a US MQ-9 drone near the Strait of Hormuz. Yemen's Houthis
   said they launched drones at Saudi East-West pipeline pumping stations.
2. UKRAINE — KERCH BRIDGE. Ukrainian drones and missiles hit the Kerch Bridge to Crimea
   for a second day; part of its road span collapsed into the strait and traffic was halted.
   Russian missiles also hit two bridges in Kyiv, cutting water and heat in parts of the city.
3. SUMMIT — SHENZHEN. Xi Jinping and Vladimir Putin opened the APEC summit in Shenzhen;
   Xi pledged to stand against trade protectionism, Putin criticised Western sanctions.
   Donald Trump arrived in Shenzhen on Wednesday; a rare three-way Trump–Xi–Putin meeting
   is set for Thursday. Trump met Philippine President Ferdinand Marcos Jr. before flying
   to China, and concluded a preliminary trade deal with Thailand.
4. US POLITICS — SENATE. Democrat Mary Peltola defeated Republican incumbent Dan Sullivan
   in Alaska's Senate race; Democrats take a 56–44 Senate majority, their largest since
   2009 and their ninth Senate flip of the midterms.
5. HEALTH (one panel, two mini-blocks). (a) Ebola in DR Congo: outbreak passes 11,000 cases
   and 5,400 deaths, the second-largest Ebola outbreak on record; nearly three-quarters of
   infected children under 5 die. (b) The United States loses its measles elimination status,
   held since 2000 (26 years): 5,412 cases in 2026, 10 deaths, across 45 states — the
   highest annual total since 1991.
6. SCIENCE — VOYAGER 1. Voyager 1 reached one light-day from Earth (about 16 billion
   miles) at 5:16 a.m. ET on Wednesday — the farthest any human-made object has travelled.
7. IN BRIEF (footer line). Russian An-12 military plane crashes in Siberia (Kemerovo),
   all 19 aboard killed. Earthquakes: Papua New Guinea 6.0, Romania 5.3. Category 5
   Cyclone Xavier hits the Northern Cook Islands. Israel: the Knesset elects Matan Kahana
   speaker, and President Herzog asks Gadi Eisenkot to form a government, bypassing
   Netanyahu.
8. MARKETS (footer strip, close of 18 Nov 2026). S&P 500 down 1.03%, Nasdaq down 0.74%,
   DAX down 2.08%, FTSE 100 down 1.76%, CAC 40 down 1.62%, Brent crude USD 91.55,
   VIX 25.46 (up 11.13%).

## Design — newspaper front page, 1024x1024
- Masthead: "THE WORLD IN ONE DAY", kicker "WORLD NEWS — WEDNESDAY 18 NOVEMBER 2026".
  The date must be big and unmistakable.
- Lead story full-width at top with the biggest headline ("Gulf war widens as Iran hits
  Kuwait and Bahrain") + 2–3 line summary + a labelled SVG illustration (stylised Gulf
  map: Strait of Hormuz, Qeshm Island, Kuwait, Bahrain markers).
- Then a row of three: Kerch Bridge (SVG bridge with a broken span), Shenzhen summit
  (flags of China, Russia, USA — do NOT draw recognisable faces of real people), US Senate
  (Capitol dome silhouette, "56–44").
- Then a row of two: Health split panel (Ebola / measles) and Voyager 1 (starfield +
  probe glyph, "one light-day").
- Footer: markets strip, IN BRIEF line, and this exact factual line:
  "Every story on this page happened, or was first reported, on Wednesday 18 November 2026."
- Style: off-white paper, black ink, one red accent for the lead kicker only. Flat
  editorial vector illustration (inline SVG only). No photographs, no AI images, no faces.
  Serif headlines (Liberation Serif / Noto Serif), sans labels (Liberation Sans / DejaVu
  Sans). System fonts only — no webfonts, no network.
- Legibility: lead headline at least 60px; story headlines at least 28px; story text at
  least 16px; labels at least 13px. The page must still read at 300px wide: headlines and
  labels carry the meaning at that size.
- Every story must be understandable from its picture + short labels alone.

## Build steps
1. Write `frontpage.html` (1024x1024, all art inline SVG, no external resources).
2. Write `render.mjs`: screenshot the HTML at exactly 1024x1024 with the headless
   Chromium already on this machine:
   `/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell --headless --disable-gpu --no-sandbox --hide-scrollbars --force-device-scale-factor=1 --screenshot=<out> --window-size=1024,1024 file://<abs path>/frontpage.html`
   (verified working on this machine). Then use Python PIL to check the PNG and, if it
   is over 1 MiB, re-save optimised (or as JPEG quality ~92) so the final file is
   at most 1,048,576 bytes and still exactly 1024x1024. Write the result to `entry.png`.
3. Keep `main.ts` as the starter's copy program (adjust only if needed). Verify:
   `mkdir -p out1 out2 && MAKEFUN_OUTPUT_DIR=out1 node main.ts && MAKEFUN_OUTPUT_DIR=out2 node main.ts`
   then `cmp out1/entry.png out2/entry.png` (must be identical) and check size/dimensions
   with Python PIL.
4. View the rendered PNG yourself (open the image file) at full size AND downscaled to
   300px wide. Independent review pass, acting as a picture editor: check every headline
   and label for typos, check every fact against the fact list above, check nothing is
   self-contradictory or implausible, check no text is clipped/overlapping/garbled, check
   the date is prominent. Fix every issue found and re-render. Also test edge cases:
   missing MAKEFUN_OUTPUT_DIR (defaults to /output — do not create /output here, just
   confirm the code path), and an output directory that does not exist yet (main.ts
   should still work if the directory exists; if it does not, note it — the grader
   provides it).
5. Commit early and often with clear messages (render script, first render, review fixes).
   Push to origin when done.

## Do not
- Do not invent or embellish any fact. If unsure about a wording, use the plainer version
  from the fact list.
- Do not copy any other entry, image or artwork. All drawing here is original SVG.
- Do not bundle, check or submit (top-level agent does that). Do not touch
  `token-radar-01` or any other directory outside this repo.
- Do not paste secrets. There are none needed.

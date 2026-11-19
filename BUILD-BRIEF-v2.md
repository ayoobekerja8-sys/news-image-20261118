# BUILD BRIEF v2 — news-image-20261118

## Entry
Competition: make.fun `news-image-20261118` — “Sum up 18 November 2026 world news in one image”.

This brief records verified facts for Wednesday 18 November 2026 (or direct context of that day), changes from v1 (`dde035d6`, `BUILD-BRIEF.md` and `frontpage.html`), and the v2 design and build instructions. Use only the facts below; do not invent or add any other fact, number, name, or quote.

## Verified facts

1. **LEAD — GULF WAR WIDENS (ninth month of the war).** Early Wednesday, Iran fired drones at US installations at Ali Al Salem Air Base in Kuwait, where Patriot systems and drone/missile launch platforms are located, and in Bahrain. Kuwait's air defences intercepted the drones; no damage or casualties were reported. Bahrain intercepted several attacks; Bahrain hosts the US Navy's 5th Fleet, and this was the third attack on Bahrain in five days. On Tuesday, US fighter jets struck an IRGC missile launch site on Qeshm Island in the Strait of Hormuz, after Iran attacked a US-operated radar at Sheikh Isa Air Base in Bahrain on Tuesday morning. The IRGC said it captured/intercepted a US drone south of Qeshm Island. Yemen's Houthis said they launched five drones at pumping stations No. 8 and No. 9 on Saudi Arabia's East-West pipeline near Riyadh (announced Tuesday, reported Wednesday; no Saudi confirmation).

2. **UKRAINE — KERCH BRIDGE.** There was a third strike in three days on Wednesday; traffic halted again. The main blow was Tuesday: a 227-metre road arch fell into the Kerch Strait; the road section is unusable and rail was partly damaged. Russia struck Kyiv's North and South bridges. Russian jet-drone attacks in Odesa on Wednesday killed 4 and injured 17. Ukraine fired a record 1,441 drones on Tuesday.

3. **SUMMIT — SHENZHEN.** Xi Jinping and Vladimir Putin met in Shenzhen at the APEC summit. Xi pledged to stand against trade protectionism; Putin criticised Western sanctions and expects “big potential benefit” from the trilateral. Donald Trump arrived Wednesday, was greeted by Xi with a hug at the airport, and shook hands with Xi and Putin at the APEC welcome banquet. A first-ever three-way Trump–Xi–Putin meeting is set for Thursday. Trump met Marcos Jr. in Manila and announced a US–Philippines trade deal (“very big trade deal”; Manila called it an economic understanding). Quad leaders also met in Manila, their first leader-level meeting in over two years.

4. **US POLITICS — SENATE.** Democrat Mary Peltola defeated Republican incumbent Dan Sullivan in Alaska (projected Tuesday, reported Wednesday): 50.12% vs 45.80% of first-choice votes (144,302 vs 131,844). This was the ninth Senate flip of the midterms. Democrats take a 56–44 majority, their largest since 2009. Peltola is the first Alaska Native ever in the Senate.

5. **HEALTH (one panel, two mini-blocks).** (a) **Ebola in DR Congo:** the outbreak passed 11,000 cases and 5,400 deaths, the second-largest Ebola outbreak on record. On Wednesday the WHO said it remains a public health emergency of international concern. Seven in ten infected children under five die; there are 400–500 new cases a week. It is the Bundibugyo strain; there is no licensed vaccine. (b) **Measles in the US:** the Pan American Health Organization announced the US lost its measles elimination status, held since 2000 (26 years). There are 5,412 cases in 2026 and 10 deaths across 45 states, the highest annual total since 1991. Measles is endemic again. Mexico and Bolivia also lost the status.

6. **SCIENCE — VOYAGER 1.** At 5:16 a.m. ET Wednesday, Voyager 1 reached one light-day from Earth — about 16.1 billion miles (25.9 billion km) — the farthest any human-made object has travelled. A radio signal now takes a full day to reach it (48-hour round trip). Launched 5 September 1977.

7. **MARKETS — Wednesday 18 Nov 2026 closes.** Dow −1.11% (50,198.17); S&P 500 −0.23% (7,323.63); Nasdaq Composite +0.42% (24,429.88); DAX −1.19% (25,736.24); FTSE 100 −1.30% (10,551.17); CAC 40 −0.85% (8,146.83); Brent $91.95, −1.28% (settled). Nvidia beat forecasts: Q3 revenue $115.8 billion, up 103% year on year.

8. **IN BRIEF.** A Russian An-12 military plane crashed in Siberia (Kemerovo region, near Yagunovo); all 19 aboard were killed. Technical malfunction was the preliminary cause (crashed Tuesday evening, reported Wednesday). Odesa: 4 killed, 17 injured. Earthquakes: Papua New Guinea 5.8 (ESE of Madang); Romania 5.3, two hurt. Cyclone Xavier: Category 5, strongest November cyclone on record in the Southern Hemisphere, brushing the Northern Cook Islands; shelters activated; wharves damaged on Manihiki; no casualties reported. Israel: the Knesset elected Matan Kahana speaker; President Herzog asked Gadi Eisenkot to form a government, bypassing Netanyahu.

## V1 errors and v2 fixes

1. The markets strip showed Tuesday's closes, not Wednesday's. Correct it to the Wednesday closes listed above.
2. Kerch wording was imprecise. The 227-metre arch fell on **Tuesday 17 Nov**; Wednesday was a **third strike in three days**, and traffic halted again. Two were killed, per Crimea's Russian-installed governor.
3. The Papua New Guinea earthquake was 5.8, not 6.0. Romania 5.3 was correct.
4. Cyclone Xavier stayed offshore; it did not “hit” the islands.
5. The Trump–Thailand deal was unverified. Drop it and use the verified Trump–Marcos Jr. Philippines trade deal.
6. The v1 Gulf map was the weakest visual: vague blobs, “STRAIT OF HORMUZ” overlapping the strait band, and a misplaced Bahrain dot. Redraw it with recognisable geography: Iran north, Persian Gulf, Arabian Peninsula, Kuwait north-west, Bahrain as an island, Qatar, and Qeshm Island at the Strait of Hormuz east. Put labels on leader lines; they must not overlap the graphics.

## Design

Keep the newspaper-front-page format of v1: 1024×1024, HTML with inline SVG, screenshotted by headless Chromium, system fonts only, no webfonts or network, no AI images, no faces, off-white paper, black ink, and one red accent for the lead kicker only.

- Masthead: **THE WORLD IN ONE DAY**.
- Kicker: **WORLD NEWS — WEDNESDAY 18 NOVEMBER 2026**, with the date big and unmistakable.
- Full-width lead at top: headline **“Gulf war widens as Iran hits Kuwait and Bahrain”**, short summary, and redrawn Gulf map.
- Row of three: Kerch Bridge (SVG bridge with broken span); Shenzhen summit (flags of China, Russia, USA; no recognisable faces); US Senate (Capitol dome, “56–44”).
- Row of two: Health split panel (Ebola/measles) and Voyager 1 (starfield and probe glyph, “one light-day”).
- Footer: corrected markets strip, IN BRIEF line, and the exact line: **“Every story on this page happened, or was first reported, on Wednesday 18 November 2026.”**
- Legibility: lead headline at least 60px; story headlines at least 28px; story text at least 16px; labels at least 13px. It must read at 300px wide. Keep body text shorter than v1 where possible: fewer words, bigger type, more white space.

## Build steps

1. Rewrite `frontpage.html` for v2.
2. Render at exactly 1024×1024 using the headless Chromium executable at `/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell`. Use PIL to check and optimise the image to at most 1,048,576 bytes at exactly 1024×1024, and write it to `entry.png`.
3. Rewrite `main.ts` from scratch, preserving the same copy behaviour.
4. Verify two runs produce byte-identical output.
5. View the PNG at full size and at 300px wide; fix every issue found.

Do not bundle, check, or submit. No payments, secrets, or personal data.

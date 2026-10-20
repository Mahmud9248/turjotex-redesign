# Turjo Tex — Website Redesign

A complete rebuild of the Turjo Tex Ltd website: original copy and photography, a
dedicated Company Profile, and a new editorial–industrial design system and motion
layer built for a garment-accessories manufacturer.

The site is static HTML, CSS and vanilla JavaScript. There is no framework, build
toolchain or runtime dependency for the published pages.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About Us | `about-us.html` |
| Company Profile | `company-profile.html` |
| Factory Overview | `factory-overview.html` |
| Message from Director | `message-from-director.html` |
| Contact Us | `contact-us.html` |
| Elastic Unit | `elastic-unit.html` |
| Twill Tape Unit | `twill-tape-unit.html` |
| Drawstring & Draw Cord Unit | `drawstring-draw-cord-unit.html` |
| Jacquard Elastic Unit | `jacquard-elastic-unit.html` |
| Label Printing Unit | `label-printing-unit.html` |
| Shell Button Unit | `shell-button-unit.html` |
| Thermal Sticker Printing Unit | `thermal-sticker-printing-unit.html` |

## Preview

From inside `turjotex-redesign/`:

```powershell
npx serve . -l 4173
```

Then open <http://localhost:4173/>.

Any static file server works (for example `python -m http.server 4173`). Opening
`index.html` directly also works for the layout and motion, but a server is recommended
so the video and map load with normal browser behaviour.

## Rebuilding

All shared markup is generated from `_build/content.mjs` and `_build/build.mjs`:

```powershell
node _build/build.mjs
```

This rewrites the thirteen HTML files in place. Edit content or page templates in
`_build/`, then rebuild. Do not hand-edit the generated HTML unless you also mirror the
change in the build scripts.

## Structure

```text
turjotex-redesign/
├─ _build/
│  ├─ content.mjs        # copy, products, contacts, galleries, map
│  └─ build.mjs          # page templates and generators
├─ assets/
│  ├─ fonts/             # self-hosted Archivo / Manrope / Instrument Serif
│  ├─ img/               # source photography and icons
│  └─ video/             # factory film
├─ css/style.css         # design system, layout, responsive rules
├─ js/main.js            # reveals, counters, marquees, menu, lightbox, forms
└─ *.html                # generated pages
```

## Behaviour notes

- **Company Profile** is a dedicated page at `company-profile.html`, rebuilt from the
  2025 print profile rather than opening a PDF. It includes the profile’s OEKO-TEX®
  Standard 100 spread, with both certificate documents and their scope, product class
  and validity details.
- **Contact forms** validate in the browser and open the visitor's mail client via
  `mailto:`; the original site has no form backend.
- **Newsletter** uses the same `mailto:` fallback.
- **Map** is the original Google Maps embed and needs a network connection.
- **Motion** respects `prefers-reduced-motion`; all content remains visible without
  JavaScript. Page transitions use a reversed version of the official Turjo Tex lockup
  (`assets/img/logo-reverse.png`) for the deep-green loading screen.
- **Navigation** is shared across pages, including the product mega menu and mobile
  drawer.

## Content fidelity

All original page copy and source photography are preserved. The only intentional
editorial changes are removal of two duplicated paragraphs on the Label Printing and
Thermal Sticker pages, and removal of repeated consult bands (the footer call-to-action
is retained). The original wording of headings such as “Interested in our hosting?” is
kept as-is.

The Company Profile text is transcribed from the 2025 print profile, with line-break and
capitalisation corrections only. Buyer logos and the two OEKO-TEX® Standard 100
certificates are cropped from that profile and shown as supplied; the profile photography
is reused for the facilities and life sections.

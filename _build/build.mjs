import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  site,
  nav,
  departments,
  stats,
  units,
  team,
  vision,
  mission,
  directorQuote,
  factoryImages,
  contactCards,
  mapEmbed,
  companyProfile,
} from "./content.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..");

/* ------------------------------------------------------------------ icons */
const icons = {
  arrow: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowDown: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H6M11 6l-6 6 6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 5 5 9-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 3.5h2.3l1.3 4.6-2 1.5a13.4 13.4 0 0 0 6.2 6.2l1.5-2 4.6 1.3v2.3a2.1 2.1 0 0 1-2.3 2.1C10.4 18.7 5.3 13.6 4.5 5.8a2.1 2.1 0 0 1 2.1-2.3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 9.2c.3 1.4 1.9 3 3.3 3.4l1.1-1.1 2.3 1.2c-.2 1.1-1.1 1.9-2.3 1.8-2.8-.3-5.5-3-5.8-5.8C7.5 7.6 8.3 6.7 9.4 6.5l1.2 2.3L9 9.2Z" fill="currentColor"/></svg>`,
  menu: `<span class="menu-lines" aria-hidden="true"><span></span><span></span><span></span></span>`,
};

const esc = (s = "") =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const pageTitle = (t) => (t ? `${t} - Turjotex` : "Home - Turjotex");

/* ------------------------------------------------------------------- head */
function head({ title, description, pageKey }) {
  return `<!doctype html>
<html lang="en" data-page="${pageKey}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(pageTitle(title))}</title>
  <meta name="description" content="${esc(description || site.tagline)}">
  <meta name="theme-color" content="#0a1711">
  <meta property="og:title" content="${esc(pageTitle(title))}">
  <meta property="og:description" content="${esc(description || site.tagline)}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="assets/img/elastic-unit.jpg">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png?v=2">
  <link rel="icon" type="image/png" sizes="192x192" href="assets/img/favicon-192.png?v=2">
  <link rel="apple-touch-icon" href="assets/img/favicon-192.png?v=2">
  <link rel="preload" href="assets/fonts/archivo-var.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/fonts/manrope-var.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="css/style.css">
  <script>
    document.documentElement.classList.add('js');
    try {
      if (sessionStorage.getItem('turjotex:page-transition') === '1' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('is-entering');
      }
      sessionStorage.removeItem('turjotex:page-transition');
    } catch (error) {}
  </script>
</head>`;
}

/* ---------------------------------------------------------------- header */
function utilityBar() {
  const bit = `<span class="utility-bit">${esc(site.tagline)}</span><span class="utility-dot" aria-hidden="true"></span><span class="utility-bit">${esc(site.name)}</span><span class="utility-dot" aria-hidden="true"></span><span class="utility-bit">Gazipur, Bangladesh</span><span class="utility-dot" aria-hidden="true"></span>`;
  return `<div class="utility">
  <div class="utility-track" aria-hidden="true">${bit.repeat(4)}</div>
  <span class="sr-only">${esc(site.tagline)}</span>
</div>`;
}

function megaMenu() {
  return `<div class="mega" data-mega>
  <div class="wrap mega-inner">
    <div class="mega-main">
      <div class="mega-head">
        <p class="eyebrow">Our Products</p>
        <span class="mega-count">07 <span>Units</span></span>
      </div>
      <div class="mega-grid">
        ${units
          .map(
            (u) => `<a class="mega-link" href="${u.slug}.html" data-preview-link="${u.slug}">
          <span class="mega-num">${u.num}</span>
          <span class="mega-name">${esc(u.title)}</span>
          <span class="mega-arrow">${icons.arrow}</span>
        </a>`
          )
          .join("")}
      </div>
    </div>
    <div class="mega-preview" aria-hidden="true">
      ${units
        .map(
          (u, i) =>
            `<img src="${u.image}" alt="" loading="lazy" class="${i === 0 ? "is-active" : ""}" data-preview-img="${u.slug}">`
        )
        .join("")}
      <div class="mega-preview-caption">
        <span data-preview-name>${esc(units[0].title)}</span>
        <span data-preview-count>01 / 07</span>
      </div>
    </div>
  </div>
</div>`;
}

function header(active) {
  return `<header class="site-header" data-header>
  <div class="wrap header-inner">
    <a class="brand" href="index.html" aria-label="Turjotex - Home">
      <img src="assets/img/logo.png" width="591" height="188" alt="Turjotex">
    </a>
    <nav class="desktop-nav" aria-label="Primary">
      ${nav
        .filter((item) => item.key !== "contact")
        .map((item) => {
          if (item.children) {
            return `<div class="nav-mega" data-mega-wrap>
          <button class="nav-link nav-mega-btn${active === "products" ? " is-active" : ""}" type="button" aria-expanded="false" aria-controls="products-menu" data-mega-btn>
            Products ${icons.chevron}
          </button>
          ${megaMenu()}
        </div>`;
          }
          const activeClass = active === item.key ? " is-active" : "";
          return `<a class="nav-link${activeClass}" href="${item.href}"${active === item.key ? ' aria-current="page"' : ""}>${item.label}</a>`;
        })
        .join("")}
    </nav>
    <div class="header-actions">
      <a class="btn btn--sm header-cta" href="contact-us.html">Contact Us <span class="btn-ico">${icons.arrow}</span></a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
        ${icons.menu}
      </button>
    </div>
  </div>
</header>`;
}

function mobileMenu(active) {
  return `<div class="mobile-menu" id="mobile-menu" data-mobile-menu aria-hidden="true">
  <div class="mobile-menu-top">
    <a class="brand brand--mobile" href="index.html" aria-label="Turjotex - Home">
      <img src="assets/img/logo.png" width="591" height="188" alt="Turjotex">
    </a>
    <button class="mobile-close" type="button" aria-label="Close menu" data-menu-close>${icons.close}</button>
  </div>
  <div class="mobile-menu-body">
    <nav class="mobile-nav" aria-label="Mobile">
      ${nav
        .filter((n) => !n.children)
        .map(
          (item) =>
            `<a href="${item.href}" class="${active === item.key ? "is-active" : ""}"><span>${item.label}</span><span class="mobile-index">${String(
              nav.filter((n) => !n.children).indexOf(item) + 1
            ).padStart(2, "0")}</span></a>`
        )
        .join("")}
    </nav>
    <div class="mobile-products">
      <p class="eyebrow">Our Products <span>07 Units</span></p>
      <div class="mobile-product-list">
        ${units
          .map(
            (u) => `<a href="${u.slug}.html"><span class="mobile-product-num">${u.num}</span><span>${esc(
              u.title
            )}</span>${icons.arrow}</a>`
          )
          .join("")}
      </div>
    </div>
    <div class="mobile-contact">
      <a href="mailto:${site.emailPrimary}">${site.emailPrimary}</a>
      <a href="tel:${site.phone.replaceAll(" ", "")}">${site.phone}</a>
      <p>${esc(site.address)}</p>
    </div>
  </div>
  <div class="mobile-menu-foot">
    <a href="${site.profilePage}">Company Profile ${icons.arrow}</a>
    <span>${esc(site.address)}</span>
  </div>
</div>`;
}

/* ---------------------------------------------------------------- footer */
function footer() {
  return `<footer class="site-footer">
  <div class="wrap footer-cta" data-reveal="up">
    <div>
      <p class="eyebrow eyebrow--light">Garments Accessories Manufacturer &amp; Supplier</p>
      <h2>Get a free <em>consult!</em></h2>
    </div>
    <div class="footer-cta-actions">
      <a class="btn btn--light" href="contact-us.html">Contact Us <span class="btn-ico">${icons.arrow}</span></a>
      <a class="footer-phone" href="tel:${site.phone.replaceAll(" ", "")}">${site.phone}</a>
    </div>
  </div>
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="footer-logo" href="index.html" aria-label="Turjotex - Home">
        <img src="assets/img/logo.png" width="591" height="188" alt="Turjotex" loading="lazy">
      </a>
      <address>
        <p class="footer-label">Address</p>
        <p>${esc(site.address)}</p>
      </address>
      <div class="footer-contact">
        <p class="footer-label">Email</p>
        <a href="mailto:${site.emailPrimary}">${site.emailPrimary}</a>
        <a href="mailto:${site.emailSecondary}">${site.emailSecondary}</a>
      </div>
      <div class="footer-contact">
        <p class="footer-label">Call</p>
        <a href="tel:${site.phone.replaceAll(" ", "")}">${site.phone}</a>
      </div>
    </div>
    <div class="footer-col">
      <h3>Quick Link</h3>
      <a href="factory-overview.html">Factory Overview</a>
      <a href="${site.profilePage}">Company Profile</a>
    </div>
    <div class="footer-col">
      <h3>Quick Link</h3>
      <a href="message-from-director.html">Message from Director</a>
      <a href="about-us.html">About Us</a>
      <a href="contact-us.html">Contact Us</a>
    </div>
  </div>
  <div class="footer-wordmark" aria-hidden="true">Turjo Tex</div>
  <div class="wrap footer-legal">
    <p>Copyright 2026 © <strong>Turjo Tex Limited</strong></p>
    <div class="footer-small-links">
      <a href="#" data-noop>Terms</a>
      <a href="#" data-noop>Privacy</a>
      <a href="#" data-noop>Cookies</a>
      <a class="to-top" href="#top" aria-label="Back to top">${icons.arrowUp}</a>
    </div>
  </div>
</footer>`;
}

function pageTransition() {
  return `<div class="transition" data-transition aria-hidden="true">
  <div class="transition-panel">
    <div class="transition-mark">
      <img src="assets/img/logo-reverse.png" alt="" width="587" height="172">
      <span class="transition-line"></span>
    </div>
  </div>
</div>`;
}

function lightbox() {
  return `<div class="lightbox" data-lightbox aria-hidden="true">
  <div class="lightbox-backdrop" data-lightbox-close></div>
  <div class="lightbox-inner" role="dialog" aria-modal="true" aria-label="Image gallery">
    <div class="lightbox-bar">
      <span class="lightbox-count" data-lightbox-count>01 / 03</span>
      <button class="lightbox-btn" type="button" aria-label="Close gallery" data-lightbox-close>${icons.close}</button>
    </div>
    <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image" data-lightbox-prev>${icons.arrowLeft}</button>
    <figure class="lightbox-figure">
      <img alt="" data-lightbox-img>
      <figcaption data-lightbox-caption></figcaption>
    </figure>
    <button class="lightbox-nav lightbox-next" type="button" aria-label="Next image" data-lightbox-next>${icons.arrow}</button>
  </div>
</div>`;
}

function whatsappFloat() {
  return `<a class="wa-float" href="${site.whatsapp}" target="_blank" rel="noopener" aria-label="Contact Us on WhatsApp">
  ${icons.whatsapp}<span>Contact Us</span>
</a>`;
}

function shell({ title, description, pageKey, content }) {
  return `${head({ title, description, pageKey })}
<body class="page-${pageKey}" id="top">
  <a class="skip-link" href="#main">Skip to content</a>
  ${pageTransition()}
  <div class="scroll-progress" aria-hidden="true"><span data-scroll-progress></span></div>
  ${utilityBar()}
  ${header(pageKey)}
  ${mobileMenu(pageKey)}
  <main id="main">
${content}
  </main>
  ${footer()}
  ${lightbox()}
  ${whatsappFloat()}
  <script src="js/main.js"></script>
</body>
</html>`;
}

/* -------------------------------------------------------------- partials */
function ticker() {
  const items = units.map((u) => `<span>${esc(u.short)}</span><i aria-hidden="true"></i>`).join("");
  return `<div class="unit-ticker" aria-hidden="true">
  <div class="unit-ticker-track">${items}${items}</div>
</div>`;
}

function statsSection() {
  return `<section class="stats" id="stats" aria-label="Turjo Tex in numbers">
  <div class="stats-weave" aria-hidden="true"></div>
  <div class="wrap stats-grid">
    ${stats
      .map(
        (s, i) => `<div class="stat${s.wide ? " stat--wide" : ""}" data-reveal="up" style="--delay:${i * 90}ms">
      <div class="stat-number" data-count="${s.value}" data-display="${s.display}">${esc(s.display)}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`
      )
      .join("")}
  </div>
</section>`;
}

function departmentsSection() {
  return `<section class="departments section-pad" aria-labelledby="departments-title">
  <div class="wrap">
    <div class="section-strip" data-reveal="up">
      <p class="section-index">01</p>
      <p class="eyebrow" id="departments-title">Departments</p>
      <span class="section-rule"></span>
    </div>
    <div class="dept-grid">
      ${departments
        .map(
          (d, i) => `<article class="dept-card" data-reveal="up" style="--delay:${i * 110}ms">
        <div class="dept-top">
          <span class="dept-num">${d.index}</span>
          <div class="dept-icon"><img src="${d.icon}" alt="" loading="lazy"></div>
        </div>
        <div class="dept-copy">
          <h2 class="dept-title">${esc(d.title)}</h2>
          <p>${esc(d.text)}</p>
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function productCards() {
  return `<div class="product-list">
  ${units
    .map(
      (u, i) => `<article class="product-card${i % 2 ? " product-card--reverse" : ""}" id="${u.slug}" data-reveal="up">
      <a class="product-media ${u.homeFit === "contain" ? "is-contain" : ""}" href="${u.slug}.html" aria-label="${esc(
        u.title
      )}" data-reveal="clip">
        <img src="${u.homeImage}" alt="${esc(u.title)}" loading="lazy">
        <span class="product-tag">Unit ${u.num}</span>
        <span class="media-fact">${esc(u.fact)}</span>
        <span class="media-corner" aria-hidden="true">${icons.arrow}</span>
      </a>
      <div class="product-body">
        <p class="product-kicker"><span>${u.num}</span><span class="product-kicker-line"></span><span>${esc(
          u.short
        )}</span></p>
        <h3 class="product-title"><a href="${u.slug}.html">${esc(u.title)}</a></h3>
        <p class="product-desc">${esc(u.homeCopy)}</p>
        <a class="link-arrow" href="${u.slug}.html"><span>Read more</span><span class="sr-only"> about ${esc(u.title)}</span><span class="link-arrow-ico">${icons.arrow}</span></a>
      </div>
    </article>`
    )
    .join("")}
</div>`;
}

function productsSection() {
  return `<section class="products section-pad" id="products" aria-labelledby="products-title">
  <div class="wrap">
    <div class="products-head" data-reveal="up">
      <div>
        <p class="section-index">02</p>
        <h2 class="display" id="products-title">Our <em>Products</em></h2>
      </div>
      <div class="products-meta">
        <span class="products-count">07</span>
        <span class="products-count-label">Units</span>
      </div>
    </div>
    ${productCards()}
  </div>
</section>`;
}

function mapSection({ heading = true } = {}) {
  return `<section class="location section-pad" ${heading ? 'aria-labelledby="location-title"' : 'aria-label="Turjo Tex Ltd location"'}>
  <div class="wrap">
    ${
      heading
        ? `<div class="section-head" data-reveal="up">
      <p class="section-index">03</p>
      <h2 class="display" id="location-title">Where we are <em>located</em></h2>
    </div>`
        : ""
    }
    <div class="map-shell" data-reveal="clip">
      <iframe title="Turjo Tex Ltd location on Google Maps" src="${mapEmbed}" width="1300" height="520" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="map-card">
        <span class="map-pin">${icons.pin}</span>
        <p class="eyebrow">Turjo Tex Limited</p>
        <h3>${esc(site.address)}</h3>
        <a class="link-arrow" href="contact-us.html"><span>Contact Us</span><span class="link-arrow-ico">${icons.arrow}</span></a>
      </div>
    </div>
  </div>
</section>`;
}

function contactForm(idPrefix = "home") {
  return `<form class="contact-form" data-mail-form data-form-name="Contact Form" novalidate>
    <div class="field-grid">
      <div class="field">
        <label for="${idPrefix}-first">First Name</label>
        <input id="${idPrefix}-first" name="firstName" type="text" placeholder="First Name" autocomplete="given-name">
      </div>
      <div class="field">
        <label for="${idPrefix}-last">Last Name</label>
        <input id="${idPrefix}-last" name="lastName" type="text" placeholder="Last Name" autocomplete="family-name">
      </div>
    </div>
    <div class="field">
      <label for="${idPrefix}-email">Email</label>
      <input id="${idPrefix}-email" name="email" type="email" placeholder="Email Address" autocomplete="email" required>
    </div>
    <div class="field">
      <label for="${idPrefix}-subject">Subject</label>
      <input id="${idPrefix}-subject" name="subject" type="text" placeholder="Subject">
    </div>
    <div class="field">
      <label for="${idPrefix}-message">Your Message</label>
      <textarea id="${idPrefix}-message" name="message" rows="4" placeholder="Your Message" required></textarea>
    </div>
    <div class="form-foot">
      <button class="btn btn--primary" type="submit">Submit <span class="btn-ico">${icons.arrow}</span></button>
      <p class="form-status" role="status" data-form-status></p>
    </div>
  </form>`;
}

function homeContact() {
  return `<section class="contact-home section-pad" aria-labelledby="home-contact-title">
  <div class="wrap contact-home-grid">
    <div class="contact-home-copy" data-reveal="up">
      <p class="section-index section-index--light">04</p>
      <p class="eyebrow eyebrow--light">Contact Form</p>
      <h2 class="display" id="home-contact-title">Do you want to <em>discuss</em> with us?</h2>
      <div class="contact-direct">
        <a href="mailto:${site.emailPrimary}">${icons.mail}<span>${site.emailPrimary}</span></a>
        <a href="tel:${site.phone.replaceAll(" ", "")}">${icons.phone}<span>${site.phone}</span></a>
      </div>
      <p class="contact-address">${icons.pin}<span>${esc(site.address)}</span></p>
    </div>
    <div class="contact-home-form" data-reveal="up" style="--delay:120ms">
      ${contactForm("home")}
    </div>
  </div>
</section>`;
}

function pageHero({ eyebrow, title, titleHtml, intro, image, imageFit = "cover", meta, imageAlt }) {
  return `<section class="page-hero">
  <div class="page-hero-bg" aria-hidden="true"></div>
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb">
      <a href="index.html">Home</a><span>/</span><a href="index.html#products">Products</a><span>/</span><span aria-current="page">${esc(title)}</span>
    </nav>
    <div class="page-hero-grid">
      <div class="page-hero-copy">
        <p class="eyebrow eyebrow--light">${eyebrow}</p>
        <h1 class="display page-title">${titleHtml}</h1>
        <p class="page-intro">${intro}</p>
        <div class="page-hero-actions">
          <a class="btn btn--primary" href="#specifications">Specifications <span class="btn-ico">${icons.arrowDown}</span></a>
          <a class="link-arrow link-arrow--light" href="contact-us.html"><span>Contact Us</span><span class="link-arrow-ico">${icons.arrow}</span></a>
        </div>
      </div>
      <figure class="page-hero-media${imageFit === "contain" ? " is-contain" : ""}${
        imageFit === "portrait" ? " is-portrait" : ""
      }">
        <img src="${image}" alt="${esc(imageAlt || title)}">
        <figcaption><span>${esc(meta)}</span><span>${esc(eyebrow.replace("Unit ", ""))}</span></figcaption>
      </figure>
    </div>
  </div>
</section>`;
}

function renderContentBlock(block, index) {
  const heading = block.title
    ? `<div class="block-head" data-reveal="up">
        <span class="block-num">${String(index + 1).padStart(2, "0")}</span>
        <h2>${esc(block.title)}</h2>
      </div>`
    : "";
  const intro = block.intro ? `<p class="block-intro" data-reveal="up">${esc(block.intro)}</p>` : "";
  let body = "";
  if (block.type === "tags") {
    body = `<div class="tag-grid">
      ${block.items
        .map(
          (item, i) => `<div class="tag-card" data-reveal="up" style="--delay:${i * 55}ms">
          <span class="tag-num">${String(i + 1).padStart(2, "0")}</span>
          <span class="tag-name">${esc(item)}</span>
        </div>`
        )
        .join("")}
    </div>`;
  } else if (block.type === "numbered") {
    body = `<div class="numbered-list">
      ${block.items
        .map(
          (item, i) => `<div class="numbered-item" data-reveal="up" style="--delay:${i * 55}ms">
          <span class="numbered-index">${String(i + 1).padStart(2, "0")}</span>
          <div class="numbered-copy">
            <h3>${esc(item.term)}</h3>
            <p>${esc(item.text)}</p>
          </div>
        </div>`
        )
        .join("")}
    </div>`;
  } else if (block.type === "defs") {
    body = `<div class="def-list">
      ${block.items
        .map(
          (item, i) => `<div class="def-item" data-reveal="up" style="--delay:${i * 55}ms">
          <h3>${esc(item.term)}</h3>
          <p>${esc(item.text)}</p>
        </div>`
        )
        .join("")}
    </div>`;
  } else if (block.type === "checks") {
    body = `<div class="check-list">
      ${block.items
        .map(
          (item, i) => `<div class="check-item" data-reveal="up" style="--delay:${i * 55}ms">
          <span class="check-mark">${icons.check}</span>
          <p><strong>${esc(item.term)}</strong> – ${esc(item.text)}</p>
        </div>`
        )
        .join("")}
    </div>`;
  } else if (block.type === "bullets") {
    body = `<div class="bullet-list">
      ${block.items
        .map(
          (item, i) => `<div class="bullet-item" data-reveal="up" style="--delay:${i * 55}ms">
          <span class="bullet-mark" aria-hidden="true"></span>
          <p><strong>${esc(item.term)}:</strong> ${esc(item.text)}</p>
        </div>`
        )
        .join("")}
    </div>`;
  } else if (block.type === "paragraphs") {
    body = `<div class="inset-note" data-reveal="up">
      <span class="inset-mark" aria-hidden="true">”</span>
      ${block.items.map((p) => `<p>${esc(p)}</p>`).join("")}
    </div>`;
  }
  return `<section class="content-block" id="${block.id}">
    ${heading}
    ${intro}
    ${body}
  </section>`;
}

function gallerySection(unit) {
  if (!unit.gallery?.length) return "";
  return `<section class="unit-gallery" aria-label="${esc(unit.title)} gallery">
  <div class="wrap">
    <div class="gallery-head" data-reveal="up">
      <p class="eyebrow eyebrow--light">${esc(unit.title)}</p>
      <span class="gallery-count">${String(unit.gallery.length).padStart(2, "0")} <span>Images</span></span>
    </div>
    <div class="gallery-grid" data-gallery-grid>
      ${unit.gallery
        .map(
          (img, i) => `<button class="gallery-item" type="button" data-gallery="${unit.slug}" data-full="${img.src}" data-caption="${esc(
            img.alt
          )}" aria-label="Open image: ${esc(img.alt)}" data-reveal="up" style="--delay:${i * 50}ms">
        <img src="${img.src}" alt="${esc(img.alt)}" loading="lazy">
        <span class="gallery-overlay">
          <span class="gallery-num">${String(i + 1).padStart(2, "0")}</span>
        </span>
      </button>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function specsSection(unit) {
  const groups = [];
  for (const spec of unit.specs) {
    const name = spec.group ?? "";
    let group = groups.find((entry) => entry.name === name);
    if (!group) {
      group = { name, items: [] };
      groups.push(group);
    }
    group.items.push(spec);
  }

  const specList = (items) => `<ul class="spec-list">
        ${items
          .map(
            (spec, i) => `<li class="spec${spec.highlight ? " spec--highlight" : ""}" data-reveal="up" style="--delay:${i * 70}ms">
          <span class="spec-check" aria-hidden="true">${icons.check}</span>
          <p class="spec-line"><span class="spec-label">${esc(spec.label)}</span><span class="spec-sep">${esc(spec.sep ?? " : ")}</span><span class="spec-value">${esc(spec.value)}</span></p>
        </li>`
          )
          .join("")}
      </ul>`;

  return `<section class="specs-section" id="specifications" aria-labelledby="specs-title">
  <div class="wrap">
    <div class="specs-head" data-reveal="up">
      <div>
        <p class="section-index">Specifications</p>
        <h2 class="display" id="specs-title">Specifi<em>cations</em></h2>
      </div>
      <p class="specs-note">${esc(site.name)}<br>${esc(site.address)}</p>
    </div>
    <div class="spec-groups">
      ${groups
        .map(
          (group, gi) => `<div class="spec-group">
        ${groups.length > 1 ? `<p class="spec-group-head"><span class="spec-group-num">${String(gi + 1).padStart(2, "0")}</span><span class="spec-group-name">${esc(group.name)}</span></p>` : ""}
        ${specList(group.items)}
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function unitAside(unit) {
  const links = [
    ...unit.sections.filter((s) => s.nav).map((s) => `<a href="#${s.id}">${esc(s.nav)}</a>`),
    `<a href="#specifications">Specifications</a>`,
  ];
  return `<aside class="unit-aside">
  <div class="aside-sticky">
    <p class="eyebrow">On this page</p>
    <nav class="aside-nav" aria-label="On this page">${links.join("")}</nav>
    <div class="aside-fact">
      <p class="eyebrow eyebrow--light">Production capacity</p>
      <p class="aside-fact-value">${esc(unit.fact)}</p>
    </div>
    <a class="aside-cta" href="contact-us.html">Get a free consult! <span>${icons.arrow}</span></a>
  </div>
</aside>`;
}

function unitBody(unit) {
  return `<section class="unit-body section-pad">
  <div class="wrap unit-layout">
    ${unitAside(unit)}
    <div class="unit-main">
      ${unit.sections.map((block, i) => renderContentBlock(block, i)).join("")}
    </div>
  </div>
</section>`;
}

function nextUnit(unit) {
  const i = units.findIndex((u) => u.slug === unit.slug);
  const next = units[(i + 1) % units.length];
  return `<section class="next-unit">
  <div class="wrap">
    <a class="next-unit-link" href="${next.slug}.html">
      <div class="next-unit-copy">
        <p class="eyebrow eyebrow--light">Next Unit</p>
        <h2 class="display">${esc(next.title)}</h2>
        <span class="next-unit-arrow">${icons.arrow}</span>
      </div>
      <div class="next-unit-media" data-reveal="clip">
        <img src="${next.image}" alt="${esc(next.title)}" loading="lazy">
      </div>
    </a>
  </div>
</section>`;
}

/* ------------------------------------------------------------------ home */
function homePage() {
  const sealText = "GARMENTS ACCESSORIES · MANUFACTURER &amp; SUPPLIER ·";
  const content = `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-media">
    <video class="hero-video" data-hero-video autoplay muted loop playsinline preload="metadata" poster="assets/img/factory-4.jpg">
      <source src="assets/video/factory.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero-shade"></div>
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap hero-inner">
    <div class="hero-kicker">
      <span class="hero-dot"></span>
      <span>Turjo Tex Limited</span>
      <span class="hero-kicker-rule"></span>
      <span>Gazipur, Bangladesh</span>
    </div>
    <div class="hero-title-row">
      <h1 class="display hero-title" id="hero-title">
        <span class="line"><span>Garments</span></span>
        <span class="line"><span>Accessories</span></span>
        <span class="line hero-line-sub"><span>Manufacturer <em>&amp;</em> Supplier</span></span>
      </h1>
      <div class="hero-seal" aria-hidden="true">
        <svg viewBox="0 0 160 160">
          <defs><path id="seal-path" d="M80,80 m-61,0 a61,61 0 1,1 122,0 a61,61 0 1,1 -122,0"></path></defs>
          <text><textPath href="#seal-path">${sealText}</textPath></text>
        </svg>
        <span class="seal-core"><img src="assets/img/brand-mark.png" alt="" width="141" height="160"></span>
      </div>
    </div>
    <div class="hero-foot">
      <div class="hero-foot-left">
        <a class="btn btn--light" href="contact-us.html">Contact Us <span class="btn-ico">${icons.arrow}</span></a>
        <a class="hero-scroll" href="#stats" aria-label="Scroll to content"><span class="hero-scroll-line"></span><span>Scroll</span></a>
      </div>
      <div class="hero-foot-right">
        <span>Garments Accessories<br>Manufacturer &amp; Supplier</span>
        <button class="video-toggle" type="button" aria-label="Pause background video" aria-pressed="false" data-video-toggle>
          <span data-video-icon>${icons.pause}</span>
        </button>
      </div>
    </div>
  </div>
</section>
${ticker()}
${statsSection()}
${departmentsSection()}
${productsSection()}
${mapSection()}
${homeContact()}
`;
  return shell({
    title: "",
    description:
      "Turjo Tex Limited — garments accessories manufacturer & supplier in Gazipur, Bangladesh. Elastic, twill tape, drawstring, jacquard elastic, label printing, shell buttons and thermal sticker printing.",
    pageKey: "home",
    content,
  });
}

/* ----------------------------------------------------------------- about */
function aboutPage() {
  const content = `
<section class="about-hero">
  <div class="wrap about-hero-grid">
    <div class="about-hero-copy">
      <p class="eyebrow">Turjo Tex Limited</p>
      <h1 class="display">About <em>Us</em></h1>
      <div class="about-hero-strip" data-reveal="up">
        <span class="about-strip-line"></span>
        <p>Garments Accessories Manufacturer &amp; Supplier</p>
      </div>
    </div>
    <div class="about-hero-media">
      <figure class="about-hero-img about-hero-img--1" data-reveal="clip"><img src="assets/img/factory-2.jpg" alt="Turjo Tex factory" loading="lazy"></figure>
      <figure class="about-hero-img about-hero-img--2" data-reveal="clip"><img src="assets/img/team-hafizur.jpg" alt="Hafizur Rahman Babu" loading="lazy"></figure>
      <figure class="about-hero-img about-hero-img--3" data-reveal="clip"><img src="assets/img/shell-2.jpg" alt="Turjo Tex shell button inspection" loading="lazy"></figure>
      <span class="about-hero-badge">07 <span>Units</span></span>
    </div>
  </div>
</section>

<section class="team section-pad" aria-labelledby="team-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">01 / Management</p>
        <h2 class="display" id="team-title">Meet our top <em>Management</em></h2>
      </div>
      <p class="section-side-note">${esc(site.address)}</p>
    </div>
    <div class="team-grid">
      ${team
        .map(
          (t, i) => `<article class="team-card" data-reveal="up" style="--delay:${i * 100}ms">
        <div class="team-media" data-reveal="clip">
          <img src="${t.image}" alt="${esc(t.name)}" loading="lazy">
          <span class="team-index">${String(i + 1).padStart(2, "0")}</span>
        </div>
        <div class="team-copy">
          <h3>${esc(t.name)}</h3>
          <p>${esc(t.role)}</p>
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="people section-pad" aria-labelledby="people-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">02 / Our People</p>
        <h2 class="display" id="people-title">Inside <em>Turjo Tex</em></h2>
      </div>
      <p class="section-side-note">Turjo Tex Limited / Gazipur</p>
    </div>
    <div class="people-grid">
      <figure class="people-shot people-shot--wide" data-reveal="clip">
        <img src="assets/img/team-group.jpg" alt="The Turjo Tex team at the Gazipur factory" loading="lazy">
        <figcaption><span>01</span> Management &amp; team</figcaption>
      </figure>
      <figure class="people-shot" data-reveal="clip" style="--delay:80ms">
        <img src="assets/img/factory-room.jpg" alt="Turjo Tex narrow fabric production floor" loading="lazy">
        <figcaption><span>02</span> Production floor</figcaption>
      </figure>
      <figure class="people-shot" data-reveal="clip" style="--delay:160ms">
        <img src="assets/img/team-group-2.jpg" alt="Turjo Tex production team" loading="lazy">
        <figcaption><span>03</span> Our production team</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="vision section-pad" aria-labelledby="vision-title">
  <div class="vision-weave" aria-hidden="true"></div>
  <div class="wrap vision-grid">
    <div class="vision-mark" data-reveal="up">
      <span class="vision-index">03</span>
      <span class="eyebrow eyebrow--light">Turjo Tex Limited</span>
    </div>
    <div class="vision-copy">
      <h2 class="display" id="vision-title" data-reveal="up">Our <em>Vision</em></h2>
      <p class="vision-text" data-reveal="up">${esc(vision)}</p>
    </div>
  </div>
</section>

<section class="newsletter" aria-labelledby="newsletter-title">
  <div class="wrap newsletter-grid">
    <div data-reveal="up">
      <p class="eyebrow">Subscribe to our newsletter</p>
      <h2 class="display" id="newsletter-title">Subscribe to our <em>newsletter</em></h2>
    </div>
    <form class="newsletter-form" data-mail-form data-form-name="Subscription Form" data-reveal="up" novalidate>
      <p class="newsletter-label">Subscription Form</p>
      <div class="newsletter-input-wrap">
        <label class="sr-only" for="newsletter-email">Email Address</label>
        <input id="newsletter-email" name="email" type="email" placeholder="Email Address" autocomplete="email" required>
        <button class="btn btn--dark" type="submit">Sign Up <span class="btn-ico">${icons.arrow}</span></button>
      </div>
      <p class="form-status" role="status" data-form-status></p>
    </form>
  </div>
</section>

<section class="mission section-pad" aria-labelledby="mission-title">
  <div class="wrap mission-grid">
    <div class="mission-aside" data-reveal="up">
      <span class="vision-index vision-index--dark">04</span>
      <p class="eyebrow">Turjo Tex Limited</p>
      <span class="mission-rule"></span>
    </div>
    <div class="mission-copy">
      <h2 class="display display--lower" id="mission-title" data-reveal="up">our <em>mission</em></h2>
      <p class="mission-text" data-reveal="up">${esc(mission)}</p>
    </div>
  </div>
</section>

<section class="touch section-pad" aria-labelledby="touch-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">05 / Contact</p>
        <h2 class="display" id="touch-title">Get in touch <em>with us</em></h2>
      </div>
      <a class="link-arrow" href="contact-us.html"><span>Contact Us</span><span class="link-arrow-ico">${icons.arrow}</span></a>
    </div>
    <div class="touch-grid">
      <div class="touch-card" data-reveal="up">
        <img src="assets/img/icon-mail.png" alt="" loading="lazy">
        <div>
          <p class="eyebrow">Email</p>
          <a href="mailto:${site.emailPrimary}">${site.emailPrimary}</a>
          <a href="mailto:${site.emailSecondary}">${site.emailSecondary}</a>
        </div>
      </div>
      <div class="touch-card" data-reveal="up" style="--delay:70ms">
        <img src="assets/img/icon-pin.png" alt="" loading="lazy">
        <div>
          <p class="eyebrow">Address</p>
          <p>${esc(site.address)}</p>
        </div>
      </div>
      <div class="touch-card" data-reveal="up" style="--delay:140ms">
        <img src="assets/img/icon-phone.png" alt="" loading="lazy">
        <div>
          <p class="eyebrow">Connect with Us</p>
          <a href="tel:${site.phone.replaceAll(" ", "")}">${site.phoneAbout}</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;
  return shell({
    title: "About Us",
    description:
      "Meet the management of Turjo Tex Limited and read our vision and mission as a garments accessories manufacturer and supplier in Gazipur, Bangladesh.",
    pageKey: "about",
    content,
  });
}

/* --------------------------------------------------------------- factory */
function factoryPage() {
  const content = `
<section class="factory-hero">
  <div class="wrap">
    <div class="factory-hero-top">
      <p class="eyebrow eyebrow--light">Turjo Tex Limited / Gazipur</p>
      <span class="factory-count">${String(factoryImages.length).padStart(2, "0")} <span>Images</span></span>
    </div>
    <h1 class="display">Factory <em>Overview</em></h1>
    <div class="factory-hero-collage">
      <figure class="factory-hero-img factory-hero-img--a" data-reveal="clip"><img src="assets/img/elastic-unit.jpg" alt="Turjo Tex factory machinery" loading="lazy"></figure>
      <figure class="factory-hero-img factory-hero-img--b" data-reveal="clip"><img src="assets/img/label-unit.jpg" alt="Turjo Tex label printing machine" loading="lazy"></figure>
      <figure class="factory-hero-img factory-hero-img--c" data-reveal="clip"><img src="assets/img/shell-2.jpg" alt="Turjo Tex shell button inspection" loading="lazy"></figure>
      <div class="factory-seal" aria-hidden="true">${icons.arrowDown}</div>
    </div>
  </div>
</section>

<section class="factory-gallery-section" aria-label="Factory Overview gallery">
  <div class="wrap">
    <div class="gallery-head" data-reveal="up">
      <p class="section-index">01 / Gallery</p>
      <span class="gallery-count">${String(factoryImages.length).padStart(2, "0")} <span>Images</span></span>
    </div>
    <div class="gallery-grid gallery-grid--factory">
      ${factoryImages
        .map(
          (img, i) => `<button class="gallery-item" type="button" data-gallery="factory" data-full="${img.src}" data-caption="${esc(
            img.alt
          )}" aria-label="Open image: ${esc(img.alt)}" data-reveal="up" style="--delay:${i * 45}ms">
        <img src="${img.src}" alt="${esc(img.alt)}" loading="lazy">
        <span class="gallery-overlay"><span class="gallery-num">${String(i + 1).padStart(2, "0")}</span></span>
      </button>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="factory-film" aria-label="Factory video">
  <div class="wrap">
    <div class="film-frame" data-reveal="clip">
      <video class="film-video" data-film-video muted loop playsinline preload="metadata" poster="assets/img/factory-4.jpg">
        <source src="assets/video/factory.mp4" type="video/mp4">
      </video>
      <div class="film-veil"></div>
      <button class="film-play" type="button" aria-label="Play factory video" data-film-toggle>
        <span class="film-play-icon" data-film-icon>${icons.play}</span>
        <span class="film-play-label">Play</span>
      </button>
      <div class="film-caption"><span>Turjo Tex Limited</span><span>Gazipur, Bangladesh</span></div>
    </div>
  </div>
</section>
`;
  return shell({
    title: "Factory Overview",
    description:
      "Explore the Turjo Tex Limited factory in Gazipur, Bangladesh — elastic, twill tape, drawstring, jacquard elastic, label printing, shell button and thermal sticker printing units.",
    pageKey: "factory",
    content,
  });
}

/* --------------------------------------------------------------- director */
function directorPage() {
  const content = `
<section class="director-hero">
  <div class="director-grid-lines" aria-hidden="true"></div>
  <div class="wrap director-inner">
    <div class="director-head">
      <p class="eyebrow eyebrow--light">Message from Director</p>
      <span class="director-index">01 / 01</span>
    </div>
    <div class="director-grid">
      <div class="director-quote-wrap">
        <span class="director-quote-mark" aria-hidden="true">“</span>
        <h1 class="director-title">Director’s <em>Message</em></h1>
        <blockquote class="director-quote" data-quote>${esc(directorQuote)}</blockquote>
        <div class="director-attribution" data-reveal="up">
          <span class="director-attribution-line"></span>
          <div>
            <p class="director-name">— Hafizur Rahman Babu</p>
            <p class="director-role">MANAGING DIRECTOR</p>
          </div>
        </div>
        <a class="btn btn--primary" href="contact-us.html">Get in touch <span class="btn-ico">${icons.arrow}</span></a>
      </div>
      <figure class="director-portrait" data-reveal="clip">
        <img src="assets/img/team-hafizur.jpg" alt="Hafizur Rahman Babu" loading="lazy">
        <figcaption>
          <span>Hafizur Rahman Babu</span>
          <span>MANAGING DIRECTOR</span>
        </figcaption>
        <span class="director-portrait-mark" aria-hidden="true">${icons.arrowDown}</span>
      </figure>
    </div>
  </div>
</section>
`;
  return shell({
    title: "Message from Director",
    description:
      "A message from Hafizur Rahman Babu, Managing Director of Turjo Tex Limited: customer satisfaction is the hallmark by which we measure our performance.",
    pageKey: "director",
    content,
  });
}

/* -------------------------------------------------------- company profile */
function companyProfilePage() {
  const content = `
<section class="profile-hero">
  <div class="wrap">
    <nav class="crumbs profile-crumbs" aria-label="Breadcrumb">
      <a href="index.html">Home</a><span>/</span><span aria-current="page">Company Profile</span>
    </nav>
    <div class="profile-hero-grid">
      <div class="profile-hero-copy">
        <p class="eyebrow">Turjo Tex Limited / Est. 2015</p>
        <h1 class="display"><span class="line">Company</span> <span class="line"><em>Profile</em></span></h1>
        <p class="profile-hero-intro">Bangladesh garments accessories &amp; packaging manufacturer. A complete garments accessories solution provider — trusted places since 2015.</p>
        <div class="profile-hero-actions">
          <a class="btn btn--primary" href="#introduction">Read the profile <span class="btn-ico">${icons.arrowDown}</span></a>
          <a class="link-arrow" href="contact-us.html"><span>Contact Us</span><span class="link-arrow-ico">${icons.arrow}</span></a>
        </div>
        <div class="profile-hero-meta">
          <span>Gazipur, Bangladesh</span>
          <span>08 Chapters</span>
        </div>
      </div>
      <div class="profile-hero-media">
        <figure class="profile-hero-img profile-hero-img--a" data-reveal="clip"><img src="assets/img/factory-4.jpg" alt="Turjo Tex factory floor" loading="eager"></figure>
        <figure class="profile-hero-img profile-hero-img--b" data-reveal="clip"><img src="assets/img/team-group.jpg" alt="The Turjo Tex team" loading="lazy"></figure>
        <figure class="profile-hero-img profile-hero-img--c" data-reveal="clip"><img src="assets/img/shell-2.jpg" alt="Shell button inspection at Turjo Tex" loading="lazy"></figure>
        <span class="profile-hero-badge">15 <span>Buyers</span></span>
      </div>
    </div>
  </div>
</section>

<section class="profile-contents" aria-labelledby="contents-title">
  <div class="wrap">
    <div class="profile-contents-head" data-reveal="up">
      <div>
        <p class="section-index section-index--light">Key Point</p>
        <h2 class="display" id="contents-title">Inside the <em>profile</em></h2>
      </div>
      <p class="profile-contents-note">08 Chapters<br>2025 Edition</p>
    </div>
    <nav class="profile-contents-grid" aria-label="Company profile sections">
      ${companyProfile.chapters
        .map(
          (chapter, i) => `<a class="profile-chapter" href="#${chapter.id}" data-reveal="up" style="--delay:${i * 55}ms">
        <span class="profile-chapter-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="profile-chapter-name">${esc(chapter.label)}</span>
        <span class="profile-chapter-arrow">${icons.arrow}</span>
      </a>`
        )
        .join("")}
    </nav>
  </div>
</section>

<section class="profile-story section-pad" id="introduction" aria-labelledby="profile-story-title">
  <div class="wrap profile-story-grid">
    <div class="profile-story-aside" data-reveal="up">
      <p class="section-index">01 / Introduction</p>
      <h2 class="display" id="profile-story-title">Who <em>we are</em></h2>
      <p class="profile-story-note">A complete garments accessories solution provider.</p>
      <div class="profile-facts">
        <div class="profile-fact"><strong>2015</strong><span>Established</span></div>
        <div class="profile-fact"><strong>07</strong><span>Units</span></div>
        <div class="profile-fact"><strong>50</strong><span>Clients</span></div>
        <div class="profile-fact"><strong>15</strong><span>Countries</span></div>
      </div>
    </div>
    <div class="profile-story-copy" data-reveal="up" style="--delay:100ms">
      <p class="profile-lead">${esc(companyProfile.story[0])}</p>
      ${companyProfile.story
        .slice(1)
        .map((paragraph) => `<p>${esc(paragraph)}</p>`)
        .join("")}
    </div>
  </div>
</section>

<section class="profile-message" aria-labelledby="profile-message-title">
  <div class="profile-message-lines" aria-hidden="true"></div>
  <div class="wrap profile-message-grid">
    <figure class="profile-message-portrait" data-reveal="clip">
      <img src="assets/img/team-hafizur.jpg" alt="T.M Hafizur Rahman Babu" loading="lazy">
      <figcaption><span>T.M Hafizur Rahman Babu</span><span>Managing Director</span></figcaption>
    </figure>
    <div class="profile-message-copy" data-reveal="up">
      <p class="section-index section-index--light">A word from our Managing Director</p>
      <h2 class="display" id="profile-message-title">Managing Director’s <em>Message</em></h2>
      <blockquote>${esc(directorQuote)}</blockquote>
      <p class="profile-message-name">— T.M Hafizur Rahman Babu</p>
      <p class="profile-message-role">Managing Director</p>
    </div>
  </div>
</section>

<section class="vision section-pad" aria-labelledby="profile-vision-title">
  <div class="vision-weave" aria-hidden="true"></div>
  <div class="wrap vision-grid">
    <div class="vision-mark" data-reveal="up">
      <span class="vision-index">V</span>
      <span class="eyebrow eyebrow--light">Turjo Tex Limited</span>
    </div>
    <div class="vision-copy">
      <h2 class="display" id="profile-vision-title" data-reveal="up">Our <em>Vision</em></h2>
      <p class="vision-text" data-reveal="up">${esc(vision)}</p>
    </div>
  </div>
</section>

<section class="mission section-pad" aria-labelledby="profile-mission-title">
  <div class="wrap mission-grid">
    <div class="mission-aside" data-reveal="up">
      <span class="vision-index vision-index--dark">M</span>
      <p class="eyebrow">Turjo Tex Limited</p>
      <span class="mission-rule"></span>
    </div>
    <div class="mission-copy">
      <h2 class="display" id="profile-mission-title" data-reveal="up">Our <em>Mission</em></h2>
      <p class="mission-text" data-reveal="up">${esc(mission)}</p>
    </div>
  </div>
</section>

<section class="profile-products section-pad" id="our-product" aria-labelledby="profile-products-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">02 / Our Product</p>
        <h2 class="display" id="profile-products-title">Our <em>Products</em></h2>
      </div>
      <p class="section-side-note">Eight product lines under one roof.</p>
    </div>
    <div class="profile-product-grid">
      ${companyProfile.products
        .map(
          (product, i) => `<a class="profile-product-card" href="${product.href}" aria-label="Explore ${esc(
            product.title
          )}" data-reveal="up" style="--delay:${i * 55}ms">
        <span class="profile-product-media"><img src="${product.image}" alt="${esc(product.title)}" loading="lazy"></span>
        <span class="profile-product-meta"><span class="profile-product-num">${product.num}</span><span class="profile-product-arrow">${icons.arrow}</span></span>
        <span class="profile-product-title">${esc(product.title)}</span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="profile-certs section-pad" id="certifications" aria-labelledby="profile-certs-title">
  <div class="wrap">
    <div class="profile-certs-head">
      <div data-reveal="up">
        <p class="section-index">Certification / OEKO-TEX® Standard 100</p>
        <h2 class="display" id="profile-certs-title">Certified to <em>standard</em></h2>
      </div>
      <div class="profile-certs-intro" data-reveal="up" style="--delay:100ms">
        <p>The 2025 Company Profile documents OEKO-TEX® Standard 100 certification for Turjo Tex’s narrow fabrics, elastic and printed labels. Both certificates cover Product Class I (baby articles) – Annex 6.</p>
        <p class="profile-certs-tag">02 Certificates <span>/</span> Product Class I</p>
      </div>
    </div>
    <div class="profile-cert-list">
      ${companyProfile.certifications
        .map(
          (cert, i) => `<article class="profile-cert" data-reveal="up" style="--delay:${i * 70}ms">
        <a class="profile-cert-doc" href="${cert.image}" target="_blank" rel="noopener" aria-label="Open OEKO-TEX Standard 100 certificate ${cert.number} in a new tab">
          <span class="profile-cert-sheet"><img src="${cert.image}" alt="OEKO-TEX Standard 100 certificate ${cert.number} for Turjo Tex Ltd" width="1200" height="1753" loading="lazy" decoding="async"></span>
          <span class="profile-cert-doc-action"><span>View certificate</span><span class="profile-cert-doc-ico">${icons.arrow}</span></span>
        </a>
        <div class="profile-cert-body">
          <p class="eyebrow">Certificate ${cert.number}</p>
          <h3>${esc(cert.title)}</h3>
          <p class="profile-cert-scope">${esc(cert.scope)}</p>
          <dl class="profile-cert-facts">
            <div><dt>Product class</dt><dd>${esc(cert.productClass)}</dd></div>
            <div><dt>Valid until</dt><dd>${esc(cert.validUntil)}</dd></div>
            <div><dt>Test report</dt><dd>${esc(cert.testReport)}</dd></div>
            <div><dt>Issued</dt><dd>${esc(cert.issued)}</dd></div>
          </dl>
        </div>
      </article>`
        )
        .join("")}
    </div>
    <p class="profile-certs-source" data-reveal="up">Certificates as published in the 2025 Company Profile. ${esc(companyProfile.certificationIssuer)}</p>
  </div>
</section>

<section class="profile-buyers section-pad" id="buyer-list" aria-labelledby="profile-buyers-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">03 / Our Buyer List</p>
        <h2 class="display" id="profile-buyers-title">Our Buyer <em>Portfolio</em></h2>
      </div>
      <p class="section-side-note">15 logos / Global buyers</p>
    </div>
    <ul class="profile-buyer-grid" aria-label="Selected buyers">
      ${companyProfile.buyers
        .map(
          (buyer, i) => `<li class="profile-buyer" data-reveal="up" style="--delay:${i * 35}ms">
        <span class="profile-buyer-index">${String(i + 1).padStart(2, "0")}</span>
        <span class="profile-buyer-logo"><img src="${buyer.logo}" alt="${esc(buyer.name)}" loading="lazy" decoding="async"></span>
      </li>`
        )
        .join("")}
    </ul>
  </div>
</section>

<section class="profile-depts section-pad" id="departments" aria-labelledby="profile-depts-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">04 / Our Departments</p>
        <h2 class="display" id="profile-depts-title">The teams behind <em>every order</em></h2>
      </div>
      <p class="section-side-note">Marketing / QC / Design</p>
    </div>
    <div class="profile-dept-list">
      ${companyProfile.profileDepartments
        .map(
          (department, i) => `<article class="profile-dept" data-reveal="up" style="--delay:${i * 80}ms">
        <span class="profile-dept-num">${department.index}</span>
        <div class="profile-dept-title">
          <span class="profile-dept-icon"><img src="${department.icon}" alt="" loading="lazy"></span>
          <h3>${esc(department.title)}</h3>
        </div>
        <div class="profile-dept-copy">
          ${department.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="team section-pad" id="management" aria-labelledby="profile-team-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">05 / Our Management</p>
        <h2 class="display" id="profile-team-title">Our top <em>Management</em></h2>
      </div>
      <p class="section-side-note">Chairman / Managing Director</p>
    </div>
    <div class="team-grid team-grid--two">
      ${companyProfile.management
        .map(
          (person, i) => `<article class="team-card" data-reveal="up" style="--delay:${i * 100}ms">
        <div class="team-media" data-reveal="clip">
          <img src="${person.image}" alt="${esc(person.name)}" loading="lazy">
          <span class="team-index">${String(i + 1).padStart(2, "0")}</span>
        </div>
        <div class="team-copy">
          <h3>${esc(person.name)}</h3>
          <p>${esc(person.role)}</p>
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="profile-production" id="production" aria-labelledby="profile-production-title">
  <div class="profile-production-weave" aria-hidden="true"></div>
  <div class="wrap profile-production-grid">
    <div class="profile-production-copy" data-reveal="up">
      <p class="section-index section-index--light">06 / Production Capacity</p>
      <h2 class="display" id="profile-production-title">Built to <em>produce</em></h2>
      <p class="profile-production-text">${esc(companyProfile.production)}</p>
      <a class="link-arrow link-arrow--light" href="factory-overview.html"><span>Factory Overview</span><span class="link-arrow-ico">${icons.arrow}</span></a>
    </div>
    <div class="profile-production-stats">
      <div class="profile-stat" data-reveal="up"><strong>07</strong><span>Specialised Units</span></div>
      <div class="profile-stat" data-reveal="up" style="--delay:70ms"><strong>50</strong><span>Clients</span></div>
      <div class="profile-stat" data-reveal="up" style="--delay:140ms"><strong>15</strong><span>Countries</span></div>
      <div class="profile-stat" data-reveal="up" style="--delay:210ms"><strong>100,000</strong><span>YDS Elastic &amp; Twill Tape</span></div>
    </div>
  </div>
</section>

<section class="unit-gallery profile-facilities" id="facilities" aria-labelledby="profile-facilities-title">
  <div class="wrap">
    <div class="profile-gallery-head" data-reveal="up">
      <div>
        <p class="section-index section-index--light">07 / Factory Facilities</p>
        <h2 class="display" id="profile-facilities-title">Inside the <em>factory</em></h2>
      </div>
      <span class="gallery-count">${String(companyProfile.facilities.length).padStart(2, "0")} <span>Images</span></span>
    </div>
    <div class="gallery-grid">
      ${companyProfile.facilities
        .map(
          (img, i) => `<button class="gallery-item" type="button" data-gallery="profile-facilities" data-full="${img.src}" data-caption="${esc(
            img.alt
          )}" aria-label="Open image: ${esc(img.alt)}" data-reveal="up" style="--delay:${i * 45}ms">
        <img src="${img.src}" alt="${esc(img.alt)}" loading="lazy">
        <span class="gallery-overlay"><span class="gallery-num">${String(i + 1).padStart(2, "0")}</span></span>
      </button>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="profile-life section-pad" aria-labelledby="profile-life-title">
  <div class="wrap">
    <div class="section-head section-head--split" data-reveal="up">
      <div>
        <p class="section-index">Life at Turjo Tex</p>
        <h2 class="display" id="profile-life-title">More than a <em>workplace</em></h2>
      </div>
      <p class="section-side-note">Annual picnics / Prize giving / Office parties</p>
    </div>
    <div class="profile-life-grid">
      ${companyProfile.life
        .map(
          (img, i) => `<figure class="profile-life-card${i === 0 ? " profile-life-card--wide" : ""}" data-reveal="clip" style="--delay:${i * 60}ms">
        <img src="${img.src}" alt="${esc(img.alt)}" loading="lazy">
        <figcaption><span>${esc(img.year)}</span>${esc(img.caption)}</figcaption>
      </figure>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="profile-contact" id="contact" aria-labelledby="profile-contact-title">
  <div class="profile-contact-glow" aria-hidden="true"></div>
  <div class="wrap profile-contact-inner">
    <div class="profile-contact-head" data-reveal="up">
      <p class="section-index section-index--light">08 / Contact</p>
      <h2 class="display" id="profile-contact-title">Connect <em>with us</em></h2>
      <p>Get the latest updates and news by staying connected with us.</p>
    </div>
    <div class="profile-contact-grid">
      <div class="profile-contact-card" data-reveal="up">
        <p class="eyebrow">Phone</p>
        <a href="tel:${site.phone.replaceAll(" ", "")}">${esc(site.phoneAbout)}</a>
      </div>
      <div class="profile-contact-card" data-reveal="up" style="--delay:60ms">
        <p class="eyebrow">Email</p>
        <a href="mailto:${site.emailPrimary}">${site.emailPrimary}</a>
        <a href="mailto:${site.emailSecondary}">${site.emailSecondary}</a>
      </div>
      <div class="profile-contact-card" data-reveal="up" style="--delay:120ms">
        <p class="eyebrow">Website</p>
        <a href="${companyProfile.website}" target="_blank" rel="noopener">${esc(companyProfile.websiteLabel)}</a>
      </div>
      <div class="profile-contact-card profile-contact-card--wide" data-reveal="up" style="--delay:180ms">
        <p class="eyebrow">Corporate Office</p>
        <p>${esc(companyProfile.corporateOffice)}</p>
      </div>
      <div class="profile-contact-card profile-contact-card--wide" data-reveal="up" style="--delay:240ms">
        <p class="eyebrow">Factory</p>
        <p>${esc(site.address)}</p>
      </div>
    </div>
    <div class="profile-contact-foot" data-reveal="up">
      <a class="btn btn--primary" href="contact-us.html">Contact Us <span class="btn-ico">${icons.arrow}</span></a>
      <a class="profile-contact-phone" href="tel:${site.phone.replaceAll(" ", "")}">${esc(site.phoneAbout)}</a>
    </div>
  </div>
</section>
`;
  return shell({
    title: "Company Profile",
    description:
      "The Turjo Tex Limited company profile: who we are, our products, buyer portfolio, departments, management, production capacity, factory facilities and contact details.",
    pageKey: "profile",
    content,
  });
}

/* ---------------------------------------------------------------- contact */
function contactPage() {
  const content = `
<section class="contact-hero">
  <div class="wrap contact-hero-grid">
    <div class="contact-hero-copy">
      <p class="eyebrow">Contact Us</p>
      <h1 class="display">Get in <em>touch</em></h1>
      <p class="contact-hero-intro" data-reveal="up">Want to get in touch? We’d love to hear from you. Here’s how you can reach us…</p>
      <a class="contact-hero-link" href="mailto:${site.emailPrimary}" data-reveal="up">${site.emailPrimary} ${icons.arrow}</a>
    </div>
    <div class="contact-hero-cards">
      ${contactCards
        .map(
          (c, i) => `<article class="contact-card" data-reveal="up" style="--delay:${i * 90}ms">
        <div class="contact-card-icon"><img src="${c.icon}" alt="" loading="lazy"></div>
        <div>
          <h2>${esc(c.title)}</h2>
          <p>${esc(c.text)}</p>
          ${c.links.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join("")}
        </div>
        <span class="contact-card-index">${String(i + 1).padStart(2, "0")}</span>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

${mapSection({ heading: false })}

<section class="ask section-pad" aria-labelledby="ask-title">
  <div class="wrap ask-grid">
    <div class="ask-copy" data-reveal="up">
      <p class="section-index section-index--light">01 / Contact Form</p>
      <h2 class="display" id="ask-title">Ask a <em>question</em></h2>
      <p class="ask-note">${esc(site.address)}</p>
      <div class="ask-direct">
        <a href="mailto:${site.emailPrimary}">${icons.mail}<span>${site.emailPrimary}</span></a>
        <a href="tel:${site.phone.replaceAll(" ", "")}">${icons.phone}<span>${site.phone}</span></a>
      </div>
    </div>
    <div class="ask-form" data-reveal="up" style="--delay:100ms">
      ${contactForm("contact")}
    </div>
  </div>
</section>

<section class="contact-close" aria-labelledby="contact-close-title">
  <div class="wrap contact-close-inner" data-reveal="up">
    <div>
      <p class="eyebrow eyebrow--light">Contact Us</p>
      <h2 class="display" id="contact-close-title">Want to discuss <em>with us</em></h2>
    </div>
    <a class="btn btn--light" href="${site.whatsapp}" target="_blank" rel="noopener">Contact us <span class="btn-ico">${icons.arrow}</span></a>
  </div>
</section>
`;
  return shell({
    title: "Contact Us",
    description:
      "Get in touch with Turjo Tex Limited. Talk to sales, contact support, visit our factory in Gazipur, or send a message using the contact form.",
    pageKey: "contact",
    content,
  });
}

/* ------------------------------------------------------------------ units */
function unitPage(unit) {
  const lastLine = unit.titleLines.length - 1;
  const titleHtml = unit.titleLines
    .map((line, i) => {
      let text = esc(line);
      if (i === lastLine) {
        text = /\bUnit$/.test(line) ? text.replace(/Unit$/, "<em>Unit</em>") : `${text} <em>Unit</em>`;
      }
      return `<span class="line"><span>${text}</span></span>`;
    })
    .join("");
  const content = `
${pageHero({
  eyebrow: `Unit ${unit.num}`,
  title: unit.h1Title || unit.title,
  titleHtml,
  intro: esc(unit.intro),
  image: unit.image,
  imageFit: unit.imageFit,
  meta: unit.title,
  imageAlt: unit.h1Title || unit.title,
})}
${unitBody(unit)}
${gallerySection(unit)}
${specsSection(unit)}
${nextUnit(unit)}
`;
  return shell({
    title: unit.title,
    description: unit.intro,
    pageKey: "products",
    content,
  });
}

/* ------------------------------------------------------------------ write */
const pages = {
  "index.html": homePage(),
  "about-us.html": aboutPage(),
  "company-profile.html": companyProfilePage(),
  "factory-overview.html": factoryPage(),
  "message-from-director.html": directorPage(),
  "contact-us.html": contactPage(),
};

for (const unit of units) {
  pages[`${unit.slug}.html`] = unitPage(unit);
}

mkdirSync(outDir, { recursive: true });
for (const [file, html] of Object.entries(pages)) {
  writeFileSync(join(outDir, file), html, "utf8");
  console.log(`wrote ${file} (${Math.round(html.length / 1024)}kb)`);
}

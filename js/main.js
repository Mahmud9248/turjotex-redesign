/* ==========================================================================
   Turjo Tex Limited — site motion & interactions
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const body = doc.body;
  const root = doc.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const raf = (callback) => window.requestAnimationFrame(callback);
  const pad = (value) => String(value).padStart(2, "0");
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const contactEmail = "turjoxtex14@gmail.com";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const icons = {
    play: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor"/></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor"/></svg>`,
  };

  /* ------------------------------------------------------------------ ready */
  const markReady = () => {
    const delay = root.classList.contains("is-entering") ? 700 : 0;
    if (delay) {
      window.setTimeout(() => body.classList.add("is-ready"), delay);
    } else {
      raf(() => raf(() => body.classList.add("is-ready")));
    }
  };
  markReady();

  /* ------------------------------------------------------------ scroll state */
  function initScrollUI() {
    const header = doc.querySelector("[data-header]");
    const progress = doc.querySelector("[data-scroll-progress]");
    const whatsapp = doc.querySelector(".wa-float");
    let queued = false;

    const update = () => {
      queued = false;
      const y = window.scrollY || window.pageYOffset || 0;

      if (header) {
        header.classList.toggle("is-scrolled", y > 16);
      }

      if (progress) {
        const scrollable = root.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? clamp(y / scrollable, 0, 1) : 0;
        progress.style.width = `${(ratio * 100).toFixed(2)}%`;
      }

      if (whatsapp) {
        whatsapp.classList.toggle("is-visible", y > 240);
      }
    };

    const requestUpdate = () => {
      if (queued) return;
      queued = true;
      raf(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();
  }

  /* ---------------------------------------------------------------- reveals */
  function initReveal() {
    const elements = [...doc.querySelectorAll("[data-reveal]")];
    if (!elements.length) return;

    const showAll = () => elements.forEach((element) => element.classList.add("is-visible"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((element) => {
      if (element.dataset.reveal !== "clip") observer.observe(element);
    });

    /* A fully clipped element has no intersection area, so observe its nearest
       layout parent instead and reveal the media inside it. */
    const clipElements = elements.filter((element) => element.dataset.reveal === "clip");
    const proxies = new Map();

    clipElements.forEach((element) => {
      const proxy = element.parentElement || element;
      if (!proxies.has(proxy)) proxies.set(proxy, []);
      proxies.get(proxy).push(element);
    });

    if (proxies.size) {
      const proxyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            (proxies.get(entry.target) || []).forEach((element) => element.classList.add("is-visible"));
            proxyObserver.unobserve(entry.target);
          });
        },
        { threshold: 0, rootMargin: "0px 0px -5% 0px" }
      );

      proxies.forEach((_, proxy) => proxyObserver.observe(proxy));
    }
  }

  /* ----------------------------------------------------------------- counts */
  function initCounters() {
    const counters = [...doc.querySelectorAll("[data-count]")];
    if (!counters.length) return;

    const renderFinal = (element) => {
      const display = element.dataset.display || element.textContent.trim();
      element.textContent = display;
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(renderFinal);
      return;
    }

    const animate = (element) => {
      if (element.dataset.counted === "1") return;
      element.dataset.counted = "1";

      const target = Number(element.dataset.count);
      if (!Number.isFinite(target)) {
        renderFinal(element);
        return;
      }

      const display = element.dataset.display || String(target);
      const grouped = display.includes(",");
      const duration = target >= 10000 ? 1900 : 1300;
      const started = performance.now();

      const frame = (now) => {
        const progress = clamp((now - started) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        element.textContent = grouped ? value.toLocaleString("en-US") : String(value);
        if (progress < 1) {
          raf(frame);
        } else {
          element.textContent = display;
        }
      };

      raf(frame);
    };

    counters.forEach((element) => {
      element.textContent = "0";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach((element) => observer.observe(element));
  }

  /* ------------------------------------------------------------- hero video */
  function initHeroVideo() {
    const video = doc.querySelector("[data-hero-video]");
    const button = doc.querySelector("[data-video-toggle]");
    if (!video) return;

    let userPaused = false;

    if (reduceMotion) {
      video.pause();
    }

    if (button) {
      const icon = button.querySelector("[data-video-icon]");

      const sync = () => {
        const playing = !video.paused && !video.ended;
        button.setAttribute("aria-pressed", String(playing));
        button.setAttribute("aria-label", playing ? "Pause background video" : "Play background video");
        if (icon) icon.innerHTML = playing ? icons.pause : icons.play;
      };

      button.addEventListener("click", () => {
        if (video.paused) {
          userPaused = false;
          video.play().catch(() => sync());
        } else {
          userPaused = true;
          video.pause();
        }
      });

      video.addEventListener("play", sync);
      video.addEventListener("pause", sync);
      video.addEventListener("ended", sync);
      video.addEventListener("loadeddata", sync);
      sync();
    }

    if ("IntersectionObserver" in window) {
      const visibility = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              if (!video.paused) video.pause();
            } else if (!userPaused && !reduceMotion) {
              video.play().catch(() => {});
            }
          });
        },
        { threshold: 0.05 }
      );
      visibility.observe(video);
    }
  }

  /* ------------------------------------------------------------ factory film */
  function initFactoryFilm() {
    const video = doc.querySelector("[data-film-video]");
    const button = doc.querySelector("[data-film-toggle]");
    if (!video || !button) return;

    const icon = button.querySelector("[data-film-icon]");
    const label = button.querySelector(".film-play-label");
    const frame = button.closest(".film-frame");

    const sync = () => {
      const playing = !video.paused && !video.ended;
      if (frame) frame.classList.toggle("is-playing", playing);
      button.setAttribute("aria-pressed", String(playing));
      button.setAttribute("aria-label", playing ? "Pause factory video" : "Play factory video");
      if (icon) icon.innerHTML = playing ? icons.pause : icons.play;
      if (label) label.textContent = playing ? "Pause" : "Play";
    };

    button.addEventListener("click", () => {
      if (video.paused) {
        video.play().catch(() => sync());
      } else {
        video.pause();
      }
    });

    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    video.addEventListener("ended", sync);
    sync();
  }

  /* ---------------------------------------------------------------- mega menu */
  function initMegaMenu() {
    const wraps = [...doc.querySelectorAll("[data-mega-wrap]")];
    if (!wraps.length) return;

    const previewImages = [...doc.querySelectorAll("[data-preview-img]")];

    wraps.forEach((wrap) => {
      const button = wrap.querySelector("[data-mega-btn]");
      const pane = wrap.querySelector("[data-mega]");
      if (!button || !pane) return;

      const links = [...pane.querySelectorAll("[data-preview-link]")];
      const nameOut = pane.querySelector("[data-preview-name]");
      const countOut = pane.querySelector("[data-preview-count]");
      let suppressFocus = false;

      const setOpen = (open) => {
        wrap.classList.toggle("is-open", open);
        button.setAttribute("aria-expanded", String(open));
      };

      const updatePreview = (link) => {
        const key = link.dataset.previewLink;
        previewImages.forEach((image) => {
          image.classList.toggle("is-active", image.dataset.previewImg === key);
        });

        const name = link.querySelector(".mega-name");
        if (nameOut && name) nameOut.textContent = name.textContent.trim();
        if (countOut) {
          countOut.textContent = `${pad(links.indexOf(link) + 1)} / ${pad(links.length)}`;
        }
      };

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => updatePreview(link));
        link.addEventListener("focus", () => updatePreview(link));
      });

      button.addEventListener("click", () => {
        setOpen(!wrap.classList.contains("is-open"));
      });

      wrap.addEventListener("pointerleave", () => setOpen(false));

      wrap.addEventListener("focusin", () => {
        if (!suppressFocus) setOpen(true);
      });

      wrap.addEventListener("focusout", (event) => {
        if (!wrap.contains(event.relatedTarget)) setOpen(false);
      });

      wrap.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !wrap.classList.contains("is-open")) return;
        event.preventDefault();
        suppressFocus = true;
        setOpen(false);
        button.focus();
        window.setTimeout(() => {
          suppressFocus = false;
        }, 0);
      });
    });

    doc.addEventListener("pointerdown", (event) => {
      wraps.forEach((wrap) => {
        if (wrap.contains(event.target)) return;
        wrap.classList.remove("is-open");
        const button = wrap.querySelector("[data-mega-btn]");
        if (button) button.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --------------------------------------------------------------- mobile nav */
  function trapFocus(container, event) {
    const selector =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = [...container.querySelectorAll(selector)].filter(
      (element) => element.getClientRects().length > 0
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && doc.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && doc.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function initMobileMenu() {
    const menu = doc.querySelector("[data-mobile-menu]");
    const toggle = doc.querySelector("[data-menu-toggle]");
    const close = doc.querySelector("[data-menu-close]");
    if (!menu || !toggle) return;

    let lastFocus = null;

    const open = () => {
      lastFocus = doc.activeElement;
      menu.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      body.classList.add("menu-open");
      raf(() => {
        const first = menu.querySelector("a[href], button");
        if (first) first.focus();
      });
    };

    const closeMenu = (restoreFocus = true) => {
      menu.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      body.classList.remove("menu-open");
      if (restoreFocus && lastFocus && doc.contains(lastFocus)) lastFocus.focus();
    };

    toggle.addEventListener("click", () => {
      if (body.classList.contains("menu-open")) {
        closeMenu();
      } else {
        open();
      }
    });

    if (close) close.addEventListener("click", () => closeMenu());
    menu.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", () => closeMenu(false));
    });

    doc.addEventListener("keydown", (event) => {
      if (!body.classList.contains("menu-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
      if (event.key === "Tab") trapFocus(menu, event);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1120 && body.classList.contains("menu-open")) closeMenu(false);
    });
  }

  /* ---------------------------------------------------------------- lightbox */
  function initLightbox() {
    const lightbox = doc.querySelector("[data-lightbox]");
    const triggers = [...doc.querySelectorAll("[data-gallery]")];
    if (!lightbox || !triggers.length) return;

    const image = lightbox.querySelector("[data-lightbox-img]");
    const caption = lightbox.querySelector("[data-lightbox-caption]");
    const count = lightbox.querySelector("[data-lightbox-count]");
    const closeButton = lightbox.querySelector(".lightbox-btn");

    const groups = new Map();
    triggers.forEach((trigger) => {
      const key = trigger.dataset.gallery || "gallery";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(trigger);
    });

    let current = [];
    let index = 0;
    let returnFocus = null;

    const render = () => {
      const trigger = current[index];
      if (!trigger) return;
      const full = trigger.dataset.full || trigger.querySelector("img")?.src || "";
      const text = trigger.dataset.caption || trigger.getAttribute("aria-label") || "";
      if (image) {
        image.src = full;
        image.alt = text;
      }
      if (caption) caption.textContent = text;
      if (count) count.textContent = `${pad(index + 1)} / ${pad(current.length)}`;
    };

    const open = (trigger) => {
      const key = trigger.dataset.gallery || "gallery";
      current = groups.get(key) || [];
      index = Math.max(0, current.indexOf(trigger));
      returnFocus = trigger;
      render();
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      body.classList.add("lightbox-open");
      raf(() => {
        if (closeButton) closeButton.focus();
      });
    };

    const close = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      body.classList.remove("lightbox-open");
      if (image) image.removeAttribute("src");
      if (returnFocus && doc.contains(returnFocus)) returnFocus.focus();
    };

    const step = (direction) => {
      if (!current.length) return;
      index = (index + direction + current.length) % current.length;
      render();
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => open(trigger));
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach((button) => {
      button.addEventListener("click", close);
    });

    const previous = lightbox.querySelector("[data-lightbox-prev]");
    const next = lightbox.querySelector("[data-lightbox-next]");
    if (previous) previous.addEventListener("click", () => step(-1));
    if (next) next.addEventListener("click", () => step(1));

    doc.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
      if (event.key === "Tab") trapFocus(lightbox, event);
    });
  }

  /* --------------------------------------------------------------- scrollspy */
  function initAsideNav() {
    const links = [...doc.querySelectorAll(".aside-nav a[href^='#']")];
    if (!links.length || !("IntersectionObserver" in window)) return;

    const pairs = links
      .map((link) => {
        const id = link.getAttribute("href").slice(1);
        return { link, section: id ? doc.getElementById(id) : null };
      })
      .filter((pair) => pair.section);

    if (!pairs.length) return;

    const setActive = (activeLink) => {
      links.forEach((link) => link.classList.toggle("is-active", link === activeLink));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const pair = pairs.find((item) => item.section === entry.target);
          if (pair) setActive(pair.link);
        });
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
    );

    pairs.forEach((pair) => observer.observe(pair.section));
    links.forEach((link) => link.addEventListener("click", () => setActive(link)));
  }

  /* ------------------------------------------------------------------ forms */
  function initForms() {
    const forms = [...doc.querySelectorAll("[data-mail-form]")];
    if (!forms.length) return;

    forms.forEach((form) => {
      const status = form.querySelector("[data-form-status]");
      const fields = [...form.querySelectorAll("input, textarea")];

      const clearStatus = () => {
        if (!status) return;
        status.textContent = "";
        status.classList.remove("is-error");
      };

      fields.forEach((field) => {
        field.addEventListener("input", () => {
          field.removeAttribute("aria-invalid");
          const shell = field.closest(".field") || field.closest(".newsletter-input-wrap");
          if (shell) shell.classList.remove("is-error");
          clearStatus();
        });
      });

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        let firstInvalid = null;

        fields.forEach((field) => {
          const value = field.value.trim();
          const required = field.hasAttribute("required");
          const invalidEmail = field.type === "email" && value !== "" && !emailPattern.test(value);
          const invalid = (required && value === "") || invalidEmail;
          const shell = field.closest(".field") || field.closest(".newsletter-input-wrap");

          if (shell) shell.classList.toggle("is-error", invalid);
          if (invalid) {
            field.setAttribute("aria-invalid", "true");
            if (!firstInvalid) firstInvalid = field;
          } else {
            field.removeAttribute("aria-invalid");
          }
        });

        if (firstInvalid) {
          if (status) {
            status.textContent = "Please complete the highlighted fields.";
            status.classList.add("is-error");
          }
          firstInvalid.focus();
          return;
        }

        const values = Object.fromEntries(new FormData(form).entries());
        const formName = form.dataset.formName || "Website Form";
        const subscription = formName.toLowerCase().includes("subscription");
        const email = String(values.email || "").trim();
        const subjectLine = String(values.subject || "").trim();
        let subject = "";
        const lines = [];

        if (subscription) {
          subject = "Newsletter subscription — Turjotex";
          lines.push(`Please subscribe ${email} to the Turjo Tex Limited newsletter.`);
        } else {
          subject = subjectLine ? `${formName}: ${subjectLine}` : `${formName} — Turjotex website`;
          const name = [values.firstName, values.lastName].filter(Boolean).join(" ").trim();
          if (name) lines.push(`Name: ${name}`);
          if (email) lines.push(`Email: ${email}`);
          if (subjectLine) lines.push(`Subject: ${subjectLine}`);
          if (values.message) lines.push("", String(values.message));
        }

        const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          lines.join("\n")
        )}`;

        if (status) {
          status.classList.remove("is-error");
          status.textContent = `Opening your email app… If nothing happens, write to ${contactEmail}.`;
        }

        window.location.href = mailto;
      });
    });
  }

  /* -------------------------------------------------------- magnetic buttons */
  function initMagneticButtons() {
    if (!finePointer || reduceMotion) return;

    doc.querySelectorAll(".btn").forEach((button) => {
      let frame = null;

      button.addEventListener("pointermove", (event) => {
        if (event.pointerType !== "mouse" || frame) return;
        frame = raf(() => {
          frame = null;
          const rect = button.getBoundingClientRect();
          const x = clamp((event.clientX - (rect.left + rect.width / 2)) * 0.16, -5, 5);
          const y = clamp((event.clientY - (rect.top + rect.height / 2)) * 0.2, -4, 4);
          button.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
        });
      });

      button.addEventListener("pointerleave", () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = null;
        }
        button.style.transform = "";
      });
    });
  }

  /* --------------------------------------------------------- page transitions */
  function initPageTransitions() {
    const overlay = doc.querySelector("[data-transition]");
    if (!overlay) return;

    const panel = overlay.querySelector(".transition-panel");
    if (!panel) return;

    const storageKey = "turjotex:page-transition";
    let leaving = false;

    const finishReveal = () => {
      overlay.classList.remove("is-active");
      root.classList.remove("is-entering");
      panel.style.transform = "";
      body.classList.remove("is-transitioning");
    };

    const reveal = () => {
      overlay.classList.add("is-active");
      root.classList.remove("is-entering");
      panel.style.transform = "translateY(0)";
      body.classList.add("is-transitioning");

      const play = () => {
        if (typeof panel.animate !== "function") {
          finishReveal();
          return;
        }

        const animation = panel.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(-101%)" }],
          {
            duration: 900,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
          }
        );

        animation.addEventListener("finish", finishReveal);
        animation.addEventListener("cancel", finishReveal);
      };

      raf(() => raf(play));
    };

    if (root.classList.contains("is-entering")) reveal();

    const navigate = (url) => {
      if (leaving) return;
      leaving = true;
      overlay.classList.add("is-active");
      body.classList.add("is-transitioning");
      panel.style.transform = "translateY(101%)";
      void panel.offsetWidth;

      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        try {
          sessionStorage.setItem(storageKey, "1");
        } catch (error) {}
        window.location.assign(url);
      };

      if (typeof panel.animate !== "function" || reduceMotion) {
        go();
        return;
      }

      const animation = panel.animate(
        [{ transform: "translateY(101%)" }, { transform: "translateY(0)" }],
        {
          duration: 620,
          easing: "cubic-bezier(0.76, 0, 0.24, 1)",
          fill: "forwards",
        }
      );

      animation.addEventListener("finish", go);
      window.setTimeout(go, 1000);
    };

    doc.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = event.target.closest("a");
      if (!link) return;
      if (link.hasAttribute("data-noop") || link.hasAttribute("download")) return;
      if (link.target && link.target !== "_self") return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (/^(mailto:|tel:|javascript:)/i.test(href)) return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (!/^https?:$|^file:$/.test(url.protocol)) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      if (!/\.html?$/i.test(url.pathname)) return;
      if (reduceMotion) return;

      event.preventDefault();
      navigate(url.href);
    });

    window.addEventListener("pageshow", (event) => {
      if (!event.persisted) return;
      overlay.classList.remove("is-active");
      root.classList.remove("is-entering");
      panel.style.transform = "";
      body.classList.remove("is-transitioning", "menu-open", "lightbox-open");
      leaving = false;
    });
  }

  /* -------------------------------------------------------------- noop links */
  function initNoopLinks() {
    doc.querySelectorAll("[data-noop]").forEach((link) => {
      link.addEventListener("click", (event) => event.preventDefault());
    });
  }

  /* -------------------------------------------------------------------- boot */
  const modules = [
    initScrollUI,
    initReveal,
    initCounters,
    initHeroVideo,
    initFactoryFilm,
    initMegaMenu,
    initMobileMenu,
    initLightbox,
    initAsideNav,
    initForms,
    initMagneticButtons,
    initPageTransitions,
    initNoopLinks,
  ];

  modules.forEach((module) => {
    try {
      module();
    } catch (error) {
      console.error(`Turjotex: ${module.name} failed`, error);
    }
  });
})();

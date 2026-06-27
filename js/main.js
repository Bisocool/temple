/* ============================================================
   Bhagavad Gita Jnana Mandir — interactions
   Loader, daily verse, flute scroll spine, aarti, countdown,
   nav, reveals. All motion respects prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------------------------------------------------
     1. LOADING SCREEN — curtain before darshan
     --------------------------------------------------------- */
  function initLoader() {
    const loader  = $("#loader");
    const fill    = $("#loaderFill");
    const status  = $("#loaderStatus");
    const panel   = $("#versePanel");
    const elSan   = $("#vSanskrit");
    const elEng   = $("#vEnglish");
    const elCite  = $("#vCite");

    // Pick a random verse for this visit.
    const verse = GITA_VERSES[Math.floor(Math.random() * GITA_VERSES.length)];
    elCite.textContent = verse.citation;

    // --- helpers ---

    function setStatus(sanskrit, en) {
      status.innerHTML =
        '<span class="sanskrit-mini">' + sanskrit + "</span> · " + en;
    }
    function setBar(pct) {
      fill.style.width = pct + "%";
    }

    /*
     * Split text into units that are safe to reveal one-by-one.
     * For Sanskrit/Devanagari (and any Indic script), Unicode grapheme clusters must
     * stay together so combining marks (virama, vowel signs) are never
     * shown without their base consonant.
     * Intl.Segmenter (available on all modern browsers) does this exactly.
     * Fallback: split on spaces so at minimum whole words appear at once.
     */
    function toUnits(text, locale) {
      if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const seg = new Intl.Segmenter(locale || "und", {
          granularity: "grapheme",
        });
        return Array.from(seg.segment(text), function (s) {
          return s.segment;
        });
      }
      // Fallback: word-by-word (safe for Indic, readable for English)
      return text.split(/(\s+)/);
    }

    /*
     * typeInto(el, text, msPerUnit, jitterRatio, locale, onDone)
     *
     * Appends one grapheme cluster at a time to el, with a blinking
     * gold cursor that moves with the tip of the text.
     *
     * msPerUnit   — base delay between units
     * jitterRatio — max random fraction of msPerUnit added to each step
     *               (makes it feel like a hand inscribing, not a machine)
     * locale      — passed to Intl.Segmenter
     * onDone      — called when the last unit is placed
     */
    function typeInto(el, text, msPerUnit, jitterRatio, locale, onDone) {
      const units = toUnits(text, locale);
      let i = 0;

      // Make the element visible and attach a cursor.
      el.style.opacity = "1";
      el.textContent = "";
      const cursor = document.createElement("span");
      cursor.className = "typer-cursor";
      cursor.setAttribute("aria-hidden", "true");
      el.appendChild(cursor);

      function tick() {
        if (i >= units.length) {
          cursor.remove();
          if (onDone) onDone();
          return;
        }
        // Insert the next unit just before the cursor span.
        cursor.insertAdjacentText("beforebegin", units[i]);
        i++;
        const jitter = Math.random() * msPerUnit * jitterRatio;
        setTimeout(tick, msPerUnit + jitter);
      }
      tick();
    }

    /* ---------------------------------------------------------
       The sequence — bar progress is tied to typing stages.
       The typewriter must complete fully before the reading
       pause begins. Doors open only after 6 s of still time.

       Stage 0  (t ≈ 0.5 s)  : panel slides in, Sanskrit typing starts → bar 14 %
       Stage 1  (t ≈ 3.5 s)  : Sanskrit done, pause, English starts    → bar 48 %
       Stage 2  (t ≈ 6.0 s)  : English done, citation fades in         → bar 78 %
       Stage 3  (t ≈ 6.4 s)  : 6 s reading pause — bar fills slowly    → bar 100 %
       Stage 4  (t ≈ 12.4 s) : doors part
       --------------------------------------------------------- */
    function runSequence() {
      if (reduceMotion) {
        // Instant version for users who prefer no motion.
        elSan.textContent  = verse.sanskrit;
        elEng.textContent  = verse.english;
        elSan.style.opacity = elEng.style.opacity = "1";
        elCite.classList.add("is-revealed");
        panel.classList.add("show");
        setBar(100);
        setTimeout(openDoors, 300);
        return;
      }

      // --- Stage 0: panel slides up, status line, bar starts ---
      setTimeout(function () {
        panel.classList.add("show");
        setStatus("द्वाराणि उद्घाट्यन्ते", "Opening the gates");
        setBar(14);

        // Small delay so the panel transition finishes before typing begins.
        setTimeout(function () {

          // --- Stage 1: type the Sanskrit verse ---
          typeInto(
            elSan,
            verse.sanskrit,
            78,    // ~78 ms per grapheme → full verse in ~2–2.5 s
            0.55,  // up to ±43 ms jitter for a hand-inscribed feel
            "sa",
            function onSanskritDone() {
              setBar(48);
              setStatus("दीपः प्रज्वल्यते", "Lighting the lamp");

              // --- Stage 2: type the English translation ---
              setTimeout(function () {
                typeInto(
                  elEng,
                  verse.english,
                  42,    // ~42 ms per char → full line in ~1.8–2.4 s
                  0.5,   // ±21 ms jitter
                  "en",
                  function onEnglishDone() {
                    setBar(78);

                    // Citation fades in as the last character lands.
                    setTimeout(function () {
                      elCite.classList.add("is-revealed");
                    }, 300);

                    // --- Stage 3: 6-second reading pause ---
                    // The status shifts to a quiet invitation to sit
                    // with the verse. The gold bar fills itself slowly
                    // over the full 6 seconds — its completion is the
                    // only signal that the gates are about to open.
                    setTimeout(function () {
                      setStatus("ध्यायत", "Sit with these words");

                      // Bar fills over the entire reading window so
                      // the devotee can sense the time remaining.
                      fill.style.transition = "width 6s cubic-bezier(0.22, 0, 0.58, 1)";
                      requestAnimationFrame(function () {
                        setBar(100);
                      });

                      // Status shifts to "Welcome" in the last second.
                      setTimeout(function () {
                        setStatus("स्वागतम्", "Welcome");
                      }, 5000);

                      // --- Stage 4: doors open after the full pause ---
                      setTimeout(openDoors, 6000);
                    }, 400);
                  }
                );
              }, 480); // brief pause between Sanskrit ending and English starting
            }
          );
        }, 700); // wait for panel slide-up before typing
      }, 460); // initial settle after fonts load
    }

    function openDoors() {
      loader.classList.add("opening");
      document.body.classList.remove("is-loading");
      startReveals();
      setTimeout(function () {
        loader.classList.add("done");
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      }, 1300);
    }

    runSequence();
  }

  /* ---------------------------------------------------------
     2. DAILY VERSE (Gita section) — stable per calendar day
     --------------------------------------------------------- */
  function initDailyVerse() {
    const dayIndex =
      Math.floor(Date.now() / 86400000) % GITA_VERSES.length;
    const v = GITA_VERSES[dayIndex];
    const t = $("#dailySanskrit"),
      e = $("#dailyEnglish"),
      c = $("#dailyCite");
    if (t) t.textContent = v.sanskrit;
    if (e) e.textContent = v.english;
    if (c) c.textContent = v.citation;
  }

  /* ---------------------------------------------------------
     3. NAVIGATION — scroll state + mobile menu
     --------------------------------------------------------- */
  function initNav() {
    const nav = $("#siteNav");
    const toggle = $("#navToggle");
    const links = $("#navLinks");

    // Binary "scrolled" state via a sentinel near the top, no scroll listener.
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:48px;height:1px;width:1px;";
    document.body.appendChild(sentinel);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        ([entry]) => nav.classList.toggle("scrolled", !entry.isIntersecting)
      ).observe(sentinel);
    } else {
      nav.classList.add("scrolled");
    }

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("#navLinks a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------------------------------------------------
     4. AARTI — mark the nearest upcoming aarti + hero chip
     data-start / data-end are minutes-since-midnight windows
     --------------------------------------------------------- */
  function initAarti() {
    const items = $$("#aartiBoard .aarti-item");
    if (!items.length) return;
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();

    // find the next aarti whose start is >= now; else wrap to first tomorrow
    let nextEl = null;
    let smallestDelta = Infinity;
    items.forEach((el) => {
      const start = parseInt(el.dataset.start, 10);
      let delta = start - mins;
      if (delta < 0) delta += 1440; // wrap to next day
      if (delta < smallestDelta) {
        smallestDelta = delta;
        nextEl = el;
      }
    });
    if (nextEl) nextEl.classList.add("is-next");

    // hero chip
    const chip = $("#aartiChipValue");
    if (chip && nextEl) {
      const name = $(".a-name", nextEl).textContent.trim();
      const time = $(".a-time", nextEl).textContent.trim();
      chip.textContent = name + " · " + time;
    }
  }

  /* ---------------------------------------------------------
     5. FESTIVAL COUNTDOWN — to next Janmashtami
     --------------------------------------------------------- */
  function initCountdown() {
    const elDays = $("#cdDays"),
      elHours = $("#cdHours"),
      elMins = $("#cdMins"),
      elSecs = $("#cdSecs");
    if (!elDays) return;

    // Next Janmashtami target. Edit per the temple's panchang each year.
    let target = new Date("2026-08-26T00:00:00");
    if (target - new Date() < 0) target = new Date("2027-09-04T00:00:00");

    const dateLabel = $("#cdDate");
    if (dateLabel) {
      dateLabel.textContent = target.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    const pad = (n) => String(n).padStart(2, "0");
    function tick() {
      const diff = target - new Date();
      if (diff <= 0) {
        elDays.textContent = elHours.textContent = elMins.textContent = elSecs.textContent = "00";
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      elDays.textContent = d;
      elHours.textContent = pad(h);
      elMins.textContent = pad(m);
      elSecs.textContent = pad(s);
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------------------------------------------------
     6. SCROLL REVEALS — IntersectionObserver (no scroll listener)
     --------------------------------------------------------- */
  let revealsStarted = false;
  function startReveals() {
    if (revealsStarted) return;
    revealsStarted = true;
    const els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------
     7. THE ETERNAL FLUTE — scroll-scrubbed gold line drawing
     Hero flute draws itself, then a vertical spine fills 1:1
     with scroll position. GSAP ScrollTrigger, scrub-bound.
     --------------------------------------------------------- */
  function initFlute() {
    const heroPath = $("#heroFlutePath");
    const spinePath = $("#spinePath");
    const spineGlow = $("#spineGlow");

    // Prepare stroke-dash for the draw effect
    [heroPath, spinePath, spineGlow].forEach((p) => {
      if (!p) return;
      const len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = reduceMotion ? 0 : len;
    });

    // Reduced motion: serve the fully-drawn static flute, no scrub.
    if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Hero flute draws as you leave the hero.
    if (heroPath) {
      gsap.to(heroPath, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Vertical spine fills 1:1 across the whole document scroll.
    if (spinePath) {
      const tl = gsap.to([spinePath, spineGlow], {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // a soft glow pulse that travels with the drawn tip
      gsap.to(spineGlow, {
        opacity: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "bottom center",
          scrub: true,
          yoyo: true,
        },
      });
    }

    // Drifting notes + feather fragments trailing the line, tied to scroll.
    spawnDrift();
  }

  // Faint musical notes / feather fragments that drift up as the user
  // scrolls past key sections, suggesting the line is "playing".
  function spawnDrift() {
    const sections = ["#about", "#festivals", "#gita"];
    const glyphs = [
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 17V5l10-2v12"/><circle cx="6" cy="17" r="3"/><circle cx="16" cy="15" r="3"/></svg>',
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3c0 6-3 11-9 14-1.7.9-3.4 1.4-5 1.7l-1 3.3-1.5-.5 1-3.2C3.6 17.4 3 15.6 3 14 3 8 8 4 14 4c2.2 0 4.3.4 6 1Z"/></svg>',
    ];

    sections.forEach((sel, idx) => {
      const node = document.createElement("div");
      node.className = "drift";
      node.innerHTML = glyphs[idx % glyphs.length];
      node.style.left = "clamp(10px, 3vw, 38px)";
      document.body.appendChild(node);

      ScrollTrigger.create({
        trigger: sel,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => floatGlyph(node),
        onEnterBack: () => floatGlyph(node),
      });
    });
  }

  function floatGlyph(node) {
    const startY = window.innerHeight * 0.6;
    gsap.fromTo(
      node,
      { opacity: 0, y: startY, x: 6, scale: 0.7 },
      {
        opacity: 0.55,
        y: startY - 140,
        x: 28,
        scale: 1,
        duration: 2.4,
        ease: "power1.out",
        onComplete: () => gsap.to(node, { opacity: 0, duration: 0.8 }),
      }
    );
  }

  /* ---------------------------------------------------------
     8. NEWSLETTER — gentle inline confirmation, no backend
     --------------------------------------------------------- */
  function initNewsletter() {
    const form = $("#newsletterForm");
    if (!form) return;
    const msg = $("#nlMsg");
    const input = $("#nlEmail");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = (input.value || "").trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (!ok) {
        msg.style.color = "var(--saffron)";
        msg.textContent = "Please share a valid email so we may reach you.";
        return;
      }
      msg.style.color = "var(--gold-soft)";
      msg.textContent = "Thank you. You are added with our gratitude.";
      input.value = "";
    });
  }

  /* ---------------------------------------------------------
     Boot
     --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initDailyVerse();
    initNav();
    initAarti();
    initCountdown();
    initNewsletter();
    initFlute();
    initLoader(); // last: it triggers reveals when the doors open

    // Safety net: if anything stalls, never leave the page locked.
    // Set well past the intended ~12-13 s sequence so it never fires
    // during a normal visit, only if fonts or the image fail to load.
    setTimeout(() => {
      document.body.classList.remove("is-loading");
      const loader = $("#loader");
      if (loader && !loader.classList.contains("done")) {
        loader.classList.add("opening");
        startReveals();
      }
    }, 18000);
  });
})();

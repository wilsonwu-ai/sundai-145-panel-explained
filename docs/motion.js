/* Scroll-triggered motion for the six explainer visuals.
   Needs gsap 3.12.5 and ScrollTrigger 3.12.5 loaded first.
   Does nothing (the static SVG stays as drawn) if gsap is missing
   or the visitor prefers reduced motion. Every animation ends in the
   same state as the static SVG. */
(function () {
  'use strict';

  function reduced() {
    try {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) { return false; }
  }

  function init() {
    if (!window.gsap || !window.ScrollTrigger || reduced()) return;
    try { window.gsap.registerPlugin(window.ScrollTrigger); } catch (e) { return; }
    var figs = document.querySelectorAll('figure[data-visual]');
    for (var i = 0; i < figs.length; i++) setup(figs[i]);
  }

  function setup(fig) {
    var name = fig.getAttribute('data-visual');
    var build = builders[name];
    var svg = fig.querySelector('svg');
    if (!build || !svg) return;
    var gsap = window.gsap;
    var touched = [];
    var tl = null;

    function el(suffix) {
      return svg.querySelector('[id="' + name + '-' + suffix + '"]');
    }
    function els(list) {
      var out = [];
      for (var k = 0; k < list.length; k++) {
        var e = el(list[k]);
        if (e) out.push(e);
      }
      return out;
    }
    function use(target) {
      if (!target) return null;
      if (Array.isArray(target)) {
        if (!target.length) return null;
        for (var k = 0; k < target.length; k++) touched.push(target[k]);
      } else {
        touched.push(target);
      }
      return target;
    }
    function restore() {
      if (touched.length) gsap.set(touched, { clearProps: 'all' });
    }

    try {
      tl = gsap.timeline({
        scrollTrigger: { trigger: fig, start: 'top 80%', once: true },
        onComplete: restore
      });
      build({ gsap: gsap, tl: tl, el: el, els: els, use: use });
    } catch (err) {
      try {
        if (tl) {
          if (tl.scrollTrigger) tl.scrollTrigger.kill();
          tl.kill();
        }
        restore();
      } catch (e2) { /* leave the static frame */ }
    }
  }

  var builders = {
    wall: function (c) {
      var tl = c.tl;
      var env = c.use(c.el('envelope'));
      var door = c.use(c.el('door-label'));
      var arrow = c.use(c.el('asml-arrow'));
      if (arrow) tl.from(arrow, { opacity: 0, duration: 0.5 }, 0);
      if (env) tl.from(env, { x: -330, duration: 1.8, ease: 'power2.inOut' }, 0.3);
      if (door) tl.from(door, { opacity: 0, y: 8, duration: 0.6, ease: 'power2.out' }, '>+0.2');
    },

    pipeline: function (c) {
      var tl = c.tl, gsap = c.gsap;
      var token = c.use(c.el('token'));
      var verif = c.use(c.el('stage-verif'));
      var badges = c.use(c.els(['badge-rtl', 'badge-verif', 'badge-physical']));
      if (token) {
        gsap.set(token, { x: -672 });
        tl.to(token, { x: -568, duration: 0.5, ease: 'power1.inOut' }, 0.2)
          .to(token, { x: -388, duration: 0.7, ease: 'power1.inOut' })
          .to(token, { x: -388, duration: 1.0 })
          .to(token, { x: -208, duration: 0.8, ease: 'power1.inOut' })
          .to(token, { x: -104, duration: 0.5, ease: 'power1.inOut' })
          .to(token, { x: 0, duration: 0.5, ease: 'power1.inOut' });
      }
      if (verif) tl.from(verif, { scale: 0.78, transformOrigin: '50% 50%', duration: 1.0, ease: 'back.out(1.6)' }, 1.3);
      if (badges) tl.from(badges, { scale: 0, opacity: 0, transformOrigin: '50% 50%', duration: 0.4, stagger: 0.2, ease: 'back.out(2)' }, 2.2);
    },

    amdahl: function (c) {
      var tl = c.tl;
      var dSeg = c.use(c.el('b-design-seg'));
      var mSeg = c.use(c.el('b-mfg-seg'));
      var mLab = c.use(c.el('b-mfg-label'));
      var total = c.use(c.el('b-total'));
      var dLab = c.use(c.el('b-design-label'));
      var tLab = c.use(c.el('b-total-label'));
      var ghost = c.use(c.el('ghost'));
      var t0 = 0.6;
      if (ghost) tl.from(ghost, { opacity: 0, duration: 0.4 }, 0);
      if (dSeg) tl.from(dSeg, { attr: { width: 80 }, duration: 1.4, ease: 'power2.inOut' }, t0);
      if (mSeg) tl.from(mSeg, { x: 72, duration: 1.4, ease: 'power2.inOut' }, t0);
      if (mLab) tl.from(mLab, { x: 72, duration: 1.4, ease: 'power2.inOut' }, t0);
      if (total) tl.from(total, { attr: { width: 600 }, duration: 1.4, ease: 'power2.inOut' }, t0);
      var after = t0 + 1.5;
      if (dLab) tl.from(dLab, { opacity: 0, duration: 0.5 }, after);
      if (tLab) tl.from(tLab, { opacity: 0, duration: 0.5 }, after + 0.2);
    },

    'memory-wall': function (c) {
      var tl = c.tl;
      var rows = [
        { bar: 'bar-add8', val: 'val-add8', y: 100, d: 0.6 },
        { bar: 'bar-add32', val: 'val-add32', y: 156, d: 0.8 },
        { bar: 'bar-dram', val: 'val-dram', y: 212, d: 1.8 }
      ];
      var t = 0.2;
      for (var i = 0; i < rows.length; i++) {
        var bar = c.use(c.el(rows[i].bar));
        var val = c.use(c.el(rows[i].val));
        if (bar) {
          tl.from(bar, { scaleX: 0, svgOrigin: '240 ' + rows[i].y, duration: rows[i].d, ease: i === 2 ? 'power3.in' : 'power2.out' }, t);
        }
        if (val) tl.from(val, { opacity: 0, duration: 0.4 }, t + rows[i].d);
        t += rows[i].d + 0.1;
      }
      var brk = c.use(c.el('break'));
      if (brk) tl.from(brk, { opacity: 0, duration: 0.3 }, t - 0.5);
      var spec = c.use(c.els(['spec-cpu', 'spec-gpu', 'spec-tpu', 'spec-hardwired']));
      if (spec) tl.from(spec, { opacity: 0, y: 8, duration: 0.4, stagger: 0.15 }, t + 0.2);
    },

    split: function (c) {
      var tl = c.tl;
      var l = c.use(c.el('chip-train'));
      var r = c.use(c.el('chip-infer'));
      var note = c.use(c.el('cpx-note'));
      var places = c.use(c.els(['place-campus', 'place-edge', 'place-orbit']));
      if (l) tl.from(l, { x: 150, duration: 1.2, ease: 'power3.inOut' }, 0.6);
      if (r) tl.from(r, { x: -150, duration: 1.2, ease: 'power3.inOut' }, 0.6);
      if (note) tl.from(note, { opacity: 0, duration: 0.5 }, '>');
      if (places) tl.from(places, { opacity: 0, y: 10, duration: 0.5, stagger: 0.2 }, '>-0.1');
    },

    'big-picture': function (c) {
      var tl = c.tl;
      var step = 0.9;
      for (var i = 1; i <= 5; i++) {
        var node = c.use(c.el('node-' + i));
        var hl = c.use(c.el('hl-' + i));
        var arrow = c.use(c.el('arrow-' + i));
        var t = (i - 1) * step;
        if (node) tl.from(node, { opacity: 0.3, duration: 0.4 }, t);
        if (hl) {
          tl.fromTo(hl, { opacity: 0 }, { opacity: 1, duration: 0.3 }, t);
          tl.to(hl, { opacity: 0, duration: 0.4 }, t + 0.6);
        }
        if (arrow) tl.from(arrow, { opacity: 0, duration: 0.3 }, t + 0.5);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* Movimento sutil do site: entrada ao rolar e tarja que se desenha. Sem JS, tudo aparece normalmente. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var vh = window.innerHeight || 800;

  var SINGLES = [
    '.presentation .wrap > *', '.servicos-intro > *', '.manifesto p', '.split-texto > *',
    '.dimensoes-head > *', '.blog-teaser .wrap > h2', '.blog-teaser .wrap > div:first-child',
    '.contato .wrap > *', '.intro-grid > *', '.video-lado', '.faq-head', '.faq-entry',
    '.contact-grid > *', '.texto-2col > *', '.curriculo-grid > *', '.valores > *'
  ];
  var GROUPS = ['.servicos-grid', '.temas-grid', '.blog-grid'];

  var els = [];
  function mark(el, delay) {
    if (el.classList.contains('reveal') || el.closest('.hero') || el.closest('.page-header')) return;
    el.classList.add('reveal');
    if (delay) el.style.setProperty('--d', delay + 'ms');
    els.push(el);
  }
  SINGLES.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { mark(el, 0); });
  });
  GROUPS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (g) {
      Array.prototype.forEach.call(g.children, function (c, i) { mark(c, Math.min(i, 5) * 70); });
    });
  });

  var tarjas = Array.prototype.slice.call(document.querySelectorAll('.hl'));

  // Antes de esconder qualquer coisa, o que já está na tela fica visível: nada pisca no carregamento.
  els.forEach(function (el) {
    if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('is-in');
  });
  root.classList.add('js');
  if (reduce || !('IntersectionObserver' in window)) {
    els.concat(tarjas).forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });

  els.forEach(function (el) { if (!el.classList.contains('is-in')) io.observe(el); });

  // A tarja marrom da marca se desenha quando a frase entra na tela.
  var io2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io2.unobserve(e.target);
    });
  }, { threshold: 0.9 });
  tarjas.forEach(function (t) { io2.observe(t); });
})();

/* ── Hamburger menu ── */
(function () {
    var toggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('mobile-menu');
    var icon = document.getElementById('menu-icon');
    if (!toggle || !menu) return;

    function openMenu() {
        menu.classList.add('open');
        icon.textContent = 'close';
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        menu.classList.remove('open');
        icon.textContent = 'menu';
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
        menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    Array.from(menu.querySelectorAll('a, button')).forEach(function (el) {
        el.addEventListener('click', closeMenu);
    });
})();

/* ── Auto-mark active link in mobile menu ── */
(function () {
    var page = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index.html';
    document.querySelectorAll('.mobile-menu-link').forEach(function (link) {
        if (link.getAttribute('href') === page) link.classList.add('nav-active');
    });
})();
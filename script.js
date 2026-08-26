const navMount = document.getElementById('site-nav');
const fallbackNav = `
  <aside class="sidebar" aria-label="Sidebar navigation">
    <div class="brand-wrap">
      <a class="brand" href="index.html#top">_eigenlambda</a>
    </div>

    <nav class="nav-links" aria-label="Main navigation">
      <a href="index.html#top">About</a>
      <a href="index.html#about">Projects</a>
      <a href="index.html#certifications">Certifications</a>
      <a href="index.html#contact">Contact</a>
    </nav>

    <div class="nav-divider" aria-hidden="true"></div>
    <div class="nav-page-list">
      <a class="nav-page-link" href="notes.html">Notes</a>
      <a class="nav-page-link" href="books.html">Books &amp; Sites</a>
      <a class="nav-page-link" href="research.html">Research</a>
    </div>

    <p class="sidebar-note">CS student building useful software and AI tools.</p>
  </aside>
`;

const setActiveNav = () => {
  const pageName = window.location.pathname.split('/').pop() || 'index.html';
  const currentPage = pageName.toLowerCase();

  document.querySelectorAll('.nav-page-link').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href.endsWith(currentPage)) {
      link.classList.add('is-active');
    }
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const pageAnchor = href.includes('#') ? href.split('#')[1] : null;
    const currentHash = window.location.hash.replace('#', '').toLowerCase();

    if (currentPage === 'index.html' && pageAnchor && currentHash === pageAnchor) {
      link.classList.add('is-active');
    }
  });
};

const renderNav = (markup) => {
  if (!navMount) {
    return;
  }

  navMount.innerHTML = markup;
  setActiveNav();
};

if (document.getElementById('year')) {
  document.getElementById('year').textContent = new Date().getFullYear();
}

if (navMount) {
  fetch('nav.html', { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Navigation fetch failed');
      }
      return response.text();
    })
    .then((markup) => renderNav(markup))
    .catch(() => renderNav(fallbackNav));
}

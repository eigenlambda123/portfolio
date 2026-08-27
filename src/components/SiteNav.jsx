export function SiteNav({ page, activeMainNav, onMainNavClick }) {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <div className="brand-wrap">
        <a className="brand" href="#top" onClick={(event) => onMainNavClick(event, '#top', 'about')}>_eigenlambda</a>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#top" onClick={(event) => onMainNavClick(event, '#top', 'about')} className={activeMainNav === 'about' ? 'is-active' : ''}>About</a>
        <a href="#about" onClick={(event) => onMainNavClick(event, '#about', 'projects')} className={activeMainNav === 'projects' ? 'is-active' : ''}>Projects</a>
        <a href="#certifications" onClick={(event) => onMainNavClick(event, '#certifications', 'certifications')} className={activeMainNav === 'certifications' ? 'is-active' : ''}>Certifications</a>
        <a href="#contact" onClick={(event) => onMainNavClick(event, '#contact', 'contact')} className={activeMainNav === 'contact' ? 'is-active' : ''}>Contact</a>
      </nav>

      <div className="nav-divider" aria-hidden="true"></div>
      <div className="nav-page-list">
        <a className={`nav-page-link ${page === 'notes' || page === 'note' ? 'is-active' : ''}`} href="#notes">Notes</a>
        <a className={`nav-page-link ${page === 'books' || page === 'book' ? 'is-active' : ''}`} href="#books">Books &amp; Sites</a>
        <a className={`nav-page-link ${page === 'research' ? 'is-active' : ''}`} href="#research">Research</a>
      </div>

      <p className="sidebar-note">CS student building useful software and AI tools.</p>
    </aside>
  );
}

import { useState } from 'react';

export function SiteNav({ page, activeMainNav, onMainNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (event, targetHash, navKey) => {
    onMainNavClick(event, targetHash, navKey);
    setMobileMenuOpen(false);
  };

  const handleSecondaryNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <button
        className="mobile-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside
        className={`sidebar ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-label="Sidebar navigation"
      >
        <div className="brand-wrap">
          <a className="brand" href="#top" onClick={(event) => handleNavClick(event, '#top', 'about')}>_eigenlambda</a>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#top" onClick={(event) => handleNavClick(event, '#top', 'about')} className={activeMainNav === 'about' ? 'is-active' : ''}>About</a>
          <a href="#about" onClick={(event) => handleNavClick(event, '#about', 'projects')} className={activeMainNav === 'projects' ? 'is-active' : ''}>Projects</a>
          <a href="#certifications" onClick={(event) => handleNavClick(event, '#certifications', 'certifications')} className={activeMainNav === 'certifications' ? 'is-active' : ''}>Certifications</a>
          <a href="#contact" onClick={(event) => handleNavClick(event, '#contact', 'contact')} className={activeMainNav === 'contact' ? 'is-active' : ''}>Contact</a>
        </nav>

        <div className="nav-divider" aria-hidden="true"></div>
        <nav className="nav-page-list" aria-label="Secondary navigation">
          <a className={`nav-page-link ${page === 'notes' || page === 'note' ? 'is-active' : ''}`} href="#notes" onClick={handleSecondaryNavClick}>Notes</a>
          <a className={`nav-page-link ${page === 'books' || page === 'book' ? 'is-active' : ''}`} href="#books" onClick={handleSecondaryNavClick}>Books &amp; Sites</a>
          <a className={`nav-page-link ${page === 'research' ? 'is-active' : ''}`} href="#research" onClick={handleSecondaryNavClick}>Research</a>
        </nav>

        <p className="sidebar-note">CS student that likes learning and building useful things.</p>
      </aside>

      {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
    </>
  );
}

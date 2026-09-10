import { useState } from 'react';

export function SiteNav({ page, activeMainNav, onMainNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (targetHash, navKey) => {
    onMainNavClick(targetHash, navKey);
    setMobileMenuOpen(false);
  };

  const handleSecondaryNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <button
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
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
          <a className="brand" href="#top" onClick={() => handleNavClick('#top', 'about')}>_eigenlambda</a>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#top" onClick={() => handleNavClick('#top', 'about')} className={activeMainNav === 'about' ? 'is-active' : ''}>About</a>
          <a href="#projects" onClick={() => handleNavClick('#projects', 'projects')} className={activeMainNav === 'projects' ? 'is-active' : ''}>Projects</a>
          <a href="#skills" onClick={() => handleNavClick('#skills', 'skills')} className={activeMainNav === 'skills' ? 'is-active' : ''}>Skills</a>
          <a href="#contact" onClick={() => handleNavClick('#contact', 'contact')} className={activeMainNav === 'contact' ? 'is-active' : ''}>Contact</a>
        </nav>

        <div className="nav-divider" aria-hidden="true"></div>
        <nav className="nav-page-list" aria-label="Secondary navigation">
          <a className={`nav-page-link ${page === 'notes' || page === 'note' ? 'is-active' : ''}`} href="#notes" onClick={handleSecondaryNavClick}>Notes</a>
          <a className={`nav-page-link ${page === 'books' || page === 'book' ? 'is-active' : ''}`} href="#books" onClick={handleSecondaryNavClick}>Books &amp; Sites</a>
          <a className={`nav-page-link ${page === 'research' ? 'is-active' : ''}`} href="#research" onClick={handleSecondaryNavClick}>Research</a>
        </nav>

        <p className="sidebar-note">CS student that likes learning and building useful things.</p>
      </aside>

      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      ></div>
    </>
  );
}

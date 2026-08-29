import { useEffect, useState } from 'react';
import { NavSection } from './components/NavSection';
import { getPageFromHash, getNoteFromHash, getBookFromHash, getActiveMainNav, getActiveMainNavFromScroll } from './utils/routing';

function App() {
  const [page, setPage] = useState(getPageFromHash(window.location.hash));
  const [note, setNote] = useState(getNoteFromHash(window.location.hash));
  const [book, setBook] = useState(getBookFromHash(window.location.hash));
  const [activeMainNav, setActiveMainNav] = useState(getActiveMainNav(window.location.hash));

  const shouldResetScroll = (hash) => {
    const normalized = (hash || '#top').replace('#', '').toLowerCase();
    return normalized === 'top' || normalized === 'notes' || normalized === 'books' || normalized === 'research' || normalized.startsWith('note/') || normalized.startsWith('book/');
  };

  useEffect(() => {
    const handleHashChange = () => {
      const nextHash = window.location.hash || '#top';

      setPage(getPageFromHash(nextHash));
      setNote(getNoteFromHash(nextHash));
      setBook(getBookFromHash(nextHash));
      setActiveMainNav(getActiveMainNav(nextHash));

      if (shouldResetScroll(nextHash)) {
        window.scrollTo(0, 0);
      }
    };

    const handleScroll = () => {
      const scrolledActiveMainNav = getActiveMainNavFromScroll();

      if (scrolledActiveMainNav) {
        setActiveMainNav(scrolledActiveMainNav);
      } else if (window.location.hash && window.location.hash !== '#notes' && window.location.hash !== '#books' && window.location.hash !== '#research') {
        setActiveMainNav(getActiveMainNav(window.location.hash));
      } else {
        setActiveMainNav('');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMainNavClick = (event, targetHash, navKey) => {
    const nextHash = targetHash || '#top';

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }

    setActiveMainNav(navKey);
    setPage(getPageFromHash(nextHash));
  };

  return (
    <>
      <NavSection page={page} note={note} book={book} activeMainNav={activeMainNav} onMainNavClick={handleMainNavClick} />
      <footer className="site-footer">
        <p className="copyright">© <span>{new Date().getFullYear()}</span> eigenlambda123</p>
      </footer>
    </>
  );
}

export default App;

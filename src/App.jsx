import { useEffect, useState } from 'react';
import { NavSection } from './components/NavSection';
import { getPageFromHash, getNoteFromHash, getBookFromHash, getActiveMainNav, getActiveMainNavFromScroll } from './utils/routing';

function App() {
  const [page, setPage] = useState(getPageFromHash(window.location.hash));
  const [note, setNote] = useState(getNoteFromHash(window.location.hash));
  const [book, setBook] = useState(getBookFromHash(window.location.hash));
  const [activeMainNav, setActiveMainNav] = useState(getActiveMainNav(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash(window.location.hash));
      setNote(getNoteFromHash(window.location.hash));
      setBook(getBookFromHash(window.location.hash));
      setActiveMainNav(getActiveMainNav(window.location.hash));
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

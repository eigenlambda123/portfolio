import { SiteNav } from './SiteNav';
import { HomePage } from './HomePage';
import { NotesListPage, NoteDetailPage } from './NotesPage';
import { BooksListPage, BookDetailPage } from './BooksPage';
import { ResearchPage } from './ResearchPage';

export function NavSection({ page, activeMainNav, onMainNavClick, book, note }) {
  return (
    <div className={`site-shell ${page !== 'home' ? 'notes-page' : ''}`}>
      <SiteNav page={page} activeMainNav={activeMainNav} onMainNavClick={onMainNavClick} />
      <main className="page-content">
        {page === 'notes' && <NotesListPage />}
        {page === 'note' && note && <NoteDetailPage note={note} />}
        {page === 'books' && <BooksListPage />}
        {page === 'book' && book && <BookDetailPage book={book} />}
        {page === 'research' && <ResearchPage />}
        {page === 'home' && <HomePage />}
      </main>
    </div>
  );
}

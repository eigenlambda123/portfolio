import { notes } from '../data/notes';

export function NotesListPage() {
  return (
    <section className="section notes-section">
      <div className="narrow notes-list">
        {notes.map((note) => (
          <article className="note-item" key={note.title}>
            <p className="note-meta">{note.meta}</p>
            <h2><a className="note-title-link" href={`#note/${note.slug}`}>{note.title}</a></h2>
            <p className="note-summary">{note.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function NoteDetailPage({ note }) {
  if (!note) return null;
  
  return (
    <section className="section notes-section">
      <article className="resource-card resource-detail">
        <a className="back-link" href="#notes">← Back to Notes</a>
        <p className="note-meta">{note.meta}</p>
        <h1>{note.title}</h1>
        <p className="note-summary">{note.summary}</p>
      </article>
    </section>
  );
}

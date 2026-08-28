import { notes } from '../data/notes';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

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

  const content = Array.isArray(note.content) ? note.content : [note.content];

  return (
    <section className="section notes-section">
      <article className="resource-card resource-detail">
        <a className="back-link" href="#notes">← Back to Notes</a>
        <p className="note-meta">{note.meta}</p>
        <div className="note-content">
          {content.filter(Boolean).map((block, index) => {
            const title = typeof block === 'string' ? '' : block.title;
            const body = typeof block === 'string' ? block : block.body;

            return (
              <section className="note-content-block" key={`${note.slug}-paragraph-${index}`}>
                {title && <h2>{title}</h2>}
                {body && (
                  <div className="note-markdown">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {body}
                    </ReactMarkdown>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </article>
    </section>
  );
}

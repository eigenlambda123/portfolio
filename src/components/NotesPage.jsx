import { notes } from '../data/notes';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

function createSectionId(noteSlug, index, title) {
  const titleSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `note-${noteSlug}-section-${index}-${titleSlug || 'content'}`;
}

function scrollToSection(event, sectionId) {
  event.preventDefault();
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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
  const [tocOpen, setTocOpen] = useState(false);
  if (!note) return null;

  const content = Array.isArray(note.content) ? note.content : [note.content];
  const sections = content
    .map((block, index) => ({
      index,
      title: typeof block === 'string' ? '' : block.title,
    }))
    .filter((section) => section.title);

  return (
    <section className="section notes-section">
      <div className="note-detail-layout">
        <article className="resource-card resource-detail">
          <a className="back-link" href="#notes">← Back to Notes</a>
          <p className="note-meta">{note.meta}</p>
          <div className="note-content">
            {content.filter(Boolean).map((block, index) => {
              const title = typeof block === 'string' ? '' : block.title;
              const body = typeof block === 'string' ? block : block.body;
              const sectionId = createSectionId(note.slug, index, title);

              return (
                <section className="note-content-block" id={sectionId} key={`${note.slug}-paragraph-${index}`}>
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

        {sections.length > 0 && (
          <nav className="note-toc" aria-label="On this page">
            <button
              className="note-toc-toggle"
              type="button"
              aria-expanded={tocOpen}
              aria-controls={`note-toc-list-${note.slug}`}
              onClick={() => setTocOpen((isOpen) => !isOpen)}
            >
              <span>On this page</span>
              <span aria-hidden="true">{tocOpen ? '−' : '+'}</span>
            </button>
            <div className={`note-toc-content ${tocOpen ? 'is-open' : ''}`} id={`note-toc-list-${note.slug}`}>
              <ol>
                {sections.map(({ index, title }) => (
                  <li key={`${note.slug}-toc-${index}`}>
                    <a
                      href={`#${createSectionId(note.slug, index, title)}`}
                      onClick={(event) => scrollToSection(event, createSectionId(note.slug, index, title))}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}

import { notes } from '../data/notes';
import { useEffect, useMemo, useState } from 'react';
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
  const [activeSectionId, setActiveSectionId] = useState(null);

  const content = note ? (Array.isArray(note.content) ? note.content : [note.content]) : [];
  const sections = useMemo(
    () => content
      .map((block, index) => ({
        index,
        title: typeof block === 'string' ? '' : block.title,
      }))
      .filter((section) => section.title),
    [note],
  );

  useEffect(() => {
    if (!note || sections.length === 0) {
      setActiveSectionId(null);
      return undefined;
    }

    const sectionIds = sections.map(({ index, title }) => createSectionId(note.slug, index, title));
    setActiveSectionId(sectionIds[0]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleEntry) {
          setActiveSectionId(visibleEntry.target.id);
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    );

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [note, sections]);

  if (!note) return null;

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
                      className={activeSectionId === createSectionId(note.slug, index, title) ? 'is-active' : ''}
                      href={`#${createSectionId(note.slug, index, title)}`}
                      aria-current={activeSectionId === createSectionId(note.slug, index, title) ? 'location' : undefined}
                      onClick={(event) => {
                        const sectionId = createSectionId(note.slug, index, title);
                        setActiveSectionId(sectionId);
                        scrollToSection(event, sectionId);
                      }}
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

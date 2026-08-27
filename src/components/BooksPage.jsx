import { resources } from '../data/resources';

export function BooksListPage() {
  return (
    <section className="section notes-section">
      <div className="narrow resources-layout">
        {resources.map((resource) => (
          <article className="resource-card" key={resource.category}>
            <p className="note-meta">{resource.category}</p>
            <h2>{resource.title}</h2>
            <ul>
              {resource.items.map((item) => {
                if (typeof item === 'string') {
                  const [title, description] = item.split(' — ');
                  return <li key={item}><strong>{title}</strong> — {description}</li>;
                }

                if (item.slug) {
                  return (
                    <li key={item.slug}>
                      <a className="resource-title-link" href={`#book/${item.slug}`}>{item.title}</a>
                      <span className="resource-category">{item.category}</span>
                      <span className="resource-author">{item.author}</span>
                      <span> — {item.description}</span>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a> — {item.description}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BookDetailPage({ book }) {
  if (!book) return null;
  
  return (
    <section className="section notes-section">
      <article className="resource-card resource-detail">
        <a className="back-link" href="#books">← Back to Books &amp; Sites</a>
        <p className="note-meta">Book</p>
        <h1>{book.title}</h1>
        <p className="resource-category">{book.category}</p>
        <p className="resource-author">{book.author}</p>
        <p className="note-summary">{book.details}</p>
      </article>
    </section>
  );
}

import { researchBlocks } from '../data/research';

export function ResearchPage() {
  return (
    <section className="section notes-section">
      <div className="narrow resources-layout">
        {researchBlocks.map((block) => (
          <article className="resource-card" key={block.category}>
            <p className="note-meta">{block.category}</p>
            <h2>{block.title}</h2>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

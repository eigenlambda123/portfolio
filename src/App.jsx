import { useEffect, useState } from 'react';

const projectCards = [
  {
    title: 'PRESKO',
    description: 'Climate resilience platform for heat-risk monitoring and recommendations.',
    stack: 'FastAPI • AI • GIS • SQL',
    link: 'https://github.com/eigenlambda123/PRESKO',
  },
  {
    title: 'MajorMatch',
    description: 'Semantic course discovery and career pathfinding using embeddings and ML.',
    stack: 'Python • Streamlit • scikit-learn',
    link: 'https://github.com/eigenlambda123/MajorMatch',
  },
  {
    title: 'BarangayMicroJobs',
    description: 'Local jobs platform with secure transactions and mobile-first design.',
    stack: 'Flutter • FastAPI • PostgreSQL',
    link: 'https://github.com/eigenlambda123/BarangayMicroJobs',
  },
];

const skillChips = ['Python', 'SQL', 'FastAPI', 'React', 'Flutter', 'GitHub', 'Docker'];

const certifications = [
  {
    label: 'Software Engineering & Data Science',
    items: [
      { title: 'Data Science Explorer', pdf: '/certifications/important/Data_Science_Explorer.pdf', image: '/certifications/important/Data_Science_Explorer/Data_Science_Explorer-1.png' },
      { title: 'Using Databases with Python', pdf: '/certifications/coursera/Using_Databases_with_Python.pdf', image: '/certifications/coursera/Using_Databases_with_Python/Using_Databases_with_Python-1.png' },
      { title: 'Introduction to SQL', pdf: '/certifications/coursera/Introduction_to_SQL.pdf', image: '/certifications/coursera/Introduction_to_SQL/Introduction_to_SQL-1.png' },
      { title: 'Introduction to Software Engineering', pdf: '/certifications/coursera/Introduction_to_SWE.pdf', image: '/certifications/coursera/Introduction_to_SWE/Introduction_to_SWE-1.png' },
      { title: 'Object Oriented Data Structures in C++', pdf: '/certifications/coursera/Object_Oriented_Data_Structures_in_C++.pdf', image: '/certifications/coursera/Object_Oriented_Data_Structures_in_C++/Object_Oriented_Data_Structures_in_C++-1.png' },
    ],
  },
  {
    label: 'Bootcamp & Hackathon',
    items: [
      { title: 'OpeniT Top Performer', pdf: '/certifications/important/OpeniT_Top_Performer.pdf', image: '/certifications/important/OpeniT_Top_Performer/OpeniT_Top_Performer-1.png' },
      { title: 'OpeniT Participation', pdf: '/certifications/important/OpeniT_Participation.pdf', image: '/certifications/important/OpeniT_Participation/OpeniT_Participation-1.png' },
      { title: 'PJDSC', pdf: '/certifications/important/PJDSC.pdf', image: '/certifications/important/PJDSC/PJDSC-1.png' },
    ],
  },
  {
    label: 'Other',
    items: [
      { title: 'The Aurduino and C Programming', pdf: '/certifications/coursera/The_Aurduino_and_C_Programming.pdf', image: '/certifications/coursera/The_Aurduino_and_C_Programming/The_Aurduino_and_C_Programming-1.png' },
      { title: 'Mathematical Thinking in Computer Science', pdf: '/certifications/coursera/Mathematical_Thinking_in_Computer_Science.pdf', image: '/certifications/coursera/Mathematical_Thinking_in_Computer_Science/Mathematical_Thinking_in_Computer_Science-1.png' },
      { title: 'Logic For Economist', pdf: '/certifications/coursera/Logic_For_Economist.pdf', image: '/certifications/coursera/Logic_For_Economist/Logic_For_Economist-1.png' },
    ],
  },
];

const notes = [
  {
    slug: 'build-slow-learn-fast',
    meta: 'Random note',
    title: 'Build slow, learn fast.',
    summary: 'Most interesting systems are not built in one dramatic breakthrough; they are built through a series of small, intentional experiments.',
  },
  {
    slug: 'ship-the-smallest-useful-version',
    meta: 'Idea',
    title: 'Ship the smallest useful version.',
    summary: 'A prototype that answers a real question teaches more than a polished plan that never leaves the drawing board.',
  },
  {
    slug: 'feedback-loops-matter-more-than-talent',
    meta: 'Reflection',
    title: 'Feedback loops matter more than talent.',
    summary: 'The fastest way to improve is to make it easy to test, measure, and change direction before sunk cost gets too high.',
  },
];

const resources = [
  {
    category: 'Books',
    title: 'Foundational and practical reading',
    items: [
      {
        slug: 'grokking-algorithms',
        category: 'Algorithms',
        title: 'Grokking Algorithms',
        author: 'Aditya Bhargava',
        description: 'A clear way to build intuition for algorithms.',
        details: 'No Information yet.',
      },
      {
        slug: 'hands-on-machine-learning',
        category: 'Machine Learning',
        title: 'Hands-On Machine Learning',
        author: 'Aurélien Géron',
        description: 'A strong bridge between ML theory and practice.',
        details: 'No Information yet.',
      },
      {
        slug: 'introduction-to-linear-algebra',
        category: 'Mathematics',
        title: 'Introduction to Linear Algebra',
        author: 'Gilbert Strang',
        description: 'A concise and practical guide to linear algebra.',
        details: 'No Information yet.',
      },
      {
        slug: 'linear-algebra-done-right',
        category: 'Mathematics',
        title: 'Linear Algebra done right',
        author: 'Sheldon Axler',
        description: 'A rigorous and intuitive approach to the subject.',
        details: 'No Information yet.',
      },
      {
        slug: 'introduction-to-probability',
        category: 'Mathematics',
        title: 'Introduction to Probability',
        author: 'Joseph K. Blitzstein',
        description: 'A practical and engaging introduction to probability theory.',
        details: 'No Information yet.',
      },
      {
        slug: 'fundamentals-of-physics',
        category: 'Physics',
        title: 'Fundamentals of Physics',
        author: 'David Halliday, Robert Resnick, and Jearl Walker',
        description: 'A classic and thorough introduction to physics.',
        details: 'No Information yet.',
      },
      {
        slug: 'seven-brief-lessons-on-physics',
        category: 'Physics',
        title: 'Seven Brief Lessons on Physics',
        author: 'Carlo Rovelli',
        description: 'A concise and engaging introduction to the fundamental concepts of physics.',
        details: 'No Information yet.',
      }
    ],
  },
  {
    category: 'Sites',
    title: 'Learning and inspiration',
    items: [
      { label: 'Professor Leonard', href: 'https://www.youtube.com/@professorleonard', description: 'excellent math lectures and tutorials.' },
      { label: 'Khan Academy', href: 'https://www.khanacademy.org/', description: 'free courses and exercises on a wide range of topics.' },
      { label: 'MIT OpenCourseWare', href: 'https://ocw.mit.edu/', description: 'free courses and lectures from MIT.' },
      { label: '3Blue1Brown', href: 'https://www.3blue1brown.com/', description: 'visual and intuitive math explanations.' },
      { label: 'Pauls Online Notes', href: 'https://tutorial.math.lamar.edu/', description: 'great for quick math refreshers and examples.' },
      { label: 'LeetCode', href: 'https://leetcode.com/', description: 'algorithm practice and coding interview prep.' },
      { label: 'Kaggle', href: 'https://www.kaggle.com/', description: 'practical data science and ML competitions.' },
      { label: 'Coursera', href: 'https://www.coursera.org/', description: 'structured learning with strong fundamentals.' },
      { label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/', description: 'great for quick algorithm and CS explanations.' },
      { label: 'Stack Overflow', href: 'https://stackoverflow.com/', description: 'practical debugging and engineering answers.' },
    ],
  },
];

const researchBlocks = [
  {
    category: 'Research interests',
    title: 'What I’m exploring',
    items: [
      'Machine learning and representation learning',
      'AI systems that support real-world decision making',
      'Data-driven tools for climate and public-interest problems',
      'Systems and interfaces that make complex models more usable',
    ],
  },
  {
    category: 'Current directions',
    title: 'Things I keep revisiting',
    items: [
      'How to combine statistical methods with practical product design',
      'Interpretability and trust in ML-driven applications',
      'Efficient learning pipelines for small but meaningful datasets',
      'How research ideas turn into robust, human-centered software',
    ],
  },
  {
    category: 'Personal research',
    title: 'Prototype ideas and questions',
    items: [
      'Building AI tools that improve accessibility and decision support',
      'Exploring how embeddings can help discover useful patterns in domain data',
      'Studying how models fail in real-world edge cases and why',
      'Turning applied research questions into minimal, testable experiments',
    ],
  },
];

function getPageFromHash(hash) {
  const normalized = (hash || '#').replace('#', '').toLowerCase();

  if (normalized.startsWith('note/') && getNoteFromHash(hash)) return 'note';
  if (normalized === 'notes') return 'notes';
  if (normalized === 'books') return 'books';
  if (normalized.startsWith('book/') && getBookFromHash(hash)) return 'book';
  if (normalized === 'research') return 'research';
  return 'home';
}

function getNoteFromHash(hash) {
  const slug = (hash || '').replace('#note/', '').toLowerCase();
  return notes.find((note) => note.slug === slug);
}

function getBookFromHash(hash) {
  const slug = (hash || '').replace('#book/', '').toLowerCase();
  return resources[0].items.find((item) => typeof item !== 'string' && item.slug === slug);
}

function getActiveMainNav(hash) {
  const normalized = (hash || '#top').replace('#', '').toLowerCase();

  if (normalized === 'top') return 'about';
  if (normalized === 'about') return 'projects';
  if (normalized === 'projects') return 'projects';
  if (normalized === 'certifications') return 'certifications';
  if (normalized === 'contact') return 'contact';

  return '';
}

function getActiveMainNavFromScroll() {
  const threshold = Math.min(220, Math.max(140, window.innerHeight * 0.22));
  const bottomThreshold = Math.min(220, Math.max(120, window.innerHeight * 0.18));

  const scrollBottom = window.innerHeight + window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const nearBottom = scrollBottom >= docHeight - bottomThreshold;

  if (nearBottom) {
    return 'contact';
  }

  const sections = [
    { key: 'about', id: 'top' },
    { key: 'projects', id: 'about' },
    { key: 'certifications', id: 'certifications' },
    { key: 'contact', id: 'contact' },
  ];

  const candidates = sections
    .map(({ key, id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const rect = element.getBoundingClientRect();
      return { key, rect };
    })
    .filter(Boolean);

  const active = candidates.find(({ rect }) => rect.top <= threshold && rect.bottom >= threshold);
  if (active) return active.key;

  const closestBelow = candidates
    .filter(({ rect }) => rect.top > threshold)
    .sort((a, b) => a.rect.top - b.rect.top)[0];

  const closestAbove = candidates
    .filter(({ rect }) => rect.bottom <= threshold)
    .sort((a, b) => b.rect.bottom - a.rect.bottom)[0];

  if (closestBelow && !closestAbove) return closestBelow.key;
  if (!closestBelow && closestAbove) return closestAbove.key;
  if (closestBelow && closestAbove) {
    const distanceBelow = Math.abs(closestBelow.rect.top - threshold);
    const distanceAbove = Math.abs(closestAbove.rect.bottom - threshold);
    return distanceBelow <= distanceAbove ? closestBelow.key : closestAbove.key;
  }

  return '';
}

function SiteNav({ page, activeMainNav, onMainNavClick }) {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <div className="brand-wrap">
        <a className="brand" href="#top" onClick={(event) => onMainNavClick(event, '#top', 'about')}>_eigenlambda</a>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#top" onClick={(event) => onMainNavClick(event, '#top', 'about')} className={activeMainNav === 'about' ? 'is-active' : ''}>About</a>
        <a href="#about" onClick={(event) => onMainNavClick(event, '#about', 'projects')} className={activeMainNav === 'projects' ? 'is-active' : ''}>Projects</a>
        <a href="#certifications" onClick={(event) => onMainNavClick(event, '#certifications', 'certifications')} className={activeMainNav === 'certifications' ? 'is-active' : ''}>Certifications</a>
        <a href="#contact" onClick={(event) => onMainNavClick(event, '#contact', 'contact')} className={activeMainNav === 'contact' ? 'is-active' : ''}>Contact</a>
      </nav>

      <div className="nav-divider" aria-hidden="true"></div>
      <div className="nav-page-list">
        <a className={`nav-page-link ${page === 'notes' || page === 'note' ? 'is-active' : ''}`} href="#notes">Notes</a>
        <a className={`nav-page-link ${page === 'books' || page === 'book' ? 'is-active' : ''}`} href="#books">Books &amp; Sites</a>
        <a className={`nav-page-link ${page === 'research' ? 'is-active' : ''}`} href="#research">Research</a>
      </div>

      <p className="sidebar-note">CS student building useful software and AI tools.</p>
    </aside>
  );
}

function NavSection({ page, activeMainNav, onMainNavClick, book, note }) {
  return (
    <div className={`site-shell ${page !== 'home' ? 'notes-page' : ''}`}>
      <SiteNav page={page} activeMainNav={activeMainNav} onMainNavClick={onMainNavClick} />
      <main className="page-content">
        {page === 'notes' && (
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
        )}

        {page === 'note' && note && (
          <section className="section notes-section">
            <article className="resource-card resource-detail">
              <a className="back-link" href="#notes">← Back to Notes</a>
              <p className="note-meta">{note.meta}</p>
              <h1>{note.title}</h1>
              <p className="note-summary">{note.summary}</p>
            </article>
          </section>
        )}

        {page === 'books' && (
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
        )}

        {page === 'book' && book && (
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
        )}

        {page === 'research' && (
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
        )}

        {page === 'home' && (
          <>
            <section className="hero" id="top">
              <div className="hero-inner">
                <div>
                  <p className="eyebrow">Computer Science • Data Science</p>
                  <h1>RM A. Villa</h1>
                  <p className="lead">
                    I’m interested in research as well as practical software and artificial intelligence.
                  </p>
                  <div className="cta-row">
                    <a className="button github-btn" href="https://github.com/eigenlambda123" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="button linkedin-btn" href="https://www.linkedin.com/in/villaRm" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="button resume-btn" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="section" id="about">
              <div className="narrow">
                <p className="section-tag">About</p>
                <p>
                  I'm a 3rd-year Computer Science student who likes building useful stuff—apps, data tools, and ML experiments. I mainly use Python, SQL, and FastAPI, especially for hackathons and side projects. Lately I've been geeking out on the math behind machine learning and AI.
                </p>
              </div>
            </section>

            <section className="section alt" id="projects">
              <div>
                <p className="section-tag">Projects</p>
                <div className="project-grid">
                  {projectCards.map((project) => (
                    <article className="project-card" key={project.title}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <span>{project.stack}</span>
                      <div className="project-links">
                        <a href={project.link} target="_blank" rel="noreferrer">GitHub ↗</a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section" id="skills">
              <div className="narrow">
                <p className="section-tag">Skills</p>
                <div className="chip-list">
                  {skillChips.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </section>

            <section className="section" id="certifications">
              <div className="narrow">
                <p className="section-tag">Certifications</p>
                <p className="muted">Click a thumbnail to open the original PDF.</p>

                <div className="cert-grid">
                  {certifications.map((category) => (
                    <div className="cert-category" key={category.label}>
                      <h4>{category.label}</h4>
                      <div className="thumb-row">
                        {category.items.map((item) => (
                          <a href={item.pdf} target="_blank" rel="noreferrer" key={item.title}>
                            <img src={item.image} alt={item.title} loading="lazy" width="320" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="contact-section" id="contact">
              <div className="contact-box">
                <h2>Let’s build something useful.</h2>
                <div className="cta-row contact-actions">
                  <a className="button github-btn" href="https://github.com/eigenlambda123" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="button linkedin-btn" href="https://www.linkedin.com/in/villaRm" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

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

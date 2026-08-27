import { notes } from '../data/notes';
import { resources } from '../data/resources';

export function getPageFromHash(hash) {
  const normalized = (hash || '#').replace('#', '').toLowerCase();

  if (normalized.startsWith('note/') && getNoteFromHash(hash)) return 'note';
  if (normalized === 'notes') return 'notes';
  if (normalized === 'books') return 'books';
  if (normalized.startsWith('book/') && getBookFromHash(hash)) return 'book';
  if (normalized === 'research') return 'research';
  return 'home';
}

export function getNoteFromHash(hash) {
  const slug = (hash || '').replace('#note/', '').toLowerCase();
  return notes.find((note) => note.slug === slug);
}

export function getBookFromHash(hash) {
  const slug = (hash || '').replace('#book/', '').toLowerCase();
  return resources[0].items.find((item) => typeof item !== 'string' && item.slug === slug);
}

export function getActiveMainNav(hash) {
  const normalized = (hash || '#top').replace('#', '').toLowerCase();

  if (normalized === 'top') return 'about';
  if (normalized === 'about') return 'projects';
  if (normalized === 'projects') return 'projects';
  if (normalized === 'certifications') return 'certifications';
  if (normalized === 'contact') return 'contact';

  return '';
}

export function getActiveMainNavFromScroll() {
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

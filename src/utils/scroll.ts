import { isSSR } from './ssr';

// Where an anchor target comes to rest, just below the sticky header.
// Keep in sync with `scroll-padding-top` in src/styles/global.css.
export const ANCHOR_OFFSET = 80;

// The browser's own `scroll-behavior: smooth` stretches its duration with the distance, so a jump
// near the end of a long article crawls. A fixed, short glide feels responsive at any distance.
const DURATION_MS = 260;

const prefersReducedMotion = (): boolean => {
  return !isSSR && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const easeOutCubic = (t: number): number => 1 - (1 - t) ** 3;

const targetYFor = (el: HTMLElement): number => {
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const y = el.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET;
  return Math.max(0, Math.min(y, maxY));
};

/*
  Scrolls an element just under the header. The destination is recomputed on every frame and
  re-checked twice afterwards, because images in a long article load while the scroll is in flight
  and would otherwise leave the heading short of its mark.
*/
const scrollToElement = (el: HTMLElement): void => {
  if (prefersReducedMotion()) {
    window.scrollTo(0, targetYFor(el));
    return;
  }

  const from = window.scrollY;
  const start = performance.now();
  let lastSet = from;

  const settle = (): void => {
    // Only correct if the reader has not taken over the scroll in the meantime.
    if (Math.abs(window.scrollY - lastSet) > 2) {
      return;
    }
    lastSet = targetYFor(el);
    window.scrollTo(0, lastSet);
  };

  const step = (now: number): void => {
    const progress = Math.min(1, (now - start) / DURATION_MS);
    lastSet = from + (targetYFor(el) - from) * easeOutCubic(progress);
    window.scrollTo(0, lastSet);
    if (progress < 1) {
      window.requestAnimationFrame(step);
      return;
    }
    settle();
    window.setTimeout(settle, 160);
    window.setTimeout(settle, 420);
  };

  window.requestAnimationFrame(step);
};

export const scrollToHash = (hash: string): boolean => {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) {
    return false;
  }
  const target = document.getElementById(id);
  if (!target) {
    return false;
  }
  scrollToElement(target);
  return true;
};

/*
  Takes over same-page "#id" links (the table of contents, heading anchors, "Achievements") so they
  glide in a fixed 260ms. The URL still gets the hash, so copying the link keeps working.
  Returns a cleanup function.
*/
export const installHashScroll = (): (() => void) => {
  const onClick = (event: MouseEvent): void => {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const link = (event.target as HTMLElement | null)?.closest('a');
    if (!link) {
      return;
    }
    const href = link.getAttribute('href') || '';
    if (!href.startsWith('#') || href === '#') {
      return;
    }
    if (scrollToHash(href)) {
      event.preventDefault();
      window.history.pushState(null, '', href);
    }
  };

  document.addEventListener('click', onClick);
  return (): void => document.removeEventListener('click', onClick);
};

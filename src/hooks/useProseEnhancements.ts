import { RefObject, useEffect } from 'react';

const COPIED_RESET_MS = 1600;

// Feather "copy" and "check" from @react-icons/all-files, inlined because the button is created
// imperatively on already-rendered MDX rather than through React.
const featherIcon = (children: string): string => `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${children}</svg>`;
const COPY_ICON = featherIcon('<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>');
const COPIED_ICON = featherIcon('<polyline points="20 6 9 17 4 12"></polyline>');
const COPY_LABEL = 'Copy code to clipboard';
const COPIED_LABEL = 'Copied';

/*
  Progressive enhancements applied to rendered MDX content (blog posts):
  - "Copy" button on every code block,
  - lazy loading for plain images (GIFs copied by gatsby-remark-copy-linked-files),
  - external links get a marker class and rel="noopener".
  Only attributes are changed and new nodes appended, so React's DOM bookkeeping is never disturbed.
*/
export const useProseEnhancements = (ref: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return undefined;
    }

    const timers: number[] = [];

    // Copy buttons.
    root.querySelectorAll<HTMLElement>('.gatsby-highlight').forEach((block) => {
      if (block.querySelector('.code-copy')) {
        return;
      }
      const pre = block.querySelector('pre');
      if (!pre) {
        return;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'code-copy';
      button.innerHTML = COPY_ICON;
      button.setAttribute('aria-label', COPY_LABEL);
      button.title = COPY_LABEL;
      button.addEventListener('click', () => {
        const code = pre.innerText;
        const done = (): void => {
          button.innerHTML = COPIED_ICON;
          button.setAttribute('aria-label', COPIED_LABEL);
          button.title = COPIED_LABEL;
          button.dataset.copied = 'true';
          timers.push(window.setTimeout(() => {
            button.innerHTML = COPY_ICON;
            button.setAttribute('aria-label', COPY_LABEL);
            button.title = COPY_LABEL;
            delete button.dataset.copied;
          }, COPIED_RESET_MS));
        };
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(code).then(done).catch(() => {});
        }
      });
      block.appendChild(button);
    });

    // Lazy images (gatsby-remark-images already sets loading="lazy" on the ones it processes).
    root.querySelectorAll<HTMLImageElement>('img:not([loading])').forEach((img) => {
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });

    // External links.
    const { host } = window.location;
    root.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((link) => {
      let linkHost = '';
      try {
        linkHost = new URL(link.href).host;
      } catch (e) {
        return;
      }
      if (!linkHost || linkHost === host || linkHost.endsWith('trekhleb.dev')) {
        return;
      }
      link.classList.add('is-external');
      if (!link.getAttribute('rel')) {
        link.setAttribute('rel', 'noopener');
      }
    });

    return (): void => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [ref]);
};

import React, { useEffect, useState } from 'react';

import type { TableOfContents as TableOfContentsType, TableOfContentsItem } from '../../types/Post';

type TableOfContentsProps = {
  toc: TableOfContentsType | null | undefined,
  // Container element of the article, used to find the headings to track.
  articleRef: React.RefObject<HTMLElement>,
  className?: string,
  minItems?: number,
};

const ACTIVE_OFFSET = 96;

type FlatEntry = { item: TableOfContentsItem, depth: number };

const flatten = (items: TableOfContentsItem[] | undefined, depth = 0): FlatEntry[] => {
  if (!items) {
    return [];
  }
  return items.flatMap((item) => [{ item, depth }, ...flatten(item.items, depth + 1)]);
};

// Sticky "On this page" list for long articles, highlighting the section being read.
const TableOfContents = (props: TableOfContentsProps): React.ReactElement | null => {
  const {
    toc, articleRef, className = '', minItems = 3,
  } = props;

  const entries = flatten(toc?.items)
    .filter((entry) => entry.item.url && entry.item.title && entry.depth < 2);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = articleRef.current;
    if (!root || entries.length < minItems) {
      return undefined;
    }
    const ids = entries.map((entry) => (entry.item.url || '').replace(/^#/, ''));
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;
    const update = (): void => {
      frame = 0;
      let current: string | null = null;
      headings.forEach((heading) => {
        if (heading.getBoundingClientRect().top <= ACTIVE_OFFSET) {
          current = heading.id;
        }
      });
      setActiveId(current);
    };
    const onScroll = (): void => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return (): void => {
      window.removeEventListener('scroll', onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleRef, toc]);

  if (entries.length < minItems) {
    return null;
  }

  const links = entries.map(({ item, depth }) => {
    const id = (item.url || '').replace(/^#/, '');
    const active = id === activeId;
    const classes = active
      ? 'text-fg border-fg'
      : 'text-muted border-transparent hover:text-fg';
    return (
      <li key={item.url}>
        <a
          href={item.url}
          aria-current={active ? 'location' : undefined}
          className={`block border-l-2 py-1 text-[13px] leading-snug transition-colors duration-150 ${depth ? 'pl-6' : 'pl-3'} ${classes}`}
        >
          {item.title}
        </a>
      </li>
    );
  });

  return (
    <nav aria-label="Table of contents" className={className}>
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="mb-2 pl-3 text-xs font-semibold uppercase tracking-wider text-muted">On this page</p>
        <ol>
          {links}
        </ol>
      </div>
    </nav>
  );
};

export default TableOfContents;

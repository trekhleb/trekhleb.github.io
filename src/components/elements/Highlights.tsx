import React from 'react';
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight';
import { FiArrowUpRight } from '@react-icons/all-files/fi/FiArrowUpRight';

import { HighlightLogo, LabelPart, ResolvedHighlight } from '../../utils/profile';
import HyperLink from '../shared/HyperLink';
import FluidImage from '../shared/FluidImage';

type HighlightsProps = {
  highlights: ResolvedHighlight[],
  className?: string,
};

// The proof points of the hero ("197K GitHub stars on javascript-algorithms", ...): big numbers
// with a short caption (or a big heading such as "Featured in"), separated by hairlines instead of
// boxes, optionally followed by named publisher logos. One column on phones (the captions are too
// long for half a phone screen), two on tablets (an odd last stat takes the full width), and on
// desktop a single column beside the introduction. Linked rows end with an arrow (↗ leaves the
// site, → stays on it), so it is clear before hovering which ones go somewhere.
const Highlights = (props: HighlightsProps): React.ReactElement | null => {
  const { highlights, className = '' } = props;

  if (!highlights || !highlights.length) {
    return null;
  }

  const numberClasses = 'text-[2rem] font-semibold leading-none tracking-tight tabular-nums lg:text-[2.5rem]';
  // A heading row ("Featured in") is set like the home page's section titles.
  const headingClasses = 'text-h2';

  const items = highlights.map((highlight: ResolvedHighlight, index: number) => {
    const isFirst = index === 0;
    const isLast = index === highlights.length - 1;
    const spansRow = isLast && highlights.length % 2 === 1;
    const { link } = highlight;
    const url = link?.url || '';
    const isExternal = url.startsWith('http');
    const Arrow = isExternal ? FiArrowUpRight : FiArrowRight;
    // The arrow nudges the way it points on hover.
    const arrowMotion = isExternal
      ? 'group-hover/stat:translate-x-0.5 group-hover/stat:-translate-y-0.5'
      : 'group-hover/stat:translate-x-0.5';

    const arrow = url ? (
      <Arrow
        aria-hidden="true"
        className={`h-5 w-5 shrink-0 text-muted transition duration-200 ease-out group-hover/stat:text-fg ${arrowMotion}`}
      />
    ) : null;

    const body = (
      <>
        <span className="flex items-center justify-between gap-3">
          <span className={highlight.isHeading ? headingClasses : numberClasses}>
            {highlight.value}
          </span>
          {arrow}
        </span>
        {highlight.label ? (
          // Balanced wrapping: a caption that needs two lines splits evenly instead of leaving
          // a single word behind.
          <span className="mt-2 block text-sm leading-snug text-muted transition-colors duration-200 [text-wrap:balance] group-hover/stat:text-fg sm:text-[15px]">
            {highlight.label.map((part: LabelPart) => (part.emphasis ? (
              <strong key={part.at} className="font-semibold text-fg">{part.text}</strong>
            ) : (
              <span key={part.at}>{part.text}</span>
            )))}
          </span>
        ) : null}
        {highlight.logos && highlight.logos.length ? (
          // Logo + name pairs flow and wrap freely (like the former "Featured in" strip); a pair
          // never breaks — the longest one fits the narrowest column (320px phones). The names are
          // the text, so the logos are decorative.
          <span className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {highlight.logos.map((logo: HighlightLogo) => (
              <span key={logo.publisher} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium leading-snug text-fg/80">
                <span className="h-6 w-6 shrink-0 overflow-hidden rounded-md bg-subtle ring-1 ring-line" aria-hidden="true">
                  <FluidImage image={logo.image} className="h-full w-full" />
                </span>
                <span className="min-w-0">{logo.publisher}</span>
              </span>
            ))}
          </span>
        ) : null}
      </>
    );

    // In the desktop column the hairlines only separate rows, so the first row starts flush with
    // the top of the hero and the last one ends flush with its content.
    const rowClasses = `block py-5 ${isFirst ? 'lg:pt-0' : ''} ${isLast ? 'lg:pb-0' : ''}`;

    return (
      <li key={highlight.value} className={`min-w-0 border-t border-line ${isFirst ? 'lg:border-t-0' : ''} ${spansRow ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
        {link && url ? (
          <HyperLink link={link} className={`group/stat ${rowClasses}`} formatted={false}>
            {body}
          </HyperLink>
        ) : (
          <div className={rowClasses}>{body}</div>
        )}
      </li>
    );
  });

  return (
    <ul aria-label="Highlights" className={`grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 lg:content-start ${className}`}>
      {items}
    </ul>
  );
};

export default Highlights;

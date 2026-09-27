import { Highlight, Profile } from '../types/Profile';
import { Projects } from '../types/Project';
import { Link } from '../types/Link';
import { Image } from '../types/Image';
import { Publication, PublicationTag, Publisher } from '../types/Publication';
import { publishers } from '../data/publishers';
import {
  getGitHubProjectStars, getGitHubProjectStats, getTotalGetHubProjectStars, projectMapToArray,
} from './project';
import { numberToHeadlineString } from './numbers';

export type HighlightLogo = {
  publisher: Publisher,
  image?: Image,
};

// A caption as text pieces; numbers filled in from the data and **marked** words are emphasised.
export type LabelPart = {
  text: string,
  emphasis: boolean,
  // Position in the caption template: a stable React key.
  at: number,
};

export type ResolvedHighlight = {
  // The big text: a formatted number or a heading.
  value: string,
  isHeading?: boolean,
  label?: LabelPart[],
  link?: Link,
  logos?: HighlightLogo[],
};

const citationTags: PublicationTag[] = [
  PublicationTag.ResearchCitation,
  PublicationTag.BookCitation,
];

export const countCitations = (publications: Publication[]): number => {
  return publications.filter((publication) => citationTags.includes(publication.tag)).length;
};

const countTag = (publications: Publication[], tag: PublicationTag): number => {
  return publications.filter((publication) => publication.tag === tag).length;
};

// Front-page appearances are the Hacker News publications whose link is that day's front-page
// archive; a link to a plain HN discussion does not count.
export const countHackerNewsFrontPages = (publications: Publication[]): number => {
  return publications.filter((publication) => (
    publication.publisher === Publisher.HackerNews
    && (publication.link?.url || '').startsWith('https://news.ycombinator.com/front')
  )).length;
};

// Numbers in captions: exact below a thousand, whole thousands with a plus above (31019 → "31K+").
const formatCaptionNumber = (value: number): string => (
  value >= 1000 ? `${Math.floor(value / 1000)}K+` : `${value}`
);

// Fills a caption's {placeholders} from the data and turns **words** into emphasis. A caption
// that would show a zero (or unknown) number is dropped rather than shown.
const fillLabel = (
  label: string | undefined,
  values: Record<string, number | undefined>,
): LabelPart[] | undefined => {
  if (!label) {
    return undefined;
  }
  // Each match adds both capture groups (one of them undefined), so the pieces come in threes:
  // "all {projects} projects" → ["all ", "projects", undefined, " projects"].
  const pieces = label.split(/\{(\w+)\}|\*\*(.+?)\*\*/);
  const parts: LabelPart[] = [];
  let at = 0;
  let complete = true;
  pieces.forEach((piece: string | undefined, i: number) => {
    if (piece === undefined) {
      return;
    }
    if (i % 3 === 1) {
      // A placeholder: the number is filled in from the data.
      const value = values[piece];
      complete = complete && Boolean(value);
      parts.push({ text: value ? formatCaptionNumber(value) : '', emphasis: true, at });
      at += piece.length + 2;
    } else if (i % 3 === 2) {
      // **Emphasised** words.
      parts.push({ text: piece, emphasis: true, at });
      at += piece.length + 4;
    } else {
      if (piece) {
        parts.push({ text: piece, emphasis: false, at });
      }
      at += piece.length;
    }
  });
  if (!complete) {
    return undefined;
  }
  // Typesetting: a number stays on the line of the word after it ("211 contributors"), and a "·"
  // separator never starts a line (both via non-breaking spaces).
  return parts.map((part: LabelPart, i: number): LabelPart => {
    let text = part.text.replace(/ ·/g, '\u00a0·');
    if (!part.emphasis && i > 0 && parts[i - 1].emphasis && /^\d/.test(parts[i - 1].text)) {
      text = text.replace(/^ /, '\u00a0');
    }
    return { ...part, text };
  });
};

// Turns profile highlights into displayable stats, pulling live numbers from the data files.
export function resolveHighlights(
  profile: Profile,
  projects: Projects,
  publications: Publication[] = [],
): ResolvedHighlight[] {
  const highlights: Highlight[] = profile?.highlights || [];
  const labelValues = {
    projects: projectMapToArray(projects).length,
    hackerNewsFrontPages: countHackerNewsFrontPages(publications),
    researchPapers: countTag(publications, PublicationTag.ResearchCitation),
    books: countTag(publications, PublicationTag.BookCitation),
  };
  return highlights
    .map((highlight: Highlight): ResolvedHighlight | null => {
      const logos = (highlight.logos || []).map((publisher: Publisher): HighlightLogo => ({
        publisher,
        image: publishers[publisher]?.logo,
      }));
      // The highlighted project's own GitHub numbers ({forks}, {contributors}, {translations}).
      const project = highlight.starsOfProject ? projects[highlight.starsOfProject] : undefined;
      const gitHub = project ? getGitHubProjectStats(project) : null;
      const label = fillLabel(highlight.label, {
        ...labelValues,
        forks: gitHub?.forks,
        contributors: gitHub?.contributors,
        translations: gitHub?.translations,
      });
      if (highlight.heading) {
        return {
          value: highlight.heading, isHeading: true, label, link: highlight.link, logos,
        };
      }
      let count: number | null = null;
      if (highlight.starsOfProject && projects[highlight.starsOfProject]) {
        count = getGitHubProjectStars(projects[highlight.starsOfProject]);
      } else if (highlight.totalStars) {
        count = getTotalGetHubProjectStars(projects);
      }
      if (typeof count !== 'number' || count <= 0) {
        return null;
      }
      return {
        value: numberToHeadlineString(count), label, link: highlight.link, logos,
      };
    })
    .filter((highlight): highlight is ResolvedHighlight => highlight !== null);
}

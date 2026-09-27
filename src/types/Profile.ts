import { SocialLink } from './SocialLink';
import { Tag } from './Tag';
import { Location } from './Location';
import { Image } from './Image';
import { Link } from './Link';
import { ProjectID } from './Project';
import { Publisher } from './Publication';

// A headline fact shown on the home page: a big number with a caption, or a big text heading
// (e.g. "Featured in"), optionally followed by named publisher logos. Numbers are always derived
// from the data (never typed in), from exactly one of the number sources below.
export type Highlight = {
  // Text shown big instead of a number.
  heading?: string,
  // The caption. Placeholders are filled in from the data and set in bold, like **marked words**:
  // {projects} (number of projects), {hackerNewsFrontPages}, {researchPapers} and {books}
  // (counted in the publications), and — for a starsOfProject highlight — that project's
  // {forks}, {contributors} and {translations} (fetched from GitHub before each build).
  label?: string,
  // Number source: the live star count of this project
  // (see src/data/__generated__/projectStars.json).
  starsOfProject?: ProjectID,
  // Number source: the sum of stars across all projects.
  totalStars?: boolean,
  // Publishers whose logos (with names) follow.
  logos?: Publisher[],
  link?: Link,
};

export type Profile = {
  firstName?: string,
  lastName?: string,
  position?: string,
  // When the career started ("YYYY-MM-DD"); the years of experience are counted from it.
  careerStartDate?: string,
  avatar?: Image,
  summary?: string[],
  highlights?: Highlight[],
  socialLinks?: SocialLink[],
  tags?: Tag[],
  location?: Location,
};

import { Image } from './Image';
import { DateString } from './Date';
import { Link } from './Link';

export type Achievement = {
  title: string,
  link?: Link,
  // One screenshot, or several that the card lets you flip through. A plain `Image` keeps working
  // exactly as before; pass an array only when a single picture cannot tell the whole story.
  image?: Image | Image[],
  date?: DateString,
};

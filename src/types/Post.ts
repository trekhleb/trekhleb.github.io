// Neighbouring post reference passed through the page context (see gatsby-node.ts).
export type PostNavItem = {
  slug: string,
  title: string,
};

// Shape of the `tableOfContents` field of gatsby-plugin-mdx.
export type TableOfContentsItem = {
  url?: string,
  title?: string,
  items?: TableOfContentsItem[],
};

export type TableOfContents = {
  items?: TableOfContentsItem[],
};

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IGatsbyImageData } from "gatsby-plugin-image";

// ====================================================
// GraphQL query operation: PostTemplateQuery
// ====================================================

export interface PostTemplateQuery_mdx_fields {
  slug: string | null;
}

export interface PostTemplateQuery_mdx_frontmatter_cover_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface PostTemplateQuery_mdx_frontmatter_cover_childImageSharp {
  gatsbyImageData: IGatsbyImageData;
}

export interface PostTemplateQuery_mdx_frontmatter_cover {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: PostTemplateQuery_mdx_frontmatter_cover_childImageSharp | null;
}

export interface PostTemplateQuery_mdx_frontmatter {
  title: string;
  summary: string | null;
  date: any | null;
  cover: PostTemplateQuery_mdx_frontmatter_cover | null;
}

export interface PostTemplateQuery_mdx {
  id: string;
  timeToRead: number | null;
  body: string;
  fields: PostTemplateQuery_mdx_fields | null;
  frontmatter: PostTemplateQuery_mdx_frontmatter | null;
}

export interface PostTemplateQuery {
  mdx: PostTemplateQuery_mdx | null;
}

export interface PostTemplateQueryVariables {
  slug: string;
}

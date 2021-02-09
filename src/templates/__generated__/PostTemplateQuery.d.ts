/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostTemplateQuery
// ====================================================

export interface PostTemplateQuery_markdownRemark_fields {
  slug: string | null;
}

export interface PostTemplateQuery_markdownRemark_frontmatter_cover_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface PostTemplateQuery_markdownRemark_frontmatter_cover_childImageSharp {
  fluid: PostTemplateQuery_markdownRemark_frontmatter_cover_childImageSharp_fluid | null;
}

export interface PostTemplateQuery_markdownRemark_frontmatter_cover {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: PostTemplateQuery_markdownRemark_frontmatter_cover_childImageSharp | null;
}

export interface PostTemplateQuery_markdownRemark_frontmatter {
  title: string | null;
  summary: string | null;
  date: any | null;
  cover: PostTemplateQuery_markdownRemark_frontmatter_cover | null;
}

export interface PostTemplateQuery_markdownRemark {
  id: string;
  timeToRead: number | null;
  html: string | null;
  excerpt: string | null;
  fields: PostTemplateQuery_markdownRemark_fields | null;
  frontmatter: PostTemplateQuery_markdownRemark_frontmatter | null;
}

export interface PostTemplateQuery {
  markdownRemark: PostTemplateQuery_markdownRemark | null;
}

export interface PostTemplateQueryVariables {
  slug: string;
}

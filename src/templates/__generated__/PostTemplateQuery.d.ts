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

export interface PostTemplateQuery_markdownRemark_frontmatter {
  title: string | null;
  date: any | null;
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

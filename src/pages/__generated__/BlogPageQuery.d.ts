/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPageQuery
// ====================================================

export interface BlogPageQuery_allMarkdownRemark_nodes_frontmatter {
  title: string | null;
  date: any | null;
}

export interface BlogPageQuery_allMarkdownRemark_nodes {
  id: string;
  timeToRead: number | null;
  frontmatter: BlogPageQuery_allMarkdownRemark_nodes_frontmatter | null;
  excerpt: string | null;
}

export interface BlogPageQuery_allMarkdownRemark {
  totalCount: number;
  nodes: BlogPageQuery_allMarkdownRemark_nodes[];
}

export interface BlogPageQuery {
  allMarkdownRemark: BlogPageQuery_allMarkdownRemark;
}

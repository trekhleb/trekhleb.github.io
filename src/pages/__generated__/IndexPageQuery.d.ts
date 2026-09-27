/* tslint:disable */
/* eslint-disable */
// This file mirrors the shape of the IndexPageQuery in src/pages/index.tsx (hand-written, same
// conventions as the apollo-generated files next to it). The nodes select the
// `PostPreviewFields` fragment (see src/components/elements/PostPreview.tsx).

import { IGatsbyImageData } from "gatsby-plugin-image";

// ====================================================
// GraphQL query operation: IndexPageQuery
// ====================================================

export interface IndexPageQuery_allMdx_nodes_fields {
  __typename: "MdxFields";
  slug: string | null;
}

export interface IndexPageQuery_allMdx_nodes_frontmatter_cover_childImageSharp {
  __typename: "ImageSharp";
  gatsbyImageData: IGatsbyImageData;
}

export interface IndexPageQuery_allMdx_nodes_frontmatter_cover {
  __typename: "File";
  childImageSharp: IndexPageQuery_allMdx_nodes_frontmatter_cover_childImageSharp | null;
}

export interface IndexPageQuery_allMdx_nodes_frontmatter {
  __typename: "MdxFrontmatter";
  title: string;
  summary: string | null;
  date: any | null;
  cover: IndexPageQuery_allMdx_nodes_frontmatter_cover | null;
}

export interface IndexPageQuery_allMdx_nodes {
  __typename: "Mdx";
  id: string;
  fields: IndexPageQuery_allMdx_nodes_fields | null;
  frontmatter: IndexPageQuery_allMdx_nodes_frontmatter | null;
}

export interface IndexPageQuery_allMdx {
  __typename: "MdxConnection";
  totalCount: number;
  nodes: IndexPageQuery_allMdx_nodes[];
}

export interface IndexPageQuery_siteBuildMetadata {
  __typename: "SiteBuildMetadata";
  buildTime: any | null;
}

export interface IndexPageQuery {
  siteBuildMetadata: IndexPageQuery_siteBuildMetadata | null;
  allMdx: IndexPageQuery_allMdx;
}

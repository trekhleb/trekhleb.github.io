/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectsPageQuery
// ====================================================

export interface ProjectsPageQuery_site_siteMetadata_projects_tags {
  name: string | null;
}

export interface ProjectsPageQuery_site_siteMetadata_projects {
  name: string | null;
  archived: boolean | null;
  description: (string | null)[] | null;
  startDate: any | null;
  endDate: any | null;
  srcURL: string | null;
  tags: (ProjectsPageQuery_site_siteMetadata_projects_tags | null)[] | null;
}

export interface ProjectsPageQuery_site_siteMetadata {
  projects: (ProjectsPageQuery_site_siteMetadata_projects | null)[] | null;
}

export interface ProjectsPageQuery_site {
  siteMetadata: ProjectsPageQuery_site_siteMetadata | null;
}

export interface ProjectsPageQuery {
  site: ProjectsPageQuery_site | null;
}

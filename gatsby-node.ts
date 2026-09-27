// eslint-disable-next-line import/no-extraneous-dependencies
import { createFilePath } from 'gatsby-source-filesystem';
import { CreateNodeArgs, CreatePagesArgs } from 'gatsby';
import * as path from 'path';
import { routes } from './src/constants/routes';
import { projectMapToArray } from './src/utils/project';
import { projects } from './src/data/projects';
import { Project } from './src/types/Project';

export function onCreateNode(args: CreateNodeArgs): void {
  // Create a slug field for markdown post nodes.
  const { actions, node, getNode } = args;
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: routes.blog.path + slug,
    });
  }
}

export type PostNavItem = {
  slug: string,
  title: string,
};

type CreatePostPagesNode = {
  fields: { slug: string },
  internal: { contentFilePath: string },
  frontmatter: { title: string },
};

type CreatePostPagesQuery = {
  data?: {
    allMdx?: {
      nodes?: CreatePostPagesNode[],
    },
  },
};

async function createPostPages(args: CreatePagesArgs): Promise<void> {
  const { actions, graphql } = args;
  const { createPage } = actions;
  const result: CreatePostPagesQuery = await graphql(`
    query CreatePostPagesQuery {
      allMdx(
        filter: {internal: {contentFilePath: {regex: "/\\/src\\/posts\\//"}}},
        sort: {frontmatter: {date: DESC}},
      ) {
        nodes {
          fields {
            slug
          }
          internal {
            contentFilePath
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const nodes: CreatePostPagesNode[] = result?.data?.allMdx?.nodes || [];

  const toNavItem = (node: CreatePostPagesNode | undefined): PostNavItem | null => {
    if (!node) {
      return null;
    }
    return { slug: node.fields.slug, title: node.frontmatter.title };
  };

  nodes.forEach((node: CreatePostPagesNode, index: number) => {
    createPage({
      path: node.fields.slug,
      component: `${path.resolve('./src/templates/Post.tsx')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
        // Neighbouring posts (the list is sorted newest first) for the previous/next navigation.
        newerPost: toNavItem(nodes[index - 1]),
        olderPost: toNavItem(nodes[index + 1]),
      },
    });
  });
}

async function createProjectPages(args: CreatePagesArgs): Promise<void> {
  const { actions } = args;
  const { createPage } = actions;
  projectMapToArray(projects).forEach((project: Project) => {
    createPage({
      path: `${routes.projects.path}/${project.id}`,
      component: path.resolve('./src/templates/Project.tsx'),
      context: {
        projectID: project.id,
      },
    });
  });
}

export async function createPages(args: CreatePagesArgs): Promise<void> {
  await createPostPages(args);
  await createProjectPages(args);
}

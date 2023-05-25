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

type CreatePostPagesQuery = {
  data?: {
    allMdx?: {
      nodes?: any[],
    },
  },
};

async function createPostPages(args: CreatePagesArgs): Promise<void> {
  const { actions, graphql } = args;
  const { createPage } = actions;
  const result: CreatePostPagesQuery = await graphql(`
    query CreatePostPagesQuery {
      allMdx {
        nodes {
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  (result?.data?.allMdx?.nodes || []).forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: `${path.resolve('./src/templates/Post.tsx')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
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

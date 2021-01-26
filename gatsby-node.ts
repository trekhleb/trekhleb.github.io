// eslint-disable-next-line import/no-extraneous-dependencies
import { createFilePath } from 'gatsby-source-filesystem';
import { CreateNodeArgs, CreatePagesArgs } from 'gatsby';
import * as path from 'path';
import { routes } from './src/constants/routes';

export function onCreateNode(args: CreateNodeArgs): void {
  // Create a slug field for markdown post nodes.
  const { actions, node, getNode } = args;
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
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
    allMarkdownRemark?: {
      nodes?: any[],
    },
  },
};

export async function createPages(args: CreatePagesArgs): Promise<void> {
  const { actions, graphql } = args;
  const { createPage } = actions;
  const result: CreatePostPagesQuery = await graphql(`
    query CreatePostPagesQuery {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  (result?.data?.allMarkdownRemark?.nodes || []).forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/Post.tsx'),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
}

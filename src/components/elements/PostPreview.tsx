import React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';

import type { Link as LinkType } from '../../types/Link';
import FluidImage from '../shared/FluidImage';
import HyperLink from '../shared/HyperLink';

// What a post row needs. The blog page and the home page both select it with the
// `PostPreviewFields` fragment below, so the two lists show the same data and the same images.
export const postPreviewFields = graphql`
  fragment PostPreviewFields on Mdx {
    id
    fields {
      slug
    }
    frontmatter {
      title
      summary
      date(formatString: "MMM D, YYYY")
      cover {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED,
            width: 640,
            quality: 80,
            transformOptions: {
              fit: COVER,
              cropFocus: CENTER,
              grayscale: false,
            },
          )
        }
      }
    }
  }
`;

export type PostPreviewData = {
  id: string,
  fields: { slug: string | null } | null,
  frontmatter: {
    title: string,
    summary: string | null,
    date: string | null,
    cover: { childImageSharp: { gatsbyImageData: IGatsbyImageData } | null } | null,
  } | null,
};

type PostPreviewProps = {
  post: PostPreviewData,
  // Heading level of the title: h2 on the blog page, h3 inside a home page section.
  titleLevel?: 'h2' | 'h3',
};

const PostPreview = (props: PostPreviewProps): React.ReactElement | null => {
  const { post, titleLevel = 'h2' } = props;
  const Title = titleLevel;

  const postLink: LinkType = {
    url: post.fields?.slug,
  };

  const coverImage = post.frontmatter?.cover?.childImageSharp?.gatsbyImageData;

  const postCover = coverImage ? (
    <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden rounded-xl border border-line bg-subtle sm:w-52 [&_img]:transition-opacity [&_img]:duration-300 group-hover:[&_img]:opacity-90">
      <FluidImage fluidImage={coverImage} className="h-full w-full" />
    </div>
  ) : null;

  const postSummary = post?.frontmatter?.summary ? (
    <p className="mt-2 text-[15px] leading-relaxed text-muted">
      {post?.frontmatter?.summary}
    </p>
  ) : null;

  return (
    <li className="group relative py-6">
      <article className="flex flex-col gap-4 sm:flex-row sm:gap-7">
        {postCover}
        <div className="min-w-0 flex-1">
          <Title className="text-[19px] font-semibold leading-snug">
            <HyperLink link={postLink} className="stretched-link text-fg" hoverClassName="hover:text-accent">
              {post?.frontmatter?.title}
            </HyperLink>
          </Title>
          {post?.frontmatter?.date && (
            <time className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
              <FiCalendar size={14} aria-hidden="true" />
              {post.frontmatter.date}
            </time>
          )}
          {postSummary}
        </div>
      </article>
    </li>
  );
};

export default PostPreview;

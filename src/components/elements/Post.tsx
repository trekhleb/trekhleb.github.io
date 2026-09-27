import React, { useRef } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';

import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import ProseImage from '../shared/ProseImage';
import H, { hLevel } from '../shared/H';
import ErrorBoundary from '../shared/ErrorBoundary';
import TableOfContents from '../shared/TableOfContents';
import { useProseEnhancements } from '../../hooks/useProseEnhancements';

type PostProps = {
  post: PostTemplateQuery,
  children: React.ReactNode,
};

const Post = (props: PostProps): React.ReactElement | null => {
  const { post, children } = props;

  const articleRef = useRef<HTMLDivElement>(null);
  useProseEnhancements(articleRef);

  const dateElement = post?.mdx?.frontmatter?.date ? (
    <time
      dateTime={post?.mdx?.frontmatter?.isoDate || undefined}
      className="inline-flex items-center gap-1.5"
    >
      <FiCalendar size={14} aria-hidden="true" />
      {post?.mdx?.frontmatter.date}
    </time>
  ) : null;

  // Markdown images that are not processed by gatsby-remark-images (GIFs) render lazily.
  const mdxComponents = { img: ProseImage };

  // To style the blog post the tailwindcss-typography plugin is used.
  // @see: https://github.com/tailwindlabs/tailwindcss-typography
  return (
    <div className="relative mx-auto w-full max-w-prose">
      <article>
        <header className="mb-8 sm:mb-10">
          <H level={hLevel.h1}>{post.mdx?.frontmatter?.title || ''}</H>
          <div className="mt-4 flex flex-wrap items-center gap-x-2 text-sm text-muted">
            {dateElement}
          </div>
        </header>
        <div ref={articleRef} className="prose sm:prose-lg">
          <ErrorBoundary>
            <MDXProvider components={mdxComponents}>
              {children}
            </MDXProvider>
          </ErrorBoundary>
        </div>
      </article>
      <TableOfContents
        toc={post?.mdx?.tableOfContents}
        articleRef={articleRef}
        className="absolute left-full top-0 ml-10 hidden h-full w-56 toc:block"
      />
    </div>
  );
};

export default Post;

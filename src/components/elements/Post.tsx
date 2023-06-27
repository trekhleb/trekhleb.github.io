import React from 'react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { FiClock } from '@react-icons/all-files/fi/FiClock';

import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import { timeToReadFromRemark } from '../../utils/time';
import ErrorBoundary from '../shared/ErrorBoundary';

type PostProps = {
  post: PostTemplateQuery,
  children: React.ReactNode,
};

const Post = (props: PostProps): React.ReactElement | null => {
  const { post, children } = props;

  const dateElement = post?.mdx?.frontmatter?.date ? (
    <Row className="mr-6 mb-6 text-gray-500 text-sm">
      <FiCalendar className="mr-1" />
      {post?.mdx?.frontmatter.date}
    </Row>
  ) : null;

  const timeToRead = post?.mdx?.timeToRead ? (
    <Row>
      <FiClock className="mr-1" />
      {timeToReadFromRemark(post?.mdx?.timeToRead)} min to read
    </Row>
  ) : null;

  // To style the blog post the tailwindcss-typography plugin is used.
  // @see: https://github.com/tailwindlabs/tailwindcss-typography
  return (
    <div className="flex flex-col items-center">
      <article className="w-full prose prose-sm sm:prose overflow-hidden prose-red" style={{ maxWidth: '860px' }}>
        <PageHeader>{post.mdx?.frontmatter?.title || ''}</PageHeader>
        <Row>
          {dateElement}
          {timeToRead}
        </Row>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </article>
    </div>
  );
};

export default Post;

import React from 'react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { FiClock } from '@react-icons/all-files/fi/FiClock';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import { timeToReadFromRemark } from '../../utils/time';

type PostProps = {
  post: PostTemplateQuery,
};

const Post = (props: PostProps): React.ReactElement | null => {
  const { post } = props;

  const dateElement = post?.mdx?.frontmatter?.date ? (
    <Row className="mr-6">
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
        <MDXRenderer>{post.mdx?.body || ''}</MDXRenderer>
      </article>
    </div>
  );
};

export default Post;

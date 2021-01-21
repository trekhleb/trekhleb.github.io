import React from 'react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { FiClock } from '@react-icons/all-files/fi/FiClock';

import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import { blogPostColor } from '../../constants/style';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import { timeToReadMultiplier } from '../../constants/posts';

type PostProps = {
  post: PostTemplateQuery,
};

const Post = (props: PostProps): React.ReactElement | null => {
  const { post } = props;

  const dateElement = post?.markdownRemark?.frontmatter?.date ? (
    <Row className="mr-6">
      <FiCalendar className="mr-1" />
      {post?.markdownRemark?.frontmatter.date}
    </Row>
  ) : null;

  const timeToRead = post?.markdownRemark?.timeToRead ? (
    <Row>
      <FiClock className="mr-1" />
      {Math.floor(post?.markdownRemark?.timeToRead * timeToReadMultiplier)} min to read
    </Row>
  ) : null;

  // To style the blog post the tailwindcss-typography plugin is used.
  // @see: https://github.com/tailwindlabs/tailwindcss-typography
  return (
    <div className="flex flex-col items-center">
      <article className={`w-full prose prose-sm sm:prose ${blogPostColor}`} style={{ maxWidth: '100%' }}>
        <PageHeader>{post.markdownRemark?.frontmatter?.title || ''}</PageHeader>
        <Row>
          {dateElement}
          {timeToRead}
        </Row>
        <div dangerouslySetInnerHTML={{ __html: post.markdownRemark?.html || '' }} />
      </article>
    </div>
  );
};

export default Post;

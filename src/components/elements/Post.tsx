import React from 'react';

import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import PageHeader from '../shared/PageHeader';

type PostProps = {
  post: PostTemplateQuery,
};

const Post = (props: PostProps): React.ReactElement | null => {
  const { post } = props;

  return (
    <article>
      <PageHeader>{post.markdownRemark?.frontmatter?.title || ''}</PageHeader>
      <div dangerouslySetInnerHTML={{ __html: post.markdownRemark?.html || '' }} />
    </article>
  );
};

export default Post;

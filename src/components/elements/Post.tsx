import React from 'react';

import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import PageHeader from '../shared/PageHeader';
import { blogPostColor } from '../../constants/style';

type PostProps = {
  post: PostTemplateQuery,
};

const Post = (props: PostProps): React.ReactElement | null => {
  const { post } = props;

  // To style the blog post the tailwindcss-typography plugin is used.
  // @see: https://github.com/tailwindlabs/tailwindcss-typography
  return (
    <div className="flex flex-col items-center">
      <article className={`prose ${blogPostColor}`}>
        <PageHeader>{post.markdownRemark?.frontmatter?.title || ''}</PageHeader>
        <div dangerouslySetInnerHTML={{ __html: post.markdownRemark?.html || '' }} />
      </article>
    </div>
  );
};

export default Post;

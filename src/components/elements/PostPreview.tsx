import React from 'react';
import { BlogPageQuery_allMarkdownRemark_nodes } from '../../pages/__generated__/BlogPageQuery';

type PostPreviewProps = {
  post: BlogPageQuery_allMarkdownRemark_nodes,
};

const PostPreview = (props: PostPreviewProps): React.ReactElement | null => {
  const { post } = props;

  return (
    <div>
      <div>
        {post?.frontmatter?.title}
      </div>
    </div>
  );
};

export default PostPreview;

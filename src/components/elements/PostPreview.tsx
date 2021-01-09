import React from 'react';
import { BlogPageQuery_allMarkdownRemark_nodes } from '../../pages/__generated__/BlogPageQuery';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import H3 from '../shared/H3';

type PostPreviewProps = {
  post: BlogPageQuery_allMarkdownRemark_nodes,
};

const PostPreview = (props: PostPreviewProps): React.ReactElement | null => {
  const { post } = props;

  const postTitle = (
    <H3>
      {post?.frontmatter?.title}
    </H3>
  );

  return (
    <Card>
      <CardContent>
        {postTitle}
      </CardContent>
    </Card>
  );
};

export default PostPreview;

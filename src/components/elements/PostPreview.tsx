import React from 'react';

import { BlogPageQuery_allMarkdownRemark_nodes } from '../../pages/__generated__/BlogPageQuery';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import HyperLink from '../shared/HyperLink';
import type { Link as LinkType } from '../../types/Link';
import H, { hLevel } from '../shared/H';

type PostPreviewProps = {
  post: BlogPageQuery_allMarkdownRemark_nodes,
};

const PostPreview = (props: PostPreviewProps): React.ReactElement | null => {
  const { post } = props;

  const postTitle = (
    <H level={hLevel.h3}>
      {post?.frontmatter?.title}
    </H>
  );

  const postLink: LinkType = {
    url: post.fields?.slug,
  };

  const postTitleLink = post.fields?.slug ? (
    <HyperLink link={postLink}>{postTitle}</HyperLink>
  ) : null;

  const postSummary = post?.excerpt ? (
    <div>
      {post?.excerpt}
    </div>
  ) : null;

  return (
    <Card>
      <CardContent>
        {postTitleLink}
        {postSummary}
      </CardContent>
    </Card>
  );
};

export default PostPreview;

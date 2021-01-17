import React from 'react';

import { BlogPageQuery_allMarkdownRemark_nodes } from '../../pages/__generated__/BlogPageQuery';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import type { Link as LinkType } from '../../types/Link';
import CardTitle from '../shared/CardTitle';
import DateRange from '../shared/DateRange';
import FluidImage from '../shared/FluidImage';
import CardMedia from '../shared/CardMedia';

type PostPreviewProps = {
  post: BlogPageQuery_allMarkdownRemark_nodes,
};

const PostPreview = (props: PostPreviewProps): React.ReactElement | null => {
  const { post } = props;

  const postLink: LinkType = {
    url: post.fields?.slug,
  };

  const postCover = post.frontmatter?.cover?.childImageSharp?.fluid ? (
    <FluidImage fluidImage={post.frontmatter?.cover?.childImageSharp?.fluid} />
  ) : null;

  const postTitleLink = post.fields?.slug ? (
    <CardTitle link={postLink}>
      {post?.frontmatter?.title}
    </CardTitle>
  ) : null;

  const postSummary = post?.excerpt ? (
    <div>
      {post?.excerpt}
    </div>
  ) : null;

  const dateElement = post?.frontmatter?.date ? (
    <DateRange startDate={post.frontmatter.date} />
  ) : null;

  return (
    <Card>
      <CardMedia>
        {postCover}
      </CardMedia>
      <CardContent>
        {postTitleLink}
        {dateElement}
        {postSummary}
      </CardContent>
    </Card>
  );
};

export default PostPreview;

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

// Adjusting the time to read.
// gatsby-transformer-remark plugin relies on the 265 average words per minute.
// @see: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/src/utils/time-to-read.js
const timeToReadMultiplier = 0.6;

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

  const postSummary = post?.frontmatter?.summary ? (
    <div>
      {post?.frontmatter?.summary}
    </div>
  ) : null;

  const dateElement = post?.frontmatter?.date ? (
    <DateRange startDate={post.frontmatter.date} />
  ) : null;

  const timeToRead = post?.timeToRead ? (
    <div>
      {Math.floor(post?.timeToRead * timeToReadMultiplier)} minutes to read
    </div>
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
        {timeToRead}
      </CardContent>
    </Card>
  );
};

export default PostPreview;

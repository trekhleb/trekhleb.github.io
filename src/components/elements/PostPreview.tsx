import React from 'react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { FiClock } from '@react-icons/all-files/fi/FiClock';

import { BlogPageQuery_allMarkdownRemark_nodes } from '../../pages/__generated__/BlogPageQuery';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import type { Link as LinkType } from '../../types/Link';
import CardTitle from '../shared/CardTitle';
import FluidImage from '../shared/FluidImage';
import CardMedia from '../shared/CardMedia';
import Row from '../shared/Row';
import { timeToReadMultiplier } from '../../constants/posts';

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

  const postSummary = post?.frontmatter?.summary ? (
    <div className="mb-3">
      {post?.frontmatter?.summary}
    </div>
  ) : null;

  const dateElement = post?.frontmatter?.date ? (
    <Row className="mr-6">
      <FiCalendar className="mr-1" />
      {post.frontmatter.date}
    </Row>
  ) : null;

  const timeToRead = post?.timeToRead ? (
    <Row>
      <FiClock className="mr-1" />
      {Math.floor(post?.timeToRead * timeToReadMultiplier)} min to read
    </Row>
  ) : null;

  return (
    <Card>
      <CardMedia>
        {postCover}
      </CardMedia>
      <CardContent>
        {postTitleLink}
        {postSummary}
        <Row className="text-xs">
          {dateElement}
          {timeToRead}
        </Row>
      </CardContent>
    </Card>
  );
};

export default PostPreview;

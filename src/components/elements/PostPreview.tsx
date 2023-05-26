import React from 'react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { FiClock } from '@react-icons/all-files/fi/FiClock';

import { BlogPageQuery_allMdx_nodes } from '../../pages/__generated__/BlogPageQuery';
import Card, { cardModeRow } from '../shared/Card';
import CardContent, { cardContentModeRow } from '../shared/CardContent';
import type { Link as LinkType } from '../../types/Link';
import CardTitle from '../shared/CardTitle';
import FluidImage from '../shared/FluidImage';
import CardMedia, { cardMediaModeRow } from '../shared/CardMedia';
import Row from '../shared/Row';
import { timeToReadFromRemark } from '../../utils/time';

type PostPreviewProps = {
  post: BlogPageQuery_allMdx_nodes,
};

const PostPreview = (props: PostPreviewProps): React.ReactElement | null => {
  const { post } = props;

  const postLink: LinkType = {
    url: post.fields?.slug,
  };

  const postCover = post.frontmatter?.cover?.childImageSharp?.gatsbyImageData ? (
    <FluidImage fluidImage={post.frontmatter?.cover?.childImageSharp?.gatsbyImageData} />
  ) : null;

  const postSummary = post?.frontmatter?.summary ? (
    <div className="font-light">
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
      {timeToReadFromRemark(post?.timeToRead)} min to read
    </Row>
  ) : null;

  return (
    <Card mode={cardModeRow}>
      <CardMedia mode={cardMediaModeRow} link={postLink}>
        {postCover}
      </CardMedia>
      <CardContent mode={cardContentModeRow}>
        <CardTitle link={postLink}>
          {post?.frontmatter?.title}
        </CardTitle>
        <Row className="text-xs text-gray-500 mb-3">
          {dateElement}
          {timeToRead}
        </Row>
        {postSummary}
      </CardContent>
    </Card>
  );
};

export default PostPreview;

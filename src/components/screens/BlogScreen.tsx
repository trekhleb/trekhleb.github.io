import React from 'react';

import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';
import PostsList from '../elements/PostsList';
import { BlogPageQuery } from '../../pages/__generated__/BlogPageQuery';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import Badge from '../shared/Badge';

type BlogScreenProps = {
  posts: BlogPageQuery;
};

const BlogScreen = (props: BlogScreenProps): React.ReactElement => {
  const { posts } = props;

  const postsNum = posts.allMarkdownRemark.totalCount;

  return (
    <PageLayout>
      <ScreenTitle title="Blog" />
      <Row>
        <PageHeader>Blog</PageHeader>
        <Badge className="ml-3 self-start">{postsNum}</Badge>
      </Row>
      <PostsList posts={posts} />
    </PageLayout>
  );
};

export default BlogScreen;

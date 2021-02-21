import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PostsList from '../elements/PostsList';
import { BlogPageQuery } from '../../pages/__generated__/BlogPageQuery';
import PageHeader from '../shared/PageHeader';
import Row from '../shared/Row';
import Badge from '../shared/Badge';
import SEO from '../shared/SEO';

type BlogScreenProps = {
  posts: BlogPageQuery;
};

const BlogScreen = (props: BlogScreenProps): React.ReactElement => {
  const { posts } = props;

  const postsNum = posts.allMdx.totalCount;

  return (
    <PageLayout>
      <SEO
        title="Blog"
        description="Articles about life, web-development and machine-learning"
      />
      <Row>
        <PageHeader>Blog</PageHeader>
        <Badge className="ml-3 self-start">{postsNum}</Badge>
      </Row>
      <PostsList posts={posts} />
    </PageLayout>
  );
};

export default BlogScreen;

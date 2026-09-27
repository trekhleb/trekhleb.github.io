import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PostsList from '../elements/PostsList';
import { BlogPageQuery } from '../../pages/__generated__/BlogPageQuery';
import PageHeader from '../shared/PageHeader';
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
        description={`${postsNum} articles by Oleksii Trekhleb about web development, algorithms, machine learning, and life — with interactive examples and code.`}
      />
      <div className="flex items-start gap-3">
        <PageHeader>Blog</PageHeader>
        <Badge className="mt-2">{postsNum}</Badge>
      </div>
      <PostsList posts={posts.allMdx.nodes} />
    </PageLayout>
  );
};

export default BlogScreen;

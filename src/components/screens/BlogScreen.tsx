import React from 'react';

import H1 from '../shared/H1';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';
import PostsList from '../elements/PostsList';
import { BlogPageQuery } from '../../pages/__generated__/BlogPageQuery';

type BlogScreenProps = {
  posts: BlogPageQuery;
};

const BlogScreen = (props: BlogScreenProps): React.ReactElement => {
  const { posts } = props;

  return (
    <PageLayout>
      <ScreenTitle>Blog</ScreenTitle>
      <H1>Blog</H1>
      <PostsList posts={posts} />
    </PageLayout>
  );
};

export default BlogScreen;

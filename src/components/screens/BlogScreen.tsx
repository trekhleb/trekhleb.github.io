import React from 'react';

import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';
import PostsList from '../elements/PostsList';
import { BlogPageQuery } from '../../pages/__generated__/BlogPageQuery';
import H, { hLevel } from '../shared/H';

type BlogScreenProps = {
  posts: BlogPageQuery;
};

const BlogScreen = (props: BlogScreenProps): React.ReactElement => {
  const { posts } = props;

  return (
    <PageLayout>
      <ScreenTitle title="Blog" />
      <H level={hLevel.h1}>Blog</H>
      <PostsList posts={posts} />
    </PageLayout>
  );
};

export default BlogScreen;

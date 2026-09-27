import React from 'react';

import PostPreview, { PostPreviewData } from './PostPreview';

type PostsListProps = {
  posts: PostPreviewData[],
  // Heading level of the post titles: h2 on the blog page, h3 inside a home page section.
  titleLevel?: 'h2' | 'h3',
};

// Newest first; every row carries its own date, so no extra grouping is needed. Used by the blog
// page (all posts) and the home page's "Latest writing" (the newest three).
const PostsList = (props: PostsListProps): React.ReactElement => {
  const { posts, titleLevel } = props;

  const items = posts.map((post: PostPreviewData) => (
    <PostPreview post={post} key={post.id} titleLevel={titleLevel} />
  ));

  return (
    <ul className="divide-y divide-line border-t border-line">
      {items}
    </ul>
  );
};

export default PostsList;

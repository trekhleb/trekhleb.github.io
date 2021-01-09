import React from 'react';

import Cards, { cardModeList } from '../shared/Cards';
import PostPreview from './PostPreview';
import { BlogPageQuery, BlogPageQuery_allMarkdownRemark_nodes } from '../../pages/__generated__/BlogPageQuery';

type PostsListProps = {
  posts: BlogPageQuery,
};

const PostsList = (props: PostsListProps): React.ReactElement => {
  const { posts } = props;

  const postsElements = posts.allMarkdownRemark.nodes.map(
    (node: BlogPageQuery_allMarkdownRemark_nodes) => {
      return <PostPreview post={node} key={node.id} />;
    },
  );

  return (
    <Cards mode={cardModeList}>
      {postsElements}
    </Cards>
  );
};

export default PostsList;

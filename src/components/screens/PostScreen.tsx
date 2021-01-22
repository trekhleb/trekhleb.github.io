import React from 'react';

import PageLayout from '../layouts/PageLayout';
import ScreenTitle, { screenTitleModeSuffix } from '../shared/ScreenTitle';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import Post from '../elements/Post';

type PostScreenProps = {
  post: PostTemplateQuery;
};

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const { post } = props;

  return (
    <PageLayout>
      <ScreenTitle
        mode={screenTitleModeSuffix}
        title={post.markdownRemark?.frontmatter?.title || ''}
      />
      <Post post={post} />
    </PageLayout>
  );
};

export default PostScreen;

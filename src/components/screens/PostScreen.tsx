import React from 'react';

import PageLayout from '../layouts/PageLayout';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import Post from '../elements/Post';
import SEO, { titleModeSuffix } from '../shared/SEO';

type PostScreenProps = {
  post: PostTemplateQuery;
};

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const { post } = props;

  return (
    <PageLayout>
      <SEO
        title={post.markdownRemark?.frontmatter?.title || ''}
        titleMode={titleModeSuffix}
        description={post.markdownRemark?.frontmatter?.summary || ''}
        image={post.markdownRemark?.frontmatter?.cover?.childImageSharp?.fluid?.src || ''}
        isArticle
      />
      <Post post={post} />
    </PageLayout>
  );
};

export default PostScreen;

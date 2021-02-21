import React from 'react';

import PageLayout from '../layouts/PageLayout';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import Post from '../elements/Post';
import SEO, { ogTypeArticle, titleModeSuffix } from '../shared/SEO';

type PostScreenProps = {
  post: PostTemplateQuery;
};

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const { post } = props;

  return (
    <PageLayout>
      <SEO
        title={post.mdx?.frontmatter?.title || ''}
        titleMode={titleModeSuffix}
        description={post.mdx?.frontmatter?.summary || ''}
        image={post.mdx?.frontmatter?.cover?.childImageSharp?.fluid?.src || ''}
        type={ogTypeArticle}
      />
      <Post post={post} />
    </PageLayout>
  );
};

export default PostScreen;

import React from 'react';

import PageLayout from '../layouts/PageLayout';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import Post from '../elements/Post';
import SEO, { ogTypeArticle, titleModeSuffix } from '../shared/SEO';
import SubscriptionForm from '../shared/SubscriptionForm';
import ErrorBoundary from '../shared/ErrorBoundary';

type PostScreenProps = {
  post: PostTemplateQuery;
  children: React.ReactNode;
};

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const { post, children } = props;

  return (
    <PageLayout>
      <SEO
        title={post.mdx?.frontmatter?.title || ''}
        titleMode={titleModeSuffix}
        description={post.mdx?.frontmatter?.summary || ''}
        image={post.mdx?.frontmatter?.cover?.childImageSharp?.gatsbyImageData?.images?.fallback?.src || ''}
        type={ogTypeArticle}
      />
      <Post post={post}>{children}</Post>
      <div className="flex flex-row justify-center items-center mt-16">
        <div className="max-w-md">
          <ErrorBoundary>
            <SubscriptionForm />
          </ErrorBoundary>
        </div>
      </div>
    </PageLayout>
  );
};

export default PostScreen;

import React from 'react';

import PageLayout from '../layouts/PageLayout';
import { PostTemplateQuery } from '../../templates/__generated__/PostTemplateQuery';
import Post from '../elements/Post';
import SEO, { ogTypeArticle, titleModeSuffix } from '../shared/SEO';
import SubscriptionForm from '../shared/SubscriptionForm';
import ErrorBoundary from '../shared/ErrorBoundary';
import PostNav from '../elements/PostNav';
import AuthorCard from '../elements/AuthorCard';
import type { PostNavItem } from '../../types/Post';
import { authorName, siteURL } from '../../constants/siteMeta';

type PostScreenProps = {
  post: PostTemplateQuery;
  children: React.ReactNode;
  newerPost?: PostNavItem | null;
  olderPost?: PostNavItem | null;
};

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const {
    post, children, newerPost, olderPost,
  } = props;

  const title = post.mdx?.frontmatter?.title || '';
  const summary = post.mdx?.frontmatter?.summary || '';
  const isoDate = post.mdx?.frontmatter?.isoDate || undefined;
  const slug = post.mdx?.fields?.slug || '';
  const cover = post.mdx?.frontmatter?.cover?.childImageSharp?.gatsbyImageData;
  const coverSrc = cover?.images?.fallback?.src || '';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: summary,
    datePublished: isoDate,
    author: { '@type': 'Person', name: authorName, url: siteURL },
    image: coverSrc ? `${siteURL}${coverSrc}` : undefined,
    mainEntityOfPage: `${siteURL}${slug}`,
  };

  return (
    <PageLayout>
      <SEO
        title={title}
        titleMode={titleModeSuffix}
        description={summary}
        image={coverSrc}
        imageWidth={cover?.width}
        imageHeight={cover?.height}
        type={ogTypeArticle}
        publishedTime={isoDate}
        jsonLd={articleJsonLd}
      />
      <Post post={post}>{children}</Post>
      <div className="mx-auto mt-16 flex w-full max-w-prose flex-col gap-8 sm:mt-20">
        <ErrorBoundary>
          <AuthorCard />
        </ErrorBoundary>
        <PostNav newerPost={newerPost} olderPost={olderPost} />
        <ErrorBoundary>
          <SubscriptionForm />
        </ErrorBoundary>
      </div>
    </PageLayout>
  );
};

export default PostScreen;

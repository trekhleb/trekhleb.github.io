import React from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import { Helmet } from 'react-helmet';

import {
  siteURL,
  windowNamePrefix,
  windowNameSeparator,
  twitterUser,
  siteImage,
  siteImageWidth,
  siteImageHeight,
  defaultSiteTitle,
  authorName,
} from '../../constants/siteMeta';

type TitleMode = 'prefix' | 'suffix' | 'bare';

export const titleModePrefix: TitleMode = 'prefix';
export const titleModeSuffix: TitleMode = 'suffix';
// The title already carries the brand (home page).
export const titleModeBare: TitleMode = 'bare';

// @see: https://ogp.me/
type ogType = 'article' | 'website' | 'profile';

export const ogTypeArticle: ogType = 'article';
export const ogTypeWebsite: ogType = 'website';
export const ogTypeProfile: ogType = 'profile';

type SEOProps = {
  title: string,
  description: string,
  image?: string,
  // Known dimensions of the share image (helps LinkedIn/Slack render the card immediately).
  imageWidth?: number,
  imageHeight?: number,
  twitterUsername?: string,
  // No trailing slash allowed!
  // @see: https://www.gatsbyjs.com/docs/add-seo-component/
  baseURL?: string,
  titleMode?: TitleMode,
  type?: ogType,
  // ISO date for articles (og article:published_time).
  publishedTime?: string,
  // Structured data (schema.org) rendered as JSON-LD.
  jsonLd?: Record<string, unknown>,
  // Utility pages (404, subscription confirmations) should not appear in search results.
  noindex?: boolean,
};

// @see: https://www.gatsbyjs.com/docs/add-seo-component/
const SEO = (props: SEOProps): React.ReactElement => {
  const {
    title,
    description,
    baseURL = siteURL,
    twitterUsername = twitterUser,
    titleMode = titleModePrefix,
    image = siteImage,
    imageWidth,
    imageHeight,
    type = ogTypeWebsite,
    publishedTime,
    jsonLd,
    noindex = false,
  } = props;

  const { pathname } = useLocation();

  let extendedTitle = `${title} ${windowNameSeparator} ${windowNamePrefix}`;
  if (titleMode === titleModePrefix) {
    extendedTitle = `${windowNamePrefix} ${windowNameSeparator} ${title}`;
  } else if (titleMode === titleModeBare) {
    extendedTitle = title;
  }

  const bannerURL = image.startsWith('http') ? image : `${baseURL}${image}`;
  const isDefaultImage = image === siteImage;
  const bannerWidth = imageWidth || (isDefaultImage ? siteImageWidth : undefined);
  const bannerHeight = imageHeight || (isDefaultImage ? siteImageHeight : undefined);

  const pageURL = `${baseURL}${pathname}`;

  // @see: https://ogp.me/
  return (
    <Helmet title={extendedTitle}>
      <meta name="description" content={description} />
      <meta name="image" content={bannerURL} />
      <meta name="author" content={authorName} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={pageURL} />

      <meta property="og:site_name" content={defaultSiteTitle} />
      <meta property="og:title" content={extendedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:image" content={bannerURL} />
      {bannerWidth && <meta property="og:image:width" content={`${bannerWidth}`} />}
      {bannerHeight && <meta property="og:image:height" content={`${bannerHeight}`} />}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      {type === ogTypeArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === ogTypeArticle && (
        <meta property="article:author" content={authorName} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={extendedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={bannerURL} />
      <meta name="twitter:url" content={pageURL} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;

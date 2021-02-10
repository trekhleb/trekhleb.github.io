import React from 'react';
import { Helmet } from 'react-helmet';

import {
  siteURL,
  windowNamePrefix,
  windowNameSeparator,
  twitterUser, siteImage,
} from '../../constants/siteMeta';

type TitleMode = 'prefix' | 'suffix';

export const titleModePrefix: TitleMode = 'prefix';
export const titleModeSuffix: TitleMode = 'suffix';

type SEOProps = {
  title: string,
  description: string,
  isArticle?: boolean,
  image?: string,
  twitterUsername?: string,
  // No trailing slash allowed!
  // @see: https://www.gatsbyjs.com/docs/add-seo-component/
  url?: string,
  titleMode?: TitleMode,
};

// @see: https://www.gatsbyjs.com/docs/add-seo-component/
const SEO = (props: SEOProps): React.ReactElement => {
  const {
    title,
    description,
    url = siteURL,
    isArticle = false,
    twitterUsername = twitterUser,
    titleMode = titleModePrefix,
    image = siteImage,
  } = props;

  const extendedTitle = titleMode === titleModePrefix
    ? `${windowNamePrefix} ${windowNameSeparator} ${title}`
    : `${title} ${windowNameSeparator} ${windowNamePrefix}`;

  const bannerURL = `${url}${image}`;

  return (
    <Helmet title={extendedTitle}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:title" content={extendedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={bannerURL} />
      {(isArticle ? true : null) && <meta property="og:type" content="article" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={extendedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={bannerURL} />
    </Helmet>
  );
};

export default SEO;

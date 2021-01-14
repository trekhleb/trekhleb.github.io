import { GatsbyConfig } from 'gatsby';
import { siteMetadata } from './src/data/siteMetadata';
import { GOOGLE_ANALYTICS_ID } from './src/config/analytics';

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,
  plugins: [
    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-codegen/
    'gatsby-plugin-codegen',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/
    'gatsby-plugin-postcss',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    'gatsby-plugin-react-helmet',

    // @see: https://www.npmjs.com/package/gatsby-plugin-sharp
    'gatsby-plugin-sharp',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
    'gatsby-transformer-sharp',

    // @see: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-images/
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },

          // @see: https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: false,
            },
          },
        ],
      },
    },

    // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a page-view event will be fired for all of them.
        trackingIds: [
          GOOGLE_ANALYTICS_ID,
        ],
      },
    },
  ],
};

export default gatsbyConfig;

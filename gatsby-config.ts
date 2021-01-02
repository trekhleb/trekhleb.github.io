import { GatsbyConfig } from 'gatsby';
import { siteMetadata } from './src/data/siteMetadata';

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {},
    },
  ],
};

export default gatsbyConfig;

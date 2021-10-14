// If it is server-side-rendering, we don't have an access to document.
// @see: https://www.gatsbyjs.com/docs/using-client-side-only-packages/
export const isSSR = typeof document === 'undefined';

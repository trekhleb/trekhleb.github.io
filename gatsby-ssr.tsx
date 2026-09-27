// @see: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
import React from 'react';
import { RenderBodyArgs, WrapPageElementNodeArgs } from 'gatsby';

import RootLayout from './src/components/layouts/RootLayout';
import { themeColorLight } from './src/constants/siteMeta';

// Pure-CSS boot screen: the favicon's T (same 64-unit grid) draws itself in the middle of the
// screen while the page root is still empty — crossbar out from the centre, stem down, a pause,
// then first in first out: the crossbar shrinks back to its centre and the stem drains away
// downwards (pinned at its top while it grows, at its foot while it shrinks; the pin moves
// during the pause, when both give the same position). It is inlined so it needs no request and no JS.
// Built pages ship their content inside #___gatsby, so `:empty` never matches there and the
// first frame is still the page itself; it only fills a blank screen, e.g. `gatsby develop`,
// which renders in the browser. It fades in after 150ms so a quick render never flashes it.
const bootScreenCSS = `
#___gatsby:empty::before {
  content: '';
  position: fixed;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  border-radius: 14px;
  background:
    linear-gradient(#fff, #fff) 50% 17px / 32px 8px no-repeat,
    linear-gradient(#fff, #fff) 50% 17px / 8px 30px no-repeat,
    #111113;
  animation:
    boot-appear 0.3s ease-out 0.15s both,
    boot-draw 2s cubic-bezier(0.65, 0, 0.35, 1) 0.15s infinite;
}
@keyframes boot-appear {
  from { opacity: 0; transform: scale(0.94); }
  to { opacity: 1; transform: none; }
}
@keyframes boot-draw {
  0% { background-size: 0 8px, 8px 0; background-position: 50% 17px, 50% 17px; }
  25% { background-size: 32px 8px, 8px 0; }
  47% { background-size: 32px 8px, 8px 30px; background-position: 50% 17px, 50% 17px; }
  67% { background-size: 32px 8px, 8px 30px; background-position: 50% 17px, 50% calc(100% - 17px); }
  83% { background-size: 0 8px, 8px 30px; }
  100% { background-size: 0 8px, 8px 0; background-position: 50% 17px, 50% calc(100% - 17px); }
}
@media (prefers-reduced-motion: reduce) {
  #___gatsby:empty::before { animation: boot-appear 0.3s ease-out 0.15s both; }
}
`;

// Wraps every page in a component (the browser counterpart lives in gatsby-browser.tsx).
export function wrapPageElement(args: WrapPageElementNodeArgs): React.ReactElement {
  const { props, element } = args;
  return (
    <RootLayout {...props}>
      {element}
    </RootLayout>
  );
}

export function onRenderBody(args: RenderBodyArgs): void {
  const { setHtmlAttributes, setHeadComponents } = args;

  setHtmlAttributes({ lang: 'en' });

  setHeadComponents([
    // eslint-disable-next-line react/no-danger
    <style key="boot-screen" dangerouslySetInnerHTML={{ __html: bootScreenCSS }} />,
    <link
      key="font-preload"
      rel="preload"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      href="/static-assets/fonts/inter-latin.woff2"
    />,
    <meta key="theme-color" name="theme-color" content={themeColorLight} />,
    <link key="icon-svg" rel="icon" href="/static-assets/icons/favicon.svg" type="image/svg+xml" />,
    <link key="icon-ico" rel="alternate icon" href="/favicon.ico" sizes="any" />,
    <link key="apple-touch-icon" rel="apple-touch-icon" href="/static-assets/icons/apple-touch-icon.png" />,
    <link key="manifest" rel="manifest" href="/manifest.webmanifest" />,
  ]);
}

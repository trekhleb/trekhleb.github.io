import React from 'react';

// Keyboard users can jump straight to the page content. Visible only when focused.
const SkipLink = (): React.ReactElement => {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg focus:shadow-card"
    >
      Skip to content
    </a>
  );
};

export default SkipLink;

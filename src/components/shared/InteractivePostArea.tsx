import React from 'react';
import ErrorBoundary from './ErrorBoundary';

type InteractivePostAreaProps = {
  children: React.ReactNode,
  title?: string | null,
  className?: string,
};

// Frames the interactive demos that live inside blog posts.
const InteractivePostArea = (props: InteractivePostAreaProps): React.ReactElement | null => {
  const { children, title, className = '' } = props;

  if (!children) {
    return null;
  }

  const titleElement = title ? (
    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
      {title}
    </div>
  ) : null;

  return (
    <ErrorBoundary>
      {titleElement}
      <div className={`overflow-hidden rounded-xl2 border border-dashed border-line-strong p-4 sm:p-6 ${className}`}>
        {children}
      </div>
    </ErrorBoundary>
  );
};

export default InteractivePostArea;

import React from 'react';

import { Publication } from '../../types/Publication';
import PublicationPreview from './PublicationPreview';

type PublicationsListProps = {
  publications: Publication[],
};

// Newest first; every row carries its own date, so no extra grouping is needed.
const PublicationsList = (props: PublicationsListProps): React.ReactElement | null => {
  const { publications } = props;

  if (!publications.length) {
    return (
      <p className="text-sm text-muted">No publications match the selected filters.</p>
    );
  }

  const items = [...publications]
    .sort((publicationA, publicationB) => {
      const dateA = new Date(publicationA.date).getTime();
      const dateB = new Date(publicationB.date).getTime();
      return dateB - dateA;
    })
    .map((publication) => (
      <PublicationPreview
        publication={publication}
        // The date is part of the key because a publisher can run the same title more than once:
        // JavaScript Weekly has featured "JavaScript Algorithms and Data Structures" three times.
        // Without it those rows share a key, and React keeps the stale ones on screen when the
        // list is filtered — the filter appears to do nothing.
        key={`${publication.publisher}-${publication.title}-${publication.date}`}
      />
    ));

  return (
    <ul className="divide-y divide-line border-t border-line">
      {items}
    </ul>
  );
};

export default PublicationsList;

import React from 'react';

import Cards, { cardModeList } from '../shared/Cards';
import { Publication } from '../../types/Publication';
import PublicationPreview from './PublicationPreview';

type PublicationsListProps = {
  publications: Publication[],
};

const PublicationsList = (props: PublicationsListProps): React.ReactElement => {
  const { publications } = props;

  const publicationElements = publications
    .sort((publicationA, publicationB) => {
      const dateA = new Date(publicationA.date).getTime();
      const dateB = new Date(publicationB.date).getTime();
      return dateB - dateA;
    })
    .map((publication) => {
      return (
        <PublicationPreview
          publication={publication}
          key={publication.publisher + publication.title}
        />
      );
    });

  return (
    <Cards mode={cardModeList}>
      {publicationElements}
    </Cards>
  );
};

export default PublicationsList;

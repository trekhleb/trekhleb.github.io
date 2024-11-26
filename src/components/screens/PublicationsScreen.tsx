import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import Row from '../shared/Row';
import SEO from '../shared/SEO';
import { Publication, Publisher } from '../../types/Publication';
import PublicationsList from '../elements/PublicationsList';
import PublicationFilters from '../elements/PublicationFilters';

type PublicationsScreenProps = {
  publications: Publication[],
};

const PublicationsScreen = (props: PublicationsScreenProps): React.ReactElement => {
  const { publications } = props;

  const [publisher, setPublisher] = React.useState<Publisher | 'All'>('All');

  const filteredPublications = publications.filter((publication) => {
    if (publisher === 'All') {
      return true;
    }
    return publication.publisher === publisher;
  });

  const publicationsNum = publications.length;

  const onPublisherSelect = (selectedPublisher: Publisher): void => {
    setPublisher(selectedPublisher);
  };

  return (
    <PageLayout>
      <SEO
        title="Publications"
        description="Trekhleb's publications"
      />
      <Row>
        <PageHeader>Publications</PageHeader>
        <Badge className="ml-3 self-start">{publicationsNum}</Badge>
      </Row>
      <Row className="mb-6 justify-between">
        <PublicationFilters
          publications={publications}
          publisher={publisher}
          onPublisherSelect={onPublisherSelect}
        />
      </Row>
      <PublicationsList publications={filteredPublications} />
    </PageLayout>
  );
};

export default PublicationsScreen;

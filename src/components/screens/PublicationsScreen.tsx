import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import Row from '../shared/Row';
import SEO from '../shared/SEO';
import { Publication, PublicationTag, Publisher } from '../../types/Publication';
import PublicationsList from '../elements/PublicationsList';
import PublicationFilters from '../elements/PublicationFilters';

type PublicationsScreenProps = {
  publications: Publication[],
};

const PublicationsScreen = (props: PublicationsScreenProps): React.ReactElement => {
  const { publications } = props;

  const [publisher, setPublisher] = React.useState<Publisher | 'All'>('All');
  const [tag, setTag] = React.useState<PublicationTag | 'All'>('All');

  const filteredPublications = publications.filter((publication) => {
    const publisherMatches = publisher === 'All' || publication.publisher === publisher;
    const tagMatches = tag === 'All' || publication.tag === tag;
    return publisherMatches && tagMatches;
  });

  const publicationsNum = publications.length;

  const onPublisherSelect = (selectedPublisher: Publisher): void => {
    setPublisher(selectedPublisher);
  };

  const onTagSelect = (selectedTag: PublicationTag): void => {
    setTag(selectedTag);
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
          tag={tag}
          onPublisherSelect={onPublisherSelect}
          onTagSelect={onTagSelect}
        />
      </Row>
      <PublicationsList publications={filteredPublications} />
    </PageLayout>
  );
};

export default PublicationsScreen;

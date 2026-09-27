import React from 'react';

import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import SEO from '../shared/SEO';
import { Publication, PublicationTag, Publisher } from '../../types/Publication';
import PublicationsList from '../elements/PublicationsList';
import PublicationFilters from '../elements/PublicationFilters';
import { countCitations } from '../../utils/profile';

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
  const authoredNum = publications.filter((p) => p.tag === PublicationTag.Authored).length;
  const citationsNum = countCitations(publications);
  const description = `${publicationsNum} publications by and about Oleksii Trekhleb: `
    + `${authoredNum} authored articles, features in TechCrunch, JavaScript Weekly, KDnuggets and `
    + `Hacker News, ${citationsNum} citations in research papers and books, and reference docs.`;

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
        description={description}
      />
      <div className="mb-2 flex items-start gap-3">
        <PageHeader>Publications</PageHeader>
        <Badge className="mt-2">{publicationsNum}</Badge>
      </div>
      {/* The filters belong to the list: 32px below the title, 24px above the first row. */}
      <div className="mb-6">
        <PublicationFilters
          publications={publications}
          publisher={publisher}
          tag={tag}
          onPublisherSelect={onPublisherSelect}
          onTagSelect={onTagSelect}
        />
      </div>
      <PublicationsList publications={filteredPublications} />
    </PageLayout>
  );
};

export default PublicationsScreen;

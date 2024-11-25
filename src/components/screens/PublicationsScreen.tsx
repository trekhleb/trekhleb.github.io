import React from 'react';

import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import Row from '../shared/Row';
import SEO from '../shared/SEO';
import { Publication } from '../../types/Publication';
import PublicationsList from '../elements/PublicationsList';

type PublicationsScreenProps = {
  publications: Publication[],
};

const PublicationsScreen = (props: PublicationsScreenProps): React.ReactElement => {
  const { publications } = props;

  const publicationsNum = publications.length;

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
      <PublicationsList publications={publications} />
    </PageLayout>
  );
};

export default PublicationsScreen;

import React from 'react';

import DateRange from '../shared/DateRange';
import Card, { cardModeRow } from '../shared/Card';
import CardContent, { cardContentModeRow } from '../shared/CardContent';
import Tags from '../shared/Tags';
import CardTitle from '../shared/CardTitle';
import Row from '../shared/Row';
import { Publication } from '../../types/Publication';

type PublicationPreviewProps = {
  publication: Publication | null,
};

const PublicationPreview = (props: PublicationPreviewProps): React.ReactElement | null => {
  const { publication } = props;

  if (!publication) {
    return null;
  }

  const publisher = (
    <Tags itemClassName="" tags={[{ name: publication.publisher }]} />
  );

  const publicationDate = (
    <DateRange
      startDate={publication.date}
      className="text-xs text-gray-500"
    />
  );

  /* eslint-disable react/no-array-index-key */
  const publicationSummaryLines = publication.summary.map(
    (summaryLine: string | null, index: number) => (
      <p key={index}>
        {summaryLine}
      </p>
    ),
  );

  const publicationSummary = publicationSummaryLines ? (
    <div className="mb-3 font-light">
      {publicationSummaryLines}
    </div>
  ) : null;

  return (
    <Card mode={cardModeRow}>
      <CardContent mode={cardContentModeRow}>
        <CardTitle link={publication.link}>
          {publication.title}
        </CardTitle>
        <Row className="mb-3 justify-between">
          <div className="flex flex-row justify-center items-center">
            {publisher}
            <div className="text-gray-500 text-sm mr-3 ml-3">•</div>
            {publicationDate}
          </div>
        </Row>
        {publicationSummary}
      </CardContent>
    </Card>
  );
};

export default PublicationPreview;

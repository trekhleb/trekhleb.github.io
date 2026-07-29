import React from 'react';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';

import Badge from '../shared/Badge';
import DateRange from '../shared/DateRange';
import Card, { cardModeRow } from '../shared/Card';
import CardContent, { cardContentModeRow } from '../shared/CardContent';
import CardTitle from '../shared/CardTitle';
import Row from '../shared/Row';
import { Publication } from '../../types/Publication';
import Publisher from '../shared/Publisher';
import { publishers } from '../../data/publishers';
import Tooltip from '../shared/Tooltip';

type PublicationPreviewProps = {
  publication: Publication | null;
};

const PublicationPreview = (
  props: PublicationPreviewProps,
): React.ReactElement | null => {
  const { publication } = props;

  if (!publication) {
    return null;
  }

  /* eslint-disable react/no-array-index-key */
  const publicationSummaryLines = publication.summary.map(
    (summaryLine: string | null, index: number) => (
      <p key={index}>{summaryLine}</p>
    ),
  );

  const publicationSummary = publicationSummaryLines ? (
    <div className="mb-3 font-light">{publicationSummaryLines}</div>
  ) : null;

  const publisherDetails = publishers[publication.publisher].description ? (
    <div className="ml-2">
      <Tooltip content={publishers[publication.publisher].description}>
        <FaInfoCircle />
      </Tooltip>
    </div>
  ) : null;

  return (
    <Card mode={cardModeRow}>
      <CardContent mode={cardContentModeRow}>
        <CardTitle link={publication.link}>{publication.title}</CardTitle>
        <Row className="mb-3 justify-between">
          <div className="flex flex-row flex-wrap items-center gap-y-1">
            <Publisher
              publisher={publication.publisher}
              publisherLogo={publishers[publication.publisher].logo}
            />
            {publisherDetails}
            <div className="text-gray-500 text-sm mr-3 ml-3">•</div>
            <DateRange
              startDate={publication.date}
              className="text-xs text-gray-500"
            />
            <div className="text-gray-500 text-sm mr-3 ml-3">•</div>
            <Badge className="whitespace-nowrap text-gray-700">
              {publication.tag}
            </Badge>
          </div>
        </Row>
        {publicationSummary}
      </CardContent>
    </Card>
  );
};

export default PublicationPreview;

import React from 'react';
import { FiInfo } from '@react-icons/all-files/fi/FiInfo';

import Badge from '../shared/Badge';
import DateRange from '../shared/DateRange';
import HyperLink from '../shared/HyperLink';
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

  const publicationSummary = publicationSummaryLines.length ? (
    <div className="mt-2 text-[15px] leading-relaxed text-muted">{publicationSummaryLines}</div>
  ) : null;

  const publisherData = publishers[publication.publisher];

  const publisherDetails = publisherData?.description ? (
    <Tooltip content={publisherData.description} label={`About ${publication.publisher}`}>
      <FiInfo size={15} aria-hidden="true" />
    </Tooltip>
  ) : null;

  return (
    <li className="py-6">
      <h2 className="text-[17px] font-semibold leading-snug">
        <HyperLink link={publication.link} className="text-fg" hoverClassName="hover:text-accent">
          {publication.title}
        </HyperLink>
      </h2>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        <Publisher
          publisher={publication.publisher}
          publisherLogo={publisherData?.logo}
        />
        {publisherDetails}
        <span aria-hidden="true">•</span>
        <DateRange
          startDate={publication.date}
          className="text-xs text-muted"
        />
        <span aria-hidden="true">•</span>
        <Badge className="whitespace-nowrap">
          {publication.tag}
        </Badge>
      </div>
      {publicationSummary}
    </li>
  );
};

export default PublicationPreview;

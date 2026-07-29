import React from 'react';
import Row from '../shared/Row';
import Select, { SelectOption } from '../shared/Select';
import { Publication, Publisher } from '../../types/Publication';

type PublisherStat = Partial<Record<Publisher, number>>

type PublicationFiltersProps = {
  publications: Publication[],
  publisher?: Publisher | 'All',
  onPublisherSelect: (publisher: Publisher) => void,
};

const PublicationFilters = (props: PublicationFiltersProps): React.ReactElement => {
  const { publications, publisher, onPublisherSelect } = props;

  const publishersStat: PublisherStat = publications
    .reduce((stat, publication): PublisherStat => {
      if (stat[publication.publisher] === undefined) {
        // eslint-disable-next-line no-param-reassign
        stat[publication.publisher] = 0;
      }
      // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
      stat[publication.publisher]! += 1;
      return stat;
    }, {} as PublisherStat);

  const publisherOptions: SelectOption[] = [
    {
      value: 'All',
      label: `All (${publications.length})`,
    },
    ...(Object.keys(publishersStat) as Publisher[])
      .sort((publisherA: Publisher, publisherB: Publisher) => (
        publisherA.localeCompare(publisherB, 'en', { sensitivity: 'base' })
      ))
      .map((currPublisher: Publisher): SelectOption => ({
        value: currPublisher,
        label: `${currPublisher} (${publishersStat[currPublisher]})`,
      })),
  ];

  const onPublisherChange = (selectedPublisher: string): void => {
    onPublisherSelect(selectedPublisher as Publisher);
  };

  return (
    <div>
      <Row>
        <div className="text-sm text-gray-500 mr-2">
          Publisher:
        </div>
        <Select
          options={publisherOptions}
          value={publisher}
          onChange={onPublisherChange}
          ariaLabel="Filter publications by publisher"
        />
      </Row>
    </div>
  );
};

export default PublicationFilters;

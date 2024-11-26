import React, { ChangeEvent } from 'react';
import Row from '../shared/Row';
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

  const publisherOptions = (Object.keys(publishersStat) as Publisher[])
    .sort()
    .map((currPublisher: Publisher) => {
      return (
        <option key={currPublisher} value={currPublisher}>
          {currPublisher} ({publishersStat[currPublisher]})
        </option>
      );
    });

  const onPublisherChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedPublisher = event.target.value as Publisher;
    onPublisherSelect(selectedPublisher);
  };

  return (
    <div>
      <Row>
        <div className="text-sm text-gray-500 mr-1">
          Publisher:
        </div>
        <div>
          <select onChange={onPublisherChange} defaultValue={publisher} className="text-sm">
            <option value="All">
              All ({publications.length})
            </option>
            {publisherOptions}
          </select>
        </div>
      </Row>
    </div>
  );
};

export default PublicationFilters;

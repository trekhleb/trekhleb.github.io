import React from 'react';
import Row from '../shared/Row';
import Select, { SelectOption } from '../shared/Select';
import { Publication, PublicationTag, Publisher } from '../../types/Publication';

type PublisherStat = Partial<Record<Publisher, number>>

type TagStat = Partial<Record<PublicationTag, number>>

type PublicationFiltersProps = {
  publications: Publication[],
  publisher?: Publisher | 'All',
  tag?: PublicationTag | 'All',
  onPublisherSelect: (publisher: Publisher) => void,
  onTagSelect: (tag: PublicationTag) => void,
};

const PublicationFilters = (props: PublicationFiltersProps): React.ReactElement => {
  const {
    publications, publisher, tag, onPublisherSelect, onTagSelect,
  } = props;

  // Faceted counts: each filter's numbers reflect the selection made in the other filter,
  // so the counts always show how many publications the user will actually see.
  const tagFilteredPublications = publications.filter(
    (publication) => !tag || tag === 'All' || publication.tag === tag,
  );
  const publisherFilteredPublications = publications.filter(
    (publication) => !publisher || publisher === 'All' || publication.publisher === publisher,
  );

  const publishersStat: PublisherStat = tagFilteredPublications
    .reduce((stat, publication): PublisherStat => {
      if (stat[publication.publisher] === undefined) {
        // eslint-disable-next-line no-param-reassign
        stat[publication.publisher] = 0;
      }
      // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
      stat[publication.publisher]! += 1;
      return stat;
    }, {} as PublisherStat);

  const tagsStat: TagStat = publisherFilteredPublications
    .reduce((stat, publication): TagStat => {
      if (stat[publication.tag] === undefined) {
        // eslint-disable-next-line no-param-reassign
        stat[publication.tag] = 0;
      }
      // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
      stat[publication.tag]! += 1;
      return stat;
    }, {} as TagStat);

  const publisherOptions: SelectOption[] = [
    {
      value: 'All',
      label: `All (${tagFilteredPublications.length})`,
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

  // Tag options follow the PublicationTag enum declaration order.
  const tagOptions: SelectOption[] = [
    {
      value: 'All',
      label: `All (${publisherFilteredPublications.length})`,
    },
    ...Object.values(PublicationTag)
      .filter((currTag: PublicationTag) => tagsStat[currTag] !== undefined)
      .map((currTag: PublicationTag): SelectOption => ({
        value: currTag,
        label: `${currTag} (${tagsStat[currTag]})`,
      })),
  ];

  const onPublisherChange = (selectedPublisher: string): void => {
    onPublisherSelect(selectedPublisher as Publisher);
  };

  const onTagChange = (selectedTag: string): void => {
    onTagSelect(selectedTag as PublicationTag);
  };

  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
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
      <Row>
        <div className="text-sm text-gray-500 mr-2">
          Type:
        </div>
        <Select
          options={tagOptions}
          value={tag}
          onChange={onTagChange}
          ariaLabel="Filter publications by type"
        />
      </Row>
    </div>
  );
};

export default PublicationFilters;

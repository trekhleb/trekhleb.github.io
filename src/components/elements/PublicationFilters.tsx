import React from 'react';
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

  const currentTag = tag || 'All';

  // Both filters are the same pill-shaped dropdown: stacked with aligned labels on phones
  // (the group wrappers dissolve into the grid via `contents`), side by side on wider screens.
  // Proximity does the grouping: 8px between a label and its control, 40px between groups.
  return (
    <div className="grid grid-cols-[max-content_1fr] items-center gap-x-3 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
      <div className="contents sm:flex sm:items-center sm:gap-2">
        <span className="text-sm text-muted">Type:</span>
        <div className="min-w-0">
          <Select
            options={tagOptions}
            value={currentTag}
            onChange={onTagChange}
            ariaLabel="Filter publications by type"
            fullWidth
          />
        </div>
      </div>
      <div className="contents sm:flex sm:items-center sm:gap-2">
        <span className="text-sm text-muted">Publisher:</span>
        <div className="min-w-0">
          <Select
            options={publisherOptions}
            value={publisher}
            onChange={onPublisherChange}
            ariaLabel="Filter publications by publisher"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default PublicationFilters;

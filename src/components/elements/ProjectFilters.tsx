import React, { ChangeEvent } from 'react';
import Row from '../shared/Row';

export type SortOption = 'startDateAsc' | 'startDateDesc' | 'starsDesc';

export const sortByStartDateAsc: SortOption = 'startDateAsc';
export const sortByStartDateDesc: SortOption = 'startDateDesc';
export const sortByStarsDesc: SortOption = 'starsDesc';

type Sorter = {
  title: string,
  hidden?: boolean,
}

type Sorters = Record<SortOption, Sorter>;

const sorters: Sorters = {
  [sortByStartDateDesc]: {
    title: '➘ start date',
  },
  [sortByStartDateAsc]: {
    title: '➚ start date',
    hidden: true,
  },
  [sortByStarsDesc]: {
    title: '➘ stars',
  },
};

export const supportedSortOptions: SortOption[] = Object
  .keys(sorters)
  // @ts-ignore
  .filter((sortOption: SortOption) => !sorters[sortOption].hidden);

type ProjectFiltersProps = {
  sortBy: SortOption,
  onSort: (sortKey: SortOption) => void,
};

const ProjectFilters = (props: ProjectFiltersProps): React.ReactElement => {
  const { onSort, sortBy } = props;

  const sorterOptions = Object.keys(sorters)
    .filter((sorterKey: string) => {
      const sorter = sorters[sorterKey as SortOption];
      return !sorter?.hidden;
    })
    .map((sorterKey: string) => {
      const sorter = sorters[sorterKey as SortOption];
      return (
        <option key={sorterKey} value={sorterKey}>
          {sorter.title}
        </option>
      );
    });

  const onSortChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedKey: SortOption = event.target.value as SortOption;
    onSort(selectedKey);
  };

  return (
    <div>
      <Row>
        <div className="text-sm text-gray-500 mr-1">
          Sort by:
        </div>
        <div>
          <select onChange={onSortChange} defaultValue={sortBy} className="text-sm">
            {sorterOptions}
          </select>
        </div>
      </Row>
    </div>
  );
};

export default ProjectFilters;

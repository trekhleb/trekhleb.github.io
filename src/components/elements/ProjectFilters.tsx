import React from 'react';
import Row from '../shared/Row';
import Select, { SelectOption } from '../shared/Select';

export type SortOption = 'startDateAsc' | 'startDateDesc' | 'starsDesc' | 'achievementsDesc';

export const sortByStartDateAsc: SortOption = 'startDateAsc';
export const sortByStartDateDesc: SortOption = 'startDateDesc';
export const sortByStarsDesc: SortOption = 'starsDesc';
export const sortByAchievementsDesc: SortOption = 'achievementsDesc';

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
  [sortByAchievementsDesc]: {
    title: '➘ achievements',
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

  const sorterOptions: SelectOption[] = Object.keys(sorters)
    .filter((sorterKey: string) => {
      const sorter = sorters[sorterKey as SortOption];
      return !sorter?.hidden;
    })
    .map((sorterKey: string): SelectOption => ({
      value: sorterKey,
      label: sorters[sorterKey as SortOption].title,
    }));

  const onSortChange = (selectedKey: string): void => {
    onSort(selectedKey as SortOption);
  };

  return (
    <div>
      <Row>
        <div className="text-sm text-gray-500 mr-2">
          Sort by:
        </div>
        <Select
          options={sorterOptions}
          value={sortBy}
          onChange={onSortChange}
          ariaLabel="Sort projects"
        />
      </Row>
    </div>
  );
};

export default ProjectFilters;

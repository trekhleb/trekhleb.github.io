import React from 'react';
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
    title: 'Newest',
  },
  [sortByStartDateAsc]: {
    title: 'Oldest',
    hidden: true,
  },
  [sortByStarsDesc]: {
    title: 'Most starred',
  },
  [sortByAchievementsDesc]: {
    title: 'Most achievements',
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

// Sort order control: the same pill-shaped dropdown used by every filter on the site.
// The `?sort=` URL values are unchanged.
const ProjectFilters = (props: ProjectFiltersProps): React.ReactElement => {
  const { onSort, sortBy } = props;

  const options: SelectOption[] = (Object.keys(sorters) as SortOption[])
    .filter((sorterKey: SortOption) => !sorters[sorterKey]?.hidden)
    .map((sorterKey: SortOption): SelectOption => ({
      value: sorterKey,
      label: sorters[sorterKey].title,
    }));

  // Same proximity rule as the publication filters: 8px between the label and its control.
  return (
    <div className="grid grid-cols-[max-content_1fr] items-center gap-x-3 sm:flex sm:gap-2">
      <span className="text-sm text-muted">Sort by:</span>
      <Select
        options={options}
        value={sortBy}
        onChange={(value: string): void => onSort(value as SortOption)}
        ariaLabel="Sort projects"
        fullWidth
      />
    </div>
  );
};

export default ProjectFilters;

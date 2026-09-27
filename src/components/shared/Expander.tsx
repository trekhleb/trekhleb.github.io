import React, { useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
type ExpanderProps = {
  items: any[],
  onRender: (item: any, index: number) => React.ReactElement,
  toHide?: (item: any, index: number) => boolean,
  className?: string,
  itemClassName?: string,
  expandable?: boolean,
};

// Renders a wrapping list of items, hiding some behind a "+ more" button.
const Expander = (props: ExpanderProps): React.ReactElement | null => {
  const {
    items,
    onRender,
    className = '',
    itemClassName = '',
    toHide = (): boolean => false,
    expandable = true,
  } = props;

  const [expanded, setExpanded] = useState(false);

  if (!items || !items.length) {
    return null;
  }

  const toggle = (): void => {
    setExpanded(!expanded);
  };

  let somethingToHide = false;

  const filteredItems = items
    .filter((item: any, index: number) => {
      const hide = !toHide(item, index);
      if (!hide) {
        somethingToHide = true;
      }
      return expanded || hide;
    })
    .map((item: any, index: number) => onRender(item, index))
    .map((child: React.ReactElement, index: number) => {
      const itemDefaultClasses = 'flex flex-row items-center';
      const itemClasses = `${itemDefaultClasses} ${itemClassName}`;
      /* eslint-disable react/no-array-index-key */
      return (
        <li className={itemClasses} key={index}>
          {child}
        </li>
      );
    });

  const moreLessButton = somethingToHide && expandable ? (
    <li className="flex flex-row items-center">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={expanded}
        title={expanded ? 'Show less' : 'Show more'}
        className="inline-flex h-6 items-center rounded px-1 text-xs font-medium text-muted transition-colors hover:text-fg"
      >
        {expanded ? '- less' : '+ more'}
      </button>
    </li>
  ) : null;

  const defaultClasses = 'flex flex-row flex-wrap items-center gap-2';
  const classes = `${defaultClasses} ${className}`;

  return (
    <ul className={classes}>
      {filteredItems}
      {moreLessButton}
    </ul>
  );
};

export default Expander;

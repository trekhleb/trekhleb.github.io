import React from 'react';

import { Divider } from './Divider';
import { Section as SectionT } from '../types/section';
import { SectionContext, SectionContextT } from '../contexts/section';
import { SectionsContext } from '../contexts/sections';

type SectionProps = SectionT & { children: React.ReactNode }

export function Section(props: SectionProps): React.ReactElement {
  const { children, ...section } = props;

  const sectionContext = React.useMemo<SectionContextT>(
    () => (section),
    [section],
  );

  const sectionsContext = React.useContext(SectionsContext);
  React.useEffect(() => {
    sectionsContext.setSection(section);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionContext.Provider value={sectionContext}>
      {children}
      <Divider />
    </SectionContext.Provider>
  );
}

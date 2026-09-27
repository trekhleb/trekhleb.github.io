import React from 'react';

import { Achievement } from '../../types/Achievement';
import H, { hLevel } from '../shared/H';
import Badge from '../shared/Badge';
import Cards from '../shared/Cards';
import ProjectAchievement from './ProjectAchievement';

type ProjectAchievementsProps = {
  achievements: Achievement[] | null | undefined,
};

const ProjectAchievements = (props: ProjectAchievementsProps): React.ReactElement | null => {
  const { achievements } = props;

  if (!achievements || !achievements.length) {
    return null;
  }

  const achievementsItems = achievements.map((achievement: Achievement, idx: number) => {
    return (
      <ProjectAchievement
        achievement={achievement}
        // eslint-disable-next-line react/no-array-index-key
        key={idx}
      />
    );
  });

  return (
    <section className="mt-14" aria-labelledby="achievements">
      <div className="mb-6 flex items-start gap-3">
        <H level={hLevel.h2} id="achievements">
          Achievements
        </H>
        <Badge className="mt-1">
          {achievements.length}
        </Badge>
      </div>
      <Cards>
        {achievementsItems}
      </Cards>
    </section>
  );
};

export default ProjectAchievements;

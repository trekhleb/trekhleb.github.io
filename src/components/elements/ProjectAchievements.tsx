import React from 'react';

import { Achievement } from '../../types/Achievement';
import H, { hLevel } from '../shared/H';
import Row from '../shared/Row';
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
    <div className="mt-6 mb-6">
      <Row className="mb-3">
        <H level={hLevel.h2} id="achievements">
          Achievements
        </H>
        <Badge className="ml-3 self-start">
          {achievements.length}
        </Badge>
      </Row>
      <Cards>
        {achievementsItems}
      </Cards>
    </div>
  );
};

export default ProjectAchievements;

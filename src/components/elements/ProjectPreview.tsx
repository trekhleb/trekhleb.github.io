import React from 'react';

import { Project as ProjectType } from '../../types/Project';
import DateRange from '../shared/DateRange';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';

type ProjectPreviewProps = {
  project: ProjectType | null,
};

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
  const { project } = props;

  if (!project) {
    return null;
  }

  const projectName = (
    <div>
      {project.name}
    </div>
  );

  const projectTags = (project?.tags || []).map((tag) => {
    if (!tag) {
      return null;
    }
    return (
      <span key={tag.name}>{tag.name}</span>
    );
  });

  const projectDates = (
    <DateRange
      startDate={project.startDate}
      endDate={project.endDate}
    />
  );

  /* eslint-disable react/no-array-index-key */
  const projectDescriptionLines = project.description ? project.description.map(
    (descriptionLine: string | null, index: number) => (
      <p key={index}>
        {descriptionLine}
      </p>
    ),
  ) : null;

  const projectDescription = project.description ? (
    <div>
      {projectDescriptionLines}
    </div>
  ) : null;

  return (
    <Card>
      <CardContent>
        {projectName}
        {projectDates}
        {projectDescription}
        {projectTags}
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;

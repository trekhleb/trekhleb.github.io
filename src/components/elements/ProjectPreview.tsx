import * as React from 'react';

import { Project as ProjectType } from '../../types/Project';

type ProjectPreviewProps = {
  project: ProjectType,
};

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement => {
  const { project } = props;

  const projectName = (
    <div>
      {project.name}
    </div>
  );

  const projectTags = project.tags.map((tag) => {
    return (
      <span key={tag.name}>{tag.name}</span>
    );
  });

  return (
    <div>
      {projectName}
      <div>
        {projectTags}
      </div>
    </div>
  );
};

export default ProjectPreview;

import * as React from 'react';

import { Project as ProjectType } from '../../types/Project';

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

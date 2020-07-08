// @flow
import React from 'react';
import type { Node } from 'react';

import type { ProjectType } from '../../types/ProjectType';
import Icon from '../shared/Icon';
import { iconKeys } from '../../icons';
import Link from '../shared/Link';

type ProjectPreviewProps = {
  project: ProjectType,
};

const ProjectPreview = (props: ProjectPreviewProps): Node => {
  const { project } = props;

  const projectName = (
    <div className="mb-3 text-lg">
      {project.name}
    </div>
  );

  const projectLink = project.url ? (
    <div className="mb-3">
      <Link
        to={project.url}
        startEnhancer={
          <Icon iconKey={iconKeys.externalLink} className="mr-1 w-4 h-4" />
        }
      >
        <span>See the project</span>
      </Link>
    </div>
  ) : null;

  /* eslint-disable react/no-array-index-key */
  const projectDescriptionLines = project.description
    ? project.description.map((descriptionLine: string, index: number) => (
      <p className="mb-3 text-sm font-light" key={index}>
        {descriptionLine}
      </p>
    ))
    : null;

  const projectDescription = project.description ? (
    <div>
      {projectDescriptionLines}
    </div>
  ) : null;

  return (
    <div className="mb-12">
      {projectName}
      {projectLink}
      {projectDescription}
    </div>
  );
};

export default ProjectPreview;

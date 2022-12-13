import { useState } from 'react';

import DefaultLayout from '~/components/layout/DefaultLayout';
import { useProjects } from '~/hooks';
import IndividualProject from '~/components/IndividualProject';

function ActiveProject() {
  const { projects, archivedProjects } = useProjects();
  const [showActiveProject, setShowActiveProject] = useState(true);
  const [showArchivedProject, setShowArchivedProject] = useState(false);

  return (
    <DefaultLayout>
      <div className="project-type">
        <h3>Projects</h3>
        <span className="project-type__select">
          <button
            className={showActiveProject ? 'active' : undefined}
            onClick={() => {
              setShowArchivedProject(!showArchivedProject);
              setShowActiveProject(!showActiveProject);
            }}
          >
            Active
          </button>
          <button
            className={showArchivedProject ? 'active' : undefined}
            onClick={() => {
              setShowArchivedProject(!showArchivedProject);
              setShowActiveProject(!showActiveProject);
            }}
          >
            Archived
          </button>
        </span>
        {showActiveProject && (
          <ul className="project-type__active">
            {projects.map((project) => (
              <li className="sidebar__project" key={project.projectID}>
                <div className="sidebar__project-content">
                  <IndividualProject project={project} />
                </div>
              </li>
            ))}
          </ul>
        )}
        {showArchivedProject && (
          <ul className="project-type__archived">
            {archivedProjects.map((project) => (
              <li className="sidebar__project" key={project.projectID}>
                <div className="sidebar__project-content">
                  <IndividualProject project={project} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DefaultLayout>
  );
}

export default ActiveProject;

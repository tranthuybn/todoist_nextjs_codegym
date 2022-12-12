import Link from 'next/link';
import { useState } from 'react';
import { mainProjects } from '~/constants';
import { useSelectedProjectValue } from '~/context';
function MainProjects() {
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();

  return (
    <div className="main-project">
      {mainProjects.length > 0 && (
        <ul className="main-project__inner">
          {mainProjects.map((project) => {
            return (
              <li
                className={selectedProject === project.key ? 'active' : undefined}
                key={project.key}
              >
                <div
                  role="button"
                  onClick={() => {
                    setSelectedProject(project.key);
                  }}
                >
                  <Link href={`/app/projects/${project.key}`}>
                    <span className={`${project.key}`}>
                      <project.icon />
                    </span>
                    <span>{project.name}</span>
                    <span className="totalTask">1</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default MainProjects;

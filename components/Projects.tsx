import IndividualProject from './IndividualProject';
import { useSelectedProjectValue, useProjectsValue } from '~/context';

function Projects() {
  const { projects } = useProjectsValue();
  const { selectedProject } = useSelectedProjectValue();
  return (
    <ul className="sidebar__projects">
      {projects.length > 0 && (
        <>
          {projects.map((project: any) => (
            <li
              className={
                selectedProject === project.projectID
                  ? 'active sidebar__project'
                  : 'sidebar__project'
              }
              key={project.projectID}
            >
              <div className="sidebar__project-content">
                <IndividualProject project={project} />
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}

export default Projects;

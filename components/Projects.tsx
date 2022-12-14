import IndividualProject from './IndividualProject';
import { useSelectedProjectValue, useProjectsValue } from '~/context';
import { Project } from '~/interface';
function Projects() {
  const { projects } = useProjectsValue();
  const { selectedProject } = useSelectedProjectValue();
  return (
    <ul className="sidebar__projects">
      {projects.length > 0 && (
        <>
          {projects.map((project: Project) => (
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

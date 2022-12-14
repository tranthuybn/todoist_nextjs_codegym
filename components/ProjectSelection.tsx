import { useProjectsValue } from '~/context';
import { VscCircleFilled } from 'react-icons/vsc';
import { Project, ProjectSelectionProps } from '~/interface';

function ProjectSelection({
  setProject = (project: Project) => {},
  showProjectSelection,
  setShowProjectSelection,
}: ProjectSelectionProps) {
  const { projects } = useProjectsValue();

  return (
    <div>
      {projects && showProjectSelection && (
        <>
          <span
            className="project-selection__overlay"
            onClick={() => setShowProjectSelection(!showProjectSelection)}
          ></span>
          <div className="project-selection">
            <ul className="project-selection__list">
              {projects.map((project: Project) => (
                <li key={project.projectID}>
                  <div
                    onClick={() => {
                      setProject(project);
                    }}
                    role="button"
                  >
                    <span className="project-selection__dot">
                      <VscCircleFilled />
                    </span>
                    <span className="project-selection__project-name">{project.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectSelection;

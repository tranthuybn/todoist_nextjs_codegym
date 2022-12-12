import { useProjectsValue } from '~/context';
import { VscCircleFilled } from 'react-icons/vsc';

function ProjectSelection({ setProject, showProjectSelection, setShowProjectSelection }: any) {
  const { projects } = useProjectsValue();

  return (
    <div>
      {projects && showProjectSelection && (
        <div className="project-selection">
          <ul className="project-selection__list">
            {projects.map((project: any) => (
              <li key={project.projectID}>
                <div
                  onClick={() => {
                    setProject(project.projectID);
                    setShowProjectSelection(false);
                  }}
                  onKeyDown={() => {
                    setProject(project.projectID);
                    setShowProjectSelection(false);
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
      )}
    </div>
  );
}

export default ProjectSelection;

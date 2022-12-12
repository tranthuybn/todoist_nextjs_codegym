import Link from 'next/link';
import { useState } from 'react';
import { VscCircleFilled, VscEllipsis, VscClose, VscTrash, VscArchive } from 'react-icons/vsc';
import { useProjectsValue, useSelectedProjectValue } from '~/context';
import { deleteProject, archiveProject } from '~/custom/project';
function IndividualProject({ project }: any) {
  const [showMenuSetting, setShowMenuSetting] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();
  const [showConfirm, setShowConfirm] = useState(false);
  const handleDeleteProject = async () => {
    await deleteProject(project.docId);
    setProjects([...projects]);
    setSelectedProject('today');
  };
  const handleArchiveProject = () => {
    archiveProject(project.docId);
  };
  return (
    <>
      <Link className="sidebar__project-content-link" href={`/app/projects/${project.projectID}`}>
        <div onClick={() => setSelectedProject(project.projectID)}>
          <span className="sidebar__dot">
            <VscCircleFilled />
          </span>
          <span className="sidebar__project-name">{project.name}</span>
        </div>
      </Link>
      <span
        className="sidebar__project-content-setting-icon"
        onClick={() => {
          setShowMenuSetting(!showMenuSetting);
        }}
      >
        <VscEllipsis />
        {showMenuSetting && (
          <ul className="project-menu-setting">
            <li>
              <div role="button" onClick={() => setShowConfirm(!showConfirm)}>
                <span>
                  <VscTrash />
                </span>
                <span>Delete project</span>
              </div>
            </li>
            <li>
              <div role="button" onClick={handleArchiveProject}>
                <span>
                  <VscArchive />
                </span>
                <span>Archive Project</span>
              </div>
            </li>
          </ul>
        )}
      </span>
      {showConfirm && (
        <div className="project-delete-modal">
          <span className="project-delete-modal__inner">
            <h3>Delete project?</h3>
            <p>{`Are you sure you want to delete ${project.name}`}</p>
            <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            <button onClick={handleDeleteProject}>Delete</button>
            <i onClick={() => setShowConfirm(!showConfirm)} className="project-delete-modal__close">
              <VscClose />
            </i>
          </span>
        </div>
      )}
    </>
  );
}

export default IndividualProject;

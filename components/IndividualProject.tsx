import Link from 'next/link';
import { useState } from 'react';
import { VscCircleFilled, VscEllipsis, VscClose, VscTrash, VscArchive } from 'react-icons/vsc';
import { useProjectsValue, useSelectedProjectValue } from '~/context';
import { deleteProject, archiveProject } from '~/custom/project';
import { Project } from '~/interface';
function IndividualProject({ project }: { project: Project }) {
  const [showMenuSetting, setShowMenuSetting] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmArchive, setShowConfirmArchive] = useState(false);
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
          <>
            <span
              className="project-menu-setting__overlay"
              onClick={() => setShowMenuSetting(!showMenuSetting)}
            ></span>
            <ul className="project-menu-setting">
              <li>
                <div role="button" onClick={() => setShowConfirmDelete(!showConfirmDelete)}>
                  <span>
                    <VscTrash />
                  </span>
                  <span>Delete project</span>
                </div>
              </li>
              <li>
                <div role="button" onClick={() => setShowConfirmArchive(!showConfirmArchive)}>
                  <span>
                    <VscArchive />
                  </span>
                  <span>Archive Project</span>
                </div>
              </li>
            </ul>
          </>
        )}
      </span>
      {showConfirmDelete && (
        <div className="project-custom-modal">
          <span
            className="project-custom-modal__overlay"
            onClick={() => setShowConfirmDelete(!showConfirmDelete)}
          ></span>
          <span className="project-custom-modal__inner">
            <h3>Delete project?</h3>
            <p>{`Are you sure you want to delete ${project.name}`}</p>
            <span onClick={() => setShowConfirmDelete(!showConfirmDelete)}>Cancel</span>
            <button onClick={handleDeleteProject}>Delete</button>
            <i
              onClick={() => setShowConfirmDelete(!showConfirmDelete)}
              className="project-custom-modal__close"
            >
              <VscClose />
            </i>
          </span>
        </div>
      )}
      {showConfirmArchive && (
        <div className="project-custom-modal">
          <span
            className="project-custom-modal__overlay"
            onClick={() => setShowConfirmArchive(!showConfirmArchive)}
          ></span>
          <span className="project-custom-modal__inner">
            <h3>Archived project?</h3>
            <p>{`Are you sure you want to archive ${project.name}`}</p>
            <span onClick={() => setShowConfirmArchive(!showConfirmArchive)}>Cancel</span>
            <button onClick={handleArchiveProject}>Archive</button>
            <i
              onClick={() => setShowConfirmArchive(!showConfirmArchive)}
              className="project-custom-modal__close"
            >
              <VscClose />
            </i>
          </span>
        </div>
      )}
    </>
  );
}

export default IndividualProject;

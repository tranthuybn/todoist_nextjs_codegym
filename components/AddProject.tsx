import { useState } from 'react';
import { VscCircleFilled } from 'react-icons/vsc';
import { addProject } from '~/custom/project';
import { generatePushId } from '~/check';
import { useProjectsValue } from '~/context';
function AddProject({
  showAddProject,
  setShowAddProject,
}: {
  showAddProject: boolean;
  setShowAddProject: any;
}) {
  const [projectName, setProjectName] = useState('');
  const { projects, setProjects } = useProjectsValue();
  const projectID = generatePushId();
  const handleAddProject = async () => {
    await addProject(projectName, projectID);
    setProjects([...projects]);
    setProjectName('');
    setShowAddProject(false);
  };
  return (
    <div className="add-project">
      <div className="add-project__overlay">
        <div onClick={() => setShowAddProject(false)} className="add-project__modal"></div>
        <div className="add-project__inner">
          <h2>Add Project</h2>
          <div className="add-project__inner-content">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                type="text"
                placeholder=""
                className="add-project__content"
              />
            </div>
            <div className="form-field">
              <label htmlFor="pick-color">Color</label>
              <button>
                <VscCircleFilled />
                Charcoal
                {/* <ul>
                  <li>
                    <span className="">
                      <VscCircleFilled />
                    </span>
                    <span className="">Red</span>
                  </li>
                </ul> */}
              </button>
            </div>
          </div>
          <div className="add-project__inner-footer">
            <button
              onClick={() => setShowAddProject(!showAddProject)}
              className="add-project__cancel"
            >
              Cancel
            </button>
            <button
              disabled={!projectName}
              onClick={() => handleAddProject()}
              className="add-project__submit"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProject;

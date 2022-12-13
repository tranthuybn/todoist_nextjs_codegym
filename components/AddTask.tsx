import moment from 'moment';
import { firebase } from '~/firebase';
import { VscAdd } from 'react-icons/vsc';
import React, { useState } from 'react';
import { VscCircleFilled } from 'react-icons/vsc';
import { FaRegCalendarAlt } from 'react-icons/fa';

import ProjectSelection from './ProjectSelection';
import TaskDate from './TaskDate';
import { useSelectedProjectValue } from '~/context';
import { projectInit } from '~/constants';
import { IProject } from '~/interface';

function AddTask({ shouldShowAddTask = true, showQuickAddTask, setShowQuickAddTask }: any) {
  const [showAddTaskMain, setShowAddTaskMain] = useState(false);
  const [showAddTask, setShowAddTask] = useState(true);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState<IProject>({ ...projectInit });
  const [taskDate, setTaskDate] = useState('');
  const [showProjectSelection, setShowProjectSelection] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const { selectedProject } = useSelectedProjectValue();
  const addTask = () => {
    const projectID = project.projectID || selectedProject;
    let collatedDate = '';
    if (projectID === 'today') {
      collatedDate = moment().format('DD/MM/YYYY');
    }
    return (
      task &&
      projectID &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          archived: false,
          projectID,
          task,
          description,
          date: collatedDate || taskDate,
          userID: 'hT3j87FMR6M&t',
        })
        .then(() => {
          setTask('');
          setProject({ ...projectInit });
          setDescription('');
          setShowProjectSelection(false);
          setShowAddTask(!showAddTask);
        })
    );
  };
  return (
    <div className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}>
      {showAddTask && shouldShowAddTask && (
        <div
          className="add-task__shallow"
          onClick={() => {
            setShowAddTask(!showAddTask);
            setShowAddTaskMain(!showAddTaskMain);
          }}
        >
          <span className="add-task__plus">
            <VscAdd />
          </span>
          <span className="add-task__text">Add task</span>
        </div>
      )}

      {(showAddTaskMain || showQuickAddTask) && (
        <div className="add-task__main">
          <input
            className="add-task__content"
            type="text"
            placeholder="Task name"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            className="add-task__description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="add-task__locate">
            <button
              className="add-task__project"
              onClick={() => setShowProjectSelection(!showProjectSelection)}
            >
              <span>
                <VscCircleFilled />
              </span>

              <span>{project.name ? project.name : 'Project'}</span>
              <ProjectSelection
                setProject={setProject}
                showProjectSelection={showProjectSelection}
                setShowProjectSelection={setShowProjectSelection}
              />
            </button>
            <button className="add-task__date" onClick={() => setShowTaskDate(!showTaskDate)}>
              <span>
                <FaRegCalendarAlt />
              </span>
              <span>{taskDate ? taskDate : 'Due date'}</span>
            </button>
            <TaskDate
              setTaskDate={setTaskDate}
              showTaskDate={showTaskDate}
              setShowTaskDate={setShowTaskDate}
            />
          </div>

          <div>
            <button
              className="add-task__cancel"
              onClick={() => {
                setShowAddTask(!showAddTask);
                setShowAddTaskMain(!showAddTaskMain);
                showQuickAddTask ? setShowQuickAddTask(!showQuickAddTask) : undefined;
              }}
            >
              Cancel
            </button>
            <button
              disabled={!task}
              className="add-task__submit"
              onClick={() => {
                showQuickAddTask ? addTask() && setShowQuickAddTask(false) : addTask();
                setShowAddTaskMain(false);
              }}
            >
              Add Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTask;

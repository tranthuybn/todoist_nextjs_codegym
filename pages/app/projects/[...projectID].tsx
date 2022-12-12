import { useEffect } from 'react';

import DefaultLayout from '~/components/layout/DefaultLayout';
import { useProjectsValue, useSelectedProjectValue } from '~/context';
import { useTasks } from '~/hooks';
import Checkbox from '~/components/Checkbox';
import AddTask from '~/components/AddTask';
import { getSelectedProjectName } from '~/check';

interface ITask {
  task: string;
  id: string;
}

function Tasks() {
  const { projects } = useProjectsValue();
  const { selectedProject } = useSelectedProjectValue();
  const { tasks } = useTasks(selectedProject);
  let projectName = getSelectedProjectName(projects, selectedProject);
  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });
  return (
    <DefaultLayout>
      <div className="tasks__head">
        <h2>{projectName}</h2>
        <span className="date-now">{new Date().toDateString()}</span>
      </div>
      <ul className="tasks__list">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <li key={task.id}>
              <Checkbox id={task.id} />
              <div>
                <span>{task.task}</span>
                <span className="tasks__list-description">{task.description}</span>
              </div>
            </li>
          ))}
      </ul>
      <AddTask />
    </DefaultLayout>
  );
}

export default Tasks;

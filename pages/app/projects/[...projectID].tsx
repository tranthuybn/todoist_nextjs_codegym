import { useEffect } from 'react';
import moment from 'moment';
import DefaultLayout from '~/components/layout/DefaultLayout';
import { useProjectsValue, useSelectedProjectValue } from '~/context';
import { useTasks } from '~/hooks';
import Checkbox from '~/components/Checkbox';
import AddTask from '~/components/AddTask';
import { getSelectedProjectName } from '~/check';
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
                <span className="task-description">{task.description}</span>
                {selectedProject === 'upcoming' && (
                  <span
                    className={
                      moment(task.date, 'DD/MM/YYYY').diff(moment(), 'day') <= 2
                        ? 'warning task-date-desc'
                        : 'task-date-desc'
                    }
                  >
                    {moment(task.date, 'DD/MM/YYYY').format('DD MMM')}
                  </span>
                )}
              </div>
            </li>
          ))}
      </ul>
      <AddTask />
    </DefaultLayout>
  );
}
export default Tasks;

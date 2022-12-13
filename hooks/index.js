import moment from 'moment';
import { useState, useEffect } from 'react';

import { firebase } from '~/firebase';
import { isMainProject } from '~/check';
import { initialTask, projectInit } from '~/constants';

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([initialTask]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  useEffect(() => {
    let unsubcribe = firebase
      .firestore()
      .collection('tasks')
      .where('userID', '==', 'hT3j87FMR6M&t');

    unsubcribe =
      selectedProject && !isMainProject(selectedProject)
        ? (unsubcribe = unsubcribe.where('projectID', '==', selectedProject))
        : selectedProject === 'today'
        ? (unsubcribe = unsubcribe.where('date', '==', moment().format('DD/MM/YYYY')))
        : selectedProject === 'inbox' || selectedProject === ''
        ? (unsubcribe = unsubcribe.where('date', '==', ''))
        : unsubcribe;

    unsubcribe = unsubcribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));
      setTasks(
        selectedProject === 'upcoming'
          ? newTasks.filter(
              (task) =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'day') >= 0 && task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });
    return () => unsubcribe();
  }, [selectedProject]);
  return { tasks, setTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([projectInit]);
  const [archivedProjects, setArchivedProjects] = useState([projectInit]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userID', '==', 'hT3j87FMR6M&t')
      .orderBy('projectID')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects.filter((project) => project.archived !== true));
          setArchivedProjects(allProjects.filter((project) => project.archived !== false));
        }
      });
  }, [projects]);
  return { projects, setProjects, archivedProjects };
};

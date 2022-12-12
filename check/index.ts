import { mainProjects } from '../constants';
export interface IProject {
  projectID: string;
  name: string;
  userID: string;
}

export const isMainProject = (selectedProject: string) =>
  mainProjects.find((project) => project.key === selectedProject);
export const getProjectName = (projects: IProject[], projectID: string) =>
  projects.find((project) => project.projectID === projectID);

export const getMainProjectTitle = (selectedProject: string) =>
  mainProjects.find((project) => project.key === selectedProject);

export const getSelectedProjectName = (projects: IProject[], selectedProject: string) => {
  let projectName = '';
  if (!isMainProject(selectedProject) && projects.length > 0 && selectedProject) {
    let project = getProjectName(projects, selectedProject);
    if (project) projectName = project.name;
  }

  if (isMainProject(selectedProject) && selectedProject) {
    let project = getMainProjectTitle(selectedProject);
    if (project) projectName = project.name;
  }
  return projectName;
};

export const generatePushId = () => {
  const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
  let now = new Date().getTime();

  const timeStampChars = new Array(8);
  for (var i = 7; i >= 0; i--) {
    timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
    now = Math.floor(now / 64);
  }

  let id = timeStampChars.join('');

  for (i = 0; i < 12; i++) {
    id += PUSH_CHARS.charAt(Math.floor(Math.random() * 64));
  }

  return id;
};

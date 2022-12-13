import { createContext, useContext } from 'react';
import { useProjects } from '../hooks';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects, archivedProjects } = useProjects();
  return (
    <ProjectsContext.Provider value={{ projects, setProjects, archivedProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
export const useProjectsValue = () => useContext(ProjectsContext);

export interface Project {
  projectID: string;
  name: string;
  userID: string;
  docId: string;
  archived: boolean;
}
export interface AppProps {
  children: JSX.Element;
}
export interface AddTaskProps {
  shouldShowAddTask: boolean;
  showQuickAddTask: boolean;
  setShowQuickAddTask: (showQuickAddTask: boolean) => void;
}
export interface ProjectSelectionProps {
  setProject: (project: Project) => void;
  showProjectSelection: boolean | undefined;
  setShowProjectSelection: (showProjectSelection: boolean) => void;
}

export interface TaskDateProps {
  setTaskDate: (taskDate: string) => void;
  setShowTaskDate: (showTaskDate: boolean) => void;
  showTaskDate: boolean;
}

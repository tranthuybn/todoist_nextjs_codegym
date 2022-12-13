import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
export const mainProjects = [
  { key: 'inbox', name: 'Inbox', icon: FaInbox },
  { key: 'today', name: 'Today', icon: FaRegCalendar },
  { key: 'upcoming', name: 'Upcoming', icon: FaRegCalendarAlt },
];
export const themes = [{ key: 'todoist' }, { key: 'noir' }, { key: 'tangerine' }];
export const initialTask = {
  id: '',
  task: '',
  projectID: '',
  archived: false,
  date: '',
  description: '',
  userID: '',
};

export const projectInit = {
  projectID: '',
  name: '',
  userID: '',
  docId: '',
};

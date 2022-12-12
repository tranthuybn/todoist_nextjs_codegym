import { firebase } from '~/firebase';

export const deleteProject = (docId: string) => {
  firebase.firestore().collection('projects').doc(docId).delete();
};
export const archiveProject = (docId: string) => {
  firebase.firestore().collection('projects').doc(docId).update({ archived: true });
};
export const addProject = (projectName: string, projectID: string) => {
  projectName &&
    firebase.firestore().collection('projects').add({
      archived: false,
      projectID,
      name: projectName,
      userID: 'hT3j87FMR6M&t',
    });
};

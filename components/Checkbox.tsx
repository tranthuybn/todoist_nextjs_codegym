import { firebase } from '~/firebase';
function Checkbox({ id }: any) {
  const archiveTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({ archived: true });
  };
  return (
    <span className="checkbox-holder" onClick={() => archiveTask()}>
      <span className="checkbox"></span>
    </span>
  );
}

export default Checkbox;

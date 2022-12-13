import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAgScauvyuKOqq8QuGc8VN_8T4ZXXg4egg',
  authDomain: 'todoist-nextjs-19130.firebaseapp.com',
  projectId: 'todoist-nextjs-19130',
  storageBucket: 'todoist-nextjs-19130.appspot.com',
  messagingSenderId: '374123711804',
  appId: '1:374123711804:web:19508828b9338f8c612239',
});

export { firebaseConfig as firebase };

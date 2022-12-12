import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA0z8YSD6uySoydbf2QkHmJi9Ch6QINTso',
  authDomain: 'todoist-nextjs-2.firebaseapp.com',
  projectId: 'todoist-nextjs-2',
  storageBucket: 'todoist-nextjs-2.appspot.com',
  messagingSenderId: '118281832133',
  appId: '1:118281832133:web:212ae9698bb8438f4f12ac',
});

export { firebaseConfig as firebase };

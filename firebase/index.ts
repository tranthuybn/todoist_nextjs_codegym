import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCG4JW0pDkqI0ljDOHg8PpwTaB_97htDHM',
  authDomain: 'todist-second-nextjs.firebaseapp.com',
  projectId: 'todist-second-nextjs',
  storageBucket: 'todist-second-nextjs.appspot.com',
  messagingSenderId: '308120105886',
  appId: '1:308120105886:web:bf5d6f26c0b77a941b5c8f',
});

export { firebaseConfig as firebase };

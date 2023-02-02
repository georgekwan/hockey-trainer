import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxqtRX_4QvpDIiirrQvZb0bpeL_zTDe0E',
  authDomain: 'project-three-dev-1092b.firebaseapp.com',
  projectId: 'project-three-dev-1092b',
  storageBucket: 'project-three-dev-1092b.appspot.com',
  messagingSenderId: '833559461370',
  appId: '1:833559461370:web:15759b03192e2bfe953843',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

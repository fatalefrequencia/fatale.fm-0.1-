import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC5Wal8--bLtpKBTAp-iMPcGjPwmVzBbVE",
  authDomain: "fatalefm-1dc34.firebaseapp.com",
  projectId: "fatalefm-1dc34",
  storageBucket: "fatalefm-1dc34.firebasestorage.app",
  messagingSenderId: "130872762746",
  appId: "1:130872762746:web:f59b9771bac7f959eeb6c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
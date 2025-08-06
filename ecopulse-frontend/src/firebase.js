import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "ecopulse-c32f1.firebaseapp.com",
  projectId: "ecopulse-c32f1",
  storageBucket: "ecopulse-c32f1.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export default app;

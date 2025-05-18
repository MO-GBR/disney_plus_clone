import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPWvXoKTP4zszpz3fGA1c-jLUte6AOyUg",
  authDomain: "landing-pages-7e570.firebaseapp.com",
  projectId: "landing-pages-7e570",
  storageBucket: "landing-pages-7e570.firebasestorage.app",
  messagingSenderId: "74652268676",
  appId: "1:74652268676:web:c9ed9f5b7b3dd7bb3c6ad1",
  measurementId: "G-GDZL9HGKV7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

/*
    // Hosting
    "site": "disneymyclone",
    firebase deploy --only hosting:disneymyclone
*/
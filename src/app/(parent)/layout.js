'use client';

import { initializeApp } from "firebase/app";

export default function Parent({ children }) {
  const firebaseConfig = {
    apiKey: "AIzaSyCzwfvF71ii36Qpr0C5cDaAnEmdA2Fk_G4",
    authDomain: "nest-auth-firebase-2825a.firebaseapp.com",
    projectId: "nest-auth-firebase-2825a",
    storageBucket: "nest-auth-firebase-2825a.appspot.com",
    messagingSenderId: "808372221064",
    appId: "1:808372221064:web:2fa3b6c6df709cfd3c9b3d"
  };
  
  initializeApp(firebaseConfig);
  
  return children;
}
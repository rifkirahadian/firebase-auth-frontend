import { Inter } from "next/font/google";
import { initializeApp } from "firebase/app";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const firebaseConfig = {
    apiKey: "AIzaSyCzwfvF71ii36Qpr0C5cDaAnEmdA2Fk_G4",
    authDomain: "nest-auth-firebase-2825a.firebaseapp.com",
    projectId: "nest-auth-firebase-2825a",
    storageBucket: "nest-auth-firebase-2825a.appspot.com",
    messagingSenderId: "808372221064",
    appId: "1:808372221064:web:2fa3b6c6df709cfd3c9b3d"
  };
  
  initializeApp(firebaseConfig);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

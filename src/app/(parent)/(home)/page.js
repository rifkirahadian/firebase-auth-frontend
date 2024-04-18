'use client';

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home({ page }) {
  const [nav, setNav] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const links = [
    {
      link: '/login',
      title: "Login",
    },
    {
      link: '/signup',
      title: "Register",
    }
  ];

  const getAuthUser = async() => {
    const auth = await getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
        console.log("User is signed in:", user);
      } else {
        // User is signed out
        setCurrentUser(null);
        console.log("User is signed out");
      }
    });
  };

  const onLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.reload();
    }).catch((error) => {
      alert(error.message);
    });
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h3 className="text-4xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Firebase Login
          </a>
        </h3>
      </div>

      <ul className="hidden md:flex">
        {currentUser === null && 
          links.map(({ title, link }, key) => (
            <li
              key={key}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{title}</Link>
            </li>
          ))
        }
        
        {currentUser !== null && (
          <>
            {currentUser.email}
            <li
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
              onClick={onLogout}
            >
              Logout
            </li>
          </>
        )}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth, onAuthStateChanged, signOut } from "@/config/firebaseConfig";

function Navbar(props: any) {
  const { title, iconOne, iconTwo, profileImg, profileName } = props;
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const logOutFun = () => {
    signOut(auth)
      .then(() => {
        alert("Logout successful");
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="fixed z-0 top-0 left-0 w-full   bg-white px-7 text-[#b1b1b1]  p-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-medium">{title}</h1>
          </div>
          <div className="gap-52 w-[50%] flex">
            <span className="p-1 flex w-full items-center gap-2 justify-center   border-2 bg-white rounded-md">
              <svg
                className="text-3xl "
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill="currentColor"
                    fillOpacity="0.16"
                    d="M11 19a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
                  />
                </g>
              </svg>
              <input
                className="text-[#8d8d8d] w-[100%] outline-none"
                type="text"
                placeholder="Search..."
              />
            </span>
            <div className=""></div>
          </div>
          <div className="flex items-center gap-5">
            {user ? (
              <span className="p-1 hover:shadow-lg rounded-full">
                <button onClick={logOutFun}>{profileName}</button>
              </span>
            ) : (
              <span className=" ">
                <Link href="/login">
                  <button>{iconTwo}</button>
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

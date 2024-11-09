"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./componets/Navbar";
import PageTwo from "./componets/PageTwo";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users: any[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUserData(users[0]); // Set first user or adapt as needed
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className=" bg-[#fbfafa]">
      <Navbar
        profileImg={userData?.photoURL}
        profileName={userData?.displayName}
        title="Scrolllink"
        iconOne={
          <svg
            className="text-2xl"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z"
            />
          </svg>
        }
        iconTwo={
          <svg
            className="text-3xl"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                strokeDasharray="36"
                d="M13 4l7 0c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-7"
              >
                <animate
                  fill="freeze"
                  attributeName="strokeDasharray"
                  dur="0.5s"
                  values="36;0"
                />
              </path>
              <path strokeDasharray="14" d="M3 12h11.5">
                <animate
                  fill="freeze"
                  attributeName="strokeDasharray"
                  begin="0.6s"
                  dur="0.2s"
                  values="14;0"
                />
              </path>
              <path strokeDasharray="6" d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5">
                <animate
                  fill="freeze"
                  attributeName="strokeDasharray"
                  begin="0.8s"
                  dur="0.2s"
                  values="6;0"
                />
              </path>
            </g>
          </svg>
        }
      />
      <div className="grid grid-cols-1 justify-center items-center gap-2">
        <PageTwo />
      </div>
    </div>
  );
}

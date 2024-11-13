"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useRouter } from "next/navigation";

function Navbar(props: any) {
  const { profileData } = props;
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    getDataFromFirestore();
  }, []);
  const getDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "userFromGoogle"));
      
      const users: any = []; // Temporary array to hold all documents' data
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      
      // Update userData state with the entire array of users
      setUserData(users);
    } catch (error: any) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
      getDataFromFirestore();
    });
    return () => unsubscribe();
  }, []);

  const logOutFun = async () => {
    await signOut(auth)
      .then(() => {
        alert("Logout successful");
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="fixed z-10 top-0 left-0 w-full   bg-white px-7 text-[#b1b1b1]  p-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-medium">Scrolllink</h1>
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
            {currentUser ? (
              <span className="">
                <button
                  className="flex items-center text-[#696969] font-semibold "
                  onClick={() => {
                    router.push("/login");
                    logOutFun();
                  }}
                >
                  Faizan Ansari
                  <img
                    src="https://lh3.googleusercontent.com/ogw/AF2bZyhBNWxIGboL0dc6hmmzTlfW0B6Y9JYdmz7GOeitao8v6IA=s32-c-mo"
                    // alt="User profile"
                    className="w-10 h-10 rounded-full ml-2" // styling for the image
                  />
                </button>
              </span>
            ) : (
              <span className=" ">
                <Link href="/login">
                  <button>
                    {
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
                          <path
                            strokeDasharray="6"
                            d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5"
                          >
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
                  </button>
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

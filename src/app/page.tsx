"use client";
import Navbar from "./componets/Navbar";
import PageTwo from "./componets/PageTwo";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
type User = {
  name: string;
  email: string;
  // other fields as per your data structure
};

export default function Home() {
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setIsLoggedIn(user);
    });

    getUser();
  }, []);

  const getUser = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users: User[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data() as User);
      });
      await setUserData(users[0]); // Set first user or adapt as needed
    } catch (error: any) {
      console.error("Error fetching user data:", error.message);
    }
  };

  return (
    <div className="bg-[#fbfafa]">
      <Navbar profileData={userData} />
      <div className="grid grid-cols-1 justify-center items-center gap-2">
        <PageTwo />
      </div>
    </div>
  );
}

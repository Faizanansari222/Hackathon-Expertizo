"use client";
import Link from "next/link";
import React, { useState } from "react";
import { login } from "../../config/firebase";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";

import { db } from "../../config/firebase";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
  
      const { user } = result;
      
      const docRef = await addDoc(collection(db, "userFromGoogle"), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
  
      console.log("Document written with ID: ", docRef.id);
      
      // Redirect user after successful login
      router.push("/");
    } catch (error: any) {
      console.error("Error during Google login:", error.message);
    }
  };
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await login(email, password);
    router.push("/");

    // try {
    //   const response = await fetch(
    //     "http://localhost:1337/api/auth/local/register",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         username: fullname,
    //         email,
    //         password,
    //       }),
    //     }
    //   );
    //   const data = await response.json();
    //   if (response.ok) {
    //     alert("Signup successful!");
    //   } else {
    //     alert(data.message[0].messages[0].message);
    //   }
    // } catch (error) {
    //   console.error("Error signing up:", error);
    //   alert("Error signing up");
    // }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="rounded-lg bg-white p-6 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#535353]">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#535353]">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333cc]"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#333333] text-[#b1b0b0] py-2 rounded-md hover:bg-[#252525] transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={loginWithGoogle}
            className="bg-[#fd4e4e] text-white px-4 py-2 rounded mr-2"
          >
            Sign in with Google
          </button>
          <button className="bg-[#3b5998] text-white px-4 py-2 rounded">
            Sign in with Facebook
          </button>
        </div>
        <div className="mt-4 text-center text-sm">
          <Link href="/signup" className="text-[#535353]">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

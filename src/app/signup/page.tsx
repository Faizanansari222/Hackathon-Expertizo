"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { register } from '@/config/firebase';
import { useRouter } from 'next/navigation'
 

const SignupForm = () => {
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter()
  const handleSubmit = async (e:any) => {
    try{

      e.preventDefault();
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
  await register(email, password)
  alert('Signup successful!');
  router.push('/login')
    }catch (error: any) {
        console.log("Error Login:", error);
        alert("Error Login"+ error.message);
        
    }
    // try {
    //   const response = await fetch('http://localhost:1337/api/auth/local/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       username: fullname,
    //       email,
    //       password,
    //     }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     alert('Signup successful!');
    //   } else {
    //     alert(data.message[0].messages[0].message);
    //   }
    // } catch (error) {
    //   console.error('Error signing up:', error);
    //   alert('Error signing up');
    // }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#333333]">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#535353]">Fullname <span className='text-red-600'>*</span></label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]"
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#535353]">Email Address <span className='text-red-600'>*</span></label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#535353]">Password <span className='text-red-600'>*</span></label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#535353]">Confirm Password <span className='text-red-600'>*</span></label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
         
          <button
            type="submit"
            className="w-full bg-[#333333] text-white py-2 rounded-md hover:bg-[#252525] transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-[#fd4e4e] text-white px-4 py-2 rounded mr-2">Sign in with Google</button>
          <button className="bg-[#3b5998] text-white px-4 py-2 rounded">Sign in with Facebook</button>
        </div>
        <div className="mt-4 text-center text-sm">
          <Link href="/login" className="text-[#535353]">Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
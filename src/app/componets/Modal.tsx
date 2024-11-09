"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

function ProductModal({ show, onClose }: any) {
  if (!show) return null;
  const [title, setTitle] = useState("");
  const [postImage, setPostIamge] = useState(null);

  const storage = getStorage();
  const storageRef = ref(storage, "some-child");

  const sendPost = async () => {
    try {
      // Check if `postImage` is a valid file
      if (!postImage || !(postImage instanceof File)) {
        alert("Please upload a valid image file");
        return;
      }
  
      // Create a storage reference with a unique file name
      const storageRef = ref(storage, `images/${Date.now()}_${postImage}`);
  
      // Upload the image file
      await uploadBytes(storageRef, postImage);
  
      // Get the download URL of the uploaded image
      const url = await getDownloadURL(storageRef);
      console.log("Document written with URL: " + url);
      alert("Data sent successfully!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Error adding document: " + error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };
  return (
    <div
      className="fixed inset-0 bg-opacity-80 bg-[#d6cfcf] bg-blur-md h-screen w-full p-32 z-10 flex items-center justify-center overflow-y-scroll overflow-x-hidden outline-none focus:outline-none"
      onClick={onClose} // Close the modal when clicking outside
    >
      <div
        className="flex items-center justify-center m-auto w-[50%]"
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
      >
        <div className="mx-auto rounded-lg w-full max-w-[550px] bg-white">
          <form className="py-4 px-9">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#5c5c5c]">
                Send files to this email:
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="text"
                id="email"
                placeholder="example@domaintext"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ff4f9b] focus:shadow-md"
              />
            </div>

            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  onChange={(e: any) => setPostIamge(e.target.files[0])}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            {/* Add additional content and buttons */}
            <div>
              <button
                onClick={sendPost}
                className="mt-4 hover:shadow-form w-full rounded-md bg-[#ff4f9b] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

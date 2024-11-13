"use client";
import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app, db } from "../../config/firebase";
import { collection, addDoc, getDocs  } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

function Post() {
  // const notify = () => toast('Here is your toast.');
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<any>(null);
  const [postTitle, setPostTitle] = useState<any>("");
  const [file, setFile] = useState<any>(null);
  const [getPost,setGetPost] = useState<any>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "post"));
        const posts = querySnapshot.docs.map((doc) => doc.data());
        setGetPost(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handlePostBtn = async () => {
    const db = getFirestore(app);
  
    try {
      const storage = getStorage(); // Initialize Firebase storage
      const storageRef = ref(storage, "images/" + file.name); // Create a reference to the file in storage
  
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      console.log("Uploaded a blob or file!", snapshot);
  
      // Get the download URL
      const url = await getDownloadURL(storageRef);
      console.log("Download URL:", url);
  
      // Save document to Firestore
      const docRef = await addDoc(collection(db, "post"), {
        ...(postTitle && { title: postTitle }), // Add title only if postTitle is set
        imgUrl: url,
      });
  
      console.log("Document written with ID: ", docRef.id);
      setPostTitle("")
      setFilePreview(null)
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  
    // Fetching posts from Firestore
    try {
      const querySnapshot = await getDocs(collection(db, "post"));
      const posts = querySnapshot.docs.map((doc) => doc.data()); // Collect all posts in an array
      setGetPost(posts); // Update state with the array of posts
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    setFile(file);

    if (file) {
      await setFileName(file.name);

      // Create a file reader to read the file and display the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("No file chosen");
      setFilePreview(null);
    }
  };
  return (
    <>
      {/* <ProductModal /> */}
      <div className="w-full">
        <div className="mt-20 flex-col">
          <div className="rounded-lg shadow-sm bg-white gap-4 p-5 ">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden">
                <img
                  className="w-full"
                  src="https://lh3.googleusercontent.com/ogw/AF2bZyhBNWxIGboL0dc6hmmzTlfW0B6Y9JYdmz7GOeitao8v6IA=s32-c-mo"
                  alt=""
                />
              </span>
              <div className="bg-[#fbfafa] shadow-sm p-2 flex items-center px-2 w-full rounded-md">
                <textarea
                  placeholder="What's happening?"
                  cols={1}
                  rows={1}
                  className="w-full bg-[#fbfafa] outline-none text-[#5c5c5c]"
                  onChange={(e: any) => setPostTitle(e.target.value)}
                  name=""
                  id=""
                ></textarea>
                {/* <input
                  className="bg-[#fbfafa] outline-none text-[#5c5c5c] w-full"
                  type="text"
                  placeholder="What's happening?"
                /> */}
              </div>
            </div>
            <div className="flex items-center justify-center p-5">
              {filePreview && (
                <div className="mt-4">
                  <img
                    src={filePreview}
                    alt="Preview"
                    className="max-w-xs rounded-md shadow-lg"
                  />
                </div>
              )}
            </div>

            <div className=" flex items-center justify-between w-auto text-[#5c5c5c]">
              <button className="flex items-center gap-1 text-base">
                <svg
                  className="text-2xl text-[#858585]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 15.75v-7.5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m17.168-8.759l-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374"
                  />
                </svg>
                Live video
              </button>
              {/* <button
              >
                
              </button> */}

              <div className="flex ">
                <button>
                  <div className="flex items-center  gap-1">
                    <svg
                      className="text-2xl text-[#858585]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M20.33 17.657c.11-.366.17-.755.17-1.157v-9a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v9.07m16.83 1.087l-.088-.104l-2.466-2.976a2 2 0 0 0-3.073-.008l-1.312 1.566l-.214.261m7.153 1.26a4 4 0 0 1-3.713 2.842m0 0l-.117.002h-9a4 4 0 0 1-4-3.93m13.117 3.928l-.093-.106l-3.347-3.996m-9.676.175l.177-.201l3.206-3.827a2 2 0 0 1 3.066 0l3.227 3.853"
                        />
                        <circle
                          cx="15.091"
                          cy="8.909"
                          r="1.5"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                    <label htmlFor="file-upload" className="cursor-pointer ">
                      Photo
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </button>
              </div>
              <button className="flex items-center gap-1 text-base">
                <svg
                  className="text-2xl text-[#858585]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9.553 19.106a1 1 0 0 1 1.338.44l.003.006l.034.058c.035.057.093.146.177.259c.169.225.44.536.832.85C12.71 21.337 13.993 22 16 22s3.29-.663 4.063-1.28c.393-.315.664-.626.832-.851a3 3 0 0 0 .211-.317l.004-.007a1 1 0 0 1 1.785.902v.001l-.002.002v.002l-.004.006l-.008.015a3 3 0 0 1-.1.175a5 5 0 0 1-.285.42a6.8 6.8 0 0 1-1.184 1.213C20.21 23.163 18.493 24 16 24s-4.21-.837-5.312-1.72a6.8 6.8 0 0 1-1.183-1.211a5 5 0 0 1-.386-.596l-.008-.015l-.003-.006l-.001-.003l-.001-.002a1 1 0 0 1 .447-1.341M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16"
                  />
                </svg>
                Feeling
              </button>
              <button className="flex items-center gap-1 text-base bg-[#ff4f9b] text-white px-4 py-1 rounded" onClick={handlePostBtn}>Post</button>
            </div>
          </div>

          {/* {modal && (
          <ProductModal
            isOpen={modal}
            onClose={() => {
              setModal(false);
            }}
          />
        )} */}
        </div>

        {/* sdaskjdas */}
       
        {/* /asdasdasdad */}
        <div className="w-full  mt-5">
  {getPost && getPost.length > 0 ? (
    getPost.map((post: any, index: any) => (
      <div key={index} className="w-full  mt-5">

        <div className="bg-white rounded-md shadow-sm">
          <div className="relative cursor-pointer">
          <div className="absolute  opacity-0 group-hover:opacity-100 inset-0">
            <h1 className="absolute  text-white left-auto   transition-opacity mr-3 top-3 inset-0">X</h1>
          </div>
          <img
            className=" object-cover rounded-t-xl w-full cursor-pointer"
            src={post.imgUrl} // Use imgUrl from Firestore data
            alt="Post image"
            
          />
          </div>
          <div className="px-4 p-2 text-[#5c5c5c]">
            <p className="">{post.title}</p>
          </div>
          <div className="flex p-4 justify-between">
            <div className="flex items-center space-x-2">
              <img
                className="w-10 rounded-full"
                src="https://lh3.googleusercontent.com/ogw/AF2bZyhBNWxIGboL0dc6hmmzTlfW0B6Y9JYdmz7GOeitao8v6IA=s32-c-mo"
                alt="user avatar"
              />
              <h2 className="text-gray-800 font-bold cursor-pointer">
                {post.title} {/* Display post title */}
                <p className="text-sm font-light text-[#5c5c5c]">Just now</p>
              </h2>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-gray-600 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
                <span>22</span>
              </div>
              <div className="flex space-x-2 justify-between items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>20</span>
                <span><svg className="text-2xl text-[#858585]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/></svg></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">No posts available</p>
  )}
</div>

      </div>
    </>
  );
}

export default Post;

"use client";
import React, { useState } from "react";
import ProductModal from "./Modal";

function Post() {
  const [isOpen, setIsOpen ]= useState(false);
  return (
    <>
    <ProductModal show={isOpen} onClose={() => setIsOpen(false)}/>
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
              <div className="bg-[#fbfafa] shadow-sm p-2 px-2 w-full rounded-md">
                <input
                  className="bg-[#fbfafa] outline-none text-[#5c5c5c] w-full"
                  type="text"
                  placeholder="What's happening?"
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-2 text-[#5c5c5c]">
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
              <button className="flex items-center gap-1 text-base">
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
                Photos
              </button>
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
              <button onClick={() => setIsOpen(true)} className="flex items-center text-base bg-[#ff4f9b] text-white px-7 p-1 rounded-md">
                Post
              </button>
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
        <div className="w-full bg-gray-100 mt-5">
          <div className="">
            
            <img
              className="rounded-t-xl w-full cursor-pointer"
              src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="flex p-4 justify-between">
              <div className="flex items-center space-x-2">
                <img
                  className="w-10 rounded-full"
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                  alt="sara"
                />
                <h2 className="text-gray-800 font-bold cursor-pointer">
                  Felipe Sacudon
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
                <div className="flex space-x-1 items-center">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;

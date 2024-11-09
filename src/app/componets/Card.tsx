"use client";
import React, { useState } from "react";
import ProductModal from "./Modal";

function Post() {
  const [modal, setModal] = useState(false);

  return (
    <div className="mt-20">
      {/* Post Creation Box */}
      <div className="rounded-lg shadow-sm bg-white gap-4 justify-center p-7 mx-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full"
              src="https://plus.unsplash.com/premium_photo-1682096358356-5ffbe52b7aa1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBtYW58ZW58MHx8MHx8fDA%3D"
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
        <div className="mt-5 flex items-center justify-around gap-2 text-[#5c5c5c]">
          <button className="flex items-center gap-1 text-base">
            Live video
          </button>
          <button className="flex items-center gap-1 text-base">Photos</button>
          <button className="flex items-center gap-1 text-base">Feeling</button>
          <button
            onClick={() => setModal(true)}
            className="flex items-center text-base bg-[#ff4f9b] text-white px-7 p-1 rounded-md"
          >
            Post
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {modal && (
        
          <ProductModal isOpen ={modal} onClose={()=>{setModal(false)}}  />
         
      )}
    </div>
  );
}

export default Post;

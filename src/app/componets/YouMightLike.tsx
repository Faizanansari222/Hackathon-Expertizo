import React from "react";
import Upcomming from "./Upcomming";

function YouMightLike() {
  return (
    <>
      <div className=" mt-20 bg-white w-full   mx-5 rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center   mb-2">
          <h1 className="text-sm font-medium text-[#5c5c5c]">You might like</h1>
          <button className="text-blue-500 text-xs font-medium">see more</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 flex justify-center items-center h-12 overflow-hidden rounded-full">
            <img
              className=""
              src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div>
            <a className="text-[#5c5c5c]  text-sm font-medium">
              Muhammad Rafil
            </a>
            <p className="text-[#5c5c5c] font-medium text-xs">15 Mutuals</p>
          </div>
        </div>
          <div className="flex items-center mt-4 justify-around">
            <button className="bg-[#ff4f9b] text-white px-4 py-1 rounded-md text-sm p-1">Follow</button>
            <button className="bg-white border-2 border-[#ff4f9b]  text-[#ff4f9b] px-4 py-1 rounded-md text-sm p-1">Ignore</button>
          </div>
      </div>
          <Upcomming/>
    </>
  );
}

export default YouMightLike;

import React from "react";
import SideBar from "./SideBar";
import Post from "./Card";
import YouMightLike from "./YouMightLike";
import Chat from "./Chat";

function PageTwo() {
  return (
    <div className="grid grid-cols-12   justify-end  items-start">
 <div className="col-span-2">
  <SideBar/>
  
 </div>
      <div className="ml-[30px] col-span-4 ">
        <Post />
      </div>
      <div className="col-span-2">
        <YouMightLike />
      </div>
      <div className="col-span-4">
        <Chat />
      </div>
    </div>
  );
}

export default PageTwo;

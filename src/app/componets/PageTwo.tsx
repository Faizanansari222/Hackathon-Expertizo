import React from "react";
import SideBar from "./SideBar";
// import Post from "./CardUser";
import YouMightLike from "./YouMightLike";
import Chat from "./Chat";
// import PostPage from "./CardServer";
import Post from "./Card";

function PageTwo() {
  return (
    <div className="grid grid-cols-12   justify-end  items-start">
 <div className="col-span-2">
  <SideBar/>
  
 </div>
      <div className="ml-[50px] col-span-4 ">
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

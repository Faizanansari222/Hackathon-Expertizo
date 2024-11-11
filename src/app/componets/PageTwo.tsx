import React from "react";
import SideBar from "./SideBar";
import Post from "./Card";
import YouMightLike from "./YouMightLike";

function PageTwo() {
  return (
    <div className="grid grid-cols-5   justify-end  items-start">
 <div className="">
  <SideBar/>
  
 </div>
      <div className="col-span-2 ">
        <Post />
      </div>
      <div className="">
        <YouMightLike />
      </div>
    </div>
  );
}

export default PageTwo;

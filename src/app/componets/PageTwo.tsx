import React from "react";
import SideBar from "./SideBar";
import Post from "./Card";
import YouMightLike from "./YouMightLike";

function PageTwo() {
  return (
    <div className="grid grid-cols-[65%_auto] w-[95%] mx-auto">
      <div className="grid grid-cols-[27%_auto]">
        <SideBar /> <Post />
      </div>
      <div className="grid grid-cols-[55%_Auto] ">
        <div>
          <YouMightLike />
        </div>
        <div>
            
          {/* <YouMightLike /> */}
        </div>
      </div>
    </div>
  );
}

export default PageTwo;

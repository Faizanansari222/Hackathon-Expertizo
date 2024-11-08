import Link from "next/link";
import React from "react";

function Navbar(props: any) {
  const { title, iconOne, iconTwo } = props;
  return (
    <div className=" bg-[#333333]  px-7 text-[#939393]    p-2 ">
      <div className=" flex items-center justify-between  ">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="flex items-center justify-around gap-5">
          <span className=" p-1 hover:shadow-lg  rounded-full">
            <button>{iconOne}</button>
          </span>
          <span className=" p-1   hover:shadow-lg  rounded-full">
            <Link href="/login">
            <button>{iconTwo}</button>
            </Link>
          </span>
          <span className="  p-1 flex items-center justify-center shadow-md bg-white  rounded-md">
            <input className="text-[#333333] decoration-none outline-none" type="text" name="" />
          </span>
        </div>
      </div>
    </div>
    // <div className=" bg-blue-50  px-7  shadow-md   text-black p-3 rounded-b-lg">
    //   <div className=" flex items-center justify-between  ">
    //     <div>
    //       <h1>{title}</h1>
    //     </div>
    //     <div className="flex items-center justify-around gap-8">
    //       <span className=" p-1 hover:bg-gray-100  rounded-full">
    //         <h1>{iconOne}</h1>
    //       </span>
    //       <span className=" p-1 flex items-center justify-center  hover:bg-gray-100  rounded-full">
    //         <h1>{iconTwo}</h1>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;

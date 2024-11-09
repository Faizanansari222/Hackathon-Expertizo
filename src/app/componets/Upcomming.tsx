import React from "react";

function Upcomming() {
  return (
    <div>
      <div>
        <div className=" mt-4 bg-white  w-full mx-5 rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center   mb-4">
            <h1 className="text-sm font-medium text-[#5c5c5c]">
              Upcomming Event
            </h1>
            <button className="text-blue-500 text-xs font-medium">
              see more
            </button>
          </div>

          <div className="my-2 rounded-lg bg-[#f4f4f4] p-3">
            <div className="flex gap-2">
              <span className="w-10 rounded-full overflow-hidden">
                <img
                  className="w-10"
                  src="https://static.vecteezy.com/system/resources/previews/027/127/558/original/brawl-stars-logo-brawl-stars-icon-transparent-free-png.png"
                  alt=""
                />
              </span>
              <div>
                <p className="text-sm text-[#5c5c5c] font-semibold">
                  Design Talks
                </p>
                <p className="text-xs text-[#5c5c5c]  ">12 Oct, 13:00 IST</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#5c5c5c]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-[#f4f4f4] p-4">
            <div className="flex gap-2">
              <span className="w-10 rounded-full overflow-hidden">
                <img
                  className="w-10"
                  src="https://static.vecteezy.com/system/resources/previews/027/127/558/original/brawl-stars-logo-brawl-stars-icon-transparent-free-png.png"
                  alt=""
                />
              </span>
              <div>
                <p className="text-sm text-[#5c5c5c] font-semibold">
                  Design Talks
                </p>
                <p className="text-xs text-[#5c5c5c]  ">12 Oct, 13:00 IST</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#5c5c5c]">
                Lorem ipsum dolor sit amet consectetur adipisicing 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcomming;

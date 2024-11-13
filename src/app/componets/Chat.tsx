import React from "react";

function Chat() {
  return (
    <div className="bg-white h-screen flex flex-col items-start fixed right-0 px-3 w-full sm:w-[25%] md:w-[30%] lg:w-[25%] rounded-md justify-start ">
      {/* Search Box */}
      <div className="bg-[#fbfafa] shadow-sm p-2 flex justify-center  items-center mt-20 px-2 w-full rounded-md">
        <svg
          className="text-[#5c5c5c] text-2xl mr-2"
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
            strokeWidth="2"
            d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
          />
        </svg>
        <input
          className="bg-[#fbfafa] outline-none text-[#5c5c5c] w-full"
          type="text"
          placeholder="What's happening?"
        />
      </div>

      {/* Profile Image Scroll Section */}
      <div className="scroll-mr-48 flex space-x-4 mt-4 p-2">
       
            <div
              className=" border-[3px] border-[#ff4f9b] bg-cover h-16 w-16 flex justify-center items-center rounded-full overflow-hidden"
            >
              <img
                src="https://i1.sndcdn.com/artworks-sYEAdZz6qGiumipl-H6Yj0w-t240x240.jpg"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className=" border-[3px] border-[#ff4f9b] bg-cover h-16 w-16 flex justify-center items-center rounded-full overflow-hidden"
            >
              <img
                src="https://bnisne.com.au/web/open/appsCmsImageDownload?imageObjectId=65851f6d8256a60001718dc7"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className=" border-[3px] border-[#ff4f9b] bg-cover h-16 w-16 flex justify-center items-center rounded-full overflow-hidden"
            >
              <img
                src="https://hihiguide.com/storage/profilepics/300x300/1625039155.JPG"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className=" border-[3px] border-[#ff4f9b] bg-cover h-16 w-16 flex justify-center items-center rounded-full overflow-hidden"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHDcGPs9Flw-Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676568519595?e=2147483647&v=beta&t=HUVhGUrQUaSG1MTsHyStGpOOFsxwYjub3MWWO2XVJK8"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className=" border-[3px] border-[#ff4f9b] bg-cover h-16 w-16 flex justify-center items-center rounded-full overflow-hidden"
            >
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/26/d7/e1/7d/caption.jpg"
                className="h-full w-full object-cover"
              />
            </div>
       







      </div>
      <div className="mt-6 w-full">
        <h1 className="font-semibold text-lg   text-[#5c5c5c]">Recent Chats</h1>
        <div className="flex items-center mb-3 w-full  justify-between m-auto">
          <div className="flex items-center mt-3 gap-2">
            <img
              className="w-14 rounded-full "
              src="https://media.licdn.com/dms/image/v2/D4E03AQHDcGPs9Flw-Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676568519595?e=2147483647&v=beta&t=HUVhGUrQUaSG1MTsHyStGpOOFsxwYjub3MWWO2XVJK8"
              alt=""
            />
            <div className="">
              <h1 className="font-medium text-lg text-[#252525]">
                Sara Cliene
              </h1>
              <p className="text-[#5c5c5c] text-xs">Sydeny, Australia</p>
            </div>
          </div>
          <div>
            <svg
              className="text-[#5c5c5c] text-3xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12" />
                <path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-3 w-full justify-between m-auto ">
          <div className="flex items-center mt-3 gap-2">
            <img
              className="w-14 rounded-full "
              src="https://hihiguide.com/storage/profilepics/300x300/1625039155.JPG"
              alt=""
            />
            <div className="">
              <h1 className="font-medium text-lg text-[#252525]">
              Julia Clarke
              </h1>
              <p className="text-[#5c5c5c] text-xs">New York, USA</p>
            </div>
          </div>
          <div>
            <svg
              className="text-[#5c5c5c] text-3xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12" />
                <path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-3 w-full justify-between m-auto ">
          <div className="flex items-center mt-3 gap-2">
            <img
              className="w-14 rounded-full "
              src="https://i1.sndcdn.com/artworks-sYEAdZz6qGiumipl-H6Yj0w-t240x240.jpg"
              alt=""
            />
            <div className="">
              <h1 className="font-medium text-lg text-[#252525]">
               Mark Stafine
              </h1>
              <p className="text-[#5c5c5c] text-xs">Chicago, USA</p>
            </div>
          </div>
          <div>
            <svg
              className="text-[#5c5c5c] text-3xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12" />
                <path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-3 w-full justify-between m-auto ">
          <div className="flex items-center mt-3 gap-2">
            <img
              className="w-14 rounded-full "
              src="https://bnisne.com.au/web/open/appsCmsImageDownload?imageObjectId=65851f6d8256a60001718dc7"
              alt=""
            />
            <div className="">
              <h1 className="font-medium text-lg text-[#252525]">
                Trinity Sipson
              </h1>
              <p className="text-[#5c5c5c] text-xs">New York, USA</p>
            </div>
          </div>
          <div>
            <svg
              className="text-[#5c5c5c] text-3xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12" />
                <path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-3 w-full justify-between m-auto ">
          <div className="flex items-center mt-3 gap-2">
            <img
              className="w-14 rounded-full "
              src="https://media-cdn.tripadvisor.com/media/photo-s/26/d7/e1/7d/caption.jpg"
              alt=""
            />
            <div className="">
              <h1 className="font-medium text-lg text-[#252525]">
                Julia Clarke
              </h1>
              <p className="text-[#5c5c5c] text-xs">New York, USA</p>
            </div>
          </div>
          <div>
            <svg
              className="text-[#5c5c5c] text-3xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M21.25 12a9.23 9.23 0 0 1-2.705 6.54A9.25 9.25 0 0 1 12 21.25a9.2 9.2 0 0 1-3.795-.81l-3.867.572a1.195 1.195 0 0 1-1.361-1.43l.537-3.923A8.9 8.9 0 0 1 2.75 12a9.23 9.23 0 0 1 2.705-6.54A9.25 9.25 0 0 1 12 2.75a9.26 9.26 0 0 1 6.545 2.71A9.24 9.24 0 0 1 21.25 12" />
                <path d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

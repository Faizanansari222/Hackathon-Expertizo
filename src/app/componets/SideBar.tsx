import React from "react";

function SideBar() {
  return (
    <div className="mt-16">
      <button
        data-drawer-target="defaultSidebar"
        data-drawer-toggle="defaultSidebar"
        aria-controls="defaultSidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className=" overflow-hidden sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="hover:text-[#ff4f9b] fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="mt-14 h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="hover:text-[#ff4f9b] flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700 group"
              >
                <svg className="text-3xl flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#ff4f9b] dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
                <span className="ms-3">Feed</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff4f9b] flex items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#ff4f9b] dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Explore</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff4f9b] flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#ff4f9b] dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4 2a.5.5 0 0 0-.447.276l-1.5 3A.5.5 0 0 0 2 5.5v2a.5.5 0 0 0 .5.5H3v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.053-.224l-1.5-3A.5.5 0 0 0 12 2zm9 3.618V7h-2V6h-1v1H8.5V6h-1v1H6V6H5v1H3V5.618L4.309 3h7.382zM6.5 10h1V9h-1zm2 0h1V9h-1zm-1 1.5h-1v-1h1zm1 0h1v-1h-1z" clip-rule="evenodd"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Market Place</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff4f9b] flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#ff4f9b] dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 20v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20zm18 0v-3q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v3zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Group</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff4f9b] flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#ff4f9b] dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path fill="currentColor" d="M42.238 6.426c4.8 0 7.238 2.34 7.333 6.979l.003.286V42.31c0 4.731-2.34 7.167-7.045 7.262l-.29.003H13.784c-4.777 0-7.259-2.318-7.356-6.977l-.003-.288V13.69c0-4.754 2.386-7.168 7.07-7.262l.29-.003zm-.07 3.773H13.855c-2.268 0-3.57 1.164-3.652 3.448l-.004.232V42.12c0 2.359 1.23 3.598 3.433 3.676l.223.004h28.313c2.245 0 3.547-1.164 3.629-3.448l.004-.232V13.88c0-2.359-1.23-3.598-3.412-3.676zM16.233 34.173l.768 2.364a.25.25 0 0 0 .24.172l2.47-.014a.25.25 0 0 1 .15.452l-2.002 1.477a.25.25 0 0 0-.09.279l.77 2.367a.25.25 0 0 1-.385.278l-2.012-1.46a.25.25 0 0 0-.294 0l-2.012 1.46a.25.25 0 0 1-.385-.279l.768-2.365a.25.25 0 0 0-.09-.28l-2.026-1.477a.25.25 0 0 1 .148-.452l2.5.014a.25.25 0 0 0 .24-.174l.766-2.362a.25.25 0 0 1 .476 0M41.182 36c1.004 0 1.818.895 1.818 2s-.814 2-1.818 2H24.818C23.814 40 23 39.105 23 38s.814-2 1.818-2zM16.233 24.173l.768 2.364a.25.25 0 0 0 .24.172l2.47-.014a.25.25 0 0 1 .15.451l-2.002 1.479a.25.25 0 0 0-.09.277l.77 2.367a.25.25 0 0 1-.385.28l-2.012-1.462a.25.25 0 0 0-.294 0l-2.012 1.462a.25.25 0 0 1-.385-.28l.768-2.365a.25.25 0 0 0-.09-.28l-2.026-1.476a.25.25 0 0 1 .148-.453l2.5.014a.25.25 0 0 0 .24-.174l.766-2.363a.25.25 0 0 1 .476 0M41.182 26c1.004 0 1.818.895 1.818 2s-.814 2-1.818 2H24.818C23.814 30 23 29.105 23 28s.814-2 1.818-2zM16.233 14.173l.768 2.364a.25.25 0 0 0 .24.172l2.47-.014a.25.25 0 0 1 .15.451l-2.002 1.478a.25.25 0 0 0-.09.279l.77 2.367a.25.25 0 0 1-.385.279l-2.012-1.462a.25.25 0 0 0-.294 0l-2.012 1.462a.25.25 0 0 1-.385-.28l.768-2.365a.25.25 0 0 0-.09-.28l-2.026-1.476a.25.25 0 0 1 .148-.453l2.5.014a.25.25 0 0 0 .24-.174l.766-2.363a.25.25 0 0 1 .476 0M41.182 16c1.004 0 1.818.895 1.818 2s-.814 2-1.818 2H24.818C23.814 20 23 19.105 23 18s.814-2 1.818-2z"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">My Favorites</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff4f9b] flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#ff4f9b] dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.34 9.32l-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57l-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#ff4f9b] flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
               <svg  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#ff4f9b] dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m14.136 3.361l.995-.1zm-.152-.82L13.095 3zm.447 2.277l.795-.607zm.929.384l-.134-.99zm1.238-.82l.633.773zm.687-.473l.305.953zm.702.035l.398-.917zm.637.538l-.707.707zm.894.894l.707-.707zm.538.637l.917-.398zm.035.702l.952.304zm-.472.687l-.774-.633zm-.822 1.239l-.99-.134zm.385.928l-.606.795zm1.457.295l.099-.995zm.82.152l.458-.889zm.47.521l.93-.367zm.001 2.926l-.93-.368zm-.472.52l.459.89zm-.82.153l-.099-.995l-.033.003l-.032.006zm0 0l.1.995l.033-.003l.032-.005zm-1.456.295l-.606-.795zm-.384.929l-.991.133zm.821 1.238l-.774.633zm.472.687l-.953.304zm-.035.702l-.918-.398zm-.538.637l.707.707zm-.894.893l-.707-.707zm-.637.538l.398.918zm-.702.035l-.304.953zm-.687-.472l.633-.774l-.008-.006zm0 0l-.633.774l.008.007zm-1.238-.82l.133-.992zm-.929.384l.795.606zm-.295 1.456l-.995-.1zm-.152.82L13.095 21zm-.521.472l-.368-.93zm-2.926 0l.368-.93zm-.52-.472l.888-.458zm-.153-.82l-.995.1zm-.295-1.456l-.795.607zm-.928-.384l-.134-.992zm-1.239.82l-.633-.773l-.016.013l-.015.013zm0 0l.633.775l.016-.013l.015-.014zm-.687.473l.304.952zm-.702-.035l-.398.917zm-.637-.538l.707-.707zm-.894-.894l-.707.707zm-.538-.637l.918-.397zm-.035-.702l.953.305zm.472-.687l.774.633zm.821-1.239l.992.134zm-.384-.928l.606-.795zm-1.457-.295l-.1.995zm-.82-.152L3 13.095zm-.47-.521l-.93.367zm0-2.926l-.93-.368zm.47-.52l-.458-.89zm.82-.153v-1h-.05l-.049.005zm0 0v1h.05l.05-.005zm1.457-.295l-.606-.795zm.385-.928l.991-.134zM4.38 7.4l.774-.632zm-.472-.687l.953-.304zm.035-.702l-.917-.397zm.538-.637l.707.707zm.894-.893l-.707-.707zm.637-.538l-.398-.918zm.702-.035l.304-.953zm.687.472l.633-.774zm1.238.821l.134-.991zm.93-.385l-.796-.606zm.294-1.456l.995.1zm.152-.82l-.889-.458zm.521-.471l.368.93zm2.926 0l.367-.93zm1.668 1.192a9 9 0 0 0-.068-.575a2 2 0 0 0-.19-.604L13.095 3c-.023-.045-.018-.061-.005.018c.015.089.028.213.051.443zm.095.95c.063.082.043.119.008-.076c-.033-.186-.06-.447-.103-.874l-1.99.199c.04.394.074.748.125 1.03c.049.27.135.625.37.933zm0 0l-1.59 1.212a2 2 0 0 0 1.857.77zm.739-.605a13 13 0 0 1-.691.545c-.163.113-.151.073-.048.06l.267 1.982c.384-.052.696-.242.922-.4c.235-.162.51-.388.816-.639zm1.016-.65a2 2 0 0 0-.561.292c-.14.1-.297.229-.455.358l1.266 1.548c.179-.146.276-.225.35-.277c.065-.047.056-.031.009-.016zm1.404.07a2 2 0 0 0-1.404-.07l.609 1.905zm.946.748a9 9 0 0 0-.417-.402a2 2 0 0 0-.53-.346l-.794 1.835c-.046-.02-.053-.036.007.017c.068.06.157.147.32.31zm.894.894l-.894-.894l-1.414 1.414l.894.894zm.748.946a2 2 0 0 0-.346-.53a9 9 0 0 0-.402-.416L18.81 6.083c.163.163.25.252.31.32c.053.06.037.053.017.007zm.07 1.404a2 2 0 0 0-.07-1.404l-1.835.795zm-.65 1.016a9 9 0 0 0 .358-.455c.106-.148.22-.332.292-.561l-1.905-.609c.015-.047.03-.056-.016.01c-.052.073-.13.17-.277.349zm-.605.739c-.013.103-.053.115.06-.048c.107-.155.273-.358.545-.69l-1.548-1.267c-.25.306-.477.581-.64.816c-.157.226-.347.538-.399.922zm0 0l-1.982-.267a2 2 0 0 0 .77 1.857zm.95.095a13 13 0 0 1-.874-.103c-.195-.035-.158-.055-.076.008l-1.212 1.59c.308.235.662.321.934.37c.281.05.635.085 1.029.125zm1.179.258a2 2 0 0 0-.604-.19a9 9 0 0 0-.575-.068l-.199 1.99a9 9 0 0 1 .443.05c.08.014.063.019.018-.004zm.943 1.043a2 2 0 0 0-.943-1.043L21 10.906zm.14 1.198c0-.204 0-.407-.011-.579a2 2 0 0 0-.13-.62L21 10.906c-.018-.047-.012-.063-.006.017c.006.09.006.215.006.446zm0 1.264v-1.264h-2v1.264zm-.14 1.198c.088-.223.117-.437.129-.62c.011-.171.011-.374.011-.578h-2c0 .231 0 .356-.006.446c-.006.08-.012.064.006.017zm-.943 1.043a2 2 0 0 0 .943-1.043L21 13.095zm-1.179.258c.204-.02.405-.04.575-.068c.18-.03.39-.08.604-.19L21 13.095c.044-.023.061-.018-.018-.005a8 8 0 0 1-.443.051zm.065-.008l-.329-1.973zm-1.014.103c-.083.063-.12.043.075.008c.186-.033.447-.06.874-.103l-.199-1.99c-.393.04-.748.074-1.029.125c-.271.049-.626.135-.934.37zm0 0l-1.213-1.59a2 2 0 0 0-.77 1.857zm.604.738a13 13 0 0 1-.545-.69c-.113-.163-.073-.151-.06-.048l-1.981.267c.052.384.241.696.399.922c.163.235.389.51.639.816zm.65 1.016a2 2 0 0 0-.292-.56c-.1-.141-.229-.297-.358-.456l-1.548 1.267c.146.179.225.275.277.349c.047.065.032.057.016.01zm-.07 1.405a2 2 0 0 0 .07-1.405l-1.905.61zm-.748.946c.145-.145.288-.287.402-.417c.12-.138.25-.309.346-.53l-1.835-.795c.02-.046.036-.052-.017.008c-.06.068-.147.156-.31.32zm-.894.893l.894-.893l-1.414-1.414l-.894.893zm-.946.749a2 2 0 0 0 .53-.347c.129-.113.272-.257.416-.402l-1.414-1.414a8 8 0 0 1-.32.31c-.06.054-.053.038-.007.018zm-1.404.07a2 2 0 0 0 1.404-.07l-.795-1.835zm-1.016-.65c.158.129.314.258.455.358c.148.105.332.219.561.292l.609-1.905c.047.015.056.03-.01-.016a8 8 0 0 1-.349-.277zm.008.006l1.25-1.561zm-.747-.61c-.103-.015-.115-.055.048.058c.155.108.358.273.69.545l1.267-1.547c-.306-.251-.581-.477-.816-.64c-.226-.158-.538-.347-.922-.399zm0 0l.267-1.983a2 2 0 0 0-1.857.77zm-.095.949c.043-.427.07-.689.103-.874c.035-.195.055-.159-.008-.076l-1.59-1.213c-.235.308-.321.663-.37.934c-.05.282-.085.636-.125 1.03zm-.259 1.179c.11-.214.16-.424.19-.604c.03-.17.049-.371.07-.575l-1.99-.2a8 8 0 0 1-.052.444c-.013.08-.018.063.005.018zm-1.041.943a2 2 0 0 0 1.041-.943L13.095 21zm-1.2.14c.205 0 .408 0 .58-.011c.182-.012.396-.04.62-.13L13.095 21c.047-.018.063-.012-.017-.006a8 8 0 0 1-.446.006zm-1.263 0h1.264v-2h-1.264zm-1.198-.14c.223.088.437.117.62.129c.171.011.374.011.578.011v-2c-.231 0-.356 0-.446-.006c-.08-.006-.064-.012-.017.006zm-1.043-.943a2 2 0 0 0 1.043.943l.735-1.86zm-.258-1.179c.02.204.04.405.068.575c.03.18.08.39.19.604l1.78-.916c.023.044.018.061.005-.018a8 8 0 0 1-.051-.443zm-.095-.95c-.063-.082-.043-.12-.008.076c.033.185.06.447.103.874l1.99-.199c-.04-.394-.074-.748-.125-1.03c-.049-.27-.135-.625-.37-.933zm0 0l1.59-1.212a2 2 0 0 0-1.857-.77zm-.739.605c.333-.272.536-.438.691-.545c.163-.113.151-.073.048-.06l-.267-1.982c-.384.052-.696.242-.922.4c-.235.162-.51.388-.816.639zm.031-.027L6.737 18.87zm-1.047.677a2 2 0 0 0 .561-.292c.14-.1.297-.229.455-.358L6.77 18.845a8 8 0 0 1-.35.277c-.065.047-.056.032-.009.016zm-1.404-.07a2 2 0 0 0 1.404.07l-.609-1.905zm-.947-.748c.145.145.288.288.418.402c.137.12.308.25.53.346l.794-1.835c.046.02.053.036-.007-.017a8 8 0 0 1-.32-.31zm-.893-.894l.894.894l1.414-1.414l-.894-.894zm-.748-.946c.095.22.226.392.346.53c.114.129.257.272.402.416l1.414-1.414a8 8 0 0 1-.31-.32c-.053-.06-.037-.053-.017-.007zm-.07-1.404a2 2 0 0 0 .07 1.404l1.835-.795zm.65-1.016a9 9 0 0 0-.358.455a2 2 0 0 0-.292.561l1.905.609c-.016.047-.03.056.016-.01c.052-.073.13-.17.277-.349zm.604-.739c.014-.103.054-.115-.059.048c-.107.155-.273.358-.545.69l1.548 1.267c.25-.306.477-.581.64-.816c.157-.226.347-.538.399-.922zm0 0l1.983.267a2 2 0 0 0-.77-1.857zm-.95-.095c.428.043.69.07.875.103c.195.035.158.055.075-.008l1.213-1.59c-.308-.235-.662-.321-.934-.37c-.281-.05-.635-.085-1.03-.125zm-1.178-.258c.214.11.424.16.604.19c.17.028.371.048.575.068l.199-1.99a8 8 0 0 1-.443-.05c-.08-.014-.063-.019-.018.004zM1.14 13.83a2 2 0 0 0 .943 1.043L3 13.095zM1 12.632c0 .204 0 .407.011.579c.012.182.04.396.13.62L3 13.094c.018.047.012.063.007-.017A8 8 0 0 1 3 12.632zm0-1.264v1.264h2v-1.264zm.14-1.199a2 2 0 0 0-.129.62c-.012.172-.011.375-.011.58h2c0-.232 0-.357.007-.447c.005-.08.011-.064-.007-.017zm.943-1.041a2 2 0 0 0-.943 1.041l1.86.736zm1.179-.26c-.204.021-.405.04-.575.07c-.18.03-.39.08-.604.19L3 10.905c-.045.023-.061.018.018.005a8 8 0 0 1 .443-.051zm.1-.004v2zm0 0v2zm.85-.09c.083-.063.12-.043-.076-.008c-.185.033-.447.06-.874.103l.2 1.99c.393-.04.747-.074 1.029-.125c.271-.049.626-.135.934-.37zm0 0l1.213 1.59a2 2 0 0 0 .769-1.857zm-.605-.739c.272.332.438.536.546.691c.113.163.073.151.059.048l1.982-.267c-.052-.384-.241-.695-.399-.922c-.163-.235-.39-.51-.64-.816zm-.65-1.017c.073.23.186.413.292.562c.1.14.229.297.358.455L5.155 6.77a8 8 0 0 1-.277-.35c-.047-.065-.031-.057-.016-.01zm.07-1.403a2 2 0 0 0-.07 1.403l1.905-.608zm.748-.947c-.145.145-.288.287-.402.417a2 2 0 0 0-.346.53l1.835.795c-.02.046-.036.053.017-.008c.06-.068.147-.156.31-.32zm.894-.893l-.894.893L5.19 6.082l.894-.893zm0 0l1.414 1.414zm.946-.749a2 2 0 0 0-.53.347a9 9 0 0 0-.416.402l1.414 1.414c.163-.164.252-.251.32-.31c.06-.054.053-.038.007-.018zm1.404-.07a2 2 0 0 0-1.404.07l.795 1.835zm1.016.65c-.158-.129-.314-.257-.455-.357a2 2 0 0 0-.561-.293L6.41 4.861c-.047-.015-.056-.03.01.016c.073.053.17.131.349.278zm.739.605c.103.014.115.054-.048-.059a13 13 0 0 1-.69-.545L6.768 5.155c.306.25.581.476.816.64c.226.157.538.346.922.398zm0 0l-.267 1.982a2 2 0 0 0 1.857-.77zm.095-.95c-.043.428-.07.69-.103.875c-.035.195-.055.158.008.075l1.59 1.213c.235-.308.321-.663.37-.934c.05-.281.086-.636.125-1.03zm.258-1.178a2 2 0 0 0-.19.604c-.028.17-.048.371-.068.575l1.99.199a9 9 0 0 1 .05-.443c.014-.08.019-.062-.004-.018zm1.043-.943a2 2 0 0 0-1.043.943L10.905 3zM11.368 1c-.204 0-.407 0-.579.011a2 2 0 0 0-.62.129L10.906 3c-.047.018-.063.012.017.007c.09-.006.215-.007.446-.007zm1.264 0h-1.264v2h1.264zm1.198.14a2 2 0 0 0-.62-.129C13.04.999 12.837 1 12.633 1v2c.231 0 .356 0 .446.007c.08.005.064.011.017-.007zm1.043.943a2 2 0 0 0-1.043-.943L13.095 3zM15 12a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm-3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zm-3 3a3 3 0 0 1 3-3V7a5 5 0 0 0-5 5zm3 3a3 3 0 0 1-3-3H7a5 5 0 0 0 5 5z"/></svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;

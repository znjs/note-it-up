import React from "react";

function Navbar() {
  return (
    <div className="border-b-2 border-slate-300 flex items-center">
      <div className="flex items-center">
        <i className="m-4 fa-solid fa-bars text-2xl cursor-pointer"></i>
        <i className="m-2 fa-solid fa-lightbulb text-gray-50 bg-yellow-300 px-2 py-1 rounded text-2xl cursor-pointer"></i>
        <p className="text-xl">Note It Up</p>
      </div>
      <div className=" bg-gray-100  items-center grow mx-20 max-w-2xl rounded-md hidden tablet:flex">
        <i className="rounded-full py-2 px-3 hover:bg-gray-200 text-xl fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="bg-gray-100 mx-2 px-2 py-3 outline-none grow"
        />
        <i className="rounded-full py-2 px-4 hover:bg-gray-200 text-xl  fa-solid fa-xmark"></i>
      </div>
      <div className="flex ml-auto">
        <i className="rounded-full py-2 px-3 hover:bg-gray-100 text-xl fa-solid fa-magnifying-glass tablet:hidden"></i>
        <i className="rounded-full py-2 px-3 hover:bg-gray-100 text-xl fa-solid fa-list"></i>
        <i className="rounded-full py-2 px-3 hover:bg-gray-100 text-xl fa-solid fa-border-all"></i>
        <i className="rounded-full py-2 px-3 hover:bg-gray-100 text-xl fa-solid fa-gear"></i>
        <i className="rounded-full py-2 px-3 hover:bg-gray-100 text-xl fa-regular fa-user"></i>
      </div>
    </div>
  );
}

export { Navbar };

import React from "react";

function Home() {
  return (
    <div className="grow">
      <div className="flex justify-center items-center mt-8 border-gray-400 border-2 w-[540px] mx-auto rounded-md shadow-md shadow-slate-400 overflow-hidden">
        <input
          type="text"
          className="outline-none p-2 grow"
          placeholder="Take a Note..."
        />
        <i className="fa-regular fa-square-check text-xl py-1 px-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500"></i>
        <i className="fa-regular fa-image text-xl py-1 px-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500"></i>
      </div>
    </div>
  );
}

export { Home };

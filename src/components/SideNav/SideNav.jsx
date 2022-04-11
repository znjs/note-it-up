import "./sidenav.css";

function SideNav() {
  return (
    <div className=" sticky top-[66px] left-0 w-64 h-sidenav">
      <div className="flex flex-col">
        <div className="flex py-2 items-center  w-full hover:bg-gray-100 p-4 rounded-r-full bg-yellow-400 select-none cursor-pointer">
          <i className="fa-solid fa-house px-4 text-lg"></i>
          <p>Home</p>
        </div>
        <div className="flex py-2 items-center  w-full hover:bg-gray-100 p-4 rounded-r-full select-none cursor-pointer">
          <i className="fa-solid fa-tag px-4 text-lg"></i>
          <p>Label</p>
        </div>
        <div className="flex py-2 items-center  w-full hover:bg-gray-100 p-4 rounded-r-full select-none cursor-pointer">
          <i className="fa-solid fa-tag px-4 text-lg"></i>
          <p>Archive</p>
        </div>
        <div className="flex py-2 items-center  w-full hover:bg-gray-100 p-4 rounded-r-full select-none cursor-pointer">
          <i className="fa-regular fa-trash-can px-4 text-lg"></i>
          <p>Trash</p>
        </div>
      </div>
    </div>
  );
}

export { SideNav };

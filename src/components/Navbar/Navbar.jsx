import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="text-black font-bold">
        <div className="ml-20 text-5xl flex justify-between ">
          <h1 className="mt-5">SIP Calculator</h1>
          <lord-icon
            class="mr-20 mt-2 w-24 h-24"
            src="https://cdn.lordicon.com/rguiapej.json"
            trigger="hover"
          ></lord-icon>
        </div>
      </div>
    </>
  );
};

export default Navbar;

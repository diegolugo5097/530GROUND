import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black h-36 dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">
      <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex w-full justify-center">
          <img
            src="https://i.postimg.cc/d1wWWLv5/logo.png"
            alt="530 Logo"
            width={"22%"}
            className="rounded-full border-4 border-white hover:border-red-800 transition duration-500 ease-in-out"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

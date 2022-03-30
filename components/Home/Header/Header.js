import React from "react";
import Image from "next/image";
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <header className="fixed top-0 z-[100000]">
      <div className="flex w-screen items-center bg-white justify-between shadow-md">
        <div className="relative h-20 w-28 ml-8">
          <Image
            src="/images/Airbnb-logo.jpg"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <SearchBar />
        <div className="flex items-center justify-between mr-10 md:mr-16 space-x-4 text-gray-600">
          <p className="hidden md:inline-flex">Become a Host</p>
          <GlobeAltIcon className="icon" />
          <div className="flex border-2 rounded-full p-2">
            <MenuIcon className="icon" />
            <UserCircleIcon className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

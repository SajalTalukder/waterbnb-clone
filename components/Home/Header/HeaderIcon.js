import React from "react";
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
const HeaderIcon = () => {
  return (
    <div className="flex items-center justify-between mr-10 md:mr-16 space-x-4 text-gray-600">
      <p className="hidden md:inline-flex">Become a Host</p>
      <GlobeAltIcon className="icon" />
      <div className="flex border-2 rounded-full p-2">
        <MenuIcon className="icon" />
        <UserCircleIcon className="icon" />
      </div>
    </div>
  );
};

export default HeaderIcon;

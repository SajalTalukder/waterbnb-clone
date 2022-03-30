import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
const SearchBar = () => {
  return (
    <div className="flex w-[35%] items-center md:border-2 rounded-full py-2 ">
      <input
        placeholder="Start Your Search"
        className="bg-transparent outline-none pl-5 flex-grow text-sm"
      />
      <SearchIcon className="hidden md:inline-flex h-8 w-8 ml-2 mr-5 cursor-pointer bg-red-400 rounded-full text-white p-2" />
    </div>
  );
};

export default SearchBar;

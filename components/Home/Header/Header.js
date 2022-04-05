import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { SearchIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { DateRangePicker } from "react-date-range";
import HeaderImage from "./HeaderImage";
import HeaderIcon from "./HeaderIcon";

const Header = ({ placeholder }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [numberValue, setNumberValue] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const placeHolderText = placeholder ? placeholder : "Start Your Search";
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: inputValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guest: numberValue,
      },
    });
    setInputValue("");
  };

  return (
    <header className="sticky top-0 z-[100000] bg-white ">
      <div className="flex items-center  justify-between shadow-md">
        <HeaderImage />
        <div className="flex w-[35%] items-center md:border-2 rounded-full py-2 ">
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder={placeHolderText}
            className="bg-transparent outline-none pl-5 flex-grow text-sm"
          />
          <SearchIcon className="hidden md:inline-flex h-8 w-8 ml-2 mr-5 cursor-pointer bg-red-400 rounded-full text-white p-2" />
        </div>

        <HeaderIcon />
      </div>

      {inputValue && (
        <div className="w-[100%] md:w-[50%] mx-auto mt-7 mb-7">
          <DateRangePicker
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            ranges={[selectionRange]}
            onChange={handleSelect}
          />
          <div className="flex justify-between items-center w-[83%] border-b-[1px] mt-5 mb-5">
            <div className="text-lg font-bold">Number of Guest</div>
            <div className="flex space-x-3 items-center ">
              <UserGroupIcon className="w-6 h-6 text-red-600" />
              <input
                value={numberValue}
                min={1}
                onChange={(e) => {
                  setNumberValue(e.target.value);
                }}
                className="w-8 outline-none"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-end w-[75%] space-x-5 items-center">
            <button
              onClick={() => {
                setInputValue("");
              }}
              className="btn text-white bg-gray-600 hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSearch}
              className="btn text-white bg-red-600 hover:bg-red-800"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

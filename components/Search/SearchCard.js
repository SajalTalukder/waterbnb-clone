import React from "react";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
const SearchCard = ({
  img,
  total,
  title,
  description,
  price,
  star,
  location,
}) => {
  return (
    <div className="flex border-b-[1px] items-center space-x-6 mb-5 rounded-lg hover:bg-gray-100 hover:scale-105 transform hover:shadow-md transition duration-300 p-2 py-3 ">
      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="mr-5">
        <div className="flex items-center justify-between">
          <h1 className="text-sm font-semibold">{location}</h1>
          <HeartIcon className="h-8 w-8 text-red-600" />
        </div>
        <h1 className=" text-md md:text-lg font-bold mb-3">{title}</h1>
        <h1 className="text-sm text-gray-600 mb-4">{description}</h1>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <StarIcon className="h-6 w-6 text-red-600" />
            <h1 className="text-lg font-semibold">{star}</h1>
          </div>
          <div className="text-lg font-semibold">{price}</div>
        </div>
        <h1 className="text-xl font-bold mt-4 text-center">{total}</h1>
      </div>
    </div>
  );
};

export default SearchCard;

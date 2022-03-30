import React from "react";
import Image from "next/image";
const Card = ({ location, distance, img }) => {
  return (
    <div className="flex cursor-pointer items-center hover:bg-gray-200 transition duration-300 p-1 rounded-lg transform hover:scale-105">
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} layout="fill" className="rounded-lg" />
      </div>
      <div className="ml-5">
        <p className="font-semibold">{location}</p>
        <p className="text-gray-600">{distance}</p>
      </div>
    </div>
  );
};

export default Card;

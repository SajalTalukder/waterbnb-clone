import React from "react";
import Image from "next/image";
const LargeCard = () => {
  return (
    <div className="mt-16 relative w-full h-[20rem] mb-16 ">
      <Image
        src="/images/largeCard.jpg"
        alt="large image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute top-16 left-16 md:left-32 ">
        <p className=" text-lg md:text-3xl mb-3">The Greatest Outdoors</p>
        <p className=" text-md text-gray-800 mb-3">
          Wishlists curated by Airbnb
        </p>
        <button className="text-sm px-4 bg-black text-white p-2 rounded-lg hover:bg-red transform transition duration-300 active:scale-95">
          Get Inspired
        </button>
      </div>
    </div>
  );
};

export default LargeCard;

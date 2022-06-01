import React from "react";
import Image from "next/image";
import { getSession, signIn } from "next-auth/react";
const SignIn = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[90vh] items-center justify-center ">
      <div className="relative w-[200px] h-[100px] sm:w-[300px] sm:h-[150px] md:w-[500px] md:h-[300px]">
        <Image
          src="/images/Airbnb-logo.jpg"
          alt="airbnb"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <button
        onClick={() => {
          signIn();
        }}
        className="p-3 px-16 bg-black hover:bg-gray-800 transition transform active:scale-95 duration-300 text-white font-semibold text-lg  rounded-full "
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;

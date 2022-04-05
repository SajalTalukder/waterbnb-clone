import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const HeaderImage = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="relative cursor-pointer h-20 w-28 ml-8"
    >
      <Image
        src="/images/Airbnb-logo.jpg"
        layout="fill"
        objectFit="contain"
        alt="logo"
      />
    </div>
  );
};

export default HeaderImage;

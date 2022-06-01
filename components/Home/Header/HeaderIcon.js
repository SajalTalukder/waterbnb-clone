import React from "react";
import { signOut, useSession } from "next-auth/react";

import { GlobeAltIcon, MenuIcon } from "@heroicons/react/solid";
const HeaderIcon = () => {
  const { data: session } = useSession();
  console.log(session?.user?.image);
  return (
    <div className="flex items-center justify-between mr-10 md:mr-16 space-x-4 text-gray-600">
      <p className="hidden md:inline-flex">Become a Host</p>
      <GlobeAltIcon className="icon" />
      <div className="flex border-2 rounded-full p-2 space-x-2">
        <MenuIcon className="icon" />

        {session?.user && (
          <div>
            <img
              src={session?.user?.image}
              alt={session?.user?.name}
              onClick={() => {
                signOut();
              }}
              className="h-6 w-6 object-contain cursor-pointer rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderIcon;

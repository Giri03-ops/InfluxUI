"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/main");
  };

  return (
    <header className="bg-[#0B090A] p-4 md:p-6 text-white flex flex-col md:flex-row justify-between items-center">
      <div
        className="flex items-center justify-center md:justify-start mb-4 md:mb-0 cursor-pointer hover:cursor-pointer"
        onClick={handleLogoClick}
      >
        <Image
          src="https://atsys.com.au/dist/atsys-logo.svg"
          alt="ATSYS"
          width={131}
          height={23}
          className="mr-2"
        />
      </div>
    </header>
  );
};

export default Header;

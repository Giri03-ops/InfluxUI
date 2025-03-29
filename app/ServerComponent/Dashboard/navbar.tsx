import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavBar = () => {
  return (
    <header className="bg-[#1D191A] p-4 md:p-6 text-white flex flex-row justify-between items-center">
      <div className="flex items-center justify-center md:justify-start mb-0 md:mb-0">
        <div className="flex items-center">
          <span className="text-[#989797] text-sm">Home</span>
          <span className="text-[#989797] text-sm mx-2">&gt;</span>
          <span className="text-[#E9E8E8] text-sm">SEP-PG3</span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

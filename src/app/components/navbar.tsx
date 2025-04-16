import React from "react";

const Navbar = () => {
  return (
    <div className=" px-3 flex justify-between items-center bg-[#FBE35C] md:px-10 py-5">
      <h1 className="uppercase font-[family-name:var(--font-satisfy)]  font-bold text-3xl font-satisfy">
        DML MOTION
      </h1>
      <ul className=" flex items-center gap-5 font-medium text-lg">
        <li className=" hover:text-gray-800 hover:border-b-3 hover:pb-[2px] hover:border-b-black transform-border duration-200 ease-out cursor-pointer">
          Works
        </li>
        <li className=" hover:text-gray-800 hover:border-b-3 hover:pb-[2px] hover:border-b-black transform-border duration-200 ease-out cursor-pointer">
          Profile
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

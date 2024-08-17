import React from "react";
import { LuArrowRight } from "react-icons/lu";

const Herosection = ({ searchText, setSearchText, filteredArrayFunction }) => {
  return (
    <div className="flex flex-col h-[20rem] bg-purple-100 w-full items-center justify-center gap-5 p-5">
      <h1 className="text-[4rem] font-semibold">How can we help?</h1>
      <div className="flex justify-center items-center w-full md:w-[70%] lg:w-[50%] relative">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-[1px] border-black rounded-lg shadow-lg p-4 h-[4rem] w-[100%]"
          placeholder="Search"
        />
        <LuArrowRight
          className="w-[10%] text-[2rem] cursor-pointer absolute right-0"
          onClick={() => filteredArrayFunction()}
        />
      </div>
    </div>
  );
};

export default Herosection;

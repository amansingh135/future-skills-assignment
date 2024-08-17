import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { changeToTrue } from "../slices/modalOpenSlice";

const Navbar = ({ setIsopen, isOpen }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex md:h-[5rem] w-full flex-col md:flex-row gap-5 bg-black text-white justify-between items-center p-5 md:pl-10 md:pr-10">
      <div className="flex justify-between items-center font-semibold gap-1 text-[1.8rem]">
        <img src="/icon.jpg" />
        <p>Abstract | </p>
        <p>Help Center</p>
      </div>
      <Button
        className={
          "bg-slate-700 text-white p-3 rounded-lg font-semibold text-[1.3rem] border-[1px] cursor-pointer"
        }
        onClick={() => dispatch(changeToTrue())}
        text={"Submit a request"}
      />
    </div>
  );
};

export default Navbar;

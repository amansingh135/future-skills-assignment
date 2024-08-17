import React from "react";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-5 bg-black text-white w-full p-10">
      <div className="flex flex-col justify-start items-start">
        <strong className="text-[1.4rem]">Abstract</strong>
        <p>Branches</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <strong className="text-[1.4rem]">Resources</strong>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
      </div>
      <div className="flex flex-col justify-start items-start">
        <strong className="text-[1.4rem]">Community</strong>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Dribble</p>
        <p>Podcast</p>
      </div>
      <div className="flex flex-col justify-around items-start gap-3">
        <div className="flex flex-col justify-start items-start">
          <strong className="text-[1.4rem]">Company</strong>
          <p>About us</p>
          <p>Careers</p>
          <p>legal</p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <strong className="text-[1.4rem]">Contact Us</strong>
          <p>info@Abstact.com</p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-start">
        <img src="/icon.jpg" alt="logo" />
        <p>Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

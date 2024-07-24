"use client"

import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import MenuOne from "./MenuOne";




export default function Navbar() {

  const [openMenuOne, setOpenMenuOne] = useState(false);
  const [openMenuTwo, setOpenMenuTwo] = useState(false);

  return (
    <>
    <div className="flex justify-between px-16 bg-navbarBackground h-12 font-roboto text-white items-center relative border-b border-gray-500">
      <div className="flex">
        <div className="flex items-center gap-3">
          <FaInstagram/>
          <FaFacebook/>
          <FaXTwitter/>
        </div>
      </div>
      <div className="flex gap-12" onMouseEnter={()=>{setOpenMenuOne(true)}}>
        <div className="flex items-center gap-1">
          <p>Nutrition</p>
          <IoIosArrowDown />
        </div>
        <div className="flex items-center gap-1">
          <p>Lifestyle</p>
          <IoIosArrowDown />
        </div>
      </div>
      {
        openMenuOne &&
        <MenuOne setOpenMenuOne={setOpenMenuOne}/>
      }
    </div>
    </>
  );
}

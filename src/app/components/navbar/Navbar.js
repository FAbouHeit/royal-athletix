import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




export default function Navbar() {
  return (
    <div className="flex justify-between px-16 bg-navbarBackground h-12 font-roboto text-white items-center">
      <div className="flex">
        <div className="flex items-center gap-3">
          <FaInstagram/>
          <FaFacebook/>
          <FaXTwitter/>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex items-center gap-1">
          <p>Nutrition</p>
          <IoIosArrowDown />
        </div>
        <div className="flex items-center gap-1">
          <p>Lifestyle</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

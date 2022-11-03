import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [textColor] = useState("#C8A951");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 px-10 ease-in duration-300 bg-[#191b1d]">
      <div className="max-w-[1240px] h-[50px] m-auto flex justify-between items-center p-4 text-black">
        <Link href="/">
          <a className="font-poppins font-extralight text-md text-[#C8A951] hover:underline hover:decoration-[#C8A951] underline-offset-4">
            RYLAN MCNEIL
          </a>
        </Link>
        <ul className="hidden sm:space-x-8 sm:flex">
          <li className="text-white font-poppins font-thin hover:underline hover:decoration-[#C8A951] underline-offset-4">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="text-white font-poppins font-thin hover:underline hover:decoration-[#C8A951] underline-offset-4">
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li className="text-white font-poppins font-thin hover:underline hover:decoration-[#C8A951] underline-offset-4">
            <Link href="/skills">SKILLS</Link>
          </li>
          <li className="text-white font-poppins font-thin hover:underline hover:decoration-[#C8A951] underline-offset-4">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden cursor-pointer z-10"
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-3xl text-white hover:text-[#C8A951]"
            >
              <Link href="/about">ABOUT</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl text-white hover:text-[#C8A951]"
            >
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl text-white hover:text-[#C8A951]"
            >
              <Link href="/skills">SKILLS</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl text-white hover:text-[#C8A951]"
            >
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

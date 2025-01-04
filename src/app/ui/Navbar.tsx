'use client'
import Image from "next/image";
import CartIcon from "./CartIcon";
import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const [showOptions, setShowOptions] = useState(false)

  const handleOptionClick = () => {
    setTimeout(() => {
      setShowOptions(!showOptions)
    }, 10)
  }
  useEffect(() => {
    addEventListener('click', handleBodyClick)
    return () => {
      removeEventListener('click', handleBodyClick)
    }
  })

  const handleBodyClick = () => {
    if (showOptions)
      setShowOptions(false)
  }
  return (
    <div className="h-16 px-2 lg:px-4 bg-themeBlue text-white flex z-50 justify-evenly md:justify-center md:gap-1 lg:gap-16 items-center">
      {/* CENTER */}
      <a href="/" className="flex h-full items-center">
        <Image src="/logo.png" alt="LOGO" width={50} height={50} className="rounded-full" />
        <div className="font-bold text-2xl pl-1">GUPTA ASSOCIATES</div>
      </a>
      <div className="min-h-full flex items-center relative">
        <div className="md:hidden cursor-pointer" onClick={handleOptionClick}>
          <div className="flex flex-col gap-[5px] mx-3 justify-center mr-2">
            <Bar />
            <Bar />
            <Bar />
          </div >
        </div>
        <div
          className={`fixed left-0 items-center py-6 gap-6 top-16 flex-col bg-blue-300 w-full md:py-0 md:static md:flex-row md:bg-themeBlue md:flex md:w-auto md:gap-2 lg:gap-4 md:min-h-full ${showOptions ? 'flex' : 'hidden'}`}>
          <Link text='HOME' link="/" />
          <Link text="CATEGORIES" link="/Categories" />
          <Link text="PANELS" link="/Panel/DistributionBoard" />
          <Link text="ABOUT US" link="/AboutUs" />
          <Link text="CONTACT US" link="/ContactUs" />
          <CartIcon />
          <div className="flex items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Link = ({ text, link }: { text: string, link: string }) => {
  return (
    <div className="md:h-full flex items-center">
      <a href={link} className="relative group font-bold md:font-light md:text-sm">
        {text}
        <div className="h-[2px] w-0 group-hover:w-full bg-white absolute left-0 bottom-0 transition-all"></div>
      </a>
    </div>
  )
}

const Bar = () => {
  return (
    <div className={"h-[2px] w-[26px] bg-white"}></div>
  )
}
export default Navbar;

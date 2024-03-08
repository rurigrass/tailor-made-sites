"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuSlide } from "./anim";
import NavLink from "./NavLink";
import Curve from "./Curve";

// import { menuSlide } from "../anim";

// import Link from "./link";
interface NavProps {
  primaryColour: string;
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Nav = ({ primaryColour }: NavProps) => {
  const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  //What is selected indicator? -> yes check

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100vh] w-full md:w-[500px] fixed top-0 right-0"
      style={{ backgroundColor: primaryColour }}
    >
      <div className=" box-border h-full pl-[50px] py-[100px] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-[56px] gap-[12px]"
        >
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                // isActive={selectedIndicator == data.href}
                // setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
              // <div key={index}>{data.title}</div>
            );
          })}
        </div>

        <div className="flex w-full justify-between text-[12px] gap-[40px] pr-[50px]">
          <a>Github</a>

          <a>Instagram</a>

          <a>Dribble</a>

          <a>LinkedIn</a>
        </div>
      </div>
      <Curve primaryColour={primaryColour} />
    </motion.div>
  );
};

export default Nav;

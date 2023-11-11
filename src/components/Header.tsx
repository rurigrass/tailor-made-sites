"use client";
interface HeaderProps {}
import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import Magnetic from "./Magnetic";

const Header = forwardRef(function index(props, ref: any) {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log(isActive);

  const topBar = {
    open: {
      rotate: 45,
      y: 5.5,
    },
    close: {
      rotate: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  const bottomBar = {
    open: {
      rotate: -45,
      y: -5.5,
    },
    close: {
      rotate: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <div className="fixed flex w-full justify-end p-[10px] box-border mix-blend-difference z-10">
      <Magnetic>
        <div
          ref={ref}
          className="relative cursor-pointer flex flex-col gap-[8px] p-[30px]  "
          onClick={() => setIsActive(!isActive)}
        >
          <motion.div
            variants={topBar}
            animate={isActive ? "open" : "close"}
            className=" h-[3px] w-[30px] mix-blend-darken bg-white rounded-full"
          ></motion.div>
          <motion.div
            variants={bottomBar}
            animate={isActive ? "open" : "close"}
            className=" h-[3px] w-[30px] mix-blend-darken bg-white rounded-full"
          ></motion.div>
          {/* not sure why below was here before */}
          {/* <div
          ref={ref}
          className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-150"
        ></div> */}
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;

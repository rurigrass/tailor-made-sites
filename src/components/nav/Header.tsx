"use client";
interface HeaderProps {
  textColour: string;
  primaryColour: string;
}
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useState } from "react";
import Magnetic from "../Magnetic";
import Nav from "./Nav";
import { useColoursStore } from "@/state/colours";

const Header = forwardRef(function Header(props: HeaderProps, ref: any) {
  const { setBackgroundFade } = useColoursStore();
  const [isActive, setIsActive] = useState<boolean>(false);

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
    <div>
      <div className="fixed top-0 right-0 flex w-full justify-end p-[10px] box-border z-10">
        <Magnetic>
          <div
            ref={ref}
            className="relative cursor-pointer flex flex-col gap-[8px] p-[30px]"
            onClick={() => {
              setIsActive(!isActive), setBackgroundFade(!isActive);
            }}
          >
            <motion.div
              variants={topBar}
              animate={isActive ? "open" : "close"}
              style={{ backgroundColor: props.textColour }}
              className=" h-[3px] w-[30px] rounded-full"
            ></motion.div>
            <motion.div
              variants={bottomBar}
              animate={isActive ? "open" : "close"}
              style={{ backgroundColor: props.textColour }}
              className=" h-[3px] w-[30px] rounded-full"
            ></motion.div>
            {/* not sure why below was here before */}
            {/* <div
          ref={ref}
          className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-150"
        ></div> */}
          </div>
        </Magnetic>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav primaryColour={props.primaryColour} />}
      </AnimatePresence>
    </div>
  );
});

export default Header;

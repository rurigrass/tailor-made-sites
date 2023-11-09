"use client";
interface HeaderProps {}
import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import Magnetic from "./Magnetic";

const Header = forwardRef(function index(props, ref: any) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const itemVariants = {
    open: {
      before: 1,
      opacity: 1,
      rotate: 90,
      transition: { type: "spring", stiffness: 500, damping: 24 },
    },
    closed: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed flex w-full justify-end p-[10px] box-border mix-blend-difference z-10">
      <Magnetic>
        <motion.div
          onClick={() => setIsActive(!isActive)}
          className={`transition ease transform duration-500 relative cursor-pointer flex gap-[8px] flex-col p-[30px] pointer-events-none before:block before:w-[30px] before:h-[2px] before:mix-blend-difference before:bg-white after:block after:w-[30px] after:h-[2px] after:mix-blend-difference after:bg-white 
          ${
            isActive
              ? "before:rotate-45 after:-rotate-45 before:translate-y-[5px] after:-translate-y-[5px] opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }
          `}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          variants={itemVariants}
          animate={isActive ? "open" : "closed"}
        >
          <div
            ref={ref}
            className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-150"
          ></div>
        </motion.div>
      </Magnetic>
    </div>
  );
});

export default Header;

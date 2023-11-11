// import styles from "./style.module.scss";

import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "./anim";

interface NavLinkProps {
  data: { title: string; href: string; index: number };
}

const NavLink = ({ data }: NavLinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      // onMouseEnter={() => {
      //   setSelectedIndicator(href);
      // }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        // variants={scale}
        // animate={isActive ? "open" : "closed"}
        className=""
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default NavLink;

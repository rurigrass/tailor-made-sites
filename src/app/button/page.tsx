"use client";

import CustomiserButton from "@/components/customiser/CustomiserButton";
import { useColoursStore } from "@/state/colours";
import { useState } from "react";
import { motion } from "framer-motion";

interface pageProps {}

const Page = ({}) => {
  const { backgroundColour, primaryColour } = useColoursStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="h-[100vh]  flex flex-col gap-5 items-center justify-center">
      <div className="h-10 w-30 rounded-lg overflow-hidden cursor-pointer">
        <motion.div
          className="relative"
          animate={{ top: isOpen ? "-2.5rem" : "0rem" }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div
            className="h-10 w-30 bg-yellow-400"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            other button
          </div>
          <div
            className="h-10 w-30 bg-blue-400"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            other button
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

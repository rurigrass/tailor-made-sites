"use client";

import BottomBar from "@/components/customiser/BottomBar";
import Header from "@/components/nav/Header";
import Title from "@/components/sections/Title";
// import TextWithMask from "@/components/sections/TextWithMask";
import StickyCursor from "@/components/StickyCursor";
import { useColoursStore } from "@/state/colours";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const { textColour, backgroundColour, primaryColour, backgroundFade } =
    useColoursStore();
  const stickyElement = useRef(null);
  const titleElements = useRef(null); // Initialize with two elements
  // const titleElements = useRef([null, null]); // Initialize with two elements

  const overlayVariants = {
    open: {
      opacity: 0.5,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: [0.3, 0.2, 0, 1],
      },
    },
  };

  return (
    <>
      <motion.main
        className={`h-[200vh] cursor-default relative  
        `}
        style={{
          backgroundColor: backgroundColour,
        }}
      >
        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black"
          variants={overlayVariants}
          animate={backgroundFade ? "open" : "closed"}
          initial={"closed"}
        />
        {/* <StickyCursor stickyElement={stickyElement} /> */}
        <StickyCursor
          stickyElement={stickyElement}
          titleElement={titleElements}
          primaryColour={primaryColour}
        />
        <Title
          textColour={textColour}
          // ref={(el) => (titleElements.current[0] = el)}
          ref={titleElements}
        />
        <div className="h-[30vh] lg:h-[40vh] grid grid-cols-2 lg:grid-cols-3 m-4 gap-4 ">
          <p
            className="lg:col-span-2 flex justify-center items-center font-bold text-2xl rounded-lg "
            style={{ color: textColour, backgroundColor: primaryColour }}
          >
            POOP
          </p>
          <p
            // ref={(el) => (titleElements.current[1] = el)}
            className="flex justify-center items-center font-bold text-2xl rounded-lg "
            style={{ color: textColour, backgroundColor: primaryColour }}
          >
            POOP
          </p>
        </div>
        {/* <TextWithMask /> */}
      </motion.main>

      <Header
        ref={stickyElement}
        textColour={textColour}
        primaryColour={primaryColour}
      />
      <BottomBar />
    </>
  );
}

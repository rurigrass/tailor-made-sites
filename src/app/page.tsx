"use client";

import BottomBar from "@/components/customiser/BottomBar";
import Header from "@/components/nav/Header";
import Title from "@/components/sections/Title";
import StickyCursor from "@/components/StickyCursor";
import { useColoursStore } from "@/state/colours";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Canvas from "@/components/canvas/Canvas";

export default function Home() {
  const {
    setTextColour,
    textColour,
    setBackgroundColour,
    backgroundColour,
    setPrimaryColour,
    primaryColour,
    backgroundFade,
  } = useColoursStore();
  const stickyElement = useRef(null);
  const titleElement = useRef(null);
  const [counter, setCounter] = useState<number>(0);
  // console.log(counter);

  useEffect(() => {
    setTextColour(`hsl(${Math.random() * 360}, 100%, 66%)`);
    setBackgroundColour(`hsl(${Math.random() * 360}, 100%, 66%)`);
    setPrimaryColour(`hsl(${Math.random() * 360}, 100%, 66%)`);
  }, [counter]);

  const updateCounter = (value: number) => {
    setCounter((prevCounter) => prevCounter + value);
  };

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
        className={`h-[calc(100dvh)] cursor-default overscroll-contain`}
        style={{
          backgroundColor: backgroundColour,
          position: "relative",
        }}
      >
        <Canvas updateCounter={updateCounter} ballColour={primaryColour} />
        <Title textColour={textColour} ref={titleElement} />
        {/* Dark overlay */}
        <AnimatePresence mode="wait">
          {backgroundFade && (
            <motion.div
              className="absolute inset-0 bg-black"
              variants={overlayVariants}
              animate={backgroundFade ? "open" : "closed"}
              exit={backgroundFade ? "closed" : "open"}
              initial={"closed"}
            />
          )}
        </AnimatePresence>

        {/* Main content */}
        <StickyCursor
          stickyElement={stickyElement}
          titleElement={titleElement}
          primaryColour={primaryColour}
        />
      </motion.main>

      {/* Header and BottomBar components go here */}
      <Header
        ref={stickyElement}
        textColour={textColour}
        primaryColour={primaryColour}
      />
      <BottomBar />
    </>
  );
}

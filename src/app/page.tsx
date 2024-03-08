"use client";

import BottomBar from "@/components/customiser/BottomBar";
import Header from "@/components/nav/Header";
import Title from "@/components/sections/Title";
import StickyCursor from "@/components/lib/StickyCursor";
import { useColoursStore } from "@/state/colours";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import Canvas from "@/components/canvas/Canvas";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGoogleFonts } from "@/components/lib/hooks/useGoogleFonts";
import { useFontsStore } from "@/state/fonts";
import Play from "@/components/sections/Play";

type HomeProps = {
  params: {
    fonts: string[];
  };
};

export default function Home(props: HomeProps) {
  const {
    setTextColour,
    textColour,
    setBackgroundColour,
    backgroundColour,
    setPrimaryColour,
    primaryColour,
    backgroundFade,
  } = useColoursStore();
  const { mainFont, setMainFont } = useFontsStore();
  const { fonts } = props.params;

  const stickyElement = useRef(null);
  const titleElement = useRef(null);
  const [counter, setCounter] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    if (play === true) {
      setTextColour(`hsl(${Math.random() * 360}, 100%, 66%)`);
      setBackgroundColour(`hsl(${Math.random() * 360}, 100%, 66%)`);
      setPrimaryColour(`hsl(${Math.random() * 360}, 100%, 66%)`);
      setMainFont(fonts[Math.floor(Math.random() * fonts.length)]);
    }
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
        className={`h-[calc(100dvh)] cursor-default overscroll-contain ${mainFont}`}
        style={{
          backgroundColor: backgroundColour,
          position: "relative",
        }}
      >
        {" "}
        <Canvas
          updateCounter={updateCounter}
          ballColour={primaryColour}
          play={play}
        />
        <div className="flex flex-col items-center justify-center h-[90vh] w-full gap-6 absolute">
          <Title textColour={textColour} ref={titleElement} />
          <Play triggerBall={() => setPlay(!play)} play={play} />
        </div>
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
        {/* Header and BottomBar components go here */}
        <Header
          ref={stickyElement}
          textColour={textColour}
          primaryColour={primaryColour}
        />
        <BottomBar />
      </motion.main>
    </>
  );
}

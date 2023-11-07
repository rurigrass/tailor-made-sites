"use client";

import { useState } from "react";
import ColourPicker from "./ColourPicker";
import { useColoursStore } from "../../state/colours";
import CustomiserButton from "./CustomiserButton";
import { motion } from "framer-motion";

interface BottomBarProps {}

const BottomBar = ({}) => {
  const {
    setTextColour,
    textColour,
    setBackgroundColour,
    backgroundColour,
    setPrimaryColour,
    primaryColour,
  } = useColoursStore();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textOpen, setTextOpen] = useState<boolean>(false);
  const [backgrounOpen, setBackgroundOpen] = useState<boolean>(false);
  const [primaryOpen, setPrimaryOpen] = useState<boolean>(false);

  const variants = {
    open: {
      width: "100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "9.25rem",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <motion.div
      className="fixed bottom-0 right-0 w-full"
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial={"closed"}
    >
      <div className="relative h-[3.5rem] m-1.5 bg-gray-300 rounded-lg">
        {isOpen && (
          <div className="flex gap-1.5 absolute left-1 bottom-1">
            <div>
              {textOpen && (
                <ColourPicker
                  colour={textColour}
                  changeColour={(newColour) => setTextColour(newColour)}
                />
              )}
              <button
                className="p-3 rounded-lg"
                style={{ backgroundColor: textColour }}
                onClick={() => setTextOpen(!textOpen)}
              >
                Text
              </button>
            </div>
            <div>
              {backgrounOpen && (
                <ColourPicker
                  colour={backgroundColour}
                  changeColour={(newColour) => setBackgroundColour(newColour)}
                />
              )}
              <button
                className="p-3 rounded-lg"
                style={{ backgroundColor: backgroundColour }}
                onClick={() => setBackgroundOpen(!backgrounOpen)}
              >
                Background
              </button>
            </div>
            <div>
              {primaryOpen && (
                <ColourPicker
                  colour={primaryColour}
                  changeColour={(newColour) => setPrimaryColour(newColour)}
                />
              )}
              <button
                className="p-3 rounded-lg"
                style={{ backgroundColor: primaryColour }}
                onClick={() => setPrimaryOpen(!primaryOpen)}
              >
                Primary
              </button>
            </div>
          </div>
        )}
        <div className="absolute right-1 bottom-1">
          <CustomiserButton
            primaryColour={primaryColour}
            backgroundColour={backgroundColour}
            isOpen={isOpen}
            toggleMenu={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BottomBar;

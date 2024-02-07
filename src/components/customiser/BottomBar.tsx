"use client";

import { useState } from "react";
import ColourPicker from "./ColourPicker";
import { useColoursStore } from "../../state/colours";
import CustomiserButton from "./CustomiserButton";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "../Magnetic";

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
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "9.25rem",
      transition: {
        duration: 0.75,
        delay: 0.1,
        type: "tween",
        ease: [0.3, 0.2, 0, 1],
      },
    },
  };

  const colourPickers = [
    {
      name: "text",
      colour: textColour,
      open: textOpen,
      openHook: setTextOpen,
      pickerAction: setTextColour,
    },
    {
      name: "background",
      colour: backgroundColour,
      open: backgrounOpen,
      openHook: setBackgroundOpen,
      pickerAction: setBackgroundColour,
    },
    {
      name: "primary",
      colour: primaryColour,
      open: primaryOpen,
      openHook: setPrimaryOpen,
      pickerAction: setPrimaryColour,
    },
  ];

  console.log("swag ", colourPickers[0].open);

  const perspective = {
    initial: { opacity: 0 },
    enter: (i: number) => ({
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1 },
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
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
        <AnimatePresence>
          {isOpen && (
            <div className="flex gap-1.5 absolute left-1 bottom-1">
              {colourPickers.map((picker, i, array) => {
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={perspective}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                  >
                    <AnimatePresence>
                      {isOpen && (
                        <div>
                          <div
                            className={`p-3 rounded-lg hover:cursor-pointer ${
                              picker.open && "pointer-events-none"
                            }`}
                            style={{ backgroundColor: picker.colour }}
                            // disabled={picker.open}
                            onClick={() =>
                              !picker.open && picker.openHook(!picker.open)
                            }
                          >
                            {/* <p className={`text-[${array[i + 1].colour}]`}> */}
                            {picker.name}
                            {/* </p> */}
                          </div>
                          {picker.open && (
                            <ColourPicker
                              colour={picker.colour}
                              changeColour={(newColour) =>
                                picker.pickerAction(newColour)
                              }
                              close={() => picker.openHook(false)}
                            />
                          )}
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
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

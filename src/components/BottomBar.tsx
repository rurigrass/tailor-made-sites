"use client";

import { useState } from "react";
import ColourPicker from "./ColourPicker";
import { useColoursStore } from "../state/colours";

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

  const [textOpen, setTextOpen] = useState<boolean>(false);
  const [backgrounOpen, setBackgroundOpen] = useState<boolean>(false);
  const [primaryOpen, setPrimaryOpen] = useState<boolean>(false);
  return (
    <div className="fixed bottom-0 w-full">
      <div className="relative flex p-1.5 m-1.5 gap-1.5 bg-gray-300 rounded-lg">
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
    </div>
  );
};

export default BottomBar;

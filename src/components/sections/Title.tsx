import { forwardRef } from "react";
import Magnetic from "../lib/Magnetic";
import Play from "./Play";

interface TitleProps {
  textColour: string;
}

const Title = forwardRef(function index({ textColour }: TitleProps, ref: any) {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <div ref={ref} className="inline-block absolute">
        <div
          className="flex flex-wrap justify-center font-extrabold text-6xl"
          style={{ color: textColour }}
        >
          <p>Tailor </p>
          <p className="hidden sm:block">&nbsp;</p>
          <p>Made</p>
          <p className="hidden sm:block">&nbsp;</p>
          <p>Sites</p>
        </div>
        <p
          className="flex justify-center md:justify-start mt-4 md:mt-0 font-bold text-2xl"
          style={{ color: textColour }}
        >
          a site to suit you
        </p>
        <div className="flex justify-center mt-5">
          <Play />
        </div>
      </div>
    </div>
  );
});

// ({ textColour }: TitleProps) => {

export default Title;

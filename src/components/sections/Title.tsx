import { forwardRef } from "react";
import Magnetic from "../Magnetic";

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
        <p className="font-bold text-2xl" style={{ color: textColour }}>
          a site to suit you
        </p>
      </div>
    </div>
  );
});

// ({ textColour }: TitleProps) => {

export default Title;

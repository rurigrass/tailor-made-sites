"use client";
import {
  shape1,
  shape2,
  shape1_morphed,
  shape2_morphed,
} from "../../utils/svgPaths";
import SVGMorph from "../lib/SVGMorph";
import { useState } from "react";

const Play = () => {
  const [play, setPlay] = useState(true);
  return (
    <div className="w-10 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144 178"
        className=" hover:cursor-pointer"
        onClick={() => setPlay(!play)}
      >
        <SVGMorph paths={[shape1, shape1_morphed, shape1]} play={play} />
        <SVGMorph paths={[shape2, shape2_morphed, shape2]} play={play} />
        {/* <path d={shape1} />
      <path d={shape2} />
      <path d={shape1_morphed} />
    <path d={shape2_morphed} /> */}
      </svg>
    </div>
  );
};

export default Play;

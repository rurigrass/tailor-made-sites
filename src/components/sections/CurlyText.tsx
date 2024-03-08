"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

type CurlyTextProps = {
  textColour: string;
};

const CurlyText = ({ textColour }: CurlyTextProps) => {
  const container = useRef<any>();
  const texts = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: container,
    // offset: ["start end", "end end"],
  });

  //   console.log(scrollYProgress);

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <div ref={container} className="w-full">
      <svg className="w-full" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke="black"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        {/* Add fill to change color and also change the font in classname! */}
        <text className=" text-[8px] " style={{ fill: textColour }}>
          {[...Array(8)].map((_, i) => {
            return (
              <textPath key={i} href="#curve" startOffset={i * 28 + "%"}>
                A Site To Suit You
              </textPath>
            );
          })}
        </text>
      </svg>
    </div>
  );
};

export default CurlyText;

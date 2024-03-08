import { useScroll } from "framer-motion";

type CurlyTextProps = {
  textColour: string;
};

const CurlyText = ({ textColour }: CurlyTextProps) => {
  return (
    <div className=" bottom-20 w-full">
      <svg className="w-full" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke="black"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        {/* Add fill to change color and also change the font in classname! */}
        <text className="text-[9px] " style={{ fill: textColour }}>
          {[...Array(8)].map((_, i) => {
            return (
              <textPath href="#curve" startOffset={i * 25 + "%"}>
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

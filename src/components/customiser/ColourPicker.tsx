import { SketchPicker } from "react-color";
import OutsideAlerter from "../lib/OutsideAlerter";
// import { useColoursStore } from "../../state/colours";

interface ColourPickerProps {
  colour: string;
  changeColour: (colour: string) => void;
  close: any;
}

const ColourPicker = ({ colour, changeColour, close }: ColourPickerProps) => {
  //THIS IS TO BLOCK AN ERROR
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  const outsideClicked = () => {
    close();
  };

  return (
    <div className="absolute bottom-[70px]">
      <OutsideAlerter onClickOutside={outsideClicked}>
        <SketchPicker
          disableAlpha
          presetColors={[]}
          color={colour}
          onChange={(colour) => {
            changeColour(colour.hex);
          }}
        />
      </OutsideAlerter>
    </div>
  );
};

export default ColourPicker;

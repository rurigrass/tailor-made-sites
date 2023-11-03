import { SketchPicker } from "react-color";
// import { useColoursStore } from "../../state/colours";

interface ColourPickerProps {
  colour: string;
  changeColour: (colour: string) => void;
}

const ColourPicker = ({ colour, changeColour }: ColourPickerProps) => {
  //THIS IS TO BLOCK AN ERROR
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className="absolute bottom-[70px]">
      <SketchPicker
        disableAlpha
        presetColors={[]}
        color={colour}
        onChange={(colour) => {
          changeColour(colour.hex);
        }}
      />
    </div>
  );
};

export default ColourPicker;

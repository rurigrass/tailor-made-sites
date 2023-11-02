import { SketchPicker } from "react-color";
// import { useColoursStore } from "../../state/colours";

interface ColourPickerProps {
  colour: string;
  changeColour: (colour: string) => void;
}

const ColourPicker = ({ colour, changeColour }: ColourPickerProps) => {
  //   const { setTextColour, textColour } = useColoursStore();

  return (
    <div className="absolute bottom-[70px]">
      <SketchPicker
        disableAlpha
        presetColors={[]}
        // onChangeComplete={handleChangeComplete}
        color={colour}
        onChange={(colour) => {
          changeColour(colour.hex);
          //   setTextColour(colour.hex);
        }}
      />
    </div>
  );
};

export default ColourPicker;

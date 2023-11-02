import { create } from "zustand";

interface ColoursProps {
  textColour: string;
  setTextColour: (textColour: string) => void;
  backgroundColour: string;
  setBackgroundColour: (backgroundColour: string) => void;
}

export const useColoursStore = create<ColoursProps>()((set) => ({
  textColour: "#FFFF00",
  setTextColour: (textColour: string) => set({ textColour }),
  backgroundColour: "#134546",
  setBackgroundColour: (backgroundColour: string) => set({ backgroundColour }),
}));

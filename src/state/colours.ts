import { create } from "zustand";

interface ColoursProps {
  textColour: string;
  setTextColour: (textColour: string) => void;
  backgroundColour: string;
  setBackgroundColour: (backgroundColour: string) => void;
  primaryColour: string;
  setPrimaryColour: (backgroundColour: string) => void;
}

export const useColoursStore = create<ColoursProps>()((set) => ({
  textColour: "#FFFF00",
  setTextColour: (textColour: string) => set({ textColour }),
  backgroundColour: "#134546",
  setBackgroundColour: (backgroundColour: string) => set({ backgroundColour }),
  primaryColour: "#be8080",
  setPrimaryColour: (primaryColour: string) => set({ primaryColour }),
}));

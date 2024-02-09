import { create } from "zustand";

interface FontsProps {
  mainFont: string;
  setMainFont: (mainFont: string) => void;
}

export const useFontsStore = create<FontsProps>()((set) => ({
  mainFont: "roboto",
  setMainFont: (mainFont: string) => set({ mainFont }),
}));

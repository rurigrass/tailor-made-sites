"use client";

import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import StickyCursor from "@/components/StickyCursor";
import { useColoursStore } from "@/state/colours";
import { useRef } from "react";

export default function Home() {
  const { textColour, backgroundColour } = useColoursStore();
  const stickyElement = useRef(null);
  return (
    <main
      className="flex min-h-screen h-[200vh] flex-col items-center justify-between"
      style={{ backgroundColor: backgroundColour }}
    >
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <BottomBar />
      <div className="flex flex-col items-center justify-center h-[80vh] ">
        <p className="font-extrabold text-6xl" style={{ color: textColour }}>
          Tailor Made Sites
        </p>
        <p className={`font-bold text-2xl `} style={{ color: textColour }}>
          a site to suit you
        </p>
      </div>
    </main>
  );
}

"use client";

import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import StickyCursor from "@/components/StickyCursor";
import { useColoursStore } from "@/state/colours";
import { useRef } from "react";

export default function Home() {
  const { textColour, backgroundColour, primaryColour } = useColoursStore();
  const stickyElement = useRef(null);

  return (
    <main
      className=" h-[200vh] cursor-default"
      style={{ backgroundColor: backgroundColour }}
    >
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <BottomBar />
      <div className="flex flex-col items-center justify-center h-[50vh]  mix-blend-difference ">
        <p className="font-extrabold text-6xl" style={{ color: textColour }}>
          Tailor Made Sites
        </p>
        <p className="font-bold text-2xl" style={{ color: textColour }}>
          a site to suit you
        </p>
      </div>
      <div className="h-[30vh] lg:h-[40vh] grid grid-cols-2 lg:grid-cols-3 m-4 gap-4">
        <p
          className="lg:col-span-2 flex justify-center items-center font-bold text-2xl rounded-lg"
          style={{ color: textColour, backgroundColor: primaryColour }}
        >
          POOP
        </p>
        <p
          className="flex justify-center items-center font-bold text-2xl rounded-lg"
          style={{ color: textColour, backgroundColor: primaryColour }}
        >
          POOP
        </p>
      </div>
    </main>
  );
}

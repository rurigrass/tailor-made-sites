"use client";

import BottomBar from "@/components/customiser/BottomBar";
import Header from "@/components/nav/Header";
import Title from "@/components/sections/Title";
// import TextWithMask from "@/components/sections/TextWithMask";
import StickyCursor from "@/components/StickyCursor";
import { useColoursStore } from "@/state/colours";
import { useRef } from "react";

export default function Home() {
  const { textColour, backgroundColour, primaryColour } = useColoursStore();
  const stickyElement = useRef(null);
  const titleElements = useRef(null); // Initialize with two elements
  // const titleElements = useRef([null, null]); // Initialize with two elements

  return (
    <main
      className=" h-[200vh] cursor-default"
      style={{ backgroundColor: backgroundColour }}
    >
      {/* <StickyCursor stickyElement={stickyElement} /> */}
      <StickyCursor
        stickyElement={stickyElement}
        titleElement={titleElements}
        primaryColour={primaryColour}
      />
      <Header
        ref={stickyElement}
        textColour={textColour}
        primaryColour={primaryColour}
      />
      <Title
        textColour={textColour}
        // ref={(el) => (titleElements.current[0] = el)}
        ref={titleElements}
      />
      <div className="h-[30vh] lg:h-[40vh] grid grid-cols-2 lg:grid-cols-3 m-4 gap-4 ">
        <p
          className="lg:col-span-2 flex justify-center items-center font-bold text-2xl rounded-lg "
          style={{ color: textColour, backgroundColor: primaryColour }}
        >
          POOP
        </p>
        <p
          // ref={(el) => (titleElements.current[1] = el)}
          className="flex justify-center items-center font-bold text-2xl rounded-lg "
          style={{ color: textColour, backgroundColor: primaryColour }}
        >
          POOP
        </p>
      </div>
      {/* <TextWithMask /> */}
      <BottomBar />
    </main>
  );
}

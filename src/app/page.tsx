"use client";

import Header from "@/components/Header";
import StickyCursor from "@/components/StickyCursor";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <main className="flex min-h-screen h-[200vh] flex-col items-center justify-between">
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      {/* <div className="z-10 p-20 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello
      </div> */}
    </main>
  );
}

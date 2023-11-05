"use client";

import CustomiserButton from "@/components/customiser/CustomiserButton";
import { useColoursStore } from "@/state/colours";
import { useState } from "react";

interface pageProps {}

const Page = ({}) => {
  const { backgroundColour, primaryColour } = useColoursStore();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="h-[100vh]  flex flex-col gap-5 items-center justify-center">
      <CustomiserButton
        primaryColour={primaryColour}
        backgroundColour={backgroundColour}
        isOpen={isOpen}
        toggleMenu={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div className="h-10 w-30 rounded-lg overflow-hidden">
        <div className="h-full w-full bg-yellow-400">other button</div>
      </div>
    </div>
  );
};

export default Page;

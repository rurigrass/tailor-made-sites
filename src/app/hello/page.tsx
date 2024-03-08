"use client";

import { useGoogleFonts } from "@/components/lib/hooks/useGoogleFonts";
import { useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  const { data: fonts, isLoading: fontsLoading } = useGoogleFonts();

  let dafont;

  if (fonts) {
    dafont = fonts[230];
    console.log(dafont.family);
  }

  let spring = useSpring(0);
  useEffect(() => {
    spring.onChange((v) => {
      console.log(v);
    });

    spring.set(20);
    console.log(spring);
  }, []);

  return (
    <>
      {dafont !== undefined ? (
        <div
          className={`butterflyKids`}
          // style={{ fontFamily: dafont ? dafont.family : "capriola" }}
        >
          <p>This is a sample paragraph with the selected font.</p>
        </div>
      ) : (
        <div className="">Loading...</div>
      )}
    </>
  );
}

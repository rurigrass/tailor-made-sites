"use client";

import { useGoogleFonts } from "@/components/lib/hooks/useGoogleFonts";

export default function Page() {
  const { data: fonts, isLoading: fontsLoading } = useGoogleFonts();

  let dafont;

  if (fonts) {
    dafont = fonts[230];
    console.log(dafont.family);
  }

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

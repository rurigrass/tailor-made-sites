"use client";
import { useEffect, useState } from "react";
import { interpolate } from "flubber";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

export default function SVGMorph({ paths, play }) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const arrayOfIndex = paths.map((_, i) => i);

  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.1,
      ease: "easeInOut",
      //   delay: 0,

      onComplete: () => {
        if (play === false) {
          setPathIndex(1);
        } else {
          setPathIndex(0);
        }
      },
    });
    return () => {
      animation.stop();
    };
  }, [pathIndex, play]);

  return <motion.path fill="black" d={path} />;
}

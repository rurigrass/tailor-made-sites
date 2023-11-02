"use client";

import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StickyCursorProps {}

const StickyCursor = ({ stickyElement }: { stickyElement: any }) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  const cursorRef = useRef(null);

  const cursorSize = isHovered ? 50 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const rotate = (distance: any) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      stickyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };

    if (isHovered) {
      //rotate
      rotate(distance);
      //Stretch the cursor based on the distance between the pointer and the custom cursor.
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };
  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    stickyElement.current.addEventListener("mouseover", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      stickyElement.current.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
    };
  });

  const template = ({
    rotate,
    scaleX,
    scaleY,
  }: {
    rotate: any;
    scaleX: any;
    scaleY: any;
  }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <motion.div
      transformTemplate={template}
      className="fixed w-[15px] h-[15px] dark:bg-white bg-black rounded-[50%] pointer-events-none invisible md:visible"
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default StickyCursor;

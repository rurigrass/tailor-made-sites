"use client";

import useMousePosition from "@/utils/useMousePosition";
import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StickyCursorProps {
  stickyElement: any;
  titleElement: any;
  primaryColour: string;
}

const StickyCursor = ({
  stickyElement,
  titleElement,
  primaryColour,
}: StickyCursorProps) => {
  const [isBurgerHovered, setIsBurgerHovered] = useState<Boolean>(false);
  const [isTitleHovered, setIsTitleHovered] = useState<Boolean>(false);
  console.log("title hover ", isTitleHovered);
  console.log("burger hover ", isBurgerHovered);

  const cursorRef = useRef(null);

  let cursorSize = 20;
  if (isBurgerHovered === true) {
    cursorSize = 55;
  } else if (isTitleHovered === true) {
    cursorSize = 160;
  } else {
    cursorSize = 20;
  }

  const mousePosition = useMousePosition();

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

  const manageMouseMove = () => {
    //BURGER HOVER STUFF
    const {
      left: burgerLeft,
      top: burgerTop,
      width: burgerWidth,
      height: burgerHeight,
    } = stickyElement.current.getBoundingClientRect();
    const burgerCenter = {
      x: burgerLeft + burgerWidth / 2,
      y: burgerTop + burgerHeight / 2,
    };
    const burgerDistance = {
      x: mousePosition.x - burgerCenter.x,
      y: mousePosition.y - burgerCenter.y,
    };

    if (isBurgerHovered) {
      //rotate
      rotate(burgerDistance);
      //Stretch the cursor based on the distance between the pointer and the custom cursor.
      const absDistance = Math.max(
        Math.abs(burgerDistance.x),
        Math.abs(burgerDistance.y)
      );
      const newScaleX = transform(absDistance, [0, burgerHeight / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, burgerWidth / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      mouse.x.set(burgerCenter.x - cursorSize / 2 + burgerDistance.x * 0.1);
      mouse.y.set(burgerCenter.y - cursorSize / 2 + burgerDistance.y * 0.1);
    } else {
      mouse.x.set(mousePosition.x - cursorSize / 2);
      mouse.y.set(mousePosition.y - cursorSize / 2);
    }
  };

  const manageMouseOverBurger = () => {
    setIsBurgerHovered(true);
  };
  const manageMouseLeaveBurger = () => {
    setIsBurgerHovered(false);
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  const manageMouseOverTitle = () => {
    setIsTitleHovered(true);
  };
  const manageMouseLeaveTitle = () => {
    setIsTitleHovered(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    stickyElement.current.addEventListener("mouseover", manageMouseOverBurger);
    stickyElement.current.addEventListener(
      "mouseleave",
      manageMouseLeaveBurger
    );
    titleElement.current.addEventListener("mouseover", manageMouseOverTitle);
    titleElement.current.addEventListener("mouseleave", manageMouseLeaveTitle);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      stickyElement.current.removeEventListener(
        "mouseover",
        manageMouseOverBurger
      );
      stickyElement.current.removeEventListener(
        "mouseleave",
        manageMouseLeaveBurger
      );
      titleElement.current.removeEventListener(
        "mouseover",
        manageMouseOverTitle
      );
      titleElement.current.removeEventListener(
        "mouseleave",
        manageMouseLeaveTitle
      );
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
      // dark:bg-white bg-black
      className="fixed w-[15px] h-[15px] rounded-[50%] pointer-events-none invisible md:visible"
      ref={cursorRef}
      style={{
        backgroundColor: primaryColour,
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
        mixBlendMode: "difference",
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default StickyCursor;

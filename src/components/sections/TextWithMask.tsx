// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import useMousePosition from "../../utils/useMousePosition";

// export default function TextWithMask() {
//   const [isHovered, setIsHovered] = useState(false);

//   const { x, y } = useMousePosition();

//   const size = isHovered ? 400 : 40;
//   // console.log(x);

//   return (
//     <main className="h-[100vh]">
//       <motion.div
//         className="flex items-center justify-center h-full w-full text-5xl leading-[66px] cursor-default absolute p-10"
//         style={{
//           maskImage: `url("/mask.svg")`,
//           // maskSize: "40px",
//           // backgroundColor: "#ec4e39",
//           // maskRepeat: "no-repeat",
//           // maskPosition: "50%",
//         }}
//         animate={{
//           WebkitMaskPosition: `${x ?? -size / 2}px ${y ?? -size / 2}px`,
//           WebkitMaskSize: `${size}px`,
//         }}
//         transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
//       >
//         <p
//           onMouseEnter={() => {
//             setIsHovered(true);
//           }}
//           onMouseLeave={() => {
//             setIsHovered(false);
//           }}
//         >
//           A visual designer - with skills that haven't been replaced by A.I
//           (yet) - making good shit only if the paycheck is equally good.
//         </p>
//       </motion.div>

//       <div className="flex h-full w-full items-center justify-center text-5xl leading-[66px] cursor-default p-10">
//         <p>
//           I'm a <span>selectively skilled</span> product designer with strong
//           focus on producing high quality & impactful digital experience.
//         </p>
//       </div>
//     </main>
//   );
// }

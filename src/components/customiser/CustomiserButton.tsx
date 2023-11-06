import { motion } from "framer-motion";

interface CustomiserButtonProps {
  primaryColour: string;
  backgroundColour: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

const CustomiserButton = ({
  primaryColour,
  backgroundColour,
  isOpen,
  toggleMenu,
}: CustomiserButtonProps) => {
  console.log(isOpen);

  return (
    <div className="h-12 w-30 p-3 rounded-lg cursor-pointer overflow-hidden ">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isOpen ? "-0.7rem" : "-3.8rem" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full"
          style={{ backgroundColor: primaryColour }}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Customise" />
        </div>
        <div
          className="w-full h-full"
          style={{ backgroundColor: backgroundColour }}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

export default CustomiserButton;

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full group relative cursor-pointer transform-style-3d hover:rotate-x-90 duration-700">
      <p className="hover:-translate-y-full group-hover:opacity-0 duration-700">
        {label}
      </p>
      <p className="absolute top-0 -rotate-x-90 translate-y-[4vw] opacity-0 group-hover:opacity-100 duration-500">
        {label}
      </p>
    </div>
  );
}

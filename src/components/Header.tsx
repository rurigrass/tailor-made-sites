interface HeaderProps {}
import Magnetic from "./Magnetic";
import styles from "./style.module.scss";
import { ForwardedRef, Ref, forwardRef } from "react";

const Header = forwardRef(function index(props, ref: any) {
  return (
    <div className="fixed flex w-full justify-end p-[10px] box-border mix-blend-difference z-10">
      <Magnetic>
        <div className="relative cursor-pointer flex gap-[8px] flex-col p-[30px] pointer-events-none before:block before:w-[30px] before:h-[2px] before:mix-blend-difference before:bg-white after:block after:w-[30px] after:h-[2px] after:mix-blend-difference after:bg-white">
          <div
            ref={ref}
            className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-150"
          ></div>
        </div>
      </Magnetic>
    </div>
  );
});

export default Header;

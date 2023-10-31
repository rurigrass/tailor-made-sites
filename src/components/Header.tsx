interface HeaderProps {}
import styles from "./style.module.scss";

const Header = ({}) => {
  return (
    <div className=" fixed flex w-full justify-end p-[10px] box-border cursor-pointer mix-blend-difference z-10">
      <div className=" relative flex gap-[8px] flex-col p-[30px] pointer-events-none before:block before:w-[30px] before:h-[2px] before:mix-blend-difference before:bg-white after:block after:w-[30px] after:h-[2px] after:mix-blend-difference after:bg-white"></div>
    </div>
  );
};

export default Header;

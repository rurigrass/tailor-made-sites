import { useRef, useEffect, useState, ReactNode } from "react";

type OutsideAlerterProps = {
  children: ReactNode;
  onClickOutside: (e: boolean) => void;
};

export default function OutsideAlerter({
  children,
  onClickOutside,
}: OutsideAlerterProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  //   const [clickedOutside, setClickedOutside] = useState(false);

  //   console.log(clickedOutside);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickOutside(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   useEffect(() => {
  //     if (clickedOutside) {
  //       onClickOutside(true);
  //     }
  //   }, [clickedOutside, onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
}

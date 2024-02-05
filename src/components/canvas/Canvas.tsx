import { useEffect, useRef, useState } from "react";

type CanvasProps = {
  updateCounter: (value: number) => void;
};

const Canvas = ({ updateCounter, ...rest }: CanvasProps) => {
  // const [counter, setCounter] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let ballRadius = 10;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    };

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        // setCounter((prevCounter) => prevCounter + 1);
        updateCounter(1);
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
        // setCounter((prevCounter) => prevCounter + 1);
        updateCounter(1);
      }

      x += dx;
      y += dy;
    };

    const intervalId = setInterval(draw, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="absolute">
      <canvas ref={canvasRef} {...rest} width="500" height="500" />
    </div>
  );
};

export default Canvas;

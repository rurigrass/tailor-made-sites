import { useEffect, useRef } from "react";
import { useSpring } from "framer-motion";

type CanvasProps = {
  updateCounter: (value: number) => void;
  ballColour: string;
  play: boolean;
};

const Canvas = ({ updateCounter, ballColour, play, ...rest }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballColourRef = useRef<string>(ballColour);
  const ballRadiusRef = useSpring(10);

  const drawBall = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    const ballRadius = ballRadiusRef.get();
    if (ballRadius > 0) {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = ballColourRef.current;
      ctx.fill();
      ctx.closePath();
    }
  };

  useEffect(() => {
    play ? ballRadiusRef.set(10) : ballRadiusRef.set(0);
  }, [play]);

  useEffect(() => {
    ballColourRef.current = ballColour;
  }, [ballColour]);

  //do a ballSizeRef

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

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // if (play) {
      drawBall(ctx, x, y);

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        updateCounter(1);
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
        updateCounter(1);
      }

      x += dx;
      y += dy;
      // }
    };

    const intervalId = setInterval(draw, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="absolute">
      <canvas ref={canvasRef} {...rest} width="250" height="500" />
    </div>
  );
};

export default Canvas;

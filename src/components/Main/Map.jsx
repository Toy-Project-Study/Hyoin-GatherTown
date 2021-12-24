import React, { useEffect, useRef, useState } from "react";
import { backgroundMap } from "../../assets/index";
import totoro from "../../assets/images/totoro02.png";
import styled from "styled-components";

//canvas의 가로/세로 최대값 설정
//canvas의 위,아래,왼쪽,오른쪽 최대 key값 설정
const MAX_CANVAS_IMG_WIDTH = 116;
const MAX_CANVAS_IMG_HEIGHT = 125;
const MAX_CANVAS_KEY_LEFT = 37;
const MAX_CANVAS_KEY_DOWN = 38;
const MAX_CANVAS_KEY_RIGHT = 39;
const MAX_CANVAS_KEY_UP = 40;
const MAX_CANVAS_SPEED = 8;
const MAX_CANVAS_FRAMES_LENGTH = 23;

const Map = () => {
  const canvasRef = useRef(null);
  const requestAnimationRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const [pressedKey, setPressedKey] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [currentFrame, setCurrentFrame] = useState(0);

  const move = ({ x, y }) => {
    const newX = positionRef.current.x + x;
    const newY = positionRef.current.y + y;
    if (newX < 0 || newX > canvasRef.current.width - MAX_CANVAS_IMG_WIDTH) return;
    if (newY < 0 || newY > canvasRef.current.height - MAX_CANVAS_IMG_HEIGHT) return;
    positionRef.current = { x: newX, y: newY };
    setCurrentFrame((prev) => (prev < MAX_CANVAS_FRAMES_LENGTH ? prev + 1 : 0));
  };

  const render = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const totoroImage = new Image();
    totoroImage.src = totoro;
    totoroImage.onload = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      totoroImage.style.width = "100px";
      totoroImage.style.height = "120px";
      context.drawImage(totoroImage, positionRef.current.x, positionRef.current.y, 80, 100);
    };

    console.log("콘솔", totoroImage.width);
    handleKey();
    requestAnimationRef.current = requestAnimationFrame(render);
  };

  const handleKey = () => {
    switch (pressedKey) {
      case MAX_CANVAS_KEY_LEFT:
        move({ x: -1 * MAX_CANVAS_SPEED, y: 0 });
        return;
      case MAX_CANVAS_KEY_DOWN:
        move({ x: 0, y: -1 * MAX_CANVAS_SPEED });
        return;
      case MAX_CANVAS_KEY_RIGHT:
        move({ x: MAX_CANVAS_SPEED, y: 0 });
        return;
      case MAX_CANVAS_KEY_UP:
        move({ x: 0, y: MAX_CANVAS_SPEED });
        return;
      case null:
        return;
      default:
        move({ x: 0, y: 0 });
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      setPressedKey(e.keyCode);
    });
    window.addEventListener("keyup", () => setPressedKey(null));
    requestAnimationRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  });
  return (
    <StyledRoot>
      <canvas
        ref={canvasRef}
        style={{
          backgroundImage: `url(${backgroundMap})`,
          backgroundSize: "cover",
        }}></canvas>
    </StyledRoot>
  );
};

export default Map;

const StyledRoot = styled.div`
  display: flex;
  place-content: center;
`;

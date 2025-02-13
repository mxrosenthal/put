import React, { useState, useEffect } from "react";
import PutSign from "./PutSign"; // Assuming PutSign is in the same folder
import { Color, Size } from "../constants";
import { css } from "@emotion/css";
import { getXYOffSets } from "../helpers";
import { useAudio } from "../hooks/useAudio";

interface CursorProps {
  size: Size;
  backgroundColor: Color;
  fontColor: Color;
  isPutActive: boolean;
  isAudioOn: boolean;
}

interface PutSignData {
  x: number;
  y: number;
  zIndex: number;
  size: Size;
  backgroundColor: Color;
  fontColor: Color;
}

const Cursor = (props: CursorProps) => {
  const { size, backgroundColor, fontColor, isPutActive, isAudioOn } = props;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [putSigns, setPutSigns] = useState<PutSignData[]>([]);
  const [zIndex, setZIndex] = useState(1000); // Initial zIndex value for stacking
  const audioSrc = useAudio(putSigns.length);
  const { x: xOffSet, y: yOffSet } = getXYOffSets(size);

  useEffect(() => {
    if (isAudioOn && putSigns.length > 0) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
  }, [putSigns.length]);

  // // Handle mouse movement to track the cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleClearPuts = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPutSigns([]); // reset putSigns array to be empty
      }
    };

    document.addEventListener("keydown", handleClearPuts);
    return () => {
      document.removeEventListener("keydown", handleClearPuts);
    };
  }, []);

  useEffect(() => {
    const handleUndo = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        setPutSigns((prevPutSigns) => {
          if (prevPutSigns.length === 0) {
            return [];
          }
          return prevPutSigns.slice(0, -1);
        });
      }
    };

    document.addEventListener("keydown", handleUndo);
    return () => {
      document.removeEventListener("keydown", handleUndo);
    };
  }, []);

  // Handle mouse click to place a PutSign
  const handleClick = () => {
    if (!isPutActive) return;

    setPutSigns((prevPutSigns) => [
      ...prevPutSigns,
      {
        x: cursorPosition.x - xOffSet, // Adjust cursor offset
        y: cursorPosition.y - yOffSet, // Adjust cursor offset
        zIndex,
        size,
        backgroundColor,
        fontColor,
      },
    ]);
    setZIndex(zIndex + 1); // Increase zIndex for the next PutSign
  };

  return (
    <div
      onClick={handleClick}
      data-testid='cursor-container'
      className={styles.container}
    >
      {/* Render PutSign components based on their stored positions (no offsets)*/}
      {putSigns.map((sign, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: sign.y, // Adjust cursor offset
            left: sign.x, // Adjust cursor offset
            zIndex: sign.zIndex, // Ensure stacking order
            pointerEvents: "none", // Don't interfere with other elements
          }}
        >
          <PutSign
            size={sign.size}
            backgroundColor={sign.backgroundColor}
            fontColor={sign.fontColor}
          />
        </div>
      ))}

      {/* Render the custom cursor */}
      {isPutActive && (
        <div
          style={{
            position: "absolute",
            top: cursorPosition.y - yOffSet, // Adjust the cursor size and offset
            left: cursorPosition.x - xOffSet,
            pointerEvents: "none",
            zIndex: zIndex - 1, // Cursor is below the last PutSign
          }}
        >
          <PutSign
            size={size}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
          />
        </div>
      )}
    </div>
  );
};

export default Cursor;

const styles = {
  container: css({
    height: "calc(100vh - 50px)",
    width: "100%",
    backgroundColor: "white",
    color: "black",
  }),
};

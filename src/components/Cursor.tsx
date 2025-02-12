import React, { useState, useEffect } from "react";
import PutSign from "./PutSign"; // Assuming PutSign is in the same folder
import { BackgroundColor, Size } from "../constants";
import { css } from "@emotion/css";
import { getXYOffSets } from "../helpers";

interface CursorProps {
  size: Size;
  backgroundColor: BackgroundColor;
  isPutActive: boolean;
}
const Cursor = (props: CursorProps) => {
  const { size, backgroundColor, isPutActive } = props;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [putSigns, setPutSigns] = useState<
    {
      x: number;
      y: number;
      zIndex: number;
      size: Size;
      backgroundColor: BackgroundColor;
    }[]
  >([]);
  const [zIndex, setZIndex] = useState(1000); // Initial zIndex value for stacking

  const { x: xOffSet, y: yOffSet } = getXYOffSets(size);

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
          <PutSign size={sign.size} backgroundColor={sign.backgroundColor} />
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
          <PutSign size={size} backgroundColor={backgroundColor} />
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

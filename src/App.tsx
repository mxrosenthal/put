import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Cursor from "./components/Cursor";
import { Color, Size } from "./constants";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [size, setSize] = useState<Size>(Size.Medium);
  const [backgroundColor, setBackgroundColor] = useState<Color>(Color.White);
  const [fontColor, setFontColor] = useState<Color>(Color.Black);
  const [isPutActive, setIsPutActive] = useState<boolean>(false);
  const [isAudioOn, setAudio] = useState<boolean>(true);

  // Handle the hotkey (e.g., P) to toggle the Put mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "p" || e.key === "P") {
        setIsPutActive((prev) => !prev); // Toggle Put mode
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      <Navbar
        size={size}
        setSize={setSize}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        fontColor={fontColor}
        setFontColor={setFontColor}
        isPutActive={isPutActive}
        isAudioOn={isAudioOn}
        setAudio={setAudio}
      />

      <Cursor
        size={size}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        isPutActive={isPutActive}
        isAudioOn={isAudioOn}
      />
    </>
  );
}

export default App;

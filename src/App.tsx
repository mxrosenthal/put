import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Cursor from "./components/Cursor";
import { Size } from "./constants";
import { Global, css } from "@emotion/react";
import { Color } from "./types";

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
  const [size, setSize] = useState<Size>("medium");
  const [backgroundColor, setBackgroundColor] = useState<Color>("#ffffff");
  const [fontColor, setFontColor] = useState<Color>("#000000");
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

import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Cursor from "./components/Cursor";
import { BackgroundColor, Size } from "./constants";
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
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>(
    BackgroundColor.White
  );
  const [isPutActive, setIsPutActive] = useState<boolean>(false);

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
        isPutActive={isPutActive}
      />

      <Cursor
        size={size}
        backgroundColor={backgroundColor}
        isPutActive={isPutActive}
      />
    </>
  );
}

export default App;

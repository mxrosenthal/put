import { css } from "@emotion/css";
import React from "react";
import { BackgroundColorButton } from "./buttons/BackgroundColorButton";
import { SizeButton } from "./buttons/SizeButton";
import { Color, Size } from "../constants";
import { Instructions } from "./Instructions";
import { FontColorButton } from "./buttons/FontColorButton";

type NavbarProps = {
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
  backgroundColor: Color;
  setBackgroundColor: React.Dispatch<React.SetStateAction<Color>>;
  fontColor: Color;
  setFontColor: React.Dispatch<React.SetStateAction<Color>>;
  isPutActive: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
  size,
  setSize,
  backgroundColor,
  setBackgroundColor,
  fontColor,
  setFontColor,
  isPutActive,
}) => {
  return (
    <nav className={styles.navbar}>
      <SizeButton size={size} setSize={setSize} />
      <BackgroundColorButton
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
      <FontColorButton fontColor={fontColor} setFontColor={setFontColor} />
      <Instructions isPutActive={isPutActive} />
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "50px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
    display: "flex",
    justifyContent: "flex-start",
  }),
};

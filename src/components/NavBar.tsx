import { css } from "@emotion/css";
import React from "react";
import { BackgroundColorButton } from "./buttons/BackgroundColorButton";
import { SizeButton } from "./buttons/SizeButton";
import { Color, Size } from "../constants";
import { Instructions } from "./Instructions";
import { FontColorButton } from "./buttons/FontColorButton";
import PutSign from "./PutSign";

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
      <div className={styles.logo}>
        <PutSign
          backgroundColor={Color.White}
          fontColor={Color.Black}
          size={Size.Small}
        />
        <Instructions isPutActive={isPutActive} />
      </div>
      <div className={styles.buttonSection}>
        <SizeButton size={size} setSize={setSize} />
        <BackgroundColorButton
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
        <FontColorButton fontColor={fontColor} setFontColor={setFontColor} />
      </div>
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
    flexDirection: "row",
    justifyContent: "left",
  }),
  logo: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "1rem",
    width: "30%",
  }),
  buttonSection: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "1rem",
  }),
};

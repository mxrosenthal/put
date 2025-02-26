import { css } from "@emotion/css";
import React from "react";
import { BackgroundColorButton } from "./buttons/BackgroundColorButton";
import { SizeButton } from "./buttons/SizeButton";
import { Size } from "../../constants";
import { Instructions } from "./Instructions";
import { FontColorButton } from "./buttons/FontColorButton";
import { ToggleAudioButton } from "./buttons/audio/ToggleAudioButton";
import { Color } from "../../types";
import { ScreenShotButton } from "./buttons/ScreenShotButton";
import { RestartButton } from "./buttons/RestartButton";

type NavbarProps = {
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
  backgroundColor: Color;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  fontColor: Color;
  setFontColor: React.Dispatch<React.SetStateAction<string>>;
  isAudioOn: boolean;
  setAudio: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
};

const Navbar: React.FC<NavbarProps> = ({
  size,
  setSize,
  backgroundColor,
  setBackgroundColor,
  fontColor,
  setFontColor,
  isAudioOn,
  setAudio,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Instructions />
      </div>
      <div className={styles.buttonSection}>
        {selectedImage && (
          <>
            <SizeButton size={size} setSize={setSize} />
            <BackgroundColorButton
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
            />
            <FontColorButton
              fontColor={fontColor}
              setFontColor={setFontColor}
            />
            <ToggleAudioButton isAudioOn={isAudioOn} setAudio={setAudio} />
            <ScreenShotButton />
            <RestartButton setSelectedImage={setSelectedImage} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: css({
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
    gap: "10px",
  }),
};

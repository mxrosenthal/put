import React, { useState, useEffect } from "react";
import { Size } from "../constants";
import Navbar from "./components/NavBar";
import Cursor from "./components/Cursor";
import { DragDropPhoto } from "./components/DragDropPhoto";

export function PhotoUpdatingTool() {
  const [size, setSize] = useState<Size>("medium");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [isPutActive, setIsPutActive] = useState<boolean>(false);
  const [isAudioOn, setAudio] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

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
      <Navbar
        size={size}
        setSize={setSize}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        fontColor={fontColor}
        setFontColor={setFontColor}
        isAudioOn={isAudioOn}
        setAudio={setAudio}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      {/* Show image uploader if no image is selected */}
      {!selectedImage ? (
        <DragDropPhoto
          setSelectedImage={setSelectedImage}
          setImageSize={setImageSize}
        />
      ) : (
        <Cursor
          size={size}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          isPutActive={isPutActive}
          isAudioOn={isAudioOn}
          selectedImage={selectedImage}
          imageSize={imageSize}
        />
      )}
    </>
  );
}

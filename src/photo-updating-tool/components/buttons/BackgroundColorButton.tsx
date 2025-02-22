import { Button, ColorPicker } from "antd";
import { AggregationColor } from "antd/es/color-picker/color";
import { Color } from "../../../types";
import { useMemo } from "react";

interface BackgroundColorButtonProps {
  backgroundColor: Color;
  setBackgroundColor: React.Dispatch<React.SetStateAction<Color>>;
}

export const BackgroundColorButton = (props: BackgroundColorButtonProps) => {
  const { backgroundColor, setBackgroundColor } = props;

  const bgColor = useMemo<string>(
    () =>
      typeof backgroundColor === "string"
        ? backgroundColor
        : backgroundColor!.toHexString(),
    [backgroundColor]
  );

  const btnStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    color: "black",
  };

  return (
    <ColorPicker
      value={backgroundColor || "white"}
      onChange={(value: Color) => {
        if (typeof value === "string") {
          // It's already a valid CSS color string
          setBackgroundColor(value);
        } else if (value instanceof AggregationColor) {
          // Convert AggregationColor to hex string
          setBackgroundColor(value.toHexString());
        }
      }}
      size='large'
    >
      <Button type='primary' style={btnStyle}>
        Background
      </Button>
    </ColorPicker>
  );
};

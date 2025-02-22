import { Color } from "../../../types";
import { AggregationColor } from "antd/es/color-picker/color";
import { Button, ColorPicker } from "antd";
import { useMemo } from "react";

interface FontColorButtonProps {
  fontColor: Color;
  setFontColor: React.Dispatch<React.SetStateAction<Color>>;
}

export const FontColorButton = (props: FontColorButtonProps) => {
  const { fontColor, setFontColor } = props;

  const ftColor = useMemo<string>(
    () =>
      typeof fontColor === "string" ? fontColor : fontColor!.toHexString(),
    [fontColor]
  );

  const btnStyle: React.CSSProperties = {
    backgroundColor: "white",
    color: ftColor,
  };

  return (
    <ColorPicker
      value={fontColor}
      onChange={(value: Color) => {
        if (typeof value === "string") {
          // It's already a valid CSS color string
          setFontColor(value);
        } else if (value instanceof AggregationColor) {
          // Convert AggregationColor to hex string
          setFontColor(value.toHexString());
        }
      }}
      defaultValue={fontColor}
      size='large'
    >
      <Button type='primary' style={btnStyle}>
        Font
      </Button>
    </ColorPicker>
  );
};

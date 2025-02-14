import { Color } from "../../types";
import { AggregationColor } from "antd/es/color-picker/color";
import { ColorPicker } from "antd";
import { css } from "@emotion/css";

interface FontColorButtonProps {
  fontColor: Color;
  setFontColor: React.Dispatch<React.SetStateAction<Color>>;
}

export const FontColorButton = (props: FontColorButtonProps) => {
  const { fontColor, setFontColor } = props;

  return (
    <div className={styles.fontColorButton} data-testid='font-color-button'>
      <label htmlFor='font-color-button'>Font</label>
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
      />
    </div>
  );
};

const styles = {
  fontColorButton: css({
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    alignItems: "center",
    width: "100px",
  }),
};

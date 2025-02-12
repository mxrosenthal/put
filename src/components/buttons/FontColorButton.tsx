import { css } from "@emotion/css";
import { Color } from "../../constants";

interface FontColorButtonProps {
  fontColor: Color;
  setFontColor: React.Dispatch<React.SetStateAction<Color>>;
}

export const FontColorButton = (props: FontColorButtonProps) => {
  const { fontColor, setFontColor } = props;

  return (
    <div className={styles.FontColorButton} data-testid='text-color-button'>
      <label htmlFor='fontColor'>Text Color: </label>
      <select
        id='textColor'
        value={fontColor}
        onChange={(e) => setFontColor(e.target.value as Color)}
        style={{ padding: "0.5rem" }}
      >
        <option value='white'>White</option>
        <option value='black'>Black</option>
        <option value='red'>Red</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='yellow'>Yellow</option>
        <option value='purple'>Purple</option>
        <option value='orange'>Orange</option>
        <option value='pink'>Pink</option>
        <option value='brown'>Brown</option>
      </select>
    </div>
  );
};

const styles = {
  FontColorButton: css({
    padding: "0.5rem",
  }),
};

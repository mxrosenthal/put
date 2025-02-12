import { css } from "@emotion/css";
import { BackgroundColor } from "../../constants";

interface BackgroundColorButtonProps {
  backgroundColor: BackgroundColor;
  setBackgroundColor: React.Dispatch<React.SetStateAction<BackgroundColor>>;
}

export const BackgroundColorButton = (props: BackgroundColorButtonProps) => {
  const { backgroundColor, setBackgroundColor } = props;

  return (
    <div
      className={styles.backgroundColorButton}
      data-testid='background-color-button'
    >
      <label htmlFor='backgroundColor'>Background Color: </label>
      <select
        id='backgroundColor'
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value as BackgroundColor)}
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
      {/* <input
      type='color'
      id='backgroundColor'
      value={backgroundColor}
      onChange={(e) => setBackgroundColor(e.target.value)}
      style={{ padding: "0.5rem" }}
    /> */}
    </div>
  );
};

const styles = {
  backgroundColorButton: css({
    padding: "0.5rem",
  }),
};

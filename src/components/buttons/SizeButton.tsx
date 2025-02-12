import { css } from "@emotion/css";
import { Size } from "../../constants";

interface SizeButtonProps {
  size: string;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
}

export const SizeButton = (props: SizeButtonProps) => {
  const { size, setSize } = props;

  return (
    <div className={styles.sizeButton} data-testid='size-button'>
      <label htmlFor='size'>Size: </label>
      <select
        id='size'
        value={size}
        onChange={(e) => setSize(e.target.value as Size)}
        style={{ padding: "0.5rem" }}
      >
        <option value='micro'>Micro</option>
        <option value='tiny'>Tiny</option>
        <option value='small'>Small</option>
        <option value='medium'>Medium</option>
        <option value='large'>Large</option>
        <option value='venti'>Venti</option>
        <option value='yuge'>Yuge</option>
      </select>
    </div>
  );
};

const styles = {
  sizeButton: css({
    padding: "0.5rem",
  }),
};

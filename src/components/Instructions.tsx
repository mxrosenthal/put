import { css } from "@emotion/css";

interface InstructionProps {
  isPutActive: boolean;
}

export const Instructions = (props: InstructionProps) => {
  const { isPutActive } = props;

  return (
    <div className={styles.container}>
      <div>Instructions:</div>
      <div>
        hit 'P' to toggle Put. mode. Currently: {isPutActive ? "ON" : "OFF"}
      </div>

      <div>hit Escape to clear</div>
      <div>hit Backspace to undo</div>
    </div>
  );
};

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "20px",
    marginRight: "60px",
    marginTop: "-7px",
    color: "white",
  }),
};

import { css } from "@emotion/css";

interface InstructionProps {
  isPutActive: boolean;
}

export const Instructions = (props: InstructionProps) => {
  const { isPutActive } = props;

  return (
    <div className={styles.container}>
      {isPutActive
        ? "Put mode is ON. Press 'P' to turn off"
        : "Put mode is OFF. Press 'P' to turn on"}
    </div>
  );
};

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "1rem",
    backgroundColor: "white",
    color: "black",
  }),
};

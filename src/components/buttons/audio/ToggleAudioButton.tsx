import { css } from "@emotion/css";
import { Switch } from "antd";

interface ToggleAudioButtonProps {
  isAudioOn: boolean;
  setAudio: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleAudioButton = (props: ToggleAudioButtonProps) => {
  const { isAudioOn, setAudio } = props;

  return (
    <div className={styles.audioToggleButton} data-testid='toggle-audio-button'>
      <Switch
        checkedChildren='Audio On'
        unCheckedChildren='Audio Off'
        defaultChecked
        onChange={() => setAudio(!isAudioOn)}
      />
    </div>
  );
};

const styles = {
  audioToggleButton: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100px",
  }),
};

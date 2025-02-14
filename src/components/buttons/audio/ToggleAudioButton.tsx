import { css } from "@emotion/css";
import { Button, Switch } from "antd";

interface ToggleAudioButtonProps {
  isAudioOn: boolean;
  setAudio: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleAudioButton = (props: ToggleAudioButtonProps) => {
  const { isAudioOn, setAudio } = props;

  return (
    <div className={styles.audioToggleButton} data-testid='toggle-audio-button'>
      <label htmlFor='toggle-audio-button'>
        Audio: ({isAudioOn ? "On" : "Off"})
      </label>
      <Switch defaultChecked onChange={() => setAudio(!isAudioOn)} />
    </div>
  );
};

const styles = {
  audioToggleButton: css({
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    alignItems: "center",
    width: "100px",
  }),
};

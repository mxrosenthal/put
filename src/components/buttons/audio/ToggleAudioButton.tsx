import { css } from "@emotion/css";

interface ToggleAudioButtonProps {
  isAudioOn: boolean;
  setAudio: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleAudioButton = (props: ToggleAudioButtonProps) => {
  const { isAudioOn, setAudio } = props;

  return (
    <div className={styles.audioToggleButton} data-testid='toggle-audio-button'>
      <label htmlFor='toggle-audio-button'>Audio: </label>

      <button onClick={() => setAudio(!isAudioOn)}>
        {isAudioOn ? "On" : "Off"}
      </button>
    </div>
  );
};

const styles = {
  audioToggleButton: css({
    padding: "0.5rem",
  }),
};

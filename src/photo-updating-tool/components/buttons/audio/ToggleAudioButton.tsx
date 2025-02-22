import { Switch } from "antd";

interface ToggleAudioButtonProps {
  isAudioOn: boolean;
  setAudio: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleAudioButton = (props: ToggleAudioButtonProps) => {
  const { isAudioOn, setAudio } = props;

  return (
    <Switch
      checkedChildren='Audio On'
      unCheckedChildren='Audio Off'
      defaultChecked
      onChange={() => setAudio(!isAudioOn)}
    />
  );
};

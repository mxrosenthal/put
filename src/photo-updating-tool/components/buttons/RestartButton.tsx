import { Button } from "antd";

interface RestartButtonProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}
export function RestartButton(props: RestartButtonProps) {
  const { setSelectedImage } = props;
  return (
    <Button onClick={() => setSelectedImage(null)} type='link'>
      Restart
    </Button>
  );
}

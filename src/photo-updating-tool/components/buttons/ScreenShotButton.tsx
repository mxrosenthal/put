import html2canvas from "html2canvas";
import { Button } from "antd";

export function ScreenShotButton() {
  const handleScreenshot = async () => {
    const element = document.getElementById("screenshot-area");
    if (!element) return;

    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "put.png";
    link.click();
  };

  return (
    <Button onClick={handleScreenshot} type='primary'>
      Screenshot
    </Button>
  );
}

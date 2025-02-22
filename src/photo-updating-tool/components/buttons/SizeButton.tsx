import { Size } from "../../../constants";
import { Select } from "antd";
interface SizeButtonProps {
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
}

export const SizeButton = (props: SizeButtonProps) => {
  const { size, setSize } = props;

  return (
    <Select
      value={size}
      placeholder='Size'
      optionFilterProp='label'
      onChange={(value: Size) => setSize(value)}
      options={[
        { value: "micro", label: "Micro" },
        { value: "tiny", label: "Tiny" },
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
        { value: "venti", label: "Venti" },
        { value: "yuge", label: "Yuge" },
      ]}
    />
  );
};

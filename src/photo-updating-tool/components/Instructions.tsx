import { css } from "@emotion/css";
import { Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const Instructions = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Action: Hotkey",
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Toggle Put. mode: P",
    },

    {
      key: "3",
      label: "Undo: Backspace",
    },
    {
      key: "4",
      label: "Restart: Escape",
      danger: true,
    },
    // TODO: Add hotkey for audio
  ];
  return (
    <div className={styles.container}>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Instructions
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
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

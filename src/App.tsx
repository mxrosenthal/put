import React, { useEffect, useState } from "react";
import { Global, css } from "@emotion/react";
import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import {
  CameraOutlined,
  HomeOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import PutSign from "./photo-updating-tool/components/PutSign";
import { PhotoUpdatingTool } from "./photo-updating-tool/PhotoUpdatingTool";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("/");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: string,
    icon?: React.ReactNode
  ): MenuItem {
    return {
      key,
      icon,
      label,
      onClick: () => navigate(key), // Navigate to the key (which matches route paths)
    };
  }

  const items: MenuItem[] = [
    getItem("Dashboard", "1", <HomeOutlined />),
    getItem("Photo Updating Tool", "photo-updating-tool", <CameraOutlined />),
    getItem("Option 1", "3", <PieChartOutlined />),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Global styles={globalStyles} />
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='demo-logo-vertical' />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "24px",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <PutSign backgroundColor='white' fontColor='black' size='small' />
        </div>
        <Menu
          theme='dark'
          defaultSelectedKeys={[selectedKey]}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path='/' element={<div>Welcome to the Dashboard</div>} />
            <Route
              path='/photo-updating-tool'
              element={<PhotoUpdatingTool />}
            />
            <Route path='/option1' element={<div>Option 1 Content</div>} />
          </Routes>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;

import { Layout, theme } from "antd";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { FullCalendar } from "../components";

const { Content } = Layout;

const IndexPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout
      style={{
        padding: "0 24px 24px",
        width: "100%",
        minWidth: "480px",
        maxWidth: "1024px"
      }}
    >
      <FullCalendar />
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}
      >
        Content (index)
      </Content>
    </Layout>
  );
};

export default IndexPage;

import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const { Header, Footer, Sider } = Layout;

const items = [
  { key: 1, label: "소개" },
  { key: 2, label: "식단 발주" },
  { key: 3, label: "건의 사항" }
];

const orderingItems = [
  { key: 1, label: "식수" },
  { key: 2, label: "식단표" },
  { key: 3, label: "조리 지시서" }
];

export const LayoutPage: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={orderingItems}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            width: "100%",
            minWidth: "480px",
            maxWidth: "1024px"
          }}
        >
          <Breadcrumb
            items={[{ title: "식단 발주" }, { title: "식수" }]}
            style={{ margin: "16px 0" }}
          />
          <Suspense fallback={"loading..."}>
            <Outlet />
          </Suspense>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        식식이 ©{new Date().getFullYear()} Created by Jaycol Kim
      </Footer>
    </Layout>
  );
};

export default LayoutPage;

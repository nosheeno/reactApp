import * as React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Header } = Layout;
const Nav = () => {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Services</Menu.Item>
      <Menu.Item key="3">Works</Menu.Item>
      <Menu.Item key="3">About Me</Menu.Item>
      <Menu.Item key="3">Contect</Menu.Item>
    </Menu>
  );
};
export default Nav;

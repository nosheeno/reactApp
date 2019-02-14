import * as React from "react";
import { Menu } from "antd";
import StyledMenu from "./styles";
import "antd/dist/antd.css";

export class DefaultHeader extends React.Component {
  render() {
    return (
      <StyledMenu
        mode="horizontal"
        defaultSelectedKeys={["5"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Services</Menu.Item>
        <Menu.Item key="3">Works</Menu.Item>
        <Menu.Item key="3">About Me</Menu.Item>
        <Menu.Item key="3">Contect</Menu.Item>
      </StyledMenu>
    );
  }
}
export default DefaultHeader;

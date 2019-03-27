import * as React from "react";
import { Menu } from "antd";
import { StyledMenu, HeaderWrapper } from "./styles";
import "antd/dist/antd.css";

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <HeaderWrapper>
        <StyledMenu
          mode="horizontal"
          defaultSelectedKeys={["5"]}
          style={{ lineHeight: "66px" }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Services</Menu.Item>
          <Menu.Item key="3">Works</Menu.Item>
          <Menu.Item key="4">About Me</Menu.Item>
          <Menu.Item key="5">Contact</Menu.Item>
        </StyledMenu>
      </HeaderWrapper>
    );
  }
}
export default DefaultHeader;

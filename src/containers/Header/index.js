import * as React from "react";
import HeaderWrapper from "./styles";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";

import Nav from "../../components/Nav";

export class DefaultHeader extends React.Component {
  render() {
    return <Nav />;
  }
}
export default DefaultHeader;

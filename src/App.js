import React, { Component } from "react";
import AppWrapper from "./appcss";
import DefaultHeader from "./containers/Header/";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <DefaultHeader />
        <Content />
        <Footer />
      </Layout>
    );
  }
}
export default App;

import React, { Component } from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";

import DefaultHeader from "./containers/Header/";
import Slider from "./containers/Slider/";
import Services from "./containers/Services/";

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <DefaultHeader />
        <Content>
          <Slider />
          <Services />
        </Content>
        <Footer />
      </Layout>
    );
  }
}
export default App;

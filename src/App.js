import React, { Component } from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";

import DefaultHeader from "./containers/Header/";
import Slider from "./containers/Slider/";
import Services from "./containers/Services/";
import LatestWork from "./containers/LatestWork/";
import Process from "./containers/Process/";
import Subscriber from "./containers/Subscriber/";
import Profile from "./containers/Profile/";
import Video from "./containers/Video/";
import Contact from "./containers/Contact/";
import DefaultFooter from "./containers/Footer/";

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout>
        <DefaultHeader />

        <Content>
          <Slider />
          <Services />
          <LatestWork />
          <Process />
          <Subscriber />
          <Profile />
          <Video />
          <Contact />
        </Content>

        <DefaultFooter />
      </Layout>
    );
  }
}
export default App;

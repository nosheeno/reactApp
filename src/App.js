import React, { Component } from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";

// import "./styles"
import DefaultHeader from "./containers/Header/";
import Slider from "./containers/Slider/";
import Services from "./containers/Services/";
import LatestWork from "./containers/LatestWork/";
import Process from "./containers/Process/";
import Profile from "./containers/Profile/";
import Video from "./containers/Video/";
import Contact from "./containers/Contact/";
import DefaultFooter from "./containers/Footer/";

const { Content } = Layout;
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

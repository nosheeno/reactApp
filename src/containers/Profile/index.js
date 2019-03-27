import React, { Component } from "react";
import { Row, Col } from "antd";
import Img from "../../img/about-alex.jpg";

import { ProfileWrapper } from "./styles";

class Profile extends Component {
  render() {
    return (
      <ProfileWrapper>
        <Row type="flex" justify="start" align="middle">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <img src={Img} style={{ width: "100%", height: "auto" }} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <h3 className="about">
              I'm <span className="aboutSpan">Alex</span>
            </h3>
            <p className="aboutPara">
              Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed
              pulvinar magna tempus quis. Mauris risus odio, semper sit amet
              tortor a, tristique consectetur urna.
            </p>
          </Col>
        </Row>
      </ProfileWrapper>
    );
  }
}

export default Profile;

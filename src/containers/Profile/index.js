import React, { Component } from "react";
import { Row, Col } from "antd";
import Img from "../../images/about-alex.jpg";

import ProfileWrapper from "./styles";

class Profile extends Component {
  render() {
    return (
      <ProfileWrapper>
        <Row>
          <Col span={10} offset={1}>
            <img src={Img} />
          </Col>
          <Col span={10}>
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

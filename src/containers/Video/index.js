import React, { Component } from "react";
import { Row, Col } from "antd";
import { VideoWrapper, Videobg , Content } from "./styles";
import { Heading3, Para } from "../../components/heading/index"

class Video extends Component {
  render() {
    return (
      <VideoWrapper>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Content>
              <Heading3 title="Video" span="Presentation"/>
              <Para para="Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed
                pulvinar magna tempus quis. Mauris risus odio, semper sit amet
                tortor a, tristique consectetur urna."/> 
            </Content>           
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Videobg/>           
          </Col>
        </Row>
      </VideoWrapper>
    );
  }
}

export default Video;

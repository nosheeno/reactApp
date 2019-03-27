import React, { Component } from "react";
import { Row, Col } from "antd";
import { VideoWrapper, Videobg } from "./styles";

class Video extends Component {
  render() {
    return (
      <VideoWrapper>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <h3 className="video">
              Video
              <span className="videoSpan"> Presentation</span>
            </h3>
            <p className="videoPara">
              Aliquam et odio arcu. Vestibulum pharetra tincidunt odio, sed
              pulvinar magna tempus quis. Mauris risus odio, semper sit amet
              tortor a, tristique consectetur urna.
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Videobg>

            </Videobg>
          </Col>
        </Row>
      </VideoWrapper>
    );
  }
}

export default Video;

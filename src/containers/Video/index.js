import React, { Component } from "react";
import { Row, Col } from "antd";
import VideoWrapper from "./styles";

class Video extends Component {
  render() {
    return (
      <VideoWrapper>
        <Row>
          <Col span={8} offset={2}>
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
          <Col span={8}>
            <video src="https://youtu.be/1KmARbCnj2U" />
          </Col>
        </Row>
      </VideoWrapper>
    );
  }
}

export default Video;

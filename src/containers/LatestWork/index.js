import * as React from "react";
import { Row, Col } from "antd";
import { LatestWrapper, CustmDiv } from "./styles";

class LatestWork extends React.Component {
  render() {
    return (
      <LatestWrapper>
        <Row>
          <Col span={24}>
            <h2 className="latestHeading">
              Latest<span className="latestSpan"> Works</span>
            </h2>
          </Col>
        </Row>
        <CustmDiv>
          <Row  >
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <div className="imgBlog">
                <a href="#">
                  <img
                    className="gutter-box"
                    alt="example"
                    src={require("../../img/processOne.jpg")}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <div className="overlay"></div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <div className="imgBlog">
                <a href="#">
                  <img
                    className="gutter-box"
                    alt="example"
                    src={require("../../img/processTwo.jpg")}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <div className="overlay"></div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <div className="imgBlog">
                <a href="#">
                  <img
                    className="gutter-box"
                    alt="example"
                    src={require("../../img/processThree.jpg")}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <div className="overlay"></div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <div className="imgBlog">
                <a href="#">
                  <img
                    className="gutter-box"
                    alt="example"
                    src={require("../../img/processFour.jpg")}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <div className="overlay"></div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <div className="imgBlog">
                <a href="#">
                  <img
                    className="gutter-box"
                    alt="example"
                    src={require("../../img/processFive.jpg")}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <div className="overlay"></div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <div className="imgBlog">
                <a href="#">
                  <img
                    className="gutter-box"
                    alt="example"
                    src={require("../../img/processSix.jpg")}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <div className="overlay"></div>
              </div>
            </Col>
          </Row>
        </CustmDiv>
      </LatestWrapper>
    );
  }
}
export default LatestWork;

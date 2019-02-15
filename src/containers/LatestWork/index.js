import * as React from "react";
import { Row, Col, Card } from "antd";
import LatestWrapper from "./styles";

class LatestWork extends React.Component {
  render() {
    return (
      <LatestWrapper>
        <h2 className="latestHeading">
          Latest<span className="latestSpan"> Works</span>
        </h2>
        <Row>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 400, height: 280 }}
              cover={
                <img
                  alt="example"
                  src={require("../../images/processOne.jpg")}
                />
              }
            />
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 400, height: 280 }}
              cover={
                <img
                  alt="example"
                  src={require("../../images/processTwo.jpg")}
                />
              }
            />
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 400, height: 280 }}
              cover={
                <img
                  alt="example"
                  src={require("../../images/processThree.jpg")}
                />
              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 400, height: 280 }}
              cover={
                <img
                  alt="example"
                  src={require("../../images/processFour.jpg")}
                />
              }
            />
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 400, height: 280 }}
              cover={
                <img
                  alt="example"
                  src={require("../../images/processFive.jpg")}
                />
              }
            />
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 400, height: 280 }}
              cover={
                <img
                  alt="example"
                  src={require("../../images/processSix.jpg")}
                />
              }
            />
          </Col>
        </Row>
      </LatestWrapper>
    );
  }
}
export default LatestWork;

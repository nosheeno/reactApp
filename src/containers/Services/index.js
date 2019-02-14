import * as React from "react";
import { Card, Col, Row, Icon } from "antd";
import ServiceWraper from "./styles";

export class Services extends React.Component {
  render() {
    return (
      <ServiceWraper>
        <h2 className="servicesSpan">
          My <span className="servicesHeading"> Services</span>
        </h2>
        <p className="servicesPara">
          I offer the right solutions for your digital business.
        </p>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
                <Icon className="icon" type="project" theme="filled" />
                <h3 className="cardHeading">Web Designing</h3>
                <p className="cardPard">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Icon type="mobile" />
                <h3 className="cardHeading">Branding</h3>
                <p className="cardPard">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Icon type="idcard" />
                <h3 className="cardHeading">UX Designing</h3>
                <p className="cardPard">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
                <Icon className="icon" type="project" theme="filled" />
                <h3 className="cardHeading">Logo Create</h3>
                <p className="cardPard">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Icon type="mobile" />
                <h3 className="cardHeading">Illustration</h3>
                <p className="cardPard">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Icon type="idcard" />
                <h3 className="cardHeading">Graphics</h3>
                <p className="cardPard">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </ServiceWraper>
    );
  }
}
export default Services;

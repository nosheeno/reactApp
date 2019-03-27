import * as React from "react";
import { Col, Row } from "antd";
import Fram from "../../img/frame.svg";

import { ServiceWraper, Card, CustmDiv } from "./styles";

export class Services extends React.Component {
  render() {
    return (
      <ServiceWraper>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h2 className="servicesSpan">
              My <span className="servicesHeading"> Services</span>
            </h2>
            <p className="servicesPara">
              I offer the right solutions for your digital business.
            </p>
          </Col>
        </Row>
        <CustmDiv>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Card>
                <div className="relative">
                  <img src={Fram} />
                  <div className="img img1"></div>
                </div>
                <h3 className="cardHeading">Web Designing</h3>
                <p className="cardPara">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Card>
                <div className="relative">
                  <img src={Fram} />
                  <div className="img img2"></div>
                </div>
                <h3 className="cardHeading">Branding</h3>
                <p className="cardPara">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Card>
                <div className="relative">
                  <img src={Fram} />
                  <div className="img img3"></div>
                </div>
                <h3 className="cardHeading">UX Designing</h3>
                <p className="cardPara">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Card>
                <div className="relative">
                  <img src={Fram} />
                  <div className="img img4"></div>
                </div>
                <h3 className="cardHeading">Logo Create</h3>
                <p className="cardPara">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Card>
                <div className="relative">
                  <img src={Fram} />
                  <div className="img img5"></div>
                </div>
                <h3 className="cardHeading">Illustration</h3>
                <p className="cardPara">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Card>
                <div className="relative">
                  <img src={Fram} />
                  <div className="img img6"></div>
                </div>
                <h3 className="cardHeading">Graphics</h3>
                <p className="cardPara">
                  Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet.
                </p>
              </Card>
            </Col>
          </Row>
        </CustmDiv>
      </ServiceWraper>
    );
  }
}
export default Services;

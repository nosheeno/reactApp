import * as React from "react";
import { Col, Row } from "antd";
import { Heading2, Para } from "../../components/heading/index";
import { Cards } from "../../components/card/index";
import { ServiceWraper, CustmDiv } from "./styles";

export class Services extends React.Component {
  render() {
    return (
      <ServiceWraper>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Heading2 title="my" span="services" />
            <Para para=" I offer the right solutions for your digital business. " />
          </Col>
        </Row>
        <CustmDiv>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Cards
                imgsrc="img1"
                title="web designing"
                para="Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet."
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Cards
                imgsrc="img2"
                title="Branding"
                para="Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                    suscipit dictum. Mauris auctor enim in justo euismod
                    imperdiet."
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Cards
                imgsrc="img3"
                title="UX Designing"
                para="Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                  suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet."
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Cards
                imgsrc="img4"
                title="Logo Create"
                para="Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                    suscipit dictum. Mauris auctor enim in justo euismod
                    imperdiet."
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Cards
                imgsrc="img5"
                title="Illustration"
                para="Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                    suscipit dictum. Mauris auctor enim in justo euismod
                  imperdiet."
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <Cards
                imgsrc="img6"
                title="Graphics"
                para="Vivamus a accumsan mauris. Nunc sodales lacus nec felis
                    suscipit dictum. Mauris auctor enim in justo euismod
                    imperdiet."
              />
            </Col>
          </Row>
        </CustmDiv>
      </ServiceWraper>
    );
  }
}
export default Services;

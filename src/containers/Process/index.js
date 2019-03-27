import * as React from "react";
import { Row, Col } from "antd";
import { ProcessWrapper, CustmDiv } from "./styles";

export class Process extends React.Component {
  render() {
    return (
      <ProcessWrapper>
        <Row>
          <Col span={24}>
            <h2 className="processHeading">
              Working <span className="processSpan">Process</span>
            </h2>
          </Col>
        </Row>
        <CustmDiv>
          <Row>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <h4 className="processNum">
                01<span className="processDesign"> Sketch</span>
              </h4>
              <h4 className="processPara">Nunc sodales lacus nec felis suscipit dictum.</h4>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <h4 className="processNum">
                02<span className="processDesign"> Design</span>
              </h4>
              <h4 className="processPara">Nunc sodales lacus nec felis suscipit dictum.</h4>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <h4 className="processNum">
                03<span className="processDesign"> Develop</span>
              </h4>
              <h4 className="processPara">Nunc sodales lacus nec felis suscipit dictum.</h4>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <h4 className="processNum">
                04<span className="processDesign"> End Product</span>
              </h4>
              <h4 className="processPara">Nunc sodales lacus nec felis suscipit dictum.</h4>
            </Col>
          </Row>
        </CustmDiv>
      </ProcessWrapper>
    );
  }
}
export default Process;

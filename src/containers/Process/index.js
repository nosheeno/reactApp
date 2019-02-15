import * as React from "react";
import { Row, Col } from "antd";
import ProcessWrapper from "./styles";

export class Process extends React.Component {
  render() {
    return (
      <ProcessWrapper>
        <h2 className="processHeading">
          Working <span className="processSpan">Process</span>
        </h2>
        <Row>
          <Col span={6}>
            <p className="processNum">
              01<span className="processDesign"> Sketch</span>
            </p>
            <p className="processPara">
              Nunc sodales lacus nec felis suscipit dictum.
            </p>
          </Col>
          <Col span={6}>
            <p className="processNum">
              02<span className="processDesign"> Design</span>
            </p>
            <p className="processPara">
              Nunc sodales lacus nec felis suscipit dictum.
            </p>
          </Col>
          <Col span={6}>
            <p className="processNum">
              03<span className="processDesign"> Develop</span>
            </p>
            <p className="processPara">
              Nunc sodales lacus nec felis suscipit dictum.
            </p>
          </Col>
          <Col span={6}>
            <p className="processNum">
              04<span className="processDesign"> End Product</span>
            </p>
            <p className="processPara">
              Nunc sodales lacus nec felis suscipit dictum.
            </p>
          </Col>
        </Row>
      </ProcessWrapper>
    );
  }
}
export default Process;

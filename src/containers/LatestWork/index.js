import * as React from "react";
import { Row, Col } from "antd";
import { LatestWrapper, CustmDiv } from "./styles";
import {Heading2} from "../../components/heading/index";
import { Gallery } from "../../components/gallery/index"
import img1 from "../../img/processOne.jpg";
import img2 from "../../img/processTwo.jpg";
import img3 from "../../img/processThree.jpg";
import img4 from "../../img/processFour.jpg";
import img5 from "../../img/processFive.jpg";
import img6 from "../../img/processSix.jpg";

class LatestWork extends React.Component {
  render() {
    return (
      <LatestWrapper>
        <Row>
          <Col span={24}>
            <Heading2 title='Latest' span='Works'/>            
          </Col>
        </Row>
        <CustmDiv>
          <Row  >
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <Gallery image={img1}/>              
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <Gallery image={img2}/> 
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <Gallery image={img3}/> 
            </Col>

            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <Gallery image={img4}/> 
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <Gallery image={img5}/> 
            </Col>
            <Col xs={24} sm={24} md={10} lg={8} xl={8}>
              <Gallery image={img6}/> 
            </Col>
          </Row>
        </CustmDiv>
      </LatestWrapper>
    );
  }
}
export default LatestWork;

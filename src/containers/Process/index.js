import * as React from "react";
import { Row, Col } from "antd";
import { ProcessWrapper, CustmDiv, ContentWrapper } from "./styles";
import {Heading2, Content, Para} from "../../components/heading/index";

export class Process extends React.Component {
  render() {
    return (
      <ProcessWrapper>
        <Row>
          <Col span={24}>
            <Heading2 title="working" span="process"/>          
          </Col>
        </Row>
        <CustmDiv>
          <Row>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <ContentWrapper>
                <Content para="01" span="Sketch"/>
                <Para para="Nunc sodales lacus nec felis suscipit dictum."/>
              </ContentWrapper>              
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <ContentWrapper>
                <Content para="02" span="Design"/>
                <Para para="Nunc sodales lacus nec felis suscipit dictum."/> 
              </ContentWrapper>             
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <ContentWrapper>
                <Content para="03" span="Develop"/>
                <Para para="Nunc sodales lacus nec felis suscipit dictum."/>
              </ContentWrapper>              
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <ContentWrapper>
                <Content para="04" span="End Product"/>
                <Para para="Nunc sodales lacus nec felis suscipit dictum."/>
             </ContentWrapper>  
            </Col>
          </Row>
        </CustmDiv>
      </ProcessWrapper>
    );
  }
}
export default Process;

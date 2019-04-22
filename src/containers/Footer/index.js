import React, { Component } from "react";
import { FooterWrapper, DefaultIcon } from "./style";
import { Row, Col } from "antd";
import { Heading2 } from "../../components/heading/index";
import { Images } from "../../components/gallery/index"
import Img1 from "../../img/foot1.jpg";
import Img2 from "../../img/foot2.jpg";
import Img3 from "../../img/foot3.jpg";
import Img4 from "../../img/foot4.jpg";
import Img5 from "../../img/foot5.jpg";
import Img6 from "../../img/foot6.jpg";

// const { Text } = Typography;
class DefaultFooter extends Component {
  render() {
    return (
      <FooterWrapper>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24} xl={24}>
            <Heading2 title='follow' span='me' />            
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xm={24} sm={24} md={4} lg={4} xl={4}>
            <Images image={Img1}/>
          </Col>
          <Col xm={24} sm={24} md={4} lg={4} xl={4}>
            <Images image={Img2}/>
          </Col>
          <Col xm={24} sm={24} md={4} lg={4} xl={4}>
           <Images image={Img3}/>
          </Col>
          <Col xm={24} sm={24} md={4} lg={4} xl={4}>
           <Images image={Img4}/>
          </Col>
          <Col xm={24} sm={24} md={4} lg={4} xl={4}>
            <Images image={Img5}/>
          </Col>
          <Col xm={24} sm={24} md={4} lg={4} xl={4}>
            <Images image={Img6}/>
          </Col>
        </Row>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24} xl={24} className="icons">
            <DefaultIcon type="instagram" theme="filled" />
            <DefaultIcon className="ml" type="facebook" />
            <DefaultIcon className="ml" type="twitter" />
            <DefaultIcon className="ml" type="dribbble" />
            <DefaultIcon className="ml" type="slack" />
            <DefaultIcon className="ml" type="behance" />
          </Col>
        </Row>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24} xl={24}>
            {/* <Text disabled>Ant Design</Text> */}
          </Col>
        </Row>
      </FooterWrapper >
    );
  }
}

export default DefaultFooter;

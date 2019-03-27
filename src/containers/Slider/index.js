import * as React from "react";
import { SliderWrapper, Wrapper } from "./Styles";
import DefaultButton from "../../components/Button";
import { Row, Col } from "antd";
import { Img } from "../../img/pattern-530.svg"

class Slider extends React.Component {
  render() {
    return (
      <SliderWrapper>
        <Row type="flex" justify="center" align="middle">
          <Col span={24}>
            <Wrapper>
              <p className="sliderPara ml">WEB DESIGN, BRANDING, GRAPHIC</p>
              <img src={Img}></img>
              <h2 className="sliderHeading ml">
                Hello, I'm
              <span className="spanHeading "> Web and graphic Designer</span><br/>living in Gilgit
              </h2>
              <DefaultButton className="ml">See Works</DefaultButton>
              <DefaultButton primary>Contect Me</DefaultButton>
            </Wrapper>
          </Col>
        </Row>
      </SliderWrapper>
    );
  }
}

export default Slider;

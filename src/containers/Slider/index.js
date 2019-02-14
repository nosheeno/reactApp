import * as React from "react";
import SliderWrapper from "./Styles";
import DefaultButton from "../../components/Button";

class Slider extends React.Component {
  render() {
    return (
      <SliderWrapper>
        <p className="sliderPara">WEB DESIGN, BRANDING, GRAPHIC</p>
        <h2 className="sliderHeading">
          Hello, I'm
          <span className="spanHeading"> Web and graphic Designer</span>
        </h2>
        <DefaultButton>Our Work</DefaultButton>
        <DefaultButton>Contect Me</DefaultButton>
      </SliderWrapper>
    );
  }
}

export default Slider;

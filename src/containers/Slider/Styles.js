import styled from "styled-components";

import Background from "../../images/home-bg.jpg";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${Background});
  .sliderPara {
    
    font-size : 1.7rem;
    color : #C7C7D5;
  }
  .sliderHeading {
    font-size: 3rem;
    color: white;
  }
  .spanHeading {
    font-size: 3rem
    color: #B09A68;
  }
  .icon {
    height : 5rem;
    width : 5rem;
  }
  .cardHeading {
    font-size: 3rem
    color: #B09A68;
    text-align: center
  }
  .cardPara {
    font-size : 5rem;
    color : #C7C7D5;
    text-align: center;
  }
`;

export default SliderWrapper;

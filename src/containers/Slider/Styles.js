import styled from "styled-components";

import Background from "../../img/home-bg.jpg";

export const SliderWrapper = styled.div`
font-family: 'Raleway', sans-serif;
  height: 100% !important;
  width: 100% !important;
  background-position: top !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
   background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
   url(${Background});

   .sliderPara {
    font-family: raleway, sans-serif;
    color: #C7C7D5;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1.6rem;
    margin-bottom: 0;
  }
  .sliderHeading {    
    font-size: 4rem;
    color: white;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .ml{
    margin-left: 11%;
  }
  .spanHeading {
    color: #B09A68;
  }
  .icon {
    height : 5rem;
    width : 5rem;
  }
  .cardHeading {
    font-size: 3rem;
    color: #B09A68;
    text-transform: capitalize;
    font-weight: 800;
    text-align: center;
    letter-spacing: 2px;
  }
  .cardPara {
    font-size : 5rem;
    color : #C7C7D5;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
margin-top: 441px;
margin-bottom: 370px;
`;

import styled from "styled-components";
import WebSvg from "../../img/web-design.svg";
import BrandingSvg from "../../img/branding.svg";
import UiSvg from "../../img/ui-ux.svg";
import LogoSvg from "../../img/logo-create.svg";
import IllustrtSvg from "../../img/illustration.svg";
import GraphicsSvg from "../../img/graphics.svg";

export const ServiceWraper = styled.div`
  font-family: 'Raleway', sans-serif;
  background-color: transparent;
  padding-top:6rem;
  .servicesSpan{
    font-weight: 700;
    text-align: center;
    font-size: 3rem
    color: #B09A68;
  }
  .servicesHeading {
    color: #2A2A2E;
      }
  .servicesPara {
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    color : black;
  }
`;
export const CustmDiv = styled.div`
  padding: 74px 74px 50px 74px;
`;
export const Card = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  .cardHeading{
    font-weight: 500;
    font-size: 1.8rem;
    margin-top: 25px;
    }
  .cardPara{
    text-align: center;
    font-size: 1.4rem;
  }
  .relative {
    position: relative;
  }
  .img{   
    left: 46.5%;
    top: 23%;
    min-height: 32px;
    position: absolute;
    width: 39px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .img1{
    background-image:url(${WebSvg});
  }
  .img2{
    background-image:url(${BrandingSvg});
  }
  .img3{
    background-image:url(${UiSvg});
  }
  .img4{
    background-image:url(${LogoSvg});
  }
  .img5{
    background-image:url(${IllustrtSvg});
  }
  .img6{
    background-image:url(${GraphicsSvg});
  }
`;


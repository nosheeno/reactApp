import styled from "styled-components";
import WebSvg from "../../img/web-design.svg";
import BrandingSvg from "../../img/branding.svg";
import UiSvg from "../../img/ui-ux.svg";
import LogoSvg from "../../img/logo-create.svg";
import IllustrtSvg from "../../img/illustration.svg";
import GraphicsSvg from "../../img/graphics.svg";

export const Card = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  font-family: raleway, sans-serif;
  .cardHeading {
    color: #2A2A2E;
    font-size: 21px;
    position: relative;
    letter-spacing: 1px;
    min-height: 25px;
    text-align: center;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 25px;
    margin-top: 30px;
  }
  .cardPara {
    color: #2A2A2E;
    font-size: 16px;
    position: relative;
    letter-spacing: 1px;
    text-align: center;
    font-weight: 400;    
    line-height: 24px;
    margin-top: 17px;
  }
  .relative {
    position: relative;
  }
  .img{   
    left: 46.5%;
    top: 23%;
    min-height: 32px;
    position: absolute;
    width: 30px;
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
export default {Card}

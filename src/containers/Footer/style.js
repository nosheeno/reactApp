import styled from "styled-components";
import { Layout, Icon } from "antd";

const { Footer } = Layout;
export const FooterWrapper = styled(Footer)`
  background-color: #2a2a2e;
  font-family: 'Raleway', sans-serif;
  .footerHeading {
    text-align: center;
    color: #b09a68;
    font-weight: 700;
  font-size: 3rem;
  }
  .imgBlog:hover .overlay {
    opacity: 0.5;
  }
  .overlay {
    position: absolute;
    width: 93%;
    height: 100%;
    background: #b09a68;
    cursor: pointer;
    opacity: 0;
    z-index: 9;
    top: 0px;
      }

  }
  .footerSpan {
    font-size: 2.5;
    color: #fff;
    text-align: center;
  }
  .icons {
    text-align: center;
    color: "white";
  }
  .ml{
    margin: 32px 0 0 22px !important;
  }
`;

export const DefaultIcon = styled(Icon)`
  color: white;
  
`;

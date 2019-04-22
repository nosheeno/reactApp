import styled from "styled-components";
import { Layout, Icon } from "antd";

const { Footer } = Layout;
export const FooterWrapper = styled(Footer)`
  background-color: #2a2a2e;
  font-family: 'Raleway', sans-serif;
  .foo {
    color: white ;
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
  .icons {
    text-align: center;
    color: "white";
    cursor: pointer;
  }
  .ml{
    margin: 32px 0 0 22px !important;
  }
`;

export const DefaultIcon = styled(Icon)`
  color: white;
  
`;

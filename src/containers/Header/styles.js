import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Header } = Layout;
export const HeaderWrapper = styled(Header)`
font-family: 'Raleway', sans-serif;
position: absolute;
background: transparent !important;
z-index: 999;
padding: 0px 7rem;
width: 100%;
.ant-menu-item{
  color:#ffffff;
  line-height: 66px;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.2rem;
}
`;
export const StyledMenu = styled(Menu)` 
background: transparent !important;
  text-align: right;
  color: white;
  border : 0 !important;
  border-bottom : 0;  
  margin-top : 25px;
  li {
    border-bottom : 0 !important;
  }
  li:hover {
    border-bottom : 0 !important;
    color : #B09A68 !important;
  }
`;
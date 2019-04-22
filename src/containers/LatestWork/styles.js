import styled from "styled-components";

export const LatestWrapper = styled.div`
  background-color: transparent;
  font-family: 'Raleway', sans-serif;
  .gutter-box{
    padding: 10px 10px 10px 10px;
  }
  .imgBlog:hover .overlay {
    opacity: 0.3;
  }
  .overlay {
    position: absolute;
    width: 83%;
    height: 80%;
    background: #000000;
    cursor: pointer;
    opacity: 0;
    z-index: 9;
    top: 32px;
    left: 30px;
      }
 
`;
export const CustmDiv = styled.div`
  padding: 24px 74px 50px 74px;
`;


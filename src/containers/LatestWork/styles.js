import styled from "styled-components";

export const LatestWrapper = styled.div`
  background-color: transparent;
  font-family: 'Raleway', sans-serif;
  .latestHeading {
    font-weight: 700;
    color: #B09A68;
    font-size : 3rem;
    text-align : center;
  }
  .latestSpan{  
    color: #2A2A2E;
  }
  .gutter-box{
    padding: 10px 10px 10px 10px;
  }
  .imgBlog:hover .overlay {
    opacity: 0.3;
  }
  .overlay {
    position: absolute;
    width: 95.5%;
    height: 93%;
    background: #b09a68;
    cursor: pointer;
    opacity: 0;
    z-index: 9;
    top: 9px;
    left: 9px;
      }
 
`;
export const CustmDiv = styled.div`
  padding: 24px 74px 50px 74px;
`;


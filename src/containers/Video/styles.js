import styled from "styled-components";
import Vbg from "../../img/video-bg.jpg"

export const VideoWrapper = styled.div`
  background-color: transparent;
  padding: 24px 74px 20px 74px;
  font-family: 'Raleway', sans-serif;
  .video {
  font-weight: 700;
  font-size: 3rem;
  color: #b09a68; 
  margin-top: 80px;
  text-align: right;   
  }
  .videoSpan {
    font-size: 2rem;
    color: #2a2a2e;
    text-align: right; 
  }
  .videoPara {
    font-size: 23px;
    position: relative;
    font-weight: 400;
    line-height: 37px;
    margin-left: 162px;
    text-indent: right;
  }
`;
export const Videobg = styled.div`
background-image: url(${Vbg});
height: 21rem;
background-position: top;
background-size: contain;
background-repeat: no-repeat;
`;

import styled from "styled-components";
import Background from "../../images/subscribe-bg.jpg";

const SubscriberWrapper = styled.div`
  height: 100%;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .SubscriberWrapper {
    color: #fff;
    font-size: 2rem;
  }
`;
export default SubscriberWrapper;

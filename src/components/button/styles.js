import styled from "styled-components";

export const DefaultButton = styled.button`
  color: white;
  background: ${props => props.primary ? "#303034" : "#b09a68"};
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 1rem 2rem;
  margin-bottom: 30px;
  border: ${props => props.primary ? "1px solid #303034" : "1px solid #b09a68"};
  border-radius: 50px;
  margin-left : ${props => props.primary ? "55px" : "0"}
  cursor: pointer
  :focus {
    outline: none;
  }
  :hover {
    background: ${props => props.btnprim ? "#303034" : "transparent"};
    border: 1px solid white;
  }
`;
export default DefaultButton;

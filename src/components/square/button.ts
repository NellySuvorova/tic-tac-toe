import styled from "styled-components";

interface Props {
  leftBorder: boolean;
  bottomBorder: boolean;
}

const Button = styled.button`
  height: 60px;
  width: 60px;
  border: none;
  padding: 0;
  border-left: ${(props: Props) => props.leftBorder && "2px solid #000;"};
  border-bottom: ${(props: Props) => props.bottomBorder && "2px solid #000;"};
  font-size: 30px;
  background: none;
  cursor: pointer;
`;

export default Button;

import styled from "styled-components";

interface Props {
  width: string;
}

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props: Props) => props.width};
  margin: 5px;
  border: 2px solid #000;
`;

export default Board;

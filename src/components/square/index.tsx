import React from "react";

import Button from "./button";

interface Props {
  x: number;
  y: number;
  symbol: string;
  size: number;
  handleMove: (clickedCell: { k: number; i: number }) => void | undefined;
}

const Square: React.FC<Props> = props => {
  return (
    <Button
      leftBorder={props.x !== 1}
      bottomBorder={props.y !== props.size}
      onClick={(): void => props.handleMove({ k: props.x, i: props.y })}
    >
      {props.symbol}
    </Button>
  );
};

export default Square;

import React, { Component } from "react";

import Board from "./board";
import Square from "../square";

import { Cell } from "../../interfaces";

import { makeBoard } from "../../utils";

interface State {
  isXActive: boolean;
  cells: Cell[];
  numberOfRows: number;
}

class Game extends Component<{}, State> {
  state = {
    isXActive: true,
    cells: [],
    numberOfRows: 3
  };

  componentDidMount(): void {
    const { numberOfRows } = this.state;
    const cells = makeBoard(numberOfRows);
    this.setState({
      cells
    });
  }

  switchPlayer = (): void => {
    this.setState({
      isXActive: !this.state.isXActive
    });
  };

  handleMove = (clickedCell: Cell): void => {
    const { cells, isXActive } = this.state;

    const clickedItemIndex = cells.findIndex(
      (cell: Cell) => cell.k === clickedCell.k && cell.i == clickedCell.i
    );

    if (cells[clickedItemIndex].symbol === null) {
      this.setState({
        cells: [
          ...cells.slice(0, clickedItemIndex),
          {
            ...cells[clickedItemIndex],
            symbol: isXActive ? "X" : "O"
          },
          ...cells.slice(clickedItemIndex + 1, cells.length)
        ]
      });
    }

    this.switchPlayer();
  };

  calculateBoardWidth = (): string => {
    const { numberOfRows } = this.state;
    return `${numberOfRows * 60}px`;
  };

  render(): React.ReactNode {
    const { cells, numberOfRows } = this.state;
    return (
      <Board width={this.calculateBoardWidth()}>
        {cells.map((cell: Cell) => {
          return (
            <Square
              x={cell.k}
              y={cell.i}
              symbol={cell.symbol}
              key={`${cell.k} ${cell.i}`}
              handleMove={this.handleMove}
              size={numberOfRows}
            />
          );
        })}
      </Board>
    );
  }
}

export default Game;

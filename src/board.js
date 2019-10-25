'use strict';

class Board {
  constructor() {
    this._displayBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    this._internalBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }

  displayBoard() {
    return this._displayBoard
  }

  internalBoard() {
    return this._internalBoard
  }

  printBoard() {
    let rows = this._displayBoard.map(element => element.join(' | '));
    return rows.join('\n---------\n');
  }

  updateBoards(number, playerName) {
    let [row, col] = this.positionOnBoard(number);

    this._displayBoard[row][col] = playerName;

    if (playerName === "X") {
      this._internalBoard[row][col] = -1;
    } else {
      this._internalBoard[row][col] = 1;
    }  
  }

  positionOnBoard(number) {
    let index = number - 1;
    let row = Math.floor(index / 3);
    let col = index % 3;
    return [row, col];
  }
}
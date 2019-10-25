'use strict';

class Board {
  constructor() {
    this._displayBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    this._internalBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }

  printBoard() {
    let rows = this._displayBoard.map(element => element.join(' | '));
    return rows.join('\n---------\n');
  }
  
  updateBoard(number, playerName) {
    let index = number - 1;
    let row = Math.floor(index / 3);
    let col = index % 3;

    this._displayBoard[row][col] = playerName;
    this._internalBoard[row][col] = playerName;
  }
}
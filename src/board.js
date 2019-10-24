'use strict';

class Board {
  constructor() {
    this._board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  }

  printBoard() {
    let rows = this._board.map(element => element.join(' | '));
    return rows.join('\n---------\n');
  }

  updateBoard(number, playerName) {
    let index = number - 1;
    let row = Math.floor(index / 3);
    let col = index % 3;
    this._board[row][col] = playerName;
  }
}
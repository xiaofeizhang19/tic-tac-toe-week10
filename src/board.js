'use strict'

class Board {
  constructor() {
    this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  }

  initBoard() {
    let rows = this.board.map(element => element.join(' | '));
    return rows.join('\n---------\n');
  }
}
'use strict';

class Game {
  constructor() {
    this._board = new Board();
    this._player1 = new Player("X");
    this._player2 = new Player("O");
    this._currentPlayer = this._player1;
  }

  start() {
    let display = this._board.displayBoard();
    display.printBoard();
  }

  play(number) {
    validateInput(number);

    let playerName = currentPlayer().name;
    this._board.updateBoard(number, playerName);
    this._board.printBoard();
    this.checkResult();
  }
X
  currentPlayer() {
    return this._currentPlayer;
  }
  
  switchTurn() {
    if (this._currentPlayer === this._player1) {
      this._currentPlayer = this._player2;
    } else {
      this._currentPlayer = this._player1;
    }
  }

  validateInput(number) {
    if (!Number.isInteger(number) || number < 1 || number > 9) {
      throw 'Please choose number on board only!';
    }

    let [row, col] = this._board.positionOnBoard(number);
    if (this._board.internalBoard()[row][col] !== 0) {
      throw 'Position already occupied!';
    }
  }
}
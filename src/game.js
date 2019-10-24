'use strict';

class Game {
  constructor() {
    this._board = new Board();
    this._player1 = new Player("X");
    this._player2 = new Player("O");
    this._currentPlayer = this._player1;
  }

  play(number) {
    validateInput(number);

    let playerName = currentPlayer().name;
    this._board.updateBoard(number, playerName);
    this.checkResult();
  }

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
    if (!this._board.flat().includes(number)) {
      throw 'Invalid input!';
    }
  }
}
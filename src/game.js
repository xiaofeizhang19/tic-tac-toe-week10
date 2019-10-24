'use strict';

class Game {
  constructor() {
    this._board = new Board();
    this._player1 = new Player("X");
    this._player2 = new Player("O");
    this._currentPlayer = this._player1;
  }

}
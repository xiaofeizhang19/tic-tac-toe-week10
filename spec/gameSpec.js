'use strict';

describe("Game", function() {
  let game;
  beforeEach(function() {
    game = new Game;
  });

  it("should switch current player after each play", function() {
    expect(game.currentPlayer().name).toEqual("X");

    game.switchTurn();
    expect(game.currentPlayer().name).toEqual("O");

    game.switchTurn();
    expect(game.currentPlayer().name).toEqual("X");
  });

  it("should validate user input and limit choices to numbers on display board", function(){
    expect(function() { game.validateInput(0) }).toThrow("Please choose number on board only!")
  })
});
'use strict';

describe("Board", function() {
  let board;
  beforeEach(function() {
    board = new Board();
  });

  it("should print a board for the game", function() {
    expect(board.printBoard()).toEqual("1 | 2 | 3\n" 
                                    + "---------\n"
                                    + "4 | 5 | 6\n"
                                    + "---------\n"
                                    + "7 | 8 | 9")
  });

  it("should update the display board given a number and player name", function() {
    board.updateBoard(8, "X");
    expect(board._displayBoard).toEqual([[1, 2, 3], [4, 5, 6], [7, "X", 9]]);
  });

  it("should update the internal board given a number and player name", function() {
    board.updateBoard(5, "O");
    expect(board._internalBoard).toEqual([[0, 0, 0], [0, "O", 0], [0, 0, 0]]);
  });
});
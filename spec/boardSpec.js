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

  it("should update the board given a number and player name", function() {
    board.updateBoard(8, "X");
    expect(board._board).toEqual([[1, 2, 3], [4, 5, 6], [7, "X", 9]]);
  });
});
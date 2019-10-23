'user strict';

describe("Board", function() {
  let board = new Board();

  it("should print a board for the game", function() {
    expect(board.initBoard()).toEqual("1 | 2 | 3\n" 
                                     + "---------\n"
                                     + "4 | 5 | 6\n"
                                     + "---------\n"
                                     + "7 | 8 | 9")
  });
});
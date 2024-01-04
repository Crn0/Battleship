/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import CreateBoard from "../board/board"
import CreatePlayer from "./player";

let player1;
let player2;
let board1;
let board2;

beforeEach(() => {
    board1 = CreateBoard();
    board2 = CreateBoard();
    
    player1 = CreatePlayer("human", board1, board2);
    player2 = CreatePlayer("computer", board2, board1, true);

    player1.createAllShips()
    player2.createAllShips()
});

describe("Create player", () => {
    test("check if the player is an A.I", () => {
        expect(player1.isAi).toBe(false);
        expect(player2.isAi).toBe(true);
    });

    test("check if the player is not an A.I", () => {
        expect(player1.isAi).toBe(false);
        expect(player2.isAi).toBe(true);
    });

    test("check player names", () => {
        expect(player1.name).toMatch("human");
        expect(player2.name).toMatch("computer");
    });

    test("check if ships have been created", () => {
        expect(player1.dock).toHaveLength(5);
        expect(player2.dock).toHaveLength(5);
    });

    test("check for player turn", () => {
        expect(player1.turn).toBe(false);
        expect(player2.turn).toBe(false);
        
        player1.turn = true;
        expect(player1.turn).toBe(true);

    });
});


describe("place player ships horizontal", () => {
    // horizontal
    test("place carrier", () => {
        // expect(player1.placeShip(player1.dock[0], 0, 0, "horizontal")).toBe(true); 
        player1.placeShip(player1.dock[0], 5, 0, "horizontal")
        // expect(player1.placeShip(player1.dock[0], 5, 7, "vertical")).toBe(true); 
        const checkLength = [...Array(player1.board.dock[0].length)].every((_, i) => 
        expect(player1.board.board[5][0 + i]).toEqual(player1.board.dock[0])
        );
    });
    test("place battleship", () => {
        player1.placeShip(player1.dock[1], 1, 0, "horizontal")
        const checkLength = [...Array(player1.board.dock[1].length)].every((_, i) => 
        expect(player1.board.board[1][0 + i]).toEqual(player1.board.dock[1])
        );
    });
    test("place cruiser", () => {
        expect(player1.placeShip(player1.dock[2], 2, 0, "horizontal")).toBe(true); 
        const checkLength = [...Array(player1.board.dock[2].length)].every((_, i) => 
        expect(player1.board.board[2][0 + i]).toEqual(player1.board.dock[2])
        );
    });
    test("place submarine", () => {
        expect(player1.placeShip(player1.dock[3], 3, 0, "horizontal")).toBe(true); 
        const checkLength = [...Array(player1.board.dock[3].length)].every((_, i) => 
        expect(player1.board.board[3][0 + i]).toEqual(player1.board.dock[3])
        );
    });
    test("place destroyer", () => {
        expect(player1.placeShip(player1.dock[4], 4, 0, "horizontal")).toBe(true); 
        const checkLength = [...Array(player1.board.dock[4].length)].every((_, i) => 
        expect(player1.board.board[4][0 + i]).toEqual(player1.board.dock[4])
        );
    });
   
    // test occupied space
    test("don't place in occupied space", () => {
        player1.placeShip(player1.dock[4], 4, 0, "horizontal");
        expect(player1.placeShip(player1.dock[4], 4, 0, "horizontal")).toBe(false); 
    });

    test("don't place if it will go out of board", () => {
        expect(player1.placeShip(player1.dock[0], 0, 19, "horizontal")).toBe(false);
        
    });
});

describe("place player ships vertical", () => {
    // vertical
    test("place carrier", () => {
        player1.placeShip(player1.dock[0], 5, 0, "vertical")
        const checkLength = [...Array(player1.board.dock[0].length)].every((_, i) => 
        expect(player1.board.board[5 + i][0]).toEqual(player1.board.dock[0])
        );
    });
    test("place battleship", () => {
        player1.placeShip(player1.dock[1], 1, 0, "vertical")
        const checkLength = [...Array(player1.board.dock[1].length)].every((_, i) => 
        expect(player1.board.board[1 + i][0]).toEqual(player1.board.dock[1])
        );
    });
    test("place cruiser", () => {
        expect(player1.placeShip(player1.dock[2], 2, 0, "vertical")).toBe(true); 
        const checkLength = [...Array(player1.board.dock[2].length)].every((_, i) => 
        expect(player1.board.board[2 + i][0]).toEqual(player1.board.dock[2])
        );
    });
    test("place submarine", () => {
        expect(player1.placeShip(player1.dock[3], 3, 0, "vertical")).toBe(true); 
        const checkLength = [...Array(player1.board.dock[3].length)].every((_, i) => 
        expect(player1.board.board[3 + i][0]).toEqual(player1.board.dock[3])
        );
    });
    test("place destroyer", () => {
        expect(player1.placeShip(player1.dock[4], 4, 0, "vertical")).toBe(true); 
        const checkLength = [...Array(player1.board.dock[4].length)].every((_, i) => 
        expect(player1.board.board[4 + i][0]).toEqual(player1.board.dock[4])
        );
    });
   
    // test occupied space
    test("don't place in occupied space", () => {
        player1.placeShip(player1.dock[4], 4, 0, "horizontal");
        expect(player1.placeShip(player1.dock[4], 4, 0, "horizontal")).toBe(false); 
    });

    test("don't place if it will go out of board", () => {
        expect(player1.placeShip(player1.dock[0], 7, 8, "vertical")).toBe(false); 
    });
});

describe("random place ships", () => {
    test("check if all has been placed", () => {
        player2.placeShip()
        const findShips = player2.board.board.map((row) => row.filter(col => col !== false))
        expect(findShips.flat()).toHaveLength(17)
        // console.table(player2.board.board)
    });
});

describe("Players attack", () => {
    test("human player attacks computer player", () => {
        player1.atkEnemy(0, 0)
        expect(player2.board.shipAttacks[0][0]).toBe(true);
    });

    test("human player cannot attack the same coord twice", () => {
        player1.atkEnemy(0, 0);
        expect(player1.atkEnemy(0, 0)).toBe(false);
    });

    test("computer player attacks human player", () => {
        const mockAtk = jest.fn(() => player2.atkEnemy());
        player1.placeShip(player1.dock[0], 5, 0, "horizontal")
        mockAtk();
        mockAtk();
        mockAtk();
        // store the attacks;
        const attacksArr = [];
        // map the ship attacks then push to the attack array
        const attack = player1.board.shipAttacks.map((row) => row.map((col) => attacksArr.push(col)));
        // check if every cell is false
        // will return false, if the computer land a hit in human board
        const checkAtk = attacksArr.every(cell => cell === false);
        expect(checkAtk).toBe(false);
        
        // expect(player1.board.board[5][0].health).toBeGreaterThanOrEqual(0);
    });

});
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


describe("Players attack", () => {
    test("human player attacks computer player", () => {
        player1.atkEnemy(0, 0)
        expect(player2.board.shipAttacks[0][0]).toBe(true);
    });

    test("human player cannot attack the same coord twice", () => {
       
        expect(player1.atkEnemy(0, 0)).toBe(false);
    });

    test("computer player attacks human player", () => {
        const mockAtk = jest.fn(() => player2.atkEnemy());
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
    });

});
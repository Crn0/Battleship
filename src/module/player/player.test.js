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

    test("check if the players got their own board", () => {
        expect(player1.board).toEqual(board1);

        expect(player2.board).toEqual(board2);
    });

    test("check if the players got the enemy board", () => {
        expect(player1.enemyBoard).toEqual(board2);

        expect(player2.enemyBoard).toEqual(board1);
    });
});


describe("Player attack", () => {
    const ships = [
        {
            name: "carrier",
            length: 5
        },  
        // {
        //     name: "battleship",
        //     length: 4
        // },  
        // {
        //     name: "cruiser",
        //     length: 3
        // },  
        // {
        //     name: "submarine",
        //     length: 3
        // },  
        // {
        //     name: "destroyer",
        //     length: 5
        // },
    ];
    const createShips = jest.fn(() => {
        for (let i = 0; i < ships.length; i += 1) {
            board1.createShip(ships[i].name, ships[i].length);
            board2.createShip(ships[i].name, ships[i].length);
        };
    });

    beforeEach(() => {
        createShips();
        board1.placeShip(board1.dock[0], 0, 0, "horizontal");
        board2.placeShip(board2.dock[0], 0, 0, "horizontal");
    });
    
    // check if the ships have been created
    test("check if the ships have been created and placed in the board", () => {
        expect(board1.board[0]).toContain(board1.dock[0]);
        expect(board2.board[0]).toContain(board2.dock[0]);
    });

    test("human player attacks computer player", () => {
        const spyAtk = jest.spyOn(board2, "receivedAtk");

        expect(player1.atkEnemy(0, 0)).toBe(true);
        
        // console.log(player1.enemyBoard.shipAttacks[0])
        expect(spyAtk).toBeCalled();
    });

    test("human player cannot attack the same coord twice", () => {
        const spyAtk = jest.spyOn(board2, "receivedAtk");

        expect(player1.atkEnemy(0, 0)).toBe(true);

        expect(player1.atkEnemy(0, 0)).toBe(false);

        
        // console.log(player1.enemyBoard.shipAttacks[0])
        expect(spyAtk).toBeCalled();
    });

    test.skip("computer player attacks human player", () => {
        const spyAtk = jest.spyOn(board1, "receivedAtk");
   
        player2.atkEnemy();
        player2.atkEnemy();
        player2.atkEnemy();

        console.log(spyAtk.mock.results)
        // check if all attacks hit the board
        for(let i = 0; i < spyAtk.mock.calls.length; i += 1) {
            expect(spyAtk.mock.results[i].value).toBe(true)
        }
        expect(spyAtk).toBeCalled();
    });

});

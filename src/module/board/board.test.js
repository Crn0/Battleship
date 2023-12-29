/* eslint-disable no-unused-vars */
import CreateBoard from "./board";

let gameBoard 

let carrier;
let battleship; 
let cruiser;
let submarine;
let destroyer;

beforeEach(() => {
    gameBoard = CreateBoard();
    carrier = gameBoard.createShip("carrier",5);
    battleship = gameBoard.createShip("battleship",4);
    cruiser = gameBoard.createShip("cruiser", 3);
    submarine = gameBoard.createShip("submarine",3);
    destroyer = gameBoard.createShip("destroyer", 2)
});

// ship placement and creation


describe("ship creation", () => {
    test("check if the ships have been created", () => {
        expect(carrier).toMatchObject({name: "carrier", length: 5});
        expect(battleship).toMatchObject({name: "battleship", length: 4});
        expect(cruiser).toMatchObject({name: "cruiser", length: 3});
        expect(submarine).toMatchObject({name: "submarine", length: 3});
        expect(destroyer).toMatchObject({name: "destroyer", length: 2});
        
    });

    test("check if the dock contains the ships", () => {
        expect(gameBoard.dock).toContain(carrier);
        expect(gameBoard.dock).toContain(battleship);
        expect(gameBoard.dock).toContain(cruiser);
        expect(gameBoard.dock).toContain(submarine);
        expect(gameBoard.dock).toContain(destroyer);

    });
});

describe("place ships", () => {
    test("place the ship horizontally", () => {
        expect(gameBoard.placeShip(carrier, 0, 0, "horizontal")).toBe(true);
        
    });

    test("place the ship vertically", () => {
        expect(gameBoard.placeShip(battleship, 1, 0, "vertical")).toBe(true);
    });
    
    test("does not place ship if the position is occupied horizontally", () => {
        expect(gameBoard.placeShip(destroyer, 0, 0, "horizontal")).toBe(true);
        
        expect(gameBoard.placeShip(destroyer, 0, 0, "horizontal")).toBe(false);
     });

    test("does not place ship if the position is occupied vertically", () => {
        expect(gameBoard.placeShip(battleship, 1, 0, "vertical")).toBe(true);

        expect(gameBoard.placeShip(submarine, 1, 0, "vertical")).toBe(false);
     });

    test("does not work if the given position is out of the gameBoard", () => {
        expect(gameBoard.placeShip(carrier, 0, 10, "horizontal")).toBe(false);
    });
    
});

// ship attack

describe("receive attack", () => {
    let place;
    beforeEach(() => {
        place = gameBoard.placeShip(battleship, 0, 0, "horizontal")
    });
  
    test("if the attack hit the ship return true", () => {
        expect(gameBoard.receivedAtk(0, 0)).toBe(true);
        expect(gameBoard.receivedAtk(0, 1)).toBe(true);
        expect(gameBoard.receivedAtk(0, 2)).toBe(true);
        expect(gameBoard.receivedAtk(0, 3)).toBe(true);
    });

    test("if the attack missed return false", () => {
        expect(gameBoard.receivedAtk(1, 0)).toBe(false);
    });

    test("do not attack the same position twice", () => {
        expect(gameBoard.receivedAtk(1, 0)).toBe(false);
    });
});

// ship is all sunk

describe.skip("all ships sunk", () => {
    const attack = jest.fn(() => {
        gameBoard.receivedAtk(0, 0);
        gameBoard.receivedAtk(0, 1);
        gameBoard.receivedAtk(0, 2);
        gameBoard.receivedAtk(0, 3);
        gameBoard.receivedAtk(0, 4);
    });

    beforeEach(() => {
        gameBoard.placeShip(carrier, 0, 0, "horizontal")
    });

    test("all ships not sunk return false", () => {
        expect(gameBoard.shipWrecks()).toBe(false)
    });

    test("all ships sunk return true", () => {
        expect(gameBoard.shipWrecks()).toBe(true)
    });

  
});






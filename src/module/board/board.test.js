/* eslint-disable no-unused-vars */
import CreateBoard from "./board";

const gameBoard = CreateBoard()

const carrier = gameBoard.createShip("carrier",5);
const battleship = gameBoard.createShip("battleship",4);
const cruiser = gameBoard.createShip("cruiser", 3);
const submarine = gameBoard.createShip("submarine",3);
const destroyer = gameBoard.createShip("destroyer", 2)




// ship placement and creation


describe("ship creation", () => {
    test("check if the ships have been created", () => {
        expect(carrier).toMatchObject({name: "carrier", length: 5});
        expect(battleship).toMatchObject({name: "battleship", length: 4});
        expect(cruiser).toMatchObject({name: "cruiser", length: 3});
        expect(submarine).toMatchObject({name: "submarine", length: 3});
        expect(destroyer).toMatchObject({name: "destroyer", length: 2});
        
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
        expect(gameBoard.placeShip(destroyer, 0, 0, "horizontal")).toBe(false);
     });

    test("does not place ship if the position is occupied vertically", () => {
        expect(gameBoard.placeShip(submarine, 1, 0, "vertical")).toBe(false);
     });

    test("does not work if the given position is out of the gameBoard", () => {
        expect(gameBoard.placeShip(carrier, 0, 10, "horizontal")).toBe(false);
    });
    
});

describe.only("receive attack", () => {
    let place;
    beforeEach(() => {
        place = gameBoard.placeShip(carrier, 0, 0, "horizontal")
        
    });
  
    test("if the attack hit the ship return true", () => {
        expect(gameBoard.receivedAtk(0, 0)).toBe(true);
    });

    test("if the attack missed return false", () => {
        expect(gameBoard.receivedAtk(1, 0)).toBe(false);
    });

    test("do not attack the same position twice", () => {
        expect(gameBoard.receivedAtk(1, 0)).toBe(false);
        console.log(gameBoard.board[0])

    });

});









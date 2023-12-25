import CreateShip from "./ship";

let ship;
beforeEach(() => {
    ship = CreateShip("carrier", 5);
  });

test("check ship name", () => {
    expect(ship.name).toBe("carrier");
});  

test("check ship length", () => {
    expect(ship.length).toBe(5);
});  

test("check if the ship has been hit", () => {
    expect(ship.hit()).toBe(true);
});

test("check if the ship has not been sunk", () => {
    expect(ship.isSunk()).not.toBe(true);
});

describe("", () => {

    const hitIt = jest.fn(() => ship.hit());
    beforeEach(() => {
        hitIt();
        hitIt();
        hitIt();
        hitIt();
        hitIt();
    });

    test("check if the ship has been sunk", () => {
  
        expect(ship.isSunk()).toBe(true);
    });
    
});





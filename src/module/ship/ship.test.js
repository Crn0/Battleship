import CreateShip from "./ship";

let ship;
beforeEach(() => {
    ship = CreateShip("carrier", 5);
  });

test("check ship name", () => {
    expect(ship.name).toBe("carrier");
});  

test.skip("check ship length", () => {
    expect(ship.length).toBe(5);
});  

test.skip("check if the ship has been hit", () => {
    expect(ship.hit()).toBe(true);
});

test.skip("check if the ship has not been sunk", () => {
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

    test.skip("check if the ship has been sunk", () => {
  
        expect(ship.isSunk()).toBe(true);
    });
    
});





import CreateShip from "./ship";

let carrier;
let battleship; 
let cruiser;
let submarine;
let destroyer;
beforeEach(() => {
    carrier = CreateShip("carrier",5);
    battleship = CreateShip("battleship",4);
    cruiser = CreateShip("cruiser", 3);
    submarine = CreateShip("submarine",3);
    destroyer = CreateShip("destroyer", 2);
  });


describe("ship creation", () => {
    test("check for carrier it should contain its name and length", () => {
        expect(carrier.name).toMatch("carrier");
        expect(carrier).toHaveLength(5);
    });
    test("check for battleship it should contain its name and length", () => {
        expect(battleship.name).toMatch("battleship");
        expect(battleship).toHaveLength(4);
    });
    test("check for cruiser it should contain its name and length", () => {
        expect(cruiser.name).toMatch("cruiser");
        expect(cruiser).toHaveLength(3);
    });
    test("check for submarine it should contain its name and length", () => {
        expect(submarine.name).toMatch("submarine");
        expect(submarine).toHaveLength(3);
    });
    test("check for destroyer it should contain its name and length", () => {
        expect(destroyer.name).toMatch("destroyer");
        expect(destroyer).toHaveLength(2);
    });

});

describe("ship attack", () => {

    test("carrier will sunk if its been hit 5 times", () => {
        const shipHit = jest.fn(() => {
            let i = 0;
            while(i < carrier.length) {
                carrier.hit();
                i += 1;
            };
        });
        shipHit();
        expect(carrier.isSunk()).toBeTruthy();
    });

    test("battleship will sunk if its been hit 4 times", () => {
        const shipHit = jest.fn(() => {
            let i = 0;
            while(i < battleship.length) {
                battleship.hit();
                i += 1;
            };
        });
        shipHit();
        expect(battleship.isSunk()).toBeTruthy();
    });

    test("cruiser will sunk if its been hit 3 times", () => {
        const shipHit = jest.fn(() => {
            let i = 0;
            while(i < cruiser.length) {
                cruiser.hit();
                i += 1
            };
        });
        shipHit();
        expect(cruiser.isSunk()).toBeTruthy();
    });

    test("submarine will sunk if its been hit 3 times", () => {
        const shipHit = jest.fn(() => {
            let i = 0;
            while(i < submarine.length) {
                submarine.hit();
                i += 1;
            };
        });
        shipHit();
        expect(submarine.isSunk()).toBeTruthy();
    });

    test("destroyer will sunk if its been hit 2 times", () => {
        const shipHit = jest.fn(() => {
            let i = 0
            while(i < destroyer.length) {
                destroyer.hit();
                i += 1;
            };
        });
        shipHit();
        expect(destroyer.isSunk()).toBeTruthy();
    });
    
    test("ships is not sunk", () => {
        const dock = [];
        dock.push(carrier);
        dock.push(battleship);
        dock.push(cruiser);
        dock.push(submarine);
        dock.push(destroyer);

        dock.forEach(ship => expect(ship.isSunk()).toBeFalsy())

    });

});





import { createShip } from "./ship";

const carrier = createShip({ name: "carrier", length: 5 });
const battleship = createShip({ name: "battleship", length: 4 });
const cruiser = createShip({ name: "cruiser", length: 3 });
const submarine = createShip({ name: "submarine", length: 3 });
const destroyer = createShip({ name: "destroyer", length: 2 });

describe("ship creation", () => {
  test("check for carrier it should contain its name and length", () => {
    expect(carrier.name).toMatch("carrier");
    expect(carrier.length).toBe(5);
  });
  test("check for battleship it should contain its name and length", () => {
    expect(battleship.name).toMatch("battleship");
    expect(battleship.length).toBe(4);
  });
  test("check for cruiser it should contain its name and length", () => {
    expect(cruiser.name).toMatch("cruiser");
    expect(cruiser.length).toBe(3);
  });
  test("check for submarine it should contain its name and length", () => {
    expect(submarine.name).toMatch("submarine");
    expect(submarine.length).toBe(3);
  });
  test("check for destroyer it should contain its name and length", () => {
    expect(destroyer.name).toMatch("destroyer");
    expect(destroyer.length).toBe(2);
  });
});

describe("ship attack", () => {
  test("ships is not sunk", () => {
    const dock = [];
    dock.push(carrier);
    dock.push(battleship);
    dock.push(cruiser);
    dock.push(submarine);
    dock.push(destroyer);

    dock.forEach((ship) => expect(ship.isSunk()).toBeFalsy());
  });

  test("carrier will sunk if its been hit 5 times", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < carrier.length) {
        carrier.hit();
        i += 1;
      }
    });
    shipHit();
    expect(carrier.isSunk()).toBeTruthy();
  });

  test("battleship will sunk if its been hit 4 times", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < battleship.length) {
        battleship.hit();
        i += 1;
      }
    });
    shipHit();
    expect(battleship.isSunk()).toBeTruthy();
  });

  test("cruiser will sunk if its been hit 3 times", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < cruiser.length) {
        cruiser.hit();
        i += 1;
      }
    });
    shipHit();
    expect(cruiser.isSunk()).toBeTruthy();
  });

  test("submarine will sunk if its been hit 3 times", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < submarine.length) {
        submarine.hit();
        i += 1;
      }
    });
    shipHit();
    expect(submarine.isSunk()).toBeTruthy();
  });

  test("destroyer will sunk if its been hit 2 times", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < destroyer.length) {
        destroyer.hit();
        i += 1;
      }
    });
    shipHit();
    expect(destroyer.isSunk()).toBeTruthy();
  });
});

describe("reset health", () => {
  test("reset carrier health", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < carrier.length) {
        carrier.hit();
        i += 1;
      }
    });

    shipHit();
    carrier.resetHealth();
    expect(carrier.isSunk()).toBeFalsy();
  });

  test("reset battleship health", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < battleship.length) {
        battleship.hit();
        i += 1;
      }
    });
    shipHit();
    battleship.resetHealth();
    expect(battleship.isSunk()).toBeFalsy();
  });

  test("reset cruiser health", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < cruiser.length) {
        cruiser.hit();
        i += 1;
      }
    });
    shipHit();
    cruiser.resetHealth();
    expect(cruiser.isSunk()).toBeFalsy();
  });

  test("reset submarine health", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < submarine.length) {
        submarine.hit();
        i += 1;
      }
    });
    shipHit();
    submarine.resetHealth();
    expect(submarine.isSunk()).toBeFalsy();
  });

  test("reset destroyer health", () => {
    const shipHit = jest.fn(() => {
      let i = 0;
      while (i < destroyer.length) {
        destroyer.hit();
        i += 1;
      }
    });
    shipHit();
    destroyer.resetHealth();
    expect(destroyer.isSunk()).toBeFalsy();
  });
});

/* eslint-disable no-unused-vars */
import Game from "./game"

let gameLoop
beforeEach(() => {
    gameLoop = Game();
});

describe.skip("Play a game", () => {
   

    test("check if the switch player function is changing players", () => {
        const mockSwitch = jest.fn(() => gameLoop.switchPlayer());
        mockSwitch()
        expect(gameLoop.getActivePlayer().name).toMatch("computer");
        mockSwitch()
        expect(gameLoop.getActivePlayer().name).toMatch("human");
    });
});




import type { IPlayer } from "../player/player";
import { type IGame } from "../game/game";
export declare const domController: () => {
    gameController: IGame;
    domState: void;
    shipPlacement(player: IPlayer, enemyId: string, random?: boolean): void;
};
//# sourceMappingURL=controller.d.ts.map
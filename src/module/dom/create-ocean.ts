import type { TVirtualOcean } from "../board/board.ts";
import type { IPlayer } from "../player/player.ts";

export const createOcean = (player: IPlayer) => {
  const container = document.createElement("div");

  const oceanContainer = document.createElement("div");

  container.setAttribute("id", `${player.id}-container`);

  oceanContainer.setAttribute("id", `${player.id}-ocean`);
  oceanContainer.setAttribute("class", "oceans");

  player.board.virtualOcean
    .flatMap((c) => c)
    .forEach(([row, col]) => {
      const colCell = document.createElement("button");

      colCell.setAttribute("data-row", row.toString());
      colCell.setAttribute("data-col", col.toString());
      colCell.classList.add(`cell-${player.id}`);
      colCell.classList.add("drop-target");

      oceanContainer.appendChild(colCell);
    });

  container.appendChild(oceanContainer);

  return container;
};

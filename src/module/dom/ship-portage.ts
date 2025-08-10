import type { IPlayer } from "../player/player.ts";
import type { TCreateDirection } from "./create-direction.ts";
import { isValidDirection } from "../lib/is-valid-direciton.ts";
import { validPosition } from "../lib/valid-position.ts";
import { createDock } from "./create-dock.ts";
import { showShips } from "./ship-visibility.ts";

export const createShipPlacement =
  (DTO: TCreateDirection) =>
  (player: IPlayer, enemyId: string, random?: boolean) => {
    if (random) {
      player.autoPlaceShips();
      return;
    }

    const controller = new AbortController();

    const { signal, abort } = controller;

    const { directionContainer, startBtn, directionSelect } = DTO;

    startBtn?.addEventListener(
      "click",
      () => {
        startBtn.classList.add("hide-btn");

        const ships = document.querySelectorAll<HTMLElement>(
          `.cell-${enemyId}`,
        );

        ships.forEach((ship) => {
          ship.style.pointerEvents = "auto";
        });
      },
      { signal },
    );

    let dragged: HTMLElement | null = null;

    const { dock, ships } = createDock();

    directionSelect?.addEventListener(
      "click",
      (e) => {
        const classPos = {
          carrier: "carrier-horizontal-height",
          battleship: "battleship-horizontal-height",
          cruiser: "cruiser-submarine-horizontal-height",
          destroyer: "destroyer-horizontal-height",
        };

        const target = e.target as HTMLSelectElement;

        if (target.value === "horizontal") {
          dock.classList.remove("vertical-dock");

          dock.classList.add("horizontal-dock");
        } else {
          dock.classList.add("vertical-dock");

          dock.classList.remove("horizontal-dock");
        }

        const queue = [...ships];

        while (queue.length !== 0) {
          const current = queue[0];

          if (typeof current === "undefined") continue;

          const shipName = current.dataset?.name;

          const pos = shipName
            ? classPos[shipName as keyof typeof classPos]
            : null;

          if (!pos) continue;

          queue.shift();
          current.classList.add(pos);
        }
      },
      { signal },
    );

    dock.addEventListener(
      "dragstart",
      (e) => {
        const parent = <HTMLElement>(<HTMLElement>e.target).parentNode;
        const children = parent.children;

        const target = e.target as HTMLElement;

        const selectedChild = children.namedItem(
          target.dataset.name ?? "",
        ) as HTMLElement;

        if (selectedChild) {
          dragged = selectedChild;
        }
      },
      { signal },
    );

    const targetOcean = document.querySelector(`${player.id}-ocean`);

    if (!targetOcean)
      throw new Error(`player ocean with ID of ${player.id} is not found`);

    targetOcean.addEventListener(
      "dragover",
      (e) => {
        e.preventDefault();
      },
      { signal },
    );

    targetOcean.addEventListener("dragenter", () => {});

    targetOcean.addEventListener("dragleave", () => {});

    targetOcean.addEventListener(
      "drop",
      (e) => {
        if (!dragged) return;

        const target = e.target as HTMLElement;
        const parent = dragged.parentNode;
        const child = dragged;
        const row = Number(target.dataset.row);
        const col = Number(target.dataset.col);
        const index = Number(dragged.dataset.index);

        const ship = player.board.deployedShips[index];

        if (!ship?.isShip()) {
          throw new Error(`Invalid ship: ${dragged.dataset.name}`);
        }

        const direction =
          ["vertical", "horizontal"].find(
            (dir) => dir === directionSelect.value.toLowerCase(),
          ) ?? "";

        if (!isValidDirection(direction)) {
          throw new Error(
            `invalid direction of ${directionSelect.value}; expected either "horizontal" or "vertical"`,
          );
        }

        if (!validPosition(ship, row, col, direction, player.board.ocean))
          return false;

        player.board.placeShip(ship, row, col, direction);

        parent?.removeChild(child);

        if (parent?.children.length === 0) {
          startBtn.classList.remove("hide-btn");
          startBtn.classList.add("show");

          directionContainer.style.display = "none";

          abort("all ships deployed");
        }

        return showShips(player);
      },
      { signal },
    );
  };

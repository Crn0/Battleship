import type { IPlayer } from "../player/player";
import type { TCreateDirection } from "./create-direction";
import { isValidDirection } from "../lib/is-valid-direciton";
import { validPosition } from "../lib/valid-position";
import { createDock } from "./create-dock";
import { showShips } from "./ship-visibility";

export const createShipPlacement =
  (DTO: TCreateDirection) => (player: IPlayer, random?: boolean) => {
    const controller = new AbortController();

    const { signal, abort } = controller;

    const { directionContainer, startBtn, directionSelect } = DTO;

    startBtn?.addEventListener(
      "click",
      () => {
        console.log(player.board.dock);
        if (player.board.dock.length !== 0) return;

        startBtn.classList.add("hide-btn");

        const ships = document.querySelectorAll<HTMLElement>(
          `.cell-${player.id}`,
        );

        ships.forEach((ship) => {
          ship.style.pointerEvents = "auto";
        });
      },
      { signal },
    );

    if (random) {
      player.autoPlaceShips();

      return;
    }

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

          if (!pos) break;

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
          target.id ?? "",
        ) as HTMLElement;

        if (selectedChild) {
          dragged = selectedChild;
        }
      },
      { signal },
    );

    const targetOcean = document.getElementById(`${player.id}-ocean`);

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
        const shipName = dragged.id;
        const shipLen = Number(dragged.dataset.length);

        const ship = player.board.dock.find(
          (ship) => ship.name === shipName && ship.length === shipLen,
        );
        if (!ship?.isShip()) {
          console.log("not a ship", player.board.dock);
          return;
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

        if (!validPosition(ship, row, col, direction, player.board.ocean)) {
          console.log(player.board.ocean[row]?.[col]);
          return false;
        }

        player.board.placeShip(ship, row, col, direction);

        parent?.removeChild(child);

        if (parent?.children.length === 0) {
          startBtn.classList.remove("hide-btn");
          startBtn.classList.add("show");

          directionContainer.style.display = "none";

          // abort("all ships deployed");
        }

        return showShips(player);
      },
      { signal },
    );
  };

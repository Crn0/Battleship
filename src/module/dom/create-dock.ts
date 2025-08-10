import { shipBluePrints } from "../player/data/blueprints.ts";

export const createDock = () => {
  const dock = document.createElement("div");

  dock.classList.add("vertical-dock");

  const ships = shipBluePrints.map(({ name, length }, i) => {
    const ship = document.createElement("div");

    ship.classList.add("vertical-dir");

    ship.setAttribute("data-name", name);
    ship.setAttribute("data-length", length.toString());
    ship.setAttribute("data-index", i.toString());

    ship.draggable = true;

    const btns = Array.from({ length }, () => {
      const btn = document.createElement("button");

      btn.classList.add("shipment");

      return btn;
    });

    ship.append(...btns);

    dock.appendChild(ship);

    return ship;
  });

  return { dock, ships };
};

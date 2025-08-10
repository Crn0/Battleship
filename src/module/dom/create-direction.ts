import type { GetReturnType } from "../../types/get-return-type.ts";

export type TCreateDirection = GetReturnType<typeof createDirection>;

export const createDirection = (parent: HTMLElement) => {
  const directionContainer = document.createElement("div");
  const shipPlacement = document.createElement("div");

  directionContainer.classList.add("direction");
  shipPlacement.classList.add("ship-placement");

  const label = document.createElement("label");
  const startBtn = document.createElement("button");

  startBtn.classList.add("place-ship");

  label.textContent = "Choose a direction:";
  startBtn.textContent = "start";

  const directionSelect = document.createElement("select");

  const values = ["vertical", "horizontal"] as const;

  values.forEach((val) => {
    const option = document.createElement("option");

    option.value = val;

    option.textContent = val;

    directionSelect.appendChild(option);
  });

  label.appendChild(directionSelect);

  directionContainer.appendChild(label);
  shipPlacement.appendChild(startBtn);

  parent.appendChild(directionContainer);
  parent.appendChild(shipPlacement);

  return { directionContainer, shipPlacement, startBtn, directionSelect };
};

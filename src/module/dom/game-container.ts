const root = document.getElementById("root");

if (!root) throw new Error("No root element found");

const gameContainer = document.createElement("div");

gameContainer.setAttribute("id", "game-container");

root.appendChild(gameContainer);

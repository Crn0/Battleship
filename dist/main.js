/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/board/board.js":
/*!***********************************!*\
  !*** ./src/module/board/board.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/module/ship/ship.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/helper */ "./src/module/helper/helper.js");


function GameBoard() {
  const ocean = Array.from({
    length: 10
  }, () => Array(10).fill(false));
  const shipAttacks = Array.from({
    length: 10
  }, () => Array(10).fill(false));
  const dock = [];
  const createShip = (name, length) => {
    const ship = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(name, length);
    dock.push(ship);
    return ship;
  };
  const placeShip = function (vessel, row, col, dir) {
    let oceanBoard = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ocean;
    const board = oceanBoard;
    const ship = vessel;
    if ((0,_helper_helper__WEBPACK_IMPORTED_MODULE_1__["default"])(ship, row, col, dir, board)) {
      for (let i = 0; i < ship.length; i += 1) {
        if (dir === "horizontal") {
          board[row][col + i] = ship;
        }
        ;
        if (dir === "vertical") {
          board[row + i][col] = ship;
        }
        ;
      }
      ;
      return true;
    }
    ;
    return false;
  };
  const receivedAtk = function (row, col) {
    let oceanBoard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ocean;
    const board = oceanBoard;
    if (shipAttacks[row][col] === false && board[row][col] !== false) {
      board[row][col].hit();
      shipAttacks[row][col] = true;
      return true;
    }
    ;
    shipAttacks[row][col] = true;
    return false;
  };
  const shipWrecks = function () {
    let ships = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dock;
    const shipGrave = [];
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].isSunk() === true || ships[i].isSunk() === false) {
        shipGrave.push(ships[i].isSunk());
      }
      ;
    }
    ;
    return shipGrave.every(shipSunk => shipSunk === true);
  };
  return Object.freeze({
    get ocean() {
      return ocean;
    },
    get shipAttacks() {
      return shipAttacks;
    },
    get dock() {
      return dock;
    },
    createShip,
    placeShip,
    receivedAtk,
    shipWrecks
  });
}
;

/***/ }),

/***/ "./src/module/dom/board-player/board-player.js":
/*!*****************************************************!*\
  !*** ./src/module/dom/board-player/board-player.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createGame)
/* harmony export */ });
const createBoard = option => {
  // player container
  const playerOneContainer = document.querySelector(".p1-container");
  const playerTwoContainer = document.querySelector(".p2-container");
  // player board container
  const boardOneContainer = document.querySelector(".human-board");
  const boardTwoContainer = document.querySelector(".computer-board");
  option[0].board.ocean.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const colCell = document.createElement("button");
      colCell.className = "cell";
      colCell.setAttribute("data-row", rowIndex);
      colCell.setAttribute("data-col", colIndex);
      colCell.classList.add("cell-human");
      colCell.classList.add("drop-target");
      boardOneContainer.appendChild(colCell);
    });
    playerOneContainer.appendChild(boardOneContainer);
  });
  option[1].board.ocean.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const colCell = document.createElement("button");
      colCell.className = "cell";
      colCell.setAttribute("data-row", rowIndex);
      colCell.setAttribute("data-col", colIndex);
      colCell.classList.add("cell-computer");
      boardTwoContainer.appendChild(colCell);
    });
    playerTwoContainer.appendChild(boardTwoContainer);
  });
};
function createGame(option, div) {
  // form
  const container = div;
  // const placeShipBtn = button;

  const formContainer = document.querySelector(".form-container");
  const name = document.querySelector("#player-name");
  const start = document.querySelector("#start");
  // player container
  const playerOneContainer = document.querySelector(".p1-container");
  const playerTwoContainer = document.querySelector(".p2-container");
  // name container
  const playerOneNameContainer = document.createElement("div");
  const playerTwoNameContainer = document.createElement("div");
  // name paragraph
  const p1Name = document.createElement("p");
  const p2Name = document.createElement("p");
  // player name class
  p1Name.classList.add("player-name");
  p2Name.classList.add("player-name");
  start.addEventListener("click", e => {
    e.preventDefault();
    const changeName = option[0];
    if (name.value !== "") {
      changeName.name = name.value;
    }
    ;
    p1Name.textContent = `Commander ${option[0].name}`;
    p2Name.textContent = `Commander ${option[1].name}`;
    playerOneNameContainer.appendChild(p1Name);
    playerTwoNameContainer.appendChild(p2Name);
    playerOneContainer.appendChild(playerOneNameContainer);
    playerTwoContainer.appendChild(playerTwoNameContainer);
    container.appendChild(playerOneContainer);
    container.appendChild(playerTwoContainer);
    formContainer.style.display = "none";
    container.style.display = "grid";
    createBoard(option);
    return true;
  });
}
;

/***/ }),

/***/ "./src/module/dom/dom-controller.js":
/*!******************************************!*\
  !*** ./src/module/dom/dom-controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomController)
/* harmony export */ });
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game */ "./src/module/game/game.js");
/* harmony import */ var _board_player_board_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board-player/board-player */ "./src/module/dom/board-player/board-player.js");
/* harmony import */ var _ship_portage_ship_portage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship-portage/ship-portage */ "./src/module/dom/ship-portage/ship-portage.js");
/* harmony import */ var _dom_state_dom_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-state/dom-state */ "./src/module/dom/dom-state/dom-state.js");




function DomController() {
  const container = document.querySelector(".game-container");
  const placeShipBtn = document.querySelector(".place-ship");
  const game = (0,_game_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const createPlayerAndBoard = () => (0,_board_player_board_player__WEBPACK_IMPORTED_MODULE_1__["default"])(game.players, container);
  const placeShip = () => (0,_ship_portage_ship_portage__WEBPACK_IMPORTED_MODULE_2__["default"])(game, placeShipBtn);
  const boardEvent = () => (0,_dom_state_dom_state__WEBPACK_IMPORTED_MODULE_3__["default"])(game);
  return Object.freeze({
    createPlayerAndBoard,
    placeShip,
    boardEvent
  });
}
;

/***/ }),

/***/ "./src/module/dom/dom-state/dom-state.js":
/*!***********************************************!*\
  !*** ./src/module/dom/dom-state/dom-state.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomState)
/* harmony export */ });
const gameOver = option => {
  const winContainer = document.querySelector(".winner");
  const board = document.querySelector(".computer-board");
  if (!option.isSunkAll()) return false;
  const p = document.createElement("p");
  let winner;
  winner = option.getActivePlayer().name === option.players[0].name ? winner = option.players[1].name : winner = option.players[0].name;
  p.textContent = `Winner: ${winner}`;
  board.childNodes.forEach(child => {
    const node = child;
    node.style.pointerEvents = "none";
  });
  board.style.pointerEvents = "none";
  winContainer.appendChild(p);
  return true;
};
const updateScreen = option => {
  // human board
  option[0].board.shipAttacks.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
    if (col !== false) {
      const cell = document.querySelector(`.cell-human[data-row="${rowIndex}"][data-col="${colIndex}"]`);
      if (!cell.classList.contains("hit") && !cell.classList.contains("ship")) {
        cell.textContent = "miss";
        cell.classList.add("hit");
      }
      ;
      if (cell.classList.contains("ship")) {
        cell.textContent = "hit";
        cell.classList.add("sink");
      }
      ;
    }
    ;
    return false;
  }));

  // computer board
  option[1].board.shipAttacks.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
    if (col === true) {
      const cell = document.querySelector(`.cell-computer[data-row="${rowIndex}"][data-col="${colIndex}"]`);
      if (!cell.classList.contains("hit") && !cell.classList.contains("ship-computer")) {
        cell.classList.add("hit");
        cell.textContent = "miss";
      }
      ;
      if (cell.classList.contains("ship-computer")) {
        cell.textContent = "sink";
        cell.classList.add("sink");
      }
      ;
    }
    ;
    return false;
  }));
};
const playLogic = async (e, option) => {
  const {
    row
  } = e.target.dataset;
  const {
    col
  } = e.target.dataset;

  // let playerCreationDon = false;
  try {
    if (option.isSunkAll()) return gameOver(option);
    if (row !== undefined && col !== undefined) {
      if (e.target.classList.contains("hit") || e.target.classList.contains("boards")) {
        // errorMessage.textContent = "";
        return false;
      }
      ;
      const parent = e.target.parentNode;
      const children = parent.childNodes;
      // disable pointer
      children.forEach(val => {
        const child = val;
        child.style.pointerEvents = "none";
      });
      await option.humanInput(+row, +col);
      await option.computerInput().then(() => {
        // updateScreen(option.players);
        // enable pointer
        children.forEach(val => {
          const child = val;
          child.style.pointerEvents = "auto";
        });
      });
      await updateScreen(option.players);
      return option;
    }
    ;
    const error = Error("you clicked the board frame");
    throw error;
  } catch (error) {
    return error;
  }
  ;
};
function DomState(option) {
  const board = document.querySelector(".computer-board");
  board.addEventListener("click", e => {
    playLogic(e, option);
  });
  return true;
}
;

/***/ }),

/***/ "./src/module/dom/ship-portage/ship-portage.js":
/*!*****************************************************!*\
  !*** ./src/module/dom/ship-portage/ship-portage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeShip)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/helper */ "./src/module/helper/helper.js");

const renderShips = option => {
  option[0].board.ocean.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const ship = document.querySelector(`.cell-human[data-row="${rowIndex}"][data-col="${colIndex}"]`);
      if (col !== false) {
        ship.classList.add("ship");
      }
      ;
    });
  });
  option[1].board.ocean.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const ship = document.querySelector(`.cell-computer[data-row="${rowIndex}"][data-col="${colIndex}"]`);
      if (col !== false) {
        ship.classList.add("ship-computer");
      }
      ;
    });
  });
};
function placeShip(option, button) {
  const direction = document.querySelector(".direction");
  const placeShipBtn = button;
  const start = document.querySelector(".place-ship");
  const posAvailable = (ship, row, col, dir, board) => (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__["default"])().posAvailable(ship, row, col, dir, board);
  placeShipBtn.addEventListener("click", () => {
    placeShipBtn.style.display = "none";
    const ships = document.querySelectorAll(".cell-computer");
    ships.forEach(val => {
      const ship = val;
      ship.style.pointerEvents = "auto";
    });
    // place computer ship;
    option.players[1].placeShip();
    renderShips(option.players);
  });
  let dragged = null;
  const source = document.querySelector(".dock");
  const dir = document.querySelector("#dir-select");
  dir.addEventListener("click", e => {
    const parent = document.querySelector(".dock");
    const child = parent.children;
    const horizontalPos = ["carrier-horizontal-height", "battleship-horizontal-height", "cruiser-submarine-horizontal-height", "destroyer-horizontal-height"];
    if (e.target.value === "horizontal") {
      parent.classList.remove("vertical-dock");
      parent.classList.add("horizontal-dock");
      const queue = [...child];
      while (queue.length !== 0) {
        const current = queue[0];
        if (current.dataset.name === "carrier") {
          queue.shift();
          current.classList.add(horizontalPos[0]);
        }
        ;
        if (current.dataset.name === "battleship") {
          queue.shift();
          current.classList.add(horizontalPos[1]);
        }
        ;
        if (current.dataset.name === "cruiser" || current.dataset.name === "submarine") {
          queue.shift();
          current.classList.add(horizontalPos[2]);
        }
        ;
        if (current.dataset.name === "destroyer") {
          queue.shift();
          current.classList.add(horizontalPos[3]);
        }
        ;
      }
      ;
      return true;
    }
    ;
    if (e.target.value === "vertical") {
      parent.classList.add("vertical-dock");
      parent.classList.remove("horizontal-dock");
      const queue = [...child];
      while (queue.length !== 0) {
        const current = queue[0];
        if (current.dataset.name === "carrier") {
          queue.shift();
          current.classList.remove(horizontalPos[0]);
        }
        ;
        if (current.dataset.name === "battleship") {
          queue.shift();
          current.classList.remove(horizontalPos[1]);
        }
        ;
        if (current.dataset.name === "cruiser" || current.dataset.name === "submarine") {
          queue.shift();
          current.classList.remove(horizontalPos[2]);
        }
        ;
        if (current.dataset.name === "destroyer") {
          queue.shift();
          current.classList.remove(horizontalPos[3]);
        }
        ;
      }
      ;
      return true;
    }
    ;
    return false;
  });
  source.addEventListener("dragstart", e => {
    const parent = e.target.parentNode;
    const children = parent.childNodes;
    const selectedChild = Array.from(children).filter(val => {
      if (typeof val.classList !== "undefined") {
        return val.dataset.name === e.target.dataset.name;
      }
      ;
      return false;
    });
    dragged = selectedChild;
  });
  const target = document.querySelector(".human-board");
  target.addEventListener("dragover", e => {
    // prevent default to allow drop
    e.preventDefault();
  }, false);
  target.addEventListener("dragenter", () => {});
  target.addEventListener("dragleave", () => {});
  target.addEventListener("drop", e => {
    const parent = dragged[0].parentNode;
    const child = dragged[0];
    const {
      row
    } = e.target.dataset;
    const {
      col
    } = e.target.dataset;
    const {
      index
    } = dragged[0].dataset;
    const ship = option.players[0].dock[+index];
    if (!posAvailable(ship, +row, +col, dir.value, option.players[0].board.ocean)) return false;
    option.players[0].placeShip(ship, +row, +col, dir.value);
    parent.removeChild(child);
    if (parent.children.length === 0) {
      start.classList.remove("hide-btn");
      start.classList.add("show");
      direction.style.display = "none";
    }
    ;
    return renderShips(option.players);
  });
}
;

/***/ }),

/***/ "./src/module/game/game.js":
/*!*********************************!*\
  !*** ./src/module/game/game.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _board_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board/board */ "./src/module/board/board.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player */ "./src/module/player/player.js");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper */ "./src/module/helper/helper.js");



function Game() {
  let isGameStarted = false;
  let currentPlayer;
  const players = [];
  const boards = [];
  const wait = ms => (0,_helper_helper__WEBPACK_IMPORTED_MODULE_2__["default"])().wait(ms);

  // initialized boards and players
  if (isGameStarted === false) {
    boards.push((0,_board_board__WEBPACK_IMPORTED_MODULE_0__["default"])());
    boards.push((0,_board_board__WEBPACK_IMPORTED_MODULE_0__["default"])());
    players.push((0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])("human", boards[0], boards[1]));
    players.push((0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])("computer", boards[1], boards[0], true));
    players[0].createAllShips();
    players[1].createAllShips();
    currentPlayer = {
      ...players[0]
    };
    isGameStarted = true;
  }
  ;
  const getActivePlayer = () => currentPlayer;
  const isSunkAll = function () {
    let player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActivePlayer();
    return player.board.shipWrecks();
  };
  const switchPlayer = () => {
    if (currentPlayer.name === players[0].name) {
      currentPlayer = {
        ...players[1]
      };
      return currentPlayer;
    }
    ;
    currentPlayer = {
      ...players[0]
    };
    return currentPlayer;
  };
  const humanInput = async (row, col) => {
    await wait(1);
    players[0].atkEnemy(row, col);
    switchPlayer();
    return true;
  };
  const computerInput = async () => {
    if (isSunkAll()) return false;
    await wait(1);
    players[1].atkEnemy();
    switchPlayer();
    return true;
  };
  return Object.freeze({
    get players() {
      return players;
    },
    getActivePlayer,
    switchPlayer,
    isSunkAll,
    humanInput,
    computerInput
  });
}
;

/***/ }),

/***/ "./src/module/helper/helper.js":
/*!*************************************!*\
  !*** ./src/module/helper/helper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helper)
/* harmony export */ });
function Helper() {
  const posAvailable = (ship, row, col, dir, board) => {
    const array = [];
    for (let i = 0; i < ship.length; i += 1) {
      if (dir === "horizontal") {
        if (col + i > 9) return false;
        array.push(board[row][col + i]);
      }
      ;
      if (dir === "vertical") {
        if (row + i > 9) return false;
        array.push(board[row + i][col]);
      }
      ;
    }
    ;
    return array.every(cell => cell === false);
  };
  const wait = ms => new Promise(resolve => {
    setTimeout(resolve, ms);
  });
  const legalMoves = ocean => {
    const legalAttacks = [];
    ocean.shipAttacks.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        legalAttacks.push([rowIndex, colIndex]);
      });
    });
    return legalAttacks;
  };
  return {
    posAvailable,
    wait,
    legalMoves
  };
}
;

/***/ }),

/***/ "./src/module/player/player.js":
/*!*************************************!*\
  !*** ./src/module/player/player.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/helper */ "./src/module/helper/helper.js");

function Player(name, board, enemyBoard) {
  let isComputer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const isAi = isComputer;
  let playerName = name;
  const ocean = board;
  const helper = (0,_helper_helper__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const legalAttacks = helper.legalMoves(ocean);
  const shipBluePrints = [{
    name: "carrier",
    length: 5
  }, {
    name: "battleship",
    length: 4
  }, {
    name: "cruiser",
    length: 3
  }, {
    name: "submarine",
    length: 3
  }, {
    name: "destroyer",
    length: 2
  }];
  const {
    dock
  } = ocean;
  const createAllShips = () => {
    for (let i = 0; i < shipBluePrints.length; i += 1) {
      ocean.createShip(shipBluePrints[i].name, shipBluePrints[i].length);
    }
    ;
    return true;
  };
  const placeShip = (ship, row, col, dir) => {
    if (isAi) {
      const queue = [...ocean.dock];
      while (queue.length !== 0) {
        const currentShip = queue[0];
        const randomRow = Math.floor(Math.random() * 9);
        const randomCol = Math.floor(Math.random() * 9);
        const direction = ["horizontal", "vertical"];
        const randomDir = Math.floor(Math.random() * direction.length);
        if (helper.posAvailable(currentShip, randomRow, randomCol, direction[randomDir], ocean.ocean)) {
          ocean.placeShip(currentShip, randomRow, randomCol, direction[randomDir]);
          queue.shift();
        }
        ;
      }
      ;
      return true;
    }
    ;
    return ocean.placeShip(ship, row, col, dir);
  };
  const atkEnemy = (row, col) => {
    if (Number.isInteger(row) && Number.isInteger(col) && enemyBoard.shipAttacks[row][col] === true) return false;
    if (isAi) {
      const availableIndex = legalAttacks.filter(val => enemyBoard.shipAttacks[val[0]][val[1]] !== true);
      const choice = availableIndex[Math.floor(Math.random() * availableIndex.length)];
      enemyBoard.receivedAtk(choice[0], choice[1]);
      return true;
    }
    ;
    enemyBoard.receivedAtk(row, col);
    return true;
  };
  return Object.freeze({
    get name() {
      return playerName;
    },
    set name(val) {
      playerName = val;
    },
    get board() {
      return ocean;
    },
    get dock() {
      return dock;
    },
    atkEnemy,
    createAllShips,
    placeShip
  });
}
;

/***/ }),

/***/ "./src/module/ship/ship.js":
/*!*********************************!*\
  !*** ./src/module/ship/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(name, length) {
  let health = 0;
  const hit = () => {
    health += 1;
    return true;
  };
  const resetHealth = () => {
    health = 0;
    return health;
  };
  const isSunk = () => {
    if (health === length) return true;
    return false;
  };
  return Object.freeze({
    get name() {
      return name;
    },
    get length() {
      return length;
    },
    hit,
    resetHealth,
    isSunk
  });
}
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
}


.form-container {
    display: grid;
    place-content: center;
    justify-content: center;
    margin-top: 20px;
}

form {
    height: 250px;
    margin: 10px;
    padding: 10px;
    display: grid;
    place-items: center;
    text-align: center;
}

form > button, .place-ship {
    width: 4rem;
    height: 2rem;
    background-color: white;
    color: black;
    border: 1px solid red;
}

form > button:hover, .place-ship:hover {
    background-color: red;
    color: white;
} 

.game-container {
   display: none;
   grid-template-columns: 1fr 1fr 1fr;
   place-content: center;
   place-items: center;
   margin-top: 10px;
   
}


.p1-container {
    grid-column: 1;
}

.announcement {
    grid-column: 2;
}

.p2-container {
    grid-column: 3;
}

.p1-container, .p2-container {
    display: grid;
    gap: 10px;
}

.boards {
    display: grid;
    width: 500px;
    height: 500px;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}

.ship-placement{
    display: flex;
    justify-content: center;
    gap: 10px;
}

.vertical-dock {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100px;
    gap: 10px;
}

.horizontal-dock {
    display: grid;
    gap: 10px;
}

/* .vertical-dock {
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px, 150px));
    width: 50px;
} */

.battleship-vertical-height {
    height: 199px;
   
}

.cruiser-submarine-vertical-height {
    height: 150px;
   
}

.destroyer-vertical-height {
    height: 100px;
}

/*  */
.carrier-horizontal-height {
    display: flex;
    width: auto;
    height: 50px;
    gap: 1.5px;
}

.battleship-horizontal-height {
    display: flex;
    width: 190px;
    height: 50px;
    gap: 1.5px;
}

.cruiser-submarine-horizontal-height {
    display: flex;
    width: 150px;
    height: 50px;
    gap: 1.5px;
}

.destroyer-horizontal-height {
    display: flex;
    width: 100px;
    height: 50px;
    gap: 1.5px;
}


.shipment {
    height: 50px;
    width: 50px;
    border: 1px solid black;
    background: blue;
}

.shipment-valid {
    background-color: green;
}

.shipment-invalid {
    background-color: red;
}


.cell-computer {
    pointer-events: none
}

.cell-human, .cell-computer  {
    /* background-color: aliceblue; */
    background: thistle;
    border: 1px solid white;
}

.hide-btn, .create-ship {
    display: none;
}

.ship {
    background-color: blue;
}

.hit {
    background-color: blanchedalmond;
}

.sink {
    background-color: red;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;GACG,aAAa;GACb,kCAAkC;GAClC,qBAAqB;GACrB,mBAAmB;GACnB,gBAAgB;;AAEnB;;;AAGA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2DAA2D;AAC/D;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;;;GAKG;;AAEH;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;AACjB;;AAEA,KAAK;AACL;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI;AACJ;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n}\n\n\n.form-container {\n    display: grid;\n    place-content: center;\n    justify-content: center;\n    margin-top: 20px;\n}\n\nform {\n    height: 250px;\n    margin: 10px;\n    padding: 10px;\n    display: grid;\n    place-items: center;\n    text-align: center;\n}\n\nform > button, .place-ship {\n    width: 4rem;\n    height: 2rem;\n    background-color: white;\n    color: black;\n    border: 1px solid red;\n}\n\nform > button:hover, .place-ship:hover {\n    background-color: red;\n    color: white;\n} \n\n.game-container {\n   display: none;\n   grid-template-columns: 1fr 1fr 1fr;\n   place-content: center;\n   place-items: center;\n   margin-top: 10px;\n   \n}\n\n\n.p1-container {\n    grid-column: 1;\n}\n\n.announcement {\n    grid-column: 2;\n}\n\n.p2-container {\n    grid-column: 3;\n}\n\n.p1-container, .p2-container {\n    display: grid;\n    gap: 10px;\n}\n\n.boards {\n    display: grid;\n    width: 500px;\n    height: 500px;\n    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n}\n\n.ship-placement{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.vertical-dock {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    width: 100px;\n    gap: 10px;\n}\n\n.horizontal-dock {\n    display: grid;\n    gap: 10px;\n}\n\n/* .vertical-dock {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(100px, 150px));\n    width: 50px;\n} */\n\n.battleship-vertical-height {\n    height: 199px;\n   \n}\n\n.cruiser-submarine-vertical-height {\n    height: 150px;\n   \n}\n\n.destroyer-vertical-height {\n    height: 100px;\n}\n\n/*  */\n.carrier-horizontal-height {\n    display: flex;\n    width: auto;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.battleship-horizontal-height {\n    display: flex;\n    width: 190px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.cruiser-submarine-horizontal-height {\n    display: flex;\n    width: 150px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.destroyer-horizontal-height {\n    display: flex;\n    width: 100px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n\n.shipment {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n    background: blue;\n}\n\n.shipment-valid {\n    background-color: green;\n}\n\n.shipment-invalid {\n    background-color: red;\n}\n\n\n.cell-computer {\n    pointer-events: none\n}\n\n.cell-human, .cell-computer  {\n    /* background-color: aliceblue; */\n    background: thistle;\n    border: 1px solid white;\n}\n\n.hide-btn, .create-ship {\n    display: none;\n}\n\n.ship {\n    background-color: blue;\n}\n\n.hit {\n    background-color: blanchedalmond;\n}\n\n.sink {\n    background-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_dom_dom_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/dom/dom-controller */ "./src/module/dom/dom-controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const dom = (0,_module_dom_dom_controller__WEBPACK_IMPORTED_MODULE_0__["default"])();
dom.createPlayerAndBoard();
dom.placeShip();
dom.boardEvent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sU0FBUyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFB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OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXVEO0FBRWxDO0FBRXJCLE1BQU0rSCxHQUFHLEdBQUdwRixzRUFBYSxDQUFDLENBQUM7QUFDM0JvRixHQUFHLENBQUNqRixvQkFBb0IsQ0FBQyxDQUFDO0FBQzFCaUYsR0FBRyxDQUFDOUksU0FBUyxDQUFDLENBQUM7QUFDZjhJLEdBQUcsQ0FBQy9FLFVBQVUsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9ib2FyZC9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vYm9hcmQtcGxheWVyL2JvYXJkLXBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vZG9tLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2RvbS1zdGF0ZS9kb20tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL3NoaXAtcG9ydGFnZS9zaGlwLXBvcnRhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcbmltcG9ydCBwb3NBdmFpbGFibGUgZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IG9jZWFuID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMH0sICgpID0+IEFycmF5KDEwKS5maWxsKGZhbHNlKSk7XG5cbiAgICBjb25zdCBzaGlwQXR0YWNrcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChmYWxzZSkpO1xuXG4gICAgY29uc3QgZG9jayA9IFtdO1xuXG4gICAgY29uc3QgY3JlYXRlU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobmFtZSwgbGVuZ3RoKTtcblxuICAgICAgICBkb2NrLnB1c2goc2hpcClcblxuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9OyBcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh2ZXNzZWwsIHJvdywgY29sLCBkaXIsIG9jZWFuQm9hcmQgPSBvY2VhbikgPT4ge1xuICAgICAgICBjb25zdCBib2FyZCA9IG9jZWFuQm9hcmQ7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB2ZXNzZWxcblxuICAgICAgICBpZihwb3NBdmFpbGFibGUoc2hpcCwgcm93LCBjb2wsIGRpciwgYm9hcmQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZihkaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZihkaXIgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtyb3cgKyBpXVtjb2xdID0gc2hpcDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZWRBdGsgPSAocm93LCBjb2wsIG9jZWFuQm9hcmQgPSBvY2VhbikgPT4ge1xuICAgICAgICBjb25zdCBib2FyZCA9IG9jZWFuQm9hcmQ7XG4gICAgICAgIFxuICAgICAgICBpZihzaGlwQXR0YWNrc1tyb3ddW2NvbF0gPT09IGZhbHNlICYmIGJvYXJkW3Jvd11bY29sXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgICAgICAgIHNoaXBBdHRhY2tzW3Jvd11bY29sXSA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICBcbiAgICAgICAgc2hpcEF0dGFja3Nbcm93XVtjb2xdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBzaGlwV3JlY2tzID0gKHNoaXBzID0gZG9jaykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwR3JhdmUgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZihzaGlwc1tpXS5pc1N1bmsoKSA9PT0gdHJ1ZSB8fCBzaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzaGlwR3JhdmUucHVzaChzaGlwc1tpXS5pc1N1bmsoKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2hpcEdyYXZlLmV2ZXJ5KHNoaXBTdW5rID0+IHNoaXBTdW5rID09PSB0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgb2NlYW4oKSB7IHJldHVybiBvY2Vhbn0sXG4gICAgICAgIGdldCBzaGlwQXR0YWNrcygpIHsgcmV0dXJuIHNoaXBBdHRhY2tzfSxcbiAgICAgICAgZ2V0IGRvY2soKSB7IHJldHVybiBkb2NrfSxcbiAgICAgICAgY3JlYXRlU2hpcCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlZEF0ayxcbiAgICAgICAgc2hpcFdyZWNrcyxcbiAgICB9KTtcbn07IiwiY29uc3QgY3JlYXRlQm9hcmQgPSAob3B0aW9uKSA9PiB7XG4gICAgLy8gcGxheWVyIGNvbnRhaW5lclxuICAgIGNvbnN0IHBsYXllck9uZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBsYXllclR3b0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDItY29udGFpbmVyXCIpO1xuICAgIC8vIHBsYXllciBib2FyZCBjb250YWluZXJcbiAgICBjb25zdCBib2FyZE9uZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtYW4tYm9hcmRcIik7XG4gICAgY29uc3QgYm9hcmRUd29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuXG4gICAgb3B0aW9uWzBdLmJvYXJkLm9jZWFuLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICAgICAgICBjb2xDZWxsLmNsYXNzTmFtZSA9IFwiY2VsbFwiO1xuICAgICAgICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCByb3dJbmRleCk7XG4gICAgICAgICAgICBjb2xDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbEluZGV4KTtcbiAgICAgICAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtaHVtYW5cIik7XG4gICAgICAgICAgICBjb2xDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcm9wLXRhcmdldFwiKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGJvYXJkT25lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbENlbGwpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYXllck9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZE9uZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgXG4gICAgb3B0aW9uWzFdLmJvYXJkLm9jZWFuLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY29sQ2VsbC5jbGFzc05hbWUgPSBcImNlbGxcIjtcblxuICAgICAgICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCByb3dJbmRleCk7XG4gICAgICAgICAgICBjb2xDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbEluZGV4KTtcbiAgICAgICAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtY29tcHV0ZXJcIik7XG4gICAgICAgIFxuICAgICAgICAgICAgYm9hcmRUd29Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sQ2VsbClcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgcGxheWVyVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkVHdvQ29udGFpbmVyKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUdhbWUob3B0aW9uLCBkaXYpIHtcbiAgICAvLyBmb3JtXG4gICAgY29uc3QgY29udGFpbmVyID0gZGl2O1xuICAgIC8vIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGJ1dHRvbjtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1uYW1lXCIpO1xuICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydFwiKTtcbiAgICAvLyBwbGF5ZXIgY29udGFpbmVyXG4gICAgY29uc3QgcGxheWVyT25lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMS1jb250YWluZXJcIik7XG4gICAgY29uc3QgcGxheWVyVHdvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMi1jb250YWluZXJcIik7XG4gICAgLy8gbmFtZSBjb250YWluZXJcbiAgICBjb25zdCBwbGF5ZXJPbmVOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29OYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBuYW1lIHBhcmFncmFwaFxuICAgIGNvbnN0IHAxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHAyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIHBsYXllciBuYW1lIGNsYXNzXG4gICAgcDFOYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItbmFtZVwiKTtcbiAgICBwMk5hbWUuY2xhc3NMaXN0LmFkZChcInBsYXllci1uYW1lXCIpXG5cbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjaGFuZ2VOYW1lID0gb3B0aW9uWzBdO1xuICAgIFxuICAgICAgICBpZihuYW1lLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBjaGFuZ2VOYW1lLm5hbWUgPSBuYW1lLnZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcDFOYW1lLnRleHRDb250ZW50ID0gYENvbW1hbmRlciAke29wdGlvblswXS5uYW1lfWA7XG4gICAgICAgIHAyTmFtZS50ZXh0Q29udGVudCA9IGBDb21tYW5kZXIgJHtvcHRpb25bMV0ubmFtZX1gO1xuXG4gICAgICAgIHBsYXllck9uZU5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocDFOYW1lKTtcbiAgICAgICAgcGxheWVyVHdvTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwMk5hbWUpO1xuXG4gICAgICAgIHBsYXllck9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVOYW1lQ29udGFpbmVyKTtcblxuICAgICAgICBwbGF5ZXJUd29Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvTmFtZUNvbnRhaW5lcilcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0NvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUJvYXJkKG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIFxuICAgIFxufTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vZ2FtZS9nYW1lXCI7XG5pbXBvcnQgY3JlYXRlR2FtZSBmcm9tIFwiLi9ib2FyZC1wbGF5ZXIvYm9hcmQtcGxheWVyXCI7XG5pbXBvcnQgUG9ydGFnZSBmcm9tIFwiLi9zaGlwLXBvcnRhZ2Uvc2hpcC1wb3J0YWdlXCJcbmltcG9ydCBEb21TdGF0ZSBmcm9tIFwiLi9kb20tc3RhdGUvZG9tLXN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbUNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXBcIik7XG5cbiAgICBjb25zdCBnYW1lID0gR2FtZSgpOyAgIFxuXG4gICAgY29uc3QgY3JlYXRlUGxheWVyQW5kQm9hcmQgPSAoKSA9PiBjcmVhdGVHYW1lKGdhbWUucGxheWVycywgY29udGFpbmVyKVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKCkgPT4gUG9ydGFnZShnYW1lLCBwbGFjZVNoaXBCdG4pO1xuXG4gICAgY29uc3QgYm9hcmRFdmVudCA9ICgpID0+IERvbVN0YXRlKGdhbWUpXG4gICAgXG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGNyZWF0ZVBsYXllckFuZEJvYXJkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGJvYXJkRXZlbnQsXG4gICAgfSk7XG59OyIsImNvbnN0IGdhbWVPdmVyID0gKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IHdpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcbiAgICBpZighb3B0aW9uLmlzU3Vua0FsbCgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgXG4gICAgbGV0IHdpbm5lcjtcbiAgICB3aW5uZXIgPSBvcHRpb24uZ2V0QWN0aXZlUGxheWVyKCkubmFtZSA9PT0gb3B0aW9uLnBsYXllcnNbMF0ubmFtZSA/IHdpbm5lciA9IG9wdGlvbi5wbGF5ZXJzWzFdLm5hbWUgOiB3aW5uZXIgPSBvcHRpb24ucGxheWVyc1swXS5uYW1lO1xuICAgIHAudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3dpbm5lcn1gO1xuXG4gICAgYm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gY2hpbGRcbiAgICAgICAgbm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCJcbiAgICB9KVxuICAgIGJvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuICAgIHdpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwKVxuICAgIHJldHVybiB0cnVlO1xufTsgXG5cbmNvbnN0IHVwZGF0ZVNjcmVlbiA9IChvcHRpb24pID0+IHtcbiAgICAvLyBodW1hbiBib2FyZFxuICAgIG9wdGlvblswXS5ib2FyZC5zaGlwQXR0YWNrcy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBpZihjb2wgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtaHVtYW5bZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYClcbiAgICAgICAgICAgIGlmKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwibWlzc1wiO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcImhpdFwiO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNpbmtcIik7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkpOyBcblxuICAgIC8vIGNvbXB1dGVyIGJvYXJkXG4gICAgb3B0aW9uWzFdLmJvYXJkLnNoaXBBdHRhY2tzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIGlmKGNvbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbXB1dGVyW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApXG4gICAgICAgICAgICBpZighY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1jb21wdXRlclwiKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJtaXNzXCI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZihjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtY29tcHV0ZXJcIikpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJzaW5rXCI7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2lua1wiKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSk7IFxuXG4gICAgXG59O1xuXG5jb25zdCBwbGF5TG9naWMgPSBhc3luYyAoZSxvcHRpb24pID0+IHtcbiAgICBjb25zdCB7cm93fSA9IGUudGFyZ2V0LmRhdGFzZXRcbiAgICBjb25zdCB7Y29sfSA9IGUudGFyZ2V0LmRhdGFzZXRcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBwbGF5ZXJDcmVhdGlvbkRvbiA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGlmKG9wdGlvbi5pc1N1bmtBbGwoKSkgcmV0dXJuIGdhbWVPdmVyKG9wdGlvbik7XG5cbiAgICAgICAgaWYocm93ICE9PSB1bmRlZmluZWQgJiYgY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZHNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZSBwb2ludGVyXG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHZhbDtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IG9wdGlvbi5odW1hbklucHV0KCtyb3csICtjb2wpXG5cbiAgICAgICAgICAgIGF3YWl0IG9wdGlvbi5jb21wdXRlcklucHV0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlU2NyZWVuKG9wdGlvbi5wbGF5ZXJzKTtcbiAgICAgICAgICAgICAgICAvLyBlbmFibGUgcG9pbnRlclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZVNjcmVlbihvcHRpb24ucGxheWVycyk7XG4gICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlcnJvciA9IEVycm9yKFwieW91IGNsaWNrZWQgdGhlIGJvYXJkIGZyYW1lXCIpO1xuICAgICAgICB0aHJvdyhlcnJvcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBlcnJvcjsgXG4gICAgICAgIH07XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9tU3RhdGUob3B0aW9uKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHBsYXlMb2dpYyhlLCBvcHRpb24pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJpbXBvcnQgSGVscGVyIGZyb20gXCIuLi8uLi9oZWxwZXIvaGVscGVyXCI7XG5cbmNvbnN0IHJlbmRlclNoaXBzID0gKG9wdGlvbikgPT4ge1xuICAgIG9wdGlvblswXS5ib2FyZC5vY2Vhbi5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtaHVtYW5bZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICBpZihjb2wgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICAgIG9wdGlvblsxXS5ib2FyZC5vY2Vhbi5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29tcHV0ZXJbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICBpZihjb2wgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcC1jb21wdXRlclwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGFjZVNoaXAob3B0aW9uLCBidXR0b24pIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpcmVjdGlvblwiKTtcbiAgICBjb25zdCBwbGFjZVNoaXBCdG4gPSBidXR0b247XG4gICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXBcIik7XG5cbiAgICBjb25zdCBwb3NBdmFpbGFibGUgPSAoc2hpcCwgcm93LCBjb2wsIGRpciwgYm9hcmQpID0+IEhlbHBlcigpLnBvc0F2YWlsYWJsZShzaGlwLCByb3csIGNvbCwgZGlyLCBib2FyZClcbiAgICBwbGFjZVNoaXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHBsYWNlU2hpcEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICBcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGwtY29tcHV0ZXJcIik7XG4gICAgICAgIHNoaXBzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB2YWw7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHBsYWNlIGNvbXB1dGVyIHNoaXA7XG4gICAgICAgIG9wdGlvbi5wbGF5ZXJzWzFdLnBsYWNlU2hpcCgpXG4gICAgICAgIHJlbmRlclNoaXBzKG9wdGlvbi5wbGF5ZXJzKVxuICAgIH0pO1xuXG4gICAgbGV0IGRyYWdnZWQgPSBudWxsOyAgICBcbiAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvY2tcIik7XG4gICAgY29uc3QgZGlyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXItc2VsZWN0XCIpXG5cbiAgICBkaXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9ja1wiKTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBwYXJlbnQuY2hpbGRyZW5cblxuICAgICAgICBjb25zdCBob3Jpem9udGFsUG9zID0gW1xuICAgICAgICAgICAgXCJjYXJyaWVyLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgICAgICBcImJhdHRsZXNoaXAtaG9yaXpvbnRhbC1oZWlnaHRcIixcbiAgICAgICAgICAgIFwiY3J1aXNlci1zdWJtYXJpbmUtaG9yaXpvbnRhbC1oZWlnaHRcIixcbiAgICAgICAgICAgIFwiZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0XCJcbiAgICAgICAgXTtcbiAgIFxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInZlcnRpY2FsLWRvY2tcIik7XG5cbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbC1kb2NrXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWV1ZSA9IFsuLi5jaGlsZF1cblxuICAgICAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHF1ZXVlWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhc2V0Lm5hbWUgPT09IFwiY2FycmllclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZChob3Jpem9udGFsUG9zWzBdKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmRhdGFzZXQubmFtZSA9PT0gXCJiYXR0bGVzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKGhvcml6b250YWxQb3NbMV0pXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGF0YXNldC5uYW1lID09PSBcImNydWlzZXJcIiB8fCBjdXJyZW50LmRhdGFzZXQubmFtZSA9PT0gXCJzdWJtYXJpbmVcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoaG9yaXpvbnRhbFBvc1syXSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhc2V0Lm5hbWUgPT09IFwiZGVzdHJveWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKGhvcml6b250YWxQb3NbM10pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbC1kb2NrXCIpO1xuXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhvcml6b250YWwtZG9ja1wiKTtcblxuICAgICAgICAgICAgY29uc3QgcXVldWUgPSBbLi4uY2hpbGRdO1xuXG4gICAgICAgICAgICB3aGlsZShxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gcXVldWVbMF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmRhdGFzZXQubmFtZSA9PT0gXCJjYXJyaWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGhvcml6b250YWxQb3NbMF0pXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGF0YXNldC5uYW1lID09PSBcImJhdHRsZXNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoaG9yaXpvbnRhbFBvc1sxXSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhc2V0Lm5hbWUgPT09IFwiY3J1aXNlclwiIHx8IGN1cnJlbnQuZGF0YXNldC5uYW1lID09PSBcInN1Ym1hcmluZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShob3Jpem9udGFsUG9zWzJdKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmRhdGFzZXQubmFtZSA9PT0gXCJkZXN0cm95ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoaG9yaXpvbnRhbFBvc1szXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGROb2RlcztcbiBcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGlsZCA9IEFycmF5LmZyb20oY2hpbGRyZW4pLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICBpZih0eXBlb2YgdmFsLmNsYXNzTGlzdCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmRhdGFzZXQubmFtZSA9PT0gZS50YXJnZXQuZGF0YXNldC5uYW1lXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICBcbiAgICAgICAgZHJhZ2dlZCA9IHNlbGVjdGVkQ2hpbGRcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtYW4tYm9hcmRcIik7XG5cbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgICAgICB9LFxuICAgICAgICBmYWxzZSxcbiAgICApO1xuXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKCkgPT4ge1xuXG4gICAgfSk7XG5cbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoKSA9PiB7XG4gICBcbiAgICB9KTtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkcmFnZ2VkWzBdLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gZHJhZ2dlZFswXTtcbiAgICAgICAgY29uc3Qge3Jvd30gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICBjb25zdCB7Y29sfSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHtpbmRleH0gPSBkcmFnZ2VkWzBdLmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBvcHRpb24ucGxheWVyc1swXS5kb2NrWytpbmRleF1cblxuICAgICAgICBpZighcG9zQXZhaWxhYmxlKHNoaXAsICtyb3csICtjb2wsIGRpci52YWx1ZSwgb3B0aW9uLnBsYXllcnNbMF0uYm9hcmQub2NlYW4pKSByZXR1cm4gZmFsc2U7XG4gICAgICBcblxuXG4gICAgICAgIG9wdGlvbi5wbGF5ZXJzWzBdLnBsYWNlU2hpcChzaGlwLCArcm93LCArY29sLCBkaXIudmFsdWUpXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZClcbiAgICAgICAgaWYocGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3RhcnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtYnRuXCIpO1xuICAgICAgICAgICAgc3RhcnQuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgIFxuICAgICAgICByZXR1cm4gcmVuZGVyU2hpcHMob3B0aW9uLnBsYXllcnMpXG4gICAgfSk7XG5cbiAgICAgICAgXG59O1xuIiwiaW1wb3J0IENyZWF0ZUJvYXJkIGZyb20gXCIuLi9ib2FyZC9ib2FyZFwiO1xuaW1wb3J0IENyZWF0ZVBsYXllciBmcm9tIFwiLi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vaGVscGVyL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICAgIGxldCBpc0dhbWVTdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICBjb25zdCBwbGF5ZXJzID0gW107XG4gICAgY29uc3QgYm9hcmRzID0gW107XG5cbiAgICBjb25zdCB3YWl0ID0gKG1zKSA9PiBIZWxwZXIoKS53YWl0KG1zKTtcblxuICAgIC8vIGluaXRpYWxpemVkIGJvYXJkcyBhbmQgcGxheWVyc1xuICAgIGlmKGlzR2FtZVN0YXJ0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGJvYXJkcy5wdXNoKENyZWF0ZUJvYXJkKCkpO1xuICAgICAgICBib2FyZHMucHVzaChDcmVhdGVCb2FyZCgpKTtcbiAgICAgICBcblxuICAgICAgICBwbGF5ZXJzLnB1c2goQ3JlYXRlUGxheWVyKFwiaHVtYW5cIiwgYm9hcmRzWzBdLCBib2FyZHNbMV0pKTtcbiAgICAgICAgcGxheWVycy5wdXNoKENyZWF0ZVBsYXllcihcImNvbXB1dGVyXCIsYm9hcmRzWzFdLGJvYXJkc1swXSwgdHJ1ZSkpO1xuICAgICAgICBcbiAgICAgICAgcGxheWVyc1swXS5jcmVhdGVBbGxTaGlwcygpO1xuICAgICAgICBwbGF5ZXJzWzFdLmNyZWF0ZUFsbFNoaXBzKCk7XG5cbiAgICAgICAgY3VycmVudFBsYXllciA9IHsuLi5wbGF5ZXJzWzBdfSBcbiAgICAgICAgaXNHYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICBcbiAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBjdXJyZW50UGxheWVyO1xuXG4gICAgY29uc3QgaXNTdW5rQWxsID0gKHBsYXllciA9IGdldEFjdGl2ZVBsYXllcigpKSA9PiBwbGF5ZXIuYm9hcmQuc2hpcFdyZWNrcygpO1xuICAgIFxuICAgIGNvbnN0IHN3aXRjaFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFBsYXllci5uYW1lID09PSBwbGF5ZXJzWzBdLm5hbWUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSB7Li4ucGxheWVyc1sxXX07XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBsYXllcjtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSB7Li4ucGxheWVyc1swXX07XG4gICAgICAgIHJldHVybiBjdXJyZW50UGxheWVyO1xuICAgIH07XG5cbiAgICBjb25zdCBodW1hbklucHV0ID0gYXN5bmMgKHJvdywgY29sKSA9PiB7XG4gICAgICAgIGF3YWl0IHdhaXQoMSlcbiAgICAgICAgcGxheWVyc1swXS5hdGtFbmVteShyb3csIGNvbCk7XG4gICAgICAgIHN3aXRjaFBsYXllcigpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBjb21wdXRlcklucHV0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihpc1N1bmtBbGwoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBhd2FpdCB3YWl0KDEpO1xuICAgICAgICBwbGF5ZXJzWzFdLmF0a0VuZW15KCk7XG4gICAgICAgIHN3aXRjaFBsYXllcigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfTtcblxuICAgIFxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZ2V0IHBsYXllcnMoKSB7IHJldHVybiBwbGF5ZXJzfSxcbiAgICAgICAgZ2V0QWN0aXZlUGxheWVyLFxuICAgICAgICBzd2l0Y2hQbGF5ZXIsXG4gICAgICAgIGlzU3Vua0FsbCxcbiAgICAgICAgaHVtYW5JbnB1dCxcbiAgICAgICAgY29tcHV0ZXJJbnB1dCxcbiAgICAgICAgXG4gICAgfSk7XG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVscGVyKCkge1xuICAgIGNvbnN0IHBvc0F2YWlsYWJsZSA9IChzaGlwLCByb3csIGNvbCwgZGlyLCBib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYoZGlyID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgIGlmKGNvbCArIGkgPiA5KSAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbcm93XVtjb2wgKyBpXSk7XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgaWYoZGlyID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICBpZihyb3cgKyBpID4gOSkgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3JvdyArIGldW2NvbF0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBhcnJheS5ldmVyeSgoY2VsbCkgPT4gY2VsbCA9PT0gZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCB3YWl0ID0gbXMgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGVnYWxNb3ZlcyA9IChvY2VhbikgPT4ge1xuICAgICAgICBjb25zdCBsZWdhbEF0dGFja3MgPSBbXTtcbiAgICAgXG4gICAgICAgIG9jZWFuLnNoaXBBdHRhY2tzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGVnYWxBdHRhY2tzLnB1c2goW3Jvd0luZGV4LCBjb2xJbmRleF0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxlZ2FsQXR0YWNrcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zQXZhaWxhYmxlLFxuICAgICAgICB3YWl0LFxuICAgICAgICBsZWdhbE1vdmVzXG4gICAgfTtcbn07XG5cblxuXG5cbiIsImltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUsIGJvYXJkLCBlbmVteUJvYXJkLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBpc0FpID0gaXNDb21wdXRlcjtcbiAgICBcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWVcblxuICAgIGNvbnN0IG9jZWFuID0gYm9hcmQ7XG5cbiAgICBjb25zdCBoZWxwZXIgPSBIZWxwZXIoKTtcblxuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IGhlbHBlci5sZWdhbE1vdmVzKG9jZWFuKTtcblxuICAgIGNvbnN0IHNoaXBCbHVlUHJpbnRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImNhcnJpZXJcIixcbiAgICAgICAgICAgIGxlbmd0aDogNSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgIFxuICAgICAgICAgICAgbmFtZTogXCJiYXR0bGVzaGlwXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICBcbiAgICAgICAgICAgIG5hbWU6IFwiY3J1aXNlclwiLFxuICAgICAgICAgICAgbGVuZ3RoOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICBcbiAgICAgICAgICAgIG5hbWU6IFwic3VibWFyaW5lXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgIFxuICAgICAgICAgICAgbmFtZTogXCJkZXN0cm95ZXJcIixcbiAgICAgICAgICAgIGxlbmd0aDogMlxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCB7ZG9ja30gPSBvY2VhbjtcblxuICAgIGNvbnN0IGNyZWF0ZUFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBCbHVlUHJpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvY2Vhbi5jcmVhdGVTaGlwKHNoaXBCbHVlUHJpbnRzW2ldLm5hbWUsIHNoaXBCbHVlUHJpbnRzW2ldLmxlbmd0aClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCByb3csIGNvbCwgZGlyKSA9PiB7XG4gICAgICAgIGlmKGlzQWkpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gWy4uLm9jZWFuLmRvY2tdXG4gICBcbiAgICAgICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gcXVldWVbMF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tRGlyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9uLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoaGVscGVyLnBvc0F2YWlsYWJsZShjdXJyZW50U2hpcCwgcmFuZG9tUm93LCByYW5kb21Db2wsIGRpcmVjdGlvbltyYW5kb21EaXJdLCBvY2Vhbi5vY2VhbikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW4ucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgZGlyZWN0aW9uW3JhbmRvbURpcl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG9jZWFuLnBsYWNlU2hpcChzaGlwLCByb3csIGNvbCwgZGlyKVxuICAgIH07XG5cbiAgIFxuXG4gICAgY29uc3QgYXRrRW5lbXkgPSAocm93LCBjb2wpID0+IHtcbiAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihyb3cpICYmIE51bWJlci5pc0ludGVnZXIoY29sKSAmJiBlbmVteUJvYXJkLnNoaXBBdHRhY2tzW3Jvd11bY29sXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmKGlzQWkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZUluZGV4ID0gbGVnYWxBdHRhY2tzLmZpbHRlcigodmFsKSA9PiAgZW5lbXlCb2FyZC5zaGlwQXR0YWNrc1t2YWxbMF1dW3ZhbFsxXV0gIT09IHRydWUpO1xuICAgICAgICAgICAgY29uc3QgY2hvaWNlID0gYXZhaWxhYmxlSW5kZXhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlSW5kZXgubGVuZ3RoKV07XG4gICAgICAgICAgXG4gICAgICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVkQXRrKGNob2ljZVswXSwgY2hvaWNlWzFdKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlZEF0ayhyb3csIGNvbCk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfTtcbiBcbiAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgZ2V0IG5hbWUoKSB7IHJldHVybiBwbGF5ZXJOYW1lfSxcbiAgICAgICAgIHNldCBuYW1lKHZhbCkgeyBwbGF5ZXJOYW1lID0gdmFsfSwgXG4gICAgICAgICBnZXQgYm9hcmQoKSB7IHJldHVybiBvY2Vhbn0sXG4gICAgICAgICBnZXQgZG9jaygpIHsgcmV0dXJuIGRvY2t9LFxuICAgICAgICAgYXRrRW5lbXksXG4gICAgICAgICBjcmVhdGVBbGxTaGlwcyxcbiAgICAgICAgIHBsYWNlU2hpcFxuICAgICB9KTtcbiB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gICAgbGV0IGhlYWx0aCA9IDA7XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhlYWx0aCArPSAxO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0SGVhbHRoID0gKCkgPT4ge1xuICAgICAgICBoZWFsdGggPSAwO1xuICAgICAgICByZXR1cm4gaGVhbHRoXG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYoaGVhbHRoID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGdldCBuYW1lKCkgeyByZXR1cm4gbmFtZSB9LFxuICAgICAgICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gbGVuZ3RoIH0sXG4gICAgICAgIGhpdCxcbiAgICAgICAgcmVzZXRIZWFsdGgsXG4gICAgICAgIGlzU3VuayxcbiAgICB9KTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5mb3JtIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0gPiBidXR0b24sIC5wbGFjZS1zaGlwIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuZm9ybSA+IGJ1dHRvbjpob3ZlciwgLnBsYWNlLXNoaXA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG59IFxuXG4uZ2FtZS1jb250YWluZXIge1xuICAgZGlzcGxheTogbm9uZTtcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIFxufVxuXG5cbi5wMS1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxO1xufVxuXG4uYW5ub3VuY2VtZW50IHtcbiAgICBncmlkLWNvbHVtbjogMjtcbn1cblxuLnAyLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG59XG5cbi5wMS1jb250YWluZXIsIC5wMi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYm9hcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwcHgsIDFmcikpO1xufVxuXG4uc2hpcC1wbGFjZW1lbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi52ZXJ0aWNhbC1kb2NrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmhvcml6b250YWwtZG9jayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIC52ZXJ0aWNhbC1kb2NrIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgxMDBweCwgMTUwcHgpKTtcbiAgICB3aWR0aDogNTBweDtcbn0gKi9cblxuLmJhdHRsZXNoaXAtdmVydGljYWwtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE5OXB4O1xuICAgXG59XG5cbi5jcnVpc2VyLXN1Ym1hcmluZS12ZXJ0aWNhbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICBcbn1cblxuLmRlc3Ryb3llci12ZXJ0aWNhbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi8qICAqL1xuLmNhcnJpZXItaG9yaXpvbnRhbC1oZWlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGdhcDogMS41cHg7XG59XG5cbi5iYXR0bGVzaGlwLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuLmNydWlzZXItc3VibWFyaW5lLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuLmRlc3Ryb3llci1ob3Jpem9udGFsLWhlaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGdhcDogMS41cHg7XG59XG5cblxuLnNoaXBtZW50IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLnNoaXBtZW50LXZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnNoaXBtZW50LWludmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuXG4uY2VsbC1jb21wdXRlciB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbn1cblxuLmNlbGwtaHVtYW4sIC5jZWxsLWNvbXB1dGVyICB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xuICAgIGJhY2tncm91bmQ6IHRoaXN0bGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5oaWRlLWJ0biwgLmNyZWF0ZS1zaGlwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5zaW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtHQUNHLGFBQWE7R0FDYixrQ0FBa0M7R0FDbEMscUJBQXFCO0dBQ3JCLG1CQUFtQjtHQUNuQixnQkFBZ0I7O0FBRW5COzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxLQUFLO0FBQ0w7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gPiBidXR0b24sIC5wbGFjZS1zaGlwIHtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uOmhvdmVyLCAucGxhY2Utc2hpcDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn0gXFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gICBkaXNwbGF5OiBub25lO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICBcXG59XFxuXFxuXFxuLnAxLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4uYW5ub3VuY2VtZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5wMi1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLnAxLWNvbnRhaW5lciwgLnAyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTBweCwgMWZyKSk7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnZlcnRpY2FsLWRvY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmhvcml6b250YWwtZG9jayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogLnZlcnRpY2FsLWRvY2sge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDEwMHB4LCAxNTBweCkpO1xcbiAgICB3aWR0aDogNTBweDtcXG59ICovXFxuXFxuLmJhdHRsZXNoaXAtdmVydGljYWwtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAxOTlweDtcXG4gICBcXG59XFxuXFxuLmNydWlzZXItc3VibWFyaW5lLXZlcnRpY2FsLWhlaWdodCB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgXFxufVxcblxcbi5kZXN0cm95ZXItdmVydGljYWwtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLyogICovXFxuLmNhcnJpZXItaG9yaXpvbnRhbC1oZWlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uY3J1aXNlci1zdWJtYXJpbmUtaG9yaXpvbnRhbC1oZWlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ2FwOiAxLjVweDtcXG59XFxuXFxuLmRlc3Ryb3llci1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IDEuNXB4O1xcbn1cXG5cXG5cXG4uc2hpcG1lbnQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLnNoaXBtZW50LXZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwbWVudC1pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4uY2VsbC1jb21wdXRlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXFxufVxcblxcbi5jZWxsLWh1bWFuLCAuY2VsbC1jb21wdXRlciAge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXFxuICAgIGJhY2tncm91bmQ6IHRoaXN0bGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaGlkZS1idG4sIC5jcmVhdGUtc2hpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4uc2luayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBEb21Db250cm9sbGVyIGZyb20gXCIuL21vZHVsZS9kb20vZG9tLWNvbnRyb2xsZXJcIlxuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBkb20gPSBEb21Db250cm9sbGVyKClcbmRvbS5jcmVhdGVQbGF5ZXJBbmRCb2FyZCgpXG5kb20ucGxhY2VTaGlwKClcbmRvbS5ib2FyZEV2ZW50KClcblxuIl0sIm5hbWVzIjpbIlNoaXAiLCJwb3NBdmFpbGFibGUiLCJHYW1lQm9hcmQiLCJvY2VhbiIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImZpbGwiLCJzaGlwQXR0YWNrcyIsImRvY2siLCJjcmVhdGVTaGlwIiwibmFtZSIsInNoaXAiLCJwdXNoIiwicGxhY2VTaGlwIiwidmVzc2VsIiwicm93IiwiY29sIiwiZGlyIiwib2NlYW5Cb2FyZCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImJvYXJkIiwiaSIsInJlY2VpdmVkQXRrIiwiaGl0Iiwic2hpcFdyZWNrcyIsInNoaXBzIiwic2hpcEdyYXZlIiwiaXNTdW5rIiwiZXZlcnkiLCJzaGlwU3VuayIsIk9iamVjdCIsImZyZWV6ZSIsImNyZWF0ZUJvYXJkIiwib3B0aW9uIiwicGxheWVyT25lQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyVHdvQ29udGFpbmVyIiwiYm9hcmRPbmVDb250YWluZXIiLCJib2FyZFR3b0NvbnRhaW5lciIsImZvckVhY2giLCJyb3dJbmRleCIsImNvbEluZGV4IiwiY29sQ2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUdhbWUiLCJkaXYiLCJjb250YWluZXIiLCJmb3JtQ29udGFpbmVyIiwic3RhcnQiLCJwbGF5ZXJPbmVOYW1lQ29udGFpbmVyIiwicGxheWVyVHdvTmFtZUNvbnRhaW5lciIsInAxTmFtZSIsInAyTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VOYW1lIiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZGlzcGxheSIsIkdhbWUiLCJQb3J0YWdlIiwiRG9tU3RhdGUiLCJEb21Db250cm9sbGVyIiwicGxhY2VTaGlwQnRuIiwiZ2FtZSIsImNyZWF0ZVBsYXllckFuZEJvYXJkIiwicGxheWVycyIsImJvYXJkRXZlbnQiLCJnYW1lT3ZlciIsIndpbkNvbnRhaW5lciIsImlzU3Vua0FsbCIsInAiLCJ3aW5uZXIiLCJnZXRBY3RpdmVQbGF5ZXIiLCJjaGlsZE5vZGVzIiwiY2hpbGQiLCJub2RlIiwicG9pbnRlckV2ZW50cyIsInVwZGF0ZVNjcmVlbiIsImNlbGwiLCJjb250YWlucyIsInBsYXlMb2dpYyIsInRhcmdldCIsImRhdGFzZXQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJ2YWwiLCJodW1hbklucHV0IiwiY29tcHV0ZXJJbnB1dCIsInRoZW4iLCJlcnJvciIsIkVycm9yIiwiSGVscGVyIiwicmVuZGVyU2hpcHMiLCJidXR0b24iLCJkaXJlY3Rpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZHJhZ2dlZCIsInNvdXJjZSIsImhvcml6b250YWxQb3MiLCJyZW1vdmUiLCJxdWV1ZSIsImN1cnJlbnQiLCJzaGlmdCIsInNlbGVjdGVkQ2hpbGQiLCJmaWx0ZXIiLCJpbmRleCIsInJlbW92ZUNoaWxkIiwiQ3JlYXRlQm9hcmQiLCJDcmVhdGVQbGF5ZXIiLCJpc0dhbWVTdGFydGVkIiwiY3VycmVudFBsYXllciIsImJvYXJkcyIsIndhaXQiLCJtcyIsImNyZWF0ZUFsbFNoaXBzIiwicGxheWVyIiwic3dpdGNoUGxheWVyIiwiYXRrRW5lbXkiLCJhcnJheSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImxlZ2FsTW92ZXMiLCJsZWdhbEF0dGFja3MiLCJQbGF5ZXIiLCJlbmVteUJvYXJkIiwiaXNDb21wdXRlciIsImlzQWkiLCJwbGF5ZXJOYW1lIiwiaGVscGVyIiwic2hpcEJsdWVQcmludHMiLCJjdXJyZW50U2hpcCIsInJhbmRvbVJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvbCIsInJhbmRvbURpciIsIk51bWJlciIsImlzSW50ZWdlciIsImF2YWlsYWJsZUluZGV4IiwiY2hvaWNlIiwiaGVhbHRoIiwicmVzZXRIZWFsdGgiLCJkb20iXSwic291cmNlUm9vdCI6IiJ9
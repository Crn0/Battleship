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
  const createPlayerAndBoard = async () => (0,_board_player_board_player__WEBPACK_IMPORTED_MODULE_1__["default"])(game.players, container);
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
  if (!option.isSunkAll()) return false;
  const p = document.createElement("p");
  let winner;
  winner = option.getActivePlayer().name === option.players[0].name ? winner = option.players[1].name : winner = option.players[0].name;
  p.textContent = `Winner: ${winner}`;
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
    if (option.isSunkAll()) return false;
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
      await option.humanInput(+row, +col).then(() => {
        updateScreen(option.players);
      });
      await option.computerInput().then(() => {
        updateScreen(option.players);
        // enable pointer
        children.forEach(val => {
          const child = val;
          child.style.pointerEvents = "auto";
        });
      });
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
    playLogic(e, option).then(data => {
      // check if game is over

      if (data === false || typeof data.isSunkAll !== "function") return null;
      if (data.isSunkAll()) return gameOver(option);

      // return otherwise
      return null;
    });
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
    await wait(1000);
    players[0].atkEnemy(row, col);
    switchPlayer();
    return true;
  };
  const computerInput = async () => {
    if (isSunkAll()) return false;
    await wait(2000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFNBQVMsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVks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QkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1RDtBQUVsQztBQUVyQixNQUFNK0gsR0FBRyxHQUFHcEYsc0VBQWEsQ0FBQyxDQUFDO0FBQzNCb0YsR0FBRyxDQUFDakYsb0JBQW9CLENBQUMsQ0FBQztBQUMxQmlGLEdBQUcsQ0FBQzlJLFNBQVMsQ0FBQyxDQUFDO0FBQ2Y4SSxHQUFHLENBQUMvRSxVQUFVLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvYm9hcmQvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2JvYXJkLXBsYXllci9ib2FyZC1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2RvbS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9kb20tc3RhdGUvZG9tLXN0YXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9zaGlwLXBvcnRhZ2Uvc2hpcC1wb3J0YWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2dhbWUvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9oZWxwZXIvaGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5pbXBvcnQgcG9zQXZhaWxhYmxlIGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVCb2FyZCgpIHtcbiAgICBjb25zdCBvY2VhbiA9IEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChmYWxzZSkpO1xuXG4gICAgY29uc3Qgc2hpcEF0dGFja3MgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwfSwgKCkgPT4gQXJyYXkoMTApLmZpbGwoZmFsc2UpKTtcblxuICAgIGNvbnN0IGRvY2sgPSBbXTtcblxuICAgIGNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKG5hbWUsIGxlbmd0aCk7XG5cbiAgICAgICAgZG9jay5wdXNoKHNoaXApXG5cbiAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfTsgXG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAodmVzc2VsLCByb3csIGNvbCwgZGlyLCBvY2VhbkJvYXJkID0gb2NlYW4pID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBvY2VhbkJvYXJkO1xuICAgICAgICBjb25zdCBzaGlwID0gdmVzc2VsXG5cbiAgICAgICAgaWYocG9zQXZhaWxhYmxlKHNoaXAsIHJvdywgY29sLCBkaXIsIGJvYXJkKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYoZGlyID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtyb3ddW2NvbCArIGldID0gc2hpcDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYoZGlyID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbcm93ICsgaV1bY29sXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IHJlY2VpdmVkQXRrID0gKHJvdywgY29sLCBvY2VhbkJvYXJkID0gb2NlYW4pID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBvY2VhbkJvYXJkO1xuICAgICAgICBcbiAgICAgICAgaWYoc2hpcEF0dGFja3Nbcm93XVtjb2xdID09PSBmYWxzZSAmJiBib2FyZFtyb3ddW2NvbF0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgICAgICBzaGlwQXR0YWNrc1tyb3ddW2NvbF0gPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgXG4gICAgICAgIHNoaXBBdHRhY2tzW3Jvd11bY29sXSA9IHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hpcFdyZWNrcyA9IChzaGlwcyA9IGRvY2spID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEdyYXZlID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYoc2hpcHNbaV0uaXNTdW5rKCkgPT09IHRydWUgfHwgc2hpcHNbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgc2hpcEdyYXZlLnB1c2goc2hpcHNbaV0uaXNTdW5rKCkpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNoaXBHcmF2ZS5ldmVyeShzaGlwU3VuayA9PiBzaGlwU3VuayA9PT0gdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZ2V0IG9jZWFuKCkgeyByZXR1cm4gb2NlYW59LFxuICAgICAgICBnZXQgc2hpcEF0dGFja3MoKSB7IHJldHVybiBzaGlwQXR0YWNrc30sXG4gICAgICAgIGdldCBkb2NrKCkgeyByZXR1cm4gZG9ja30sXG4gICAgICAgIGNyZWF0ZVNoaXAsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZWRBdGssXG4gICAgICAgIHNoaXBXcmVja3MsXG4gICAgfSk7XG59OyIsImNvbnN0IGNyZWF0ZUJvYXJkID0gKG9wdGlvbikgPT4ge1xuICAgIC8vIHBsYXllciBjb250YWluZXJcbiAgICBjb25zdCBwbGF5ZXJPbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAxLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAyLWNvbnRhaW5lclwiKTtcbiAgICAvLyBwbGF5ZXIgYm9hcmQgY29udGFpbmVyXG4gICAgY29uc3QgYm9hcmRPbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWFuLWJvYXJkXCIpO1xuICAgIGNvbnN0IGJvYXJkVHdvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcblxuICAgIG9wdGlvblswXS5ib2FyZC5vY2Vhbi5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICAgICAgY29sQ2VsbC5jbGFzc05hbWUgPSBcImNlbGxcIjtcbiAgICAgICAgICAgIGNvbENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgcm93SW5kZXgpO1xuICAgICAgICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBjb2xJbmRleCk7XG4gICAgICAgICAgICBjb2xDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWh1bWFuXCIpO1xuICAgICAgICAgICAgY29sQ2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJvcC10YXJnZXRcIilcbiAgICAgICAgICAgXG4gICAgICAgICAgICBib2FyZE9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xDZWxsKVxuICAgICAgICB9KTtcblxuICAgICAgICBwbGF5ZXJPbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRPbmVDb250YWluZXIpO1xuICAgIH0pO1xuICAgIFxuICAgIG9wdGlvblsxXS5ib2FyZC5vY2Vhbi5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNvbENlbGwuY2xhc3NOYW1lID0gXCJjZWxsXCI7XG5cbiAgICAgICAgICAgIGNvbENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgcm93SW5kZXgpO1xuICAgICAgICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiLCBjb2xJbmRleCk7XG4gICAgICAgICAgICBjb2xDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWNvbXB1dGVyXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgIGJvYXJkVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbENlbGwpXG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIHBsYXllclR3b0NvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZFR3b0NvbnRhaW5lcik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYW1lKG9wdGlvbiwgZGl2KSB7XG4gICAgLy8gZm9ybVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRpdjtcbiAgICAvLyBjb25zdCBwbGFjZVNoaXBCdG4gPSBidXR0b247XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItbmFtZVwiKTtcbiAgICBjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRcIik7XG4gICAgLy8gcGxheWVyIGNvbnRhaW5lclxuICAgIGNvbnN0IHBsYXllck9uZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBsYXllclR3b0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDItY29udGFpbmVyXCIpO1xuICAgIC8vIG5hbWUgY29udGFpbmVyXG4gICAgY29uc3QgcGxheWVyT25lTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGxheWVyVHdvTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgLy8gbmFtZSBwYXJhZ3JhcGhcbiAgICBjb25zdCBwMU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwMk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvLyBwbGF5ZXIgbmFtZSBjbGFzc1xuICAgIHAxTmFtZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW5hbWVcIik7XG4gICAgcDJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItbmFtZVwiKVxuXG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY2hhbmdlTmFtZSA9IG9wdGlvblswXTtcbiAgICBcbiAgICAgICAgaWYobmFtZS52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgY2hhbmdlTmFtZS5uYW1lID0gbmFtZS52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHAxTmFtZS50ZXh0Q29udGVudCA9IGBDb21tYW5kZXIgJHtvcHRpb25bMF0ubmFtZX1gO1xuICAgICAgICBwMk5hbWUudGV4dENvbnRlbnQgPSBgQ29tbWFuZGVyICR7b3B0aW9uWzFdLm5hbWV9YDtcblxuICAgICAgICBwbGF5ZXJPbmVOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHAxTmFtZSk7XG4gICAgICAgIHBsYXllclR3b05hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocDJOYW1lKTtcblxuICAgICAgICBwbGF5ZXJPbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lTmFtZUNvbnRhaW5lcik7XG5cbiAgICAgICAgcGxheWVyVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b05hbWVDb250YWluZXIpXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29Db250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVCb2FyZChvcHRpb24pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBcbiAgICBcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4uL2dhbWUvZ2FtZVwiO1xuaW1wb3J0IGNyZWF0ZUdhbWUgZnJvbSBcIi4vYm9hcmQtcGxheWVyL2JvYXJkLXBsYXllclwiO1xuaW1wb3J0IFBvcnRhZ2UgZnJvbSBcIi4vc2hpcC1wb3J0YWdlL3NoaXAtcG9ydGFnZVwiXG5pbXBvcnQgRG9tU3RhdGUgZnJvbSBcIi4vZG9tLXN0YXRlL2RvbS1zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb21Db250cm9sbGVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgcGxhY2VTaGlwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwXCIpO1xuXG4gICAgY29uc3QgZ2FtZSA9IEdhbWUoKTsgICBcblxuICAgIGNvbnN0IGNyZWF0ZVBsYXllckFuZEJvYXJkID0gYXN5bmMgKCkgPT4gY3JlYXRlR2FtZShnYW1lLnBsYXllcnMsIGNvbnRhaW5lcilcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICgpID0+IFBvcnRhZ2UoZ2FtZSwgcGxhY2VTaGlwQnRuKTtcblxuICAgIGNvbnN0IGJvYXJkRXZlbnQgPSAoKSA9PiBEb21TdGF0ZShnYW1lKVxuICAgIFxuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICBjcmVhdGVQbGF5ZXJBbmRCb2FyZCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBib2FyZEV2ZW50LFxuICAgIH0pO1xufTsiLCJjb25zdCBnYW1lT3ZlciA9IChvcHRpb24pID0+IHtcbiAgICBjb25zdCB3aW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKTtcbiAgICBpZighb3B0aW9uLmlzU3Vua0FsbCgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgXG4gICAgbGV0IHdpbm5lcjtcbiAgICB3aW5uZXIgPSBvcHRpb24uZ2V0QWN0aXZlUGxheWVyKCkubmFtZSA9PT0gb3B0aW9uLnBsYXllcnNbMF0ubmFtZSA/IHdpbm5lciA9IG9wdGlvbi5wbGF5ZXJzWzFdLm5hbWUgOiB3aW5uZXIgPSBvcHRpb24ucGxheWVyc1swXS5uYW1lO1xuICAgIHAudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3dpbm5lcn1gO1xuXG4gICAgd2luQ29udGFpbmVyLmFwcGVuZENoaWxkKHApXG4gICAgcmV0dXJuIHRydWU7XG59OyBcblxuY29uc3QgdXBkYXRlU2NyZWVuID0gKG9wdGlvbikgPT4ge1xuICAgIC8vIGh1bWFuIGJvYXJkXG4gICAgb3B0aW9uWzBdLmJvYXJkLnNoaXBBdHRhY2tzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHJvdy5mb3JFYWNoKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgIGlmKGNvbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbC1odW1hbltkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKVxuICAgICAgICAgICAgaWYoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmICFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJtaXNzXCI7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2lua1wiKTsgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSk7IFxuXG4gICAgLy8gY29tcHV0ZXIgYm9hcmRcbiAgICBvcHRpb25bMV0uYm9hcmQuc2hpcEF0dGFja3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4gcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgaWYoY29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29tcHV0ZXJbZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y29sSW5kZXh9XCJdYClcbiAgICAgICAgICAgIGlmKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLWNvbXB1dGVyXCIpKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1jb21wdXRlclwiKSkge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcInNpbmtcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaW5rXCIpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKTsgXG5cbiAgICBcbn07XG5cbmNvbnN0IHBsYXlMb2dpYyA9IGFzeW5jIChlLG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IHtyb3d9ID0gZS50YXJnZXQuZGF0YXNldFxuICAgIGNvbnN0IHtjb2x9ID0gZS50YXJnZXQuZGF0YXNldFxuICAgICAgICBcbiAgICAgICAgLy8gbGV0IHBsYXllckNyZWF0aW9uRG9uID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYob3B0aW9uLmlzU3Vua0FsbCgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYocm93ICE9PSB1bmRlZmluZWQgJiYgY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZHNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgLy8gZGlzYWJsZSBwb2ludGVyXG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHZhbDtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IG9wdGlvbi5odW1hbklucHV0KCtyb3csICtjb2wpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcmVlbihvcHRpb24ucGxheWVycyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgb3B0aW9uLmNvbXB1dGVySW5wdXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVTY3JlZW4ob3B0aW9uLnBsYXllcnMpO1xuICAgICAgICAgICAgICAgIC8vIGVuYWJsZSBwb2ludGVyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVycm9yID0gRXJyb3IoXCJ5b3UgY2xpY2tlZCB0aGUgYm9hcmQgZnJhbWVcIik7XG4gICAgICAgIHRocm93KGVycm9yKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGVycm9yOyBcbiAgICAgICAgfTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb21TdGF0ZShvcHRpb24pIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XG5cbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcGxheUxvZ2ljKGUsIG9wdGlvbikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgZ2FtZSBpcyBvdmVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGRhdGEgPT09IGZhbHNlIHx8IHR5cGVvZiBkYXRhLmlzU3Vua0FsbCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgaWYoZGF0YS5pc1N1bmtBbGwoKSkgcmV0dXJuIGdhbWVPdmVyKG9wdGlvbik7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBvdGhlcndpc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydCBIZWxwZXIgZnJvbSBcIi4uLy4uL2hlbHBlci9oZWxwZXJcIjtcblxuY29uc3QgcmVuZGVyU2hpcHMgPSAob3B0aW9uKSA9PiB7XG4gICAgb3B0aW9uWzBdLmJvYXJkLm9jZWFuLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbC1odW1hbltkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGlmKGNvbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgb3B0aW9uWzFdLmJvYXJkLm9jZWFuLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbC1jb21wdXRlcltkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGlmKGNvbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNvbXB1dGVyXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYWNlU2hpcChvcHRpb24sIGJ1dHRvbikge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyZWN0aW9uXCIpO1xuICAgIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGJ1dHRvbjtcbiAgICBjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcFwiKTtcblxuICAgIGNvbnN0IHBvc0F2YWlsYWJsZSA9IChzaGlwLCByb3csIGNvbCwgZGlyLCBib2FyZCkgPT4gSGVscGVyKCkucG9zQXZhaWxhYmxlKHNoaXAsIHJvdywgY29sLCBkaXIsIGJvYXJkKVxuICAgIHBsYWNlU2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgcGxhY2VTaGlwQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgIFxuICAgICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbC1jb21wdXRlclwiKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHZhbDtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcGxhY2UgY29tcHV0ZXIgc2hpcDtcbiAgICAgICAgb3B0aW9uLnBsYXllcnNbMV0ucGxhY2VTaGlwKClcbiAgICAgICAgcmVuZGVyU2hpcHMob3B0aW9uLnBsYXllcnMpXG4gICAgfSk7XG5cbiAgICBsZXQgZHJhZ2dlZCA9IG51bGw7ICAgIFxuICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9ja1wiKTtcbiAgICBjb25zdCBkaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpci1zZWxlY3RcIilcblxuICAgIGRpci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiBcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb2NrXCIpO1xuICAgICAgICBjb25zdCBjaGlsZCA9IHBhcmVudC5jaGlsZHJlblxuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxQb3MgPSBbXG4gICAgICAgICAgICBcImNhcnJpZXItaG9yaXpvbnRhbC1oZWlnaHRcIixcbiAgICAgICAgICAgIFwiYmF0dGxlc2hpcC1ob3Jpem9udGFsLWhlaWdodFwiLFxuICAgICAgICAgICAgXCJjcnVpc2VyLXN1Ym1hcmluZS1ob3Jpem9udGFsLWhlaWdodFwiLFxuICAgICAgICAgICAgXCJkZXN0cm95ZXItaG9yaXpvbnRhbC1oZWlnaHRcIlxuICAgICAgICBdO1xuICAgXG4gICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBcbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwidmVydGljYWwtZG9ja1wiKTtcblxuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJob3Jpem9udGFsLWRvY2tcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gWy4uLmNoaWxkXVxuXG4gICAgICAgICAgICB3aGlsZShxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gcXVldWVbMF07XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmRhdGFzZXQubmFtZSA9PT0gXCJjYXJyaWVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKGhvcml6b250YWxQb3NbMF0pXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGF0YXNldC5uYW1lID09PSBcImJhdHRsZXNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoaG9yaXpvbnRhbFBvc1sxXSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhc2V0Lm5hbWUgPT09IFwiY3J1aXNlclwiIHx8IGN1cnJlbnQuZGF0YXNldC5uYW1lID09PSBcInN1Ym1hcmluZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZChob3Jpem9udGFsUG9zWzJdKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmRhdGFzZXQubmFtZSA9PT0gXCJkZXN0cm95ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoaG9yaXpvbnRhbFBvc1szXSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsLWRvY2tcIik7XG5cbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9yaXpvbnRhbC1kb2NrXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWV1ZSA9IFsuLi5jaGlsZF07XG5cbiAgICAgICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZVswXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGF0YXNldC5uYW1lID09PSBcImNhcnJpZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoaG9yaXpvbnRhbFBvc1swXSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudC5kYXRhc2V0Lm5hbWUgPT09IFwiYmF0dGxlc2hpcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShob3Jpem9udGFsUG9zWzFdKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50LmRhdGFzZXQubmFtZSA9PT0gXCJjcnVpc2VyXCIgfHwgY3VycmVudC5kYXRhc2V0Lm5hbWUgPT09IFwic3VibWFyaW5lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKGhvcml6b250YWxQb3NbMl0pXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnQuZGF0YXNldC5uYW1lID09PSBcImRlc3Ryb3llclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShob3Jpem9udGFsUG9zWzNdKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZE5vZGVzO1xuIFxuICAgICAgICBjb25zdCBzZWxlY3RlZENoaWxkID0gQXJyYXkuZnJvbShjaGlsZHJlbikuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB2YWwuY2xhc3NMaXN0ICE9PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZGF0YXNldC5uYW1lID09PSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgIFxuICAgICAgICBkcmFnZ2VkID0gc2VsZWN0ZWRDaGlsZFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbi1ib2FyZFwiKTtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICAgICAgIH0sXG4gICAgICAgIGZhbHNlLFxuICAgICk7XG5cbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoKSA9PiB7XG5cbiAgICB9KTtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsICgpID0+IHtcbiAgIFxuICAgIH0pO1xuXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRyYWdnZWRbMF0ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkcmFnZ2VkWzBdO1xuICAgICAgICBjb25zdCB7cm93fSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHtjb2x9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgY29uc3Qge2luZGV4fSA9IGRyYWdnZWRbMF0uZGF0YXNldDtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG9wdGlvbi5wbGF5ZXJzWzBdLmRvY2tbK2luZGV4XVxuXG4gICAgICAgIGlmKCFwb3NBdmFpbGFibGUoc2hpcCwgK3JvdywgK2NvbCwgZGlyLnZhbHVlLCBvcHRpb24ucGxheWVyc1swXS5ib2FyZC5vY2VhbikpIHJldHVybiBmYWxzZTtcbiAgICAgIFxuXG5cbiAgICAgICAgb3B0aW9uLnBsYXllcnNbMF0ucGxhY2VTaGlwKHNoaXAsICtyb3csICtjb2wsIGRpci52YWx1ZSlcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICBpZihwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzdGFydC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG5cIik7XG4gICAgICAgICAgICBzdGFydC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICAgICAgICAgICAgZGlyZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgXG4gICAgICAgIHJldHVybiByZW5kZXJTaGlwcyhvcHRpb24ucGxheWVycylcbiAgICB9KTtcblxuICAgICAgICBcbn07XG4iLCJpbXBvcnQgQ3JlYXRlQm9hcmQgZnJvbSBcIi4uL2JvYXJkL2JvYXJkXCI7XG5pbXBvcnQgQ3JlYXRlUGxheWVyIGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgbGV0IGlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgY3VycmVudFBsYXllcjtcblxuICAgIGNvbnN0IHBsYXllcnMgPSBbXTtcbiAgICBjb25zdCBib2FyZHMgPSBbXTtcblxuICAgIGNvbnN0IHdhaXQgPSAobXMpID0+IEhlbHBlcigpLndhaXQobXMpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZWQgYm9hcmRzIGFuZCBwbGF5ZXJzXG4gICAgaWYoaXNHYW1lU3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgYm9hcmRzLnB1c2goQ3JlYXRlQm9hcmQoKSk7XG4gICAgICAgIGJvYXJkcy5wdXNoKENyZWF0ZUJvYXJkKCkpO1xuICAgICAgIFxuXG4gICAgICAgIHBsYXllcnMucHVzaChDcmVhdGVQbGF5ZXIoXCJodW1hblwiLCBib2FyZHNbMF0sIGJvYXJkc1sxXSkpO1xuICAgICAgICBwbGF5ZXJzLnB1c2goQ3JlYXRlUGxheWVyKFwiY29tcHV0ZXJcIixib2FyZHNbMV0sYm9hcmRzWzBdLCB0cnVlKSk7XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJzWzBdLmNyZWF0ZUFsbFNoaXBzKCk7XG4gICAgICAgIHBsYXllcnNbMV0uY3JlYXRlQWxsU2hpcHMoKTtcblxuICAgICAgICBjdXJyZW50UGxheWVyID0gey4uLnBsYXllcnNbMF19IFxuICAgICAgICBpc0dhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIFxuICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICBjb25zdCBpc1N1bmtBbGwgPSAocGxheWVyID0gZ2V0QWN0aXZlUGxheWVyKCkpID0+IHBsYXllci5ib2FyZC5zaGlwV3JlY2tzKCk7XG4gICAgXG4gICAgY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50UGxheWVyLm5hbWUgPT09IHBsYXllcnNbMF0ubmFtZSkge1xuICAgICAgICAgICAgY3VycmVudFBsYXllciA9IHsuLi5wbGF5ZXJzWzFdfTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGxheWVyO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY3VycmVudFBsYXllciA9IHsuLi5wbGF5ZXJzWzBdfTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGh1bWFuSW5wdXQgPSBhc3luYyAocm93LCBjb2wpID0+IHtcbiAgICAgICAgYXdhaXQgd2FpdCgxMDAwKVxuICAgICAgICBwbGF5ZXJzWzBdLmF0a0VuZW15KHJvdywgY29sKTtcbiAgICAgICAgc3dpdGNoUGxheWVyKClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbXB1dGVySW5wdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKGlzU3Vua0FsbCgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGF3YWl0IHdhaXQoMjAwMCk7XG4gICAgICAgIHBsYXllcnNbMV0uYXRrRW5lbXkoKTtcbiAgICAgICAgc3dpdGNoUGxheWVyKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9O1xuXG4gICAgXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgcGxheWVycygpIHsgcmV0dXJuIHBsYXllcnN9LFxuICAgICAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgICAgIHN3aXRjaFBsYXllcixcbiAgICAgICAgaXNTdW5rQWxsLFxuICAgICAgICBodW1hbklucHV0LFxuICAgICAgICBjb21wdXRlcklucHV0LFxuICAgICAgICBcbiAgICB9KTtcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxwZXIoKSB7XG4gICAgY29uc3QgcG9zQXZhaWxhYmxlID0gKHNoaXAsIHJvdywgY29sLCBkaXIsIGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZihkaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYoY29sICsgaSA+IDkpICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFtyb3ddW2NvbCArIGldKTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBpZihkaXIgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGlmKHJvdyArIGkgPiA5KSAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbcm93ICsgaV1bY29sXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGFycmF5LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXQgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsZWdhbE1vdmVzID0gKG9jZWFuKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IFtdO1xuICAgICBcbiAgICAgICAgb2NlYW4uc2hpcEF0dGFja3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZWdhbEF0dGFja3MucHVzaChbcm93SW5kZXgsIGNvbEluZGV4XSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGVnYWxBdHRhY2tzO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwb3NBdmFpbGFibGUsXG4gICAgICAgIHdhaXQsXG4gICAgICAgIGxlZ2FsTW92ZXNcbiAgICB9O1xufTtcblxuXG5cblxuIiwiaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vaGVscGVyL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIobmFtZSwgYm9hcmQsIGVuZW15Qm9hcmQsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGlzQWkgPSBpc0NvbXB1dGVyO1xuICAgIFxuICAgIGxldCBwbGF5ZXJOYW1lID0gbmFtZVxuXG4gICAgY29uc3Qgb2NlYW4gPSBib2FyZDtcblxuICAgIGNvbnN0IGhlbHBlciA9IEhlbHBlcigpO1xuXG4gICAgY29uc3QgbGVnYWxBdHRhY2tzID0gaGVscGVyLmxlZ2FsTW92ZXMob2NlYW4pO1xuXG4gICAgY29uc3Qgc2hpcEJsdWVQcmludHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiY2FycmllclwiLFxuICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgXG4gICAgICAgICAgICBuYW1lOiBcImJhdHRsZXNoaXBcIixcbiAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgIFxuICAgICAgICAgICAgbmFtZTogXCJjcnVpc2VyXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgIFxuICAgICAgICAgICAgbmFtZTogXCJzdWJtYXJpbmVcIixcbiAgICAgICAgICAgIGxlbmd0aDogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgXG4gICAgICAgICAgICBuYW1lOiBcImRlc3Ryb3llclwiLFxuICAgICAgICAgICAgbGVuZ3RoOiAyXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IHtkb2NrfSA9IG9jZWFuO1xuXG4gICAgY29uc3QgY3JlYXRlQWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEJsdWVQcmludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG9jZWFuLmNyZWF0ZVNoaXAoc2hpcEJsdWVQcmludHNbaV0ubmFtZSwgc2hpcEJsdWVQcmludHNbaV0ubGVuZ3RoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHJvdywgY29sLCBkaXIpID0+IHtcbiAgICAgICAgaWYoaXNBaSkge1xuICAgICAgICAgICAgY29uc3QgcXVldWUgPSBbLi4ub2NlYW4uZG9ja11cbiAgIFxuICAgICAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBxdWV1ZVswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21EaXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb24ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihoZWxwZXIucG9zQXZhaWxhYmxlKGN1cnJlbnRTaGlwLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgZGlyZWN0aW9uW3JhbmRvbURpcl0sIG9jZWFuLm9jZWFuKSkge1xuICAgICAgICAgICAgICAgICAgICBvY2Vhbi5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCBkaXJlY3Rpb25bcmFuZG9tRGlyXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb2NlYW4ucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sLCBkaXIpXG4gICAgfTtcblxuICAgXG5cbiAgICBjb25zdCBhdGtFbmVteSA9IChyb3csIGNvbCkgPT4ge1xuICAgICAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKHJvdykgJiYgTnVtYmVyLmlzSW50ZWdlcihjb2wpICYmIGVuZW15Qm9hcmQuc2hpcEF0dGFja3Nbcm93XVtjb2xdID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYoaXNBaSkge1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlSW5kZXggPSBsZWdhbEF0dGFja3MuZmlsdGVyKCh2YWwpID0+ICBlbmVteUJvYXJkLnNoaXBBdHRhY2tzW3ZhbFswXV1bdmFsWzFdXSAhPT0gdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2UgPSBhdmFpbGFibGVJbmRleFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVJbmRleC5sZW5ndGgpXTtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGVuZW15Qm9hcmQucmVjZWl2ZWRBdGsoY2hvaWNlWzBdLCBjaG9pY2VbMV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVkQXRrKHJvdywgY29sKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9O1xuIFxuICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICBnZXQgbmFtZSgpIHsgcmV0dXJuIHBsYXllck5hbWV9LFxuICAgICAgICAgc2V0IG5hbWUodmFsKSB7IHBsYXllck5hbWUgPSB2YWx9LCBcbiAgICAgICAgIGdldCBib2FyZCgpIHsgcmV0dXJuIG9jZWFufSxcbiAgICAgICAgIGdldCBkb2NrKCkgeyByZXR1cm4gZG9ja30sXG4gICAgICAgICBhdGtFbmVteSxcbiAgICAgICAgIGNyZWF0ZUFsbFNoaXBzLFxuICAgICAgICAgcGxhY2VTaGlwXG4gICAgIH0pO1xuIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lLCBsZW5ndGgpIHtcbiAgICBsZXQgaGVhbHRoID0gMDtcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGVhbHRoICs9IDE7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRIZWFsdGggPSAoKSA9PiB7XG4gICAgICAgIGhlYWx0aCA9IDA7XG4gICAgICAgIHJldHVybiBoZWFsdGhcbiAgICB9O1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZihoZWFsdGggPT09IGxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgZ2V0IG5hbWUoKSB7IHJldHVybiBuYW1lIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7IHJldHVybiBsZW5ndGggfSxcbiAgICAgICAgaGl0LFxuICAgICAgICByZXNldEhlYWx0aCxcbiAgICAgICAgaXNTdW5rLFxuICAgIH0pO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmZvcm0ge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSA+IGJ1dHRvbiwgLnBsYWNlLXNoaXAge1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5mb3JtID4gYnV0dG9uOmhvdmVyLCAucGxhY2Utc2hpcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0gXG5cbi5nYW1lLWNvbnRhaW5lciB7XG4gICBkaXNwbGF5OiBub25lO1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgXG59XG5cblxuLnAxLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5hbm5vdW5jZW1lbnQge1xuICAgIGdyaWQtY29sdW1uOiAyO1xufVxuXG4ucDItY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMztcbn1cblxuLnAxLWNvbnRhaW5lciwgLnAyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5ib2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTBweCwgMWZyKSk7XG59XG5cbi5zaGlwLXBsYWNlbWVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnZlcnRpY2FsLWRvY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uaG9yaXpvbnRhbC1kb2NrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogLnZlcnRpY2FsLWRvY2sge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDEwMHB4LCAxNTBweCkpO1xuICAgIHdpZHRoOiA1MHB4O1xufSAqL1xuXG4uYmF0dGxlc2hpcC12ZXJ0aWNhbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTk5cHg7XG4gICBcbn1cblxuLmNydWlzZXItc3VibWFyaW5lLXZlcnRpY2FsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgIFxufVxuXG4uZGVzdHJveWVyLXZlcnRpY2FsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLyogICovXG4uY2Fycmllci1ob3Jpem9udGFsLWhlaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuLmJhdHRsZXNoaXAtaG9yaXpvbnRhbC1oZWlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBnYXA6IDEuNXB4O1xufVxuXG4uY3J1aXNlci1zdWJtYXJpbmUtaG9yaXpvbnRhbC1oZWlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBnYXA6IDEuNXB4O1xufVxuXG4uZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuXG4uc2hpcG1lbnQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuXG4uc2hpcG1lbnQtdmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uc2hpcG1lbnQtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5cbi5jZWxsLWNvbXB1dGVyIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxufVxuXG4uY2VsbC1odW1hbiwgLmNlbGwtY29tcHV0ZXIgIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXG4gICAgYmFja2dyb3VuZDogdGhpc3RsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmhpZGUtYnRuLCAuY3JlYXRlLXNoaXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cblxuLnNpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0dBQ0csYUFBYTtHQUNiLGtDQUFrQztHQUNsQyxxQkFBcUI7R0FDckIsbUJBQW1CO0dBQ25CLGdCQUFnQjs7QUFFbkI7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLEtBQUs7QUFDTDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9ybSA+IGJ1dHRvbiwgLnBsYWNlLXNoaXAge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbmZvcm0gPiBidXR0b246aG92ZXIsIC5wbGFjZS1zaGlwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgIFxcbn1cXG5cXG5cXG4ucDEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbi5hbm5vdW5jZW1lbnQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnAyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4ucDEtY29udGFpbmVyLCAucDItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udmVydGljYWwtZG9jayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kb2NrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiAudmVydGljYWwtZG9jayB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTAwcHgsIDE1MHB4KSk7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn0gKi9cXG5cXG4uYmF0dGxlc2hpcC12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgICBoZWlnaHQ6IDE5OXB4O1xcbiAgIFxcbn1cXG5cXG4uY3J1aXNlci1zdWJtYXJpbmUtdmVydGljYWwtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICBcXG59XFxuXFxuLmRlc3Ryb3llci12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4uY2Fycmllci1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcbi5iYXR0bGVzaGlwLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcbi5jcnVpc2VyLXN1Ym1hcmluZS1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcblxcbi5zaGlwbWVudCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4uc2hpcG1lbnQtdmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXBtZW50LWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5jZWxsLWNvbXB1dGVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG59XFxuXFxuLmNlbGwtaHVtYW4sIC5jZWxsLWNvbXB1dGVyICB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXG4gICAgYmFja2dyb3VuZDogdGhpc3RsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5oaWRlLWJ0biwgLmNyZWF0ZS1zaGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5zaW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERvbUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlL2RvbS9kb20tY29udHJvbGxlclwiXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGRvbSA9IERvbUNvbnRyb2xsZXIoKVxuZG9tLmNyZWF0ZVBsYXllckFuZEJvYXJkKClcbmRvbS5wbGFjZVNoaXAoKVxuZG9tLmJvYXJkRXZlbnQoKVxuXG4iXSwibmFtZXMiOlsiU2hpcCIsInBvc0F2YWlsYWJsZSIsIkdhbWVCb2FyZCIsIm9jZWFuIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsInNoaXBBdHRhY2tzIiwiZG9jayIsImNyZWF0ZVNoaXAiLCJuYW1lIiwic2hpcCIsInB1c2giLCJwbGFjZVNoaXAiLCJ2ZXNzZWwiLCJyb3ciLCJjb2wiLCJkaXIiLCJvY2VhbkJvYXJkIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYm9hcmQiLCJpIiwicmVjZWl2ZWRBdGsiLCJoaXQiLCJzaGlwV3JlY2tzIiwic2hpcHMiLCJzaGlwR3JhdmUiLCJpc1N1bmsiLCJldmVyeSIsInNoaXBTdW5rIiwiT2JqZWN0IiwiZnJlZXplIiwiY3JlYXRlQm9hcmQiLCJvcHRpb24iLCJwbGF5ZXJPbmVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJUd29Db250YWluZXIiLCJib2FyZE9uZUNvbnRhaW5lciIsImJvYXJkVHdvQ29udGFpbmVyIiwiZm9yRWFjaCIsInJvd0luZGV4IiwiY29sSW5kZXgiLCJjb2xDZWxsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlR2FtZSIsImRpdiIsImNvbnRhaW5lciIsImZvcm1Db250YWluZXIiLCJzdGFydCIsInBsYXllck9uZU5hbWVDb250YWluZXIiLCJwbGF5ZXJUd29OYW1lQ29udGFpbmVyIiwicDFOYW1lIiwicDJOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZU5hbWUiLCJ2YWx1ZSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiR2FtZSIsIlBvcnRhZ2UiLCJEb21TdGF0ZSIsIkRvbUNvbnRyb2xsZXIiLCJwbGFjZVNoaXBCdG4iLCJnYW1lIiwiY3JlYXRlUGxheWVyQW5kQm9hcmQiLCJwbGF5ZXJzIiwiYm9hcmRFdmVudCIsImdhbWVPdmVyIiwid2luQ29udGFpbmVyIiwiaXNTdW5rQWxsIiwicCIsIndpbm5lciIsImdldEFjdGl2ZVBsYXllciIsInVwZGF0ZVNjcmVlbiIsImNlbGwiLCJjb250YWlucyIsInBsYXlMb2dpYyIsInRhcmdldCIsImRhdGFzZXQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwidmFsIiwiY2hpbGQiLCJwb2ludGVyRXZlbnRzIiwiaHVtYW5JbnB1dCIsInRoZW4iLCJjb21wdXRlcklucHV0IiwiZXJyb3IiLCJFcnJvciIsImRhdGEiLCJIZWxwZXIiLCJyZW5kZXJTaGlwcyIsImJ1dHRvbiIsImRpcmVjdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkcmFnZ2VkIiwic291cmNlIiwiaG9yaXpvbnRhbFBvcyIsInJlbW92ZSIsInF1ZXVlIiwiY3VycmVudCIsInNoaWZ0Iiwic2VsZWN0ZWRDaGlsZCIsImZpbHRlciIsImluZGV4IiwicmVtb3ZlQ2hpbGQiLCJDcmVhdGVCb2FyZCIsIkNyZWF0ZVBsYXllciIsImlzR2FtZVN0YXJ0ZWQiLCJjdXJyZW50UGxheWVyIiwiYm9hcmRzIiwid2FpdCIsIm1zIiwiY3JlYXRlQWxsU2hpcHMiLCJwbGF5ZXIiLCJzd2l0Y2hQbGF5ZXIiLCJhdGtFbmVteSIsImFycmF5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibGVnYWxNb3ZlcyIsImxlZ2FsQXR0YWNrcyIsIlBsYXllciIsImVuZW15Qm9hcmQiLCJpc0NvbXB1dGVyIiwiaXNBaSIsInBsYXllck5hbWUiLCJoZWxwZXIiLCJzaGlwQmx1ZVByaW50cyIsImN1cnJlbnRTaGlwIiwicmFuZG9tUm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29sIiwicmFuZG9tRGlyIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiYXZhaWxhYmxlSW5kZXgiLCJjaG9pY2UiLCJoZWFsdGgiLCJyZXNldEhlYWx0aCIsImRvbSJdLCJzb3VyY2VSb290IjoiIn0=
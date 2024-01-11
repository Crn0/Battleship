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
    const horizontalPos = ["carrier-horizontal-height", "battleship-horizontal-height", "cruiser-submarine-horizontal-height", "cruiser-submarine-horizontal-height", "destroyer-horizontal-height"];
    if (e.target.value === "horizontal") {
      parent.classList.remove("vertical-dock");
      parent.classList.add("horizontal-dock");
      Array.from(child).forEach((val, index) => {
        if (typeof val.classList === "undefined") return false;
        if (val.classList.contains(horizontalPos[index])) return false;
        return child[index].classList.add(horizontalPos[index]);
      });
      return true;
    }
    ;
    if (e.target.value === "vertical") {
      parent.classList.add("vertical-dock");
      parent.classList.remove("horizontal-dock");
      Array.from(child).forEach((val, index) => {
        if (typeof val.classList === "undefined") return false;
        if (!val.classList.contains(horizontalPos[index])) return false;
        return child[index].classList.remove(horizontalPos[index]);
      });
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
      row.forEach((_, colIndex) => {
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
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   place-content: center;
   place-items: center;
   margin-top: 10px;
   
}

.game-container {
    display: none;
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
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;GACG,aAAa;GACb,kCAAkC;GAClC,qBAAqB;GACrB,mBAAmB;GACnB,gBAAgB;;AAEnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;;;GAKG;;AAEH;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;AACjB;;AAEA,KAAK;AACL;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI;AACJ;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n}\n\n\n.form-container {\n    display: grid;\n    place-content: center;\n    justify-content: center;\n    margin-top: 20px;\n}\n\nform {\n    height: 250px;\n    margin: 10px;\n    padding: 10px;\n    display: grid;\n    place-items: center;\n    text-align: center;\n}\n\nform > button, .place-ship {\n    width: 4rem;\n    height: 2rem;\n    background-color: white;\n    color: black;\n    border: 1px solid red;\n}\n\nform > button:hover, .place-ship:hover {\n    background-color: red;\n    color: white;\n} \n\n.game-container {\n   display: grid;\n   grid-template-columns: 1fr 1fr 1fr;\n   place-content: center;\n   place-items: center;\n   margin-top: 10px;\n   \n}\n\n.game-container {\n    display: none;\n}\n\n.p1-container {\n    grid-column: 1;\n}\n\n.announcement {\n    grid-column: 2;\n}\n\n.p2-container {\n    grid-column: 3;\n}\n\n.p1-container, .p2-container {\n    display: grid;\n    gap: 10px;\n}\n\n.boards {\n    display: grid;\n    width: 500px;\n    height: 500px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.ship-placement{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.vertical-dock {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    width: 100px;\n    gap: 10px;\n}\n\n.horizontal-dock {\n    display: grid;\n    gap: 10px;\n}\n\n/* .vertical-dock {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(100px, 150px));\n    width: 50px;\n} */\n\n.battleship-vertical-height {\n    height: 199px;\n   \n}\n\n.cruiser-submarine-vertical-height {\n    height: 150px;\n   \n}\n\n.destroyer-vertical-height {\n    height: 100px;\n}\n\n/*  */\n.carrier-horizontal-height {\n    display: flex;\n    width: auto;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.battleship-horizontal-height {\n    display: flex;\n    width: 190px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.cruiser-submarine-horizontal-height {\n    display: flex;\n    width: 150px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.destroyer-horizontal-height {\n    display: flex;\n    width: 100px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n\n.shipment {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n    background: blue;\n}\n\n.shipment-valid {\n    background-color: green;\n}\n\n.shipment-invalid {\n    background-color: red;\n}\n\n\n.cell-computer {\n    pointer-events: none\n}\n\n.cell-human, .cell-computer  {\n    /* background-color: aliceblue; */\n    background: thistle;\n    border: 1px solid white;\n}\n\n.hide-btn, .create-ship {\n    display: none;\n}\n\n.ship {\n    background-color: blue;\n}\n\n.hit {\n    background-color: blanchedalmond;\n}\n\n.sink {\n    background-color: red;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQXVEO0FBRWxDO0FBRXJCLE1BQU0rSCxHQUFHLEdBQUdwRixzRUFBYSxDQUFDLENBQUM7QUFDM0JvRixHQUFHLENBQUNqRixvQkFBb0IsQ0FBQyxDQUFDO0FBQzFCaUYsR0FBRyxDQUFDOUksU0FBUyxDQUFDLENBQUM7QUFDZjhJLEdBQUcsQ0FBQy9FLFVBQVUsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9ib2FyZC9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vYm9hcmQtcGxheWVyL2JvYXJkLXBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vZG9tLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2RvbS1zdGF0ZS9kb20tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL3NoaXAtcG9ydGFnZS9zaGlwLXBvcnRhZ2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcbmltcG9ydCBwb3NBdmFpbGFibGUgZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJvYXJkKCkge1xuICAgIGNvbnN0IG9jZWFuID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMH0sICgpID0+IEFycmF5KDEwKS5maWxsKGZhbHNlKSk7XG5cbiAgICBjb25zdCBzaGlwQXR0YWNrcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChmYWxzZSkpO1xuXG4gICAgY29uc3QgZG9jayA9IFtdO1xuXG4gICAgY29uc3QgY3JlYXRlU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAobmFtZSwgbGVuZ3RoKTtcblxuICAgICAgICBkb2NrLnB1c2goc2hpcClcblxuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9OyBcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh2ZXNzZWwsIHJvdywgY29sLCBkaXIsIG9jZWFuQm9hcmQgPSBvY2VhbikgPT4ge1xuICAgICAgICBjb25zdCBib2FyZCA9IG9jZWFuQm9hcmQ7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB2ZXNzZWxcblxuICAgICAgICBpZihwb3NBdmFpbGFibGUoc2hpcCwgcm93LCBjb2wsIGRpciwgYm9hcmQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZihkaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sICsgaV0gPSBzaGlwO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZihkaXIgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtyb3cgKyBpXVtjb2xdID0gc2hpcDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZWRBdGsgPSAocm93LCBjb2wsIG9jZWFuQm9hcmQgPSBvY2VhbikgPT4ge1xuICAgICAgICBjb25zdCBib2FyZCA9IG9jZWFuQm9hcmQ7XG4gICAgICAgIFxuICAgICAgICBpZihzaGlwQXR0YWNrc1tyb3ddW2NvbF0gPT09IGZhbHNlICYmIGJvYXJkW3Jvd11bY29sXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgICAgICAgIHNoaXBBdHRhY2tzW3Jvd11bY29sXSA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICBcbiAgICAgICAgc2hpcEF0dGFja3Nbcm93XVtjb2xdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBzaGlwV3JlY2tzID0gKHNoaXBzID0gZG9jaykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwR3JhdmUgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZihzaGlwc1tpXS5pc1N1bmsoKSA9PT0gdHJ1ZSB8fCBzaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzaGlwR3JhdmUucHVzaChzaGlwc1tpXS5pc1N1bmsoKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2hpcEdyYXZlLmV2ZXJ5KHNoaXBTdW5rID0+IHNoaXBTdW5rID09PSB0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgb2NlYW4oKSB7IHJldHVybiBvY2Vhbn0sXG4gICAgICAgIGdldCBzaGlwQXR0YWNrcygpIHsgcmV0dXJuIHNoaXBBdHRhY2tzfSxcbiAgICAgICAgZ2V0IGRvY2soKSB7IHJldHVybiBkb2NrfSxcbiAgICAgICAgY3JlYXRlU2hpcCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlZEF0ayxcbiAgICAgICAgc2hpcFdyZWNrcyxcbiAgICB9KTtcbn07IiwiY29uc3QgY3JlYXRlQm9hcmQgPSAob3B0aW9uKSA9PiB7XG4gICAgLy8gcGxheWVyIGNvbnRhaW5lclxuICAgIGNvbnN0IHBsYXllck9uZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDEtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBsYXllclR3b0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucDItY29udGFpbmVyXCIpO1xuICAgIC8vIHBsYXllciBib2FyZCBjb250YWluZXJcbiAgICBjb25zdCBib2FyZE9uZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtYW4tYm9hcmRcIik7XG4gICAgY29uc3QgYm9hcmRUd29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuXG4gICAgb3B0aW9uWzBdLmJvYXJkLm9jZWFuLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICAgICAgICBjb2xDZWxsLmNsYXNzTmFtZSA9IFwiY2VsbFwiO1xuICAgICAgICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCByb3dJbmRleCk7XG4gICAgICAgICAgICBjb2xDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbEluZGV4KTtcbiAgICAgICAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtaHVtYW5cIik7XG4gICAgICAgICAgICBjb2xDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcm9wLXRhcmdldFwiKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGJvYXJkT25lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbENlbGwpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYXllck9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZE9uZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgXG4gICAgb3B0aW9uWzFdLmJvYXJkLm9jZWFuLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY29sQ2VsbC5jbGFzc05hbWUgPSBcImNlbGxcIjtcblxuICAgICAgICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCByb3dJbmRleCk7XG4gICAgICAgICAgICBjb2xDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbEluZGV4KTtcbiAgICAgICAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtY29tcHV0ZXJcIik7XG4gICAgICAgIFxuICAgICAgICAgICAgYm9hcmRUd29Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sQ2VsbClcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgcGxheWVyVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkVHdvQ29udGFpbmVyKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUdhbWUob3B0aW9uLCBkaXYpIHtcbiAgICAvLyBmb3JtXG4gICAgY29uc3QgY29udGFpbmVyID0gZGl2O1xuICAgIC8vIGNvbnN0IHBsYWNlU2hpcEJ0biA9IGJ1dHRvbjtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1uYW1lXCIpO1xuICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydFwiKTtcbiAgICAvLyBwbGF5ZXIgY29udGFpbmVyXG4gICAgY29uc3QgcGxheWVyT25lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMS1jb250YWluZXJcIik7XG4gICAgY29uc3QgcGxheWVyVHdvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wMi1jb250YWluZXJcIik7XG4gICAgLy8gbmFtZSBjb250YWluZXJcbiAgICBjb25zdCBwbGF5ZXJPbmVOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29OYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBuYW1lIHBhcmFncmFwaFxuICAgIGNvbnN0IHAxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHAyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIHBsYXllciBuYW1lIGNsYXNzXG4gICAgcDFOYW1lLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItbmFtZVwiKTtcbiAgICBwMk5hbWUuY2xhc3NMaXN0LmFkZChcInBsYXllci1uYW1lXCIpXG5cbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjaGFuZ2VOYW1lID0gb3B0aW9uWzBdO1xuICAgIFxuICAgICAgICBpZihuYW1lLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBjaGFuZ2VOYW1lLm5hbWUgPSBuYW1lLnZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcDFOYW1lLnRleHRDb250ZW50ID0gYENvbW1hbmRlciAke29wdGlvblswXS5uYW1lfWA7XG4gICAgICAgIHAyTmFtZS50ZXh0Q29udGVudCA9IGBDb21tYW5kZXIgJHtvcHRpb25bMV0ubmFtZX1gO1xuXG4gICAgICAgIHBsYXllck9uZU5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocDFOYW1lKTtcbiAgICAgICAgcGxheWVyVHdvTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwMk5hbWUpO1xuXG4gICAgICAgIHBsYXllck9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVOYW1lQ29udGFpbmVyKTtcblxuICAgICAgICBwbGF5ZXJUd29Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvTmFtZUNvbnRhaW5lcilcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0NvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUJvYXJkKG9wdGlvbik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIFxuICAgIFxufTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vZ2FtZS9nYW1lXCI7XG5pbXBvcnQgY3JlYXRlR2FtZSBmcm9tIFwiLi9ib2FyZC1wbGF5ZXIvYm9hcmQtcGxheWVyXCI7XG5pbXBvcnQgUG9ydGFnZSBmcm9tIFwiLi9zaGlwLXBvcnRhZ2Uvc2hpcC1wb3J0YWdlXCJcbmltcG9ydCBEb21TdGF0ZSBmcm9tIFwiLi9kb20tc3RhdGUvZG9tLXN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbUNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLXNoaXBcIik7XG5cbiAgICBjb25zdCBnYW1lID0gR2FtZSgpOyAgIFxuXG4gICAgY29uc3QgY3JlYXRlUGxheWVyQW5kQm9hcmQgPSAoKSA9PiBjcmVhdGVHYW1lKGdhbWUucGxheWVycywgY29udGFpbmVyKVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKCkgPT4gUG9ydGFnZShnYW1lLCBwbGFjZVNoaXBCdG4pO1xuXG4gICAgY29uc3QgYm9hcmRFdmVudCA9ICgpID0+IERvbVN0YXRlKGdhbWUpXG4gICAgXG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGNyZWF0ZVBsYXllckFuZEJvYXJkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGJvYXJkRXZlbnQsXG4gICAgfSk7XG59OyIsImNvbnN0IGdhbWVPdmVyID0gKG9wdGlvbikgPT4ge1xuICAgIGNvbnN0IHdpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpO1xuICAgIGlmKCFvcHRpb24uaXNTdW5rQWxsKCkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBcbiAgICBsZXQgd2lubmVyO1xuICAgIHdpbm5lciA9IG9wdGlvbi5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lID09PSBvcHRpb24ucGxheWVyc1swXS5uYW1lID8gd2lubmVyID0gb3B0aW9uLnBsYXllcnNbMV0ubmFtZSA6IHdpbm5lciA9IG9wdGlvbi5wbGF5ZXJzWzBdLm5hbWU7XG4gICAgcC50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7d2lubmVyfWA7XG5cbiAgICB3aW5Db250YWluZXIuYXBwZW5kQ2hpbGQocClcbiAgICByZXR1cm4gdHJ1ZTtcbn07IFxuXG5jb25zdCB1cGRhdGVTY3JlZW4gPSAob3B0aW9uKSA9PiB7XG4gICAgLy8gaHVtYW4gYm9hcmRcbiAgICBvcHRpb25bMF0uYm9hcmQuc2hpcEF0dGFja3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4gcm93LmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgaWYoY29sICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWh1bWFuW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApXG4gICAgICAgICAgICBpZighY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZihjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJoaXRcIjtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaW5rXCIpOyBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKTsgXG5cbiAgICAvLyBjb21wdXRlciBib2FyZFxuICAgIG9wdGlvblsxXS5ib2FyZC5zaGlwQXR0YWNrcy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICBpZihjb2wgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbC1jb21wdXRlcltkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCJdW2RhdGEtY29sPVwiJHtjb2xJbmRleH1cIl1gKVxuICAgICAgICAgICAgaWYoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmICFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtY29tcHV0ZXJcIikpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwibWlzc1wiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLWNvbXB1dGVyXCIpKSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwic2lua1wiO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNpbmtcIik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkpOyBcblxuICAgIFxufTtcblxuY29uc3QgcGxheUxvZ2ljID0gYXN5bmMgKGUsb3B0aW9uKSA9PiB7XG4gICAgY29uc3Qge3Jvd30gPSBlLnRhcmdldC5kYXRhc2V0XG4gICAgY29uc3Qge2NvbH0gPSBlLnRhcmdldC5kYXRhc2V0XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgcGxheWVyQ3JlYXRpb25Eb24gPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBpZihvcHRpb24uaXNTdW5rQWxsKCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZihyb3cgIT09IHVuZGVmaW5lZCAmJiBjb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJvYXJkc1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICAvLyBkaXNhYmxlIHBvaW50ZXJcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdmFsO1xuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgIFxuICAgICAgICAgICAgYXdhaXQgb3B0aW9uLmh1bWFuSW5wdXQoK3JvdywgK2NvbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlU2NyZWVuKG9wdGlvbi5wbGF5ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBvcHRpb24uY29tcHV0ZXJJbnB1dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcmVlbihvcHRpb24ucGxheWVycyk7XG4gICAgICAgICAgICAgICAgLy8gZW5hYmxlIHBvaW50ZXJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZXJyb3IgPSBFcnJvcihcInlvdSBjbGlja2VkIHRoZSBib2FyZCBmcmFtZVwiKTtcbiAgICAgICAgdGhyb3coZXJyb3IpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7IFxuICAgICAgICB9O1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbVN0YXRlKG9wdGlvbikge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcblxuICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBwbGF5TG9naWMoZSwgb3B0aW9uKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBnYW1lIGlzIG92ZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZGF0YSA9PT0gZmFsc2UgfHwgdHlwZW9mIGRhdGEuaXNTdW5rQWxsICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBpZihkYXRhLmlzU3Vua0FsbCgpKSByZXR1cm4gZ2FtZU92ZXIob3B0aW9uKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIG90aGVyd2lzZVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vLi4vaGVscGVyL2hlbHBlclwiO1xuXG5jb25zdCByZW5kZXJTaGlwcyA9IChvcHRpb24pID0+IHtcbiAgICBvcHRpb25bMF0uYm9hcmQub2NlYW4uZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWh1bWFuW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApO1xuICAgICAgICAgICAgaWYoY29sICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICBvcHRpb25bMV0uYm9hcmQub2NlYW4uZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbXB1dGVyW2RhdGEtcm93PVwiJHtyb3dJbmRleH1cIl1bZGF0YS1jb2w9XCIke2NvbEluZGV4fVwiXWApO1xuICAgICAgICAgICAgaWYoY29sICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXAtY29tcHV0ZXJcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxhY2VTaGlwKG9wdGlvbiwgYnV0dG9uKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXJlY3Rpb25cIik7XG4gICAgY29uc3QgcGxhY2VTaGlwQnRuID0gYnV0dG9uO1xuICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZS1zaGlwXCIpO1xuXG4gICAgY29uc3QgcG9zQXZhaWxhYmxlID0gKHNoaXAsIHJvdywgY29sLCBkaXIsIGJvYXJkKSA9PiBIZWxwZXIoKS5wb3NBdmFpbGFibGUoc2hpcCwgcm93LCBjb2wsIGRpciwgYm9hcmQpXG4gICAgcGxhY2VTaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBwbGFjZVNoaXBCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgXG4gICAgICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsLWNvbXB1dGVyXCIpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gdmFsO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBwbGFjZSBjb21wdXRlciBzaGlwO1xuICAgICAgICBvcHRpb24ucGxheWVyc1sxXS5wbGFjZVNoaXAoKVxuICAgICAgICByZW5kZXJTaGlwcyhvcHRpb24ucGxheWVycylcbiAgICB9KTtcblxuICAgIGxldCBkcmFnZ2VkID0gbnVsbDsgICAgXG4gICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb2NrXCIpO1xuICAgIGNvbnN0IGRpciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlyLXNlbGVjdFwiKVxuXG4gICAgZGlyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuIFxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvY2tcIik7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gcGFyZW50LmNoaWxkcmVuXG5cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFBvcyA9IFtcbiAgICAgICAgICAgIFwiY2Fycmllci1ob3Jpem9udGFsLWhlaWdodFwiLFxuICAgICAgICAgICAgXCJiYXR0bGVzaGlwLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgICAgICBcImNydWlzZXItc3VibWFyaW5lLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgICAgICBcImNydWlzZXItc3VibWFyaW5lLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgICAgICBcImRlc3Ryb3llci1ob3Jpem9udGFsLWhlaWdodFwiXG4gICAgICAgIF07XG4gICBcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZXJ0aWNhbC1kb2NrXCIpO1xuXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImhvcml6b250YWwtZG9ja1wiKTtcbiAgICAgICAgXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbC5jbGFzc0xpc3QgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZih2YWwuY2xhc3NMaXN0LmNvbnRhaW5zKGhvcml6b250YWxQb3NbaW5kZXhdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkW2luZGV4XS5jbGFzc0xpc3QuYWRkKGhvcml6b250YWxQb3NbaW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsLWRvY2tcIik7XG5cbiAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9yaXpvbnRhbC1kb2NrXCIpO1xuICAgICAgIFxuICAgICAgICAgICAgQXJyYXkuZnJvbShjaGlsZCkuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWwuY2xhc3NMaXN0ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYoIXZhbC5jbGFzc0xpc3QuY29udGFpbnMoaG9yaXpvbnRhbFBvc1tpbmRleF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoaG9yaXpvbnRhbFBvc1tpbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZE5vZGVzO1xuIFxuICAgICAgICBjb25zdCBzZWxlY3RlZENoaWxkID0gQXJyYXkuZnJvbShjaGlsZHJlbikuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiB2YWwuY2xhc3NMaXN0ICE9PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZGF0YXNldC5uYW1lID09PSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgIFxuICAgICAgICBkcmFnZ2VkID0gc2VsZWN0ZWRDaGlsZFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbi1ib2FyZFwiKTtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICAgICAgIH0sXG4gICAgICAgIGZhbHNlLFxuICAgICk7XG5cbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoKSA9PiB7XG5cbiAgICB9KTtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsICgpID0+IHtcbiAgIFxuICAgIH0pO1xuXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRyYWdnZWRbMF0ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkcmFnZ2VkWzBdO1xuICAgICAgICBjb25zdCB7cm93fSA9IGUudGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHtjb2x9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgY29uc3Qge2luZGV4fSA9IGRyYWdnZWRbMF0uZGF0YXNldDtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG9wdGlvbi5wbGF5ZXJzWzBdLmRvY2tbK2luZGV4XVxuXG4gICAgICAgIGlmKCFwb3NBdmFpbGFibGUoc2hpcCwgK3JvdywgK2NvbCwgZGlyLnZhbHVlLCBvcHRpb24ucGxheWVyc1swXS5ib2FyZC5vY2VhbikpIHJldHVybiBmYWxzZTtcbiAgICAgIFxuXG5cbiAgICAgICAgb3B0aW9uLnBsYXllcnNbMF0ucGxhY2VTaGlwKHNoaXAsICtyb3csICtjb2wsIGRpci52YWx1ZSlcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICBpZihwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzdGFydC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG5cIik7XG4gICAgICAgICAgICBzdGFydC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICAgICAgICAgICAgZGlyZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgXG4gICAgICAgIHJldHVybiByZW5kZXJTaGlwcyhvcHRpb24ucGxheWVycylcbiAgICB9KTtcblxuICAgICAgICBcbn07XG4iLCJpbXBvcnQgQ3JlYXRlQm9hcmQgZnJvbSBcIi4uL2JvYXJkL2JvYXJkXCI7XG5pbXBvcnQgQ3JlYXRlUGxheWVyIGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgSGVscGVyIGZyb20gXCIuLi9oZWxwZXIvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgbGV0IGlzR2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgY3VycmVudFBsYXllcjtcblxuICAgIGNvbnN0IHBsYXllcnMgPSBbXTtcbiAgICBjb25zdCBib2FyZHMgPSBbXTtcblxuICAgIGNvbnN0IHdhaXQgPSAobXMpID0+IEhlbHBlcigpLndhaXQobXMpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZWQgYm9hcmRzIGFuZCBwbGF5ZXJzXG4gICAgaWYoaXNHYW1lU3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgYm9hcmRzLnB1c2goQ3JlYXRlQm9hcmQoKSk7XG4gICAgICAgIGJvYXJkcy5wdXNoKENyZWF0ZUJvYXJkKCkpO1xuICAgICAgIFxuXG4gICAgICAgIHBsYXllcnMucHVzaChDcmVhdGVQbGF5ZXIoXCJodW1hblwiLCBib2FyZHNbMF0sIGJvYXJkc1sxXSkpO1xuICAgICAgICBwbGF5ZXJzLnB1c2goQ3JlYXRlUGxheWVyKFwiY29tcHV0ZXJcIixib2FyZHNbMV0sYm9hcmRzWzBdLCB0cnVlKSk7XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXJzWzBdLmNyZWF0ZUFsbFNoaXBzKCk7XG4gICAgICAgIHBsYXllcnNbMV0uY3JlYXRlQWxsU2hpcHMoKTtcblxuICAgICAgICBjdXJyZW50UGxheWVyID0gey4uLnBsYXllcnNbMF19IFxuICAgICAgICBpc0dhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIFxuICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICBjb25zdCBpc1N1bmtBbGwgPSAocGxheWVyID0gZ2V0QWN0aXZlUGxheWVyKCkpID0+IHBsYXllci5ib2FyZC5zaGlwV3JlY2tzKCk7XG4gICAgXG4gICAgY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50UGxheWVyLm5hbWUgPT09IHBsYXllcnNbMF0ubmFtZSkge1xuICAgICAgICAgICAgY3VycmVudFBsYXllciA9IHsuLi5wbGF5ZXJzWzFdfTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGxheWVyO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY3VycmVudFBsYXllciA9IHsuLi5wbGF5ZXJzWzBdfTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGh1bWFuSW5wdXQgPSBhc3luYyAocm93LCBjb2wpID0+IHtcbiAgICAgICAgYXdhaXQgd2FpdCgxMDAwKVxuICAgICAgICBwbGF5ZXJzWzBdLmF0a0VuZW15KHJvdywgY29sKTtcbiAgICAgICAgc3dpdGNoUGxheWVyKClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbXB1dGVySW5wdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKGlzU3Vua0FsbCgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGF3YWl0IHdhaXQoMjAwMCk7XG4gICAgICAgIHBsYXllcnNbMV0uYXRrRW5lbXkoKTtcbiAgICAgICAgc3dpdGNoUGxheWVyKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9O1xuXG4gICAgXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICBnZXQgcGxheWVycygpIHsgcmV0dXJuIHBsYXllcnN9LFxuICAgICAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgICAgIHN3aXRjaFBsYXllcixcbiAgICAgICAgaXNTdW5rQWxsLFxuICAgICAgICBodW1hbklucHV0LFxuICAgICAgICBjb21wdXRlcklucHV0LFxuICAgICAgICBcbiAgICB9KTtcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxwZXIoKSB7XG4gICAgY29uc3QgcG9zQXZhaWxhYmxlID0gKHNoaXAsIHJvdywgY29sLCBkaXIsIGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZihkaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgaWYoY29sICsgaSA+IDkpICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFtyb3ddW2NvbCArIGldKTtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBpZihkaXIgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGlmKHJvdyArIGkgPiA5KSAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbcm93ICsgaV1bY29sXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGFycmF5LmV2ZXJ5KChjZWxsKSA9PiBjZWxsID09PSBmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHdhaXQgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsZWdhbE1vdmVzID0gKG9jZWFuKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IFtdO1xuICAgICBcbiAgICAgICAgb2NlYW4uc2hpcEF0dGFja3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKF8sIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGVnYWxBdHRhY2tzLnB1c2goW3Jvd0luZGV4LCBjb2xJbmRleF0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxlZ2FsQXR0YWNrcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zQXZhaWxhYmxlLFxuICAgICAgICB3YWl0LFxuICAgICAgICBsZWdhbE1vdmVzXG4gICAgfTtcbn07XG5cblxuXG5cbiIsImltcG9ydCBIZWxwZXIgZnJvbSBcIi4uL2hlbHBlci9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKG5hbWUsIGJvYXJkLCBlbmVteUJvYXJkLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBpc0FpID0gaXNDb21wdXRlcjtcbiAgICBcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWVcblxuICAgIGNvbnN0IG9jZWFuID0gYm9hcmQ7XG5cbiAgICBjb25zdCBoZWxwZXIgPSBIZWxwZXIoKTtcblxuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IGhlbHBlci5sZWdhbE1vdmVzKG9jZWFuKTtcblxuICAgIGNvbnN0IHNoaXBCbHVlUHJpbnRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImNhcnJpZXJcIixcbiAgICAgICAgICAgIGxlbmd0aDogNSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgIFxuICAgICAgICAgICAgbmFtZTogXCJiYXR0bGVzaGlwXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICBcbiAgICAgICAgICAgIG5hbWU6IFwiY3J1aXNlclwiLFxuICAgICAgICAgICAgbGVuZ3RoOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICBcbiAgICAgICAgICAgIG5hbWU6IFwic3VibWFyaW5lXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgIFxuICAgICAgICAgICAgbmFtZTogXCJkZXN0cm95ZXJcIixcbiAgICAgICAgICAgIGxlbmd0aDogMlxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCB7ZG9ja30gPSBvY2VhbjtcblxuICAgIGNvbnN0IGNyZWF0ZUFsbFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBCbHVlUHJpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvY2Vhbi5jcmVhdGVTaGlwKHNoaXBCbHVlUHJpbnRzW2ldLm5hbWUsIHNoaXBCbHVlUHJpbnRzW2ldLmxlbmd0aClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCByb3csIGNvbCwgZGlyKSA9PiB7XG4gICAgICAgIGlmKGlzQWkpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gWy4uLm9jZWFuLmRvY2tdXG4gICBcbiAgICAgICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gcXVldWVbMF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tRGlyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9uLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoaGVscGVyLnBvc0F2YWlsYWJsZShjdXJyZW50U2hpcCwgcmFuZG9tUm93LCByYW5kb21Db2wsIGRpcmVjdGlvbltyYW5kb21EaXJdLCBvY2Vhbi5vY2VhbikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW4ucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgZGlyZWN0aW9uW3JhbmRvbURpcl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG9jZWFuLnBsYWNlU2hpcChzaGlwLCByb3csIGNvbCwgZGlyKVxuICAgIH07XG5cbiAgIFxuXG4gICAgY29uc3QgYXRrRW5lbXkgPSAocm93LCBjb2wpID0+IHtcbiAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcihyb3cpICYmIE51bWJlci5pc0ludGVnZXIoY29sKSAmJiBlbmVteUJvYXJkLnNoaXBBdHRhY2tzW3Jvd11bY29sXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmKGlzQWkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZUluZGV4ID0gbGVnYWxBdHRhY2tzLmZpbHRlcigodmFsKSA9PiAgZW5lbXlCb2FyZC5zaGlwQXR0YWNrc1t2YWxbMF1dW3ZhbFsxXV0gIT09IHRydWUpO1xuICAgICAgICAgICAgY29uc3QgY2hvaWNlID0gYXZhaWxhYmxlSW5kZXhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlSW5kZXgubGVuZ3RoKV07XG4gICAgICAgICAgXG4gICAgICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVkQXRrKGNob2ljZVswXSwgY2hvaWNlWzFdKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlZEF0ayhyb3csIGNvbCk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfTtcbiBcbiAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgZ2V0IG5hbWUoKSB7IHJldHVybiBwbGF5ZXJOYW1lfSxcbiAgICAgICAgIHNldCBuYW1lKHZhbCkgeyBwbGF5ZXJOYW1lID0gdmFsfSwgXG4gICAgICAgICBnZXQgYm9hcmQoKSB7IHJldHVybiBvY2Vhbn0sXG4gICAgICAgICBnZXQgZG9jaygpIHsgcmV0dXJuIGRvY2t9LFxuICAgICAgICAgYXRrRW5lbXksXG4gICAgICAgICBjcmVhdGVBbGxTaGlwcyxcbiAgICAgICAgIHBsYWNlU2hpcFxuICAgICB9KTtcbiB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gICAgbGV0IGhlYWx0aCA9IDA7XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhlYWx0aCArPSAxO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0SGVhbHRoID0gKCkgPT4ge1xuICAgICAgICBoZWFsdGggPSAwO1xuICAgICAgICByZXR1cm4gaGVhbHRoXG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYoaGVhbHRoID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGdldCBuYW1lKCkgeyByZXR1cm4gbmFtZSB9LFxuICAgICAgICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gbGVuZ3RoIH0sXG4gICAgICAgIGhpdCxcbiAgICAgICAgcmVzZXRIZWFsdGgsXG4gICAgICAgIGlzU3VuayxcbiAgICB9KTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5mb3JtIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0gPiBidXR0b24sIC5wbGFjZS1zaGlwIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuZm9ybSA+IGJ1dHRvbjpob3ZlciwgLnBsYWNlLXNoaXA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG59IFxuXG4uZ2FtZS1jb250YWluZXIge1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIFxufVxuXG4uZ2FtZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wMS1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxO1xufVxuXG4uYW5ub3VuY2VtZW50IHtcbiAgICBncmlkLWNvbHVtbjogMjtcbn1cblxuLnAyLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG59XG5cbi5wMS1jb250YWluZXIsIC5wMi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYm9hcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uc2hpcC1wbGFjZW1lbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi52ZXJ0aWNhbC1kb2NrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLmhvcml6b250YWwtZG9jayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIC52ZXJ0aWNhbC1kb2NrIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgxMDBweCwgMTUwcHgpKTtcbiAgICB3aWR0aDogNTBweDtcbn0gKi9cblxuLmJhdHRsZXNoaXAtdmVydGljYWwtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE5OXB4O1xuICAgXG59XG5cbi5jcnVpc2VyLXN1Ym1hcmluZS12ZXJ0aWNhbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICBcbn1cblxuLmRlc3Ryb3llci12ZXJ0aWNhbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi8qICAqL1xuLmNhcnJpZXItaG9yaXpvbnRhbC1oZWlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGdhcDogMS41cHg7XG59XG5cbi5iYXR0bGVzaGlwLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuLmNydWlzZXItc3VibWFyaW5lLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuLmRlc3Ryb3llci1ob3Jpem9udGFsLWhlaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGdhcDogMS41cHg7XG59XG5cblxuLnNoaXBtZW50IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLnNoaXBtZW50LXZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnNoaXBtZW50LWludmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuXG4uY2VsbC1jb21wdXRlciB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbn1cblxuLmNlbGwtaHVtYW4sIC5jZWxsLWNvbXB1dGVyICB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xuICAgIGJhY2tncm91bmQ6IHRoaXN0bGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5oaWRlLWJ0biwgLmNyZWF0ZS1zaGlwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5zaW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtHQUNHLGFBQWE7R0FDYixrQ0FBa0M7R0FDbEMscUJBQXFCO0dBQ3JCLG1CQUFtQjtHQUNuQixnQkFBZ0I7O0FBRW5COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsS0FBSztBQUNMO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uLCAucGxhY2Utc2hpcCB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuZm9ybSA+IGJ1dHRvbjpob3ZlciwgLnBsYWNlLXNoaXA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgXFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wMS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuLmFubm91bmNlbWVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4ucDItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxufVxcblxcbi5wMS1jb250YWluZXIsIC5wMi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udmVydGljYWwtZG9jayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kb2NrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiAudmVydGljYWwtZG9jayB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTAwcHgsIDE1MHB4KSk7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn0gKi9cXG5cXG4uYmF0dGxlc2hpcC12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgICBoZWlnaHQ6IDE5OXB4O1xcbiAgIFxcbn1cXG5cXG4uY3J1aXNlci1zdWJtYXJpbmUtdmVydGljYWwtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICBcXG59XFxuXFxuLmRlc3Ryb3llci12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4uY2Fycmllci1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcbi5iYXR0bGVzaGlwLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcbi5jcnVpc2VyLXN1Ym1hcmluZS1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcblxcbi5zaGlwbWVudCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4uc2hpcG1lbnQtdmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXBtZW50LWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5jZWxsLWNvbXB1dGVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG59XFxuXFxuLmNlbGwtaHVtYW4sIC5jZWxsLWNvbXB1dGVyICB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXG4gICAgYmFja2dyb3VuZDogdGhpc3RsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5oaWRlLWJ0biwgLmNyZWF0ZS1zaGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5zaW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERvbUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlL2RvbS9kb20tY29udHJvbGxlclwiXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGRvbSA9IERvbUNvbnRyb2xsZXIoKVxuZG9tLmNyZWF0ZVBsYXllckFuZEJvYXJkKClcbmRvbS5wbGFjZVNoaXAoKVxuZG9tLmJvYXJkRXZlbnQoKVxuXG4iXSwibmFtZXMiOlsiU2hpcCIsInBvc0F2YWlsYWJsZSIsIkdhbWVCb2FyZCIsIm9jZWFuIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsInNoaXBBdHRhY2tzIiwiZG9jayIsImNyZWF0ZVNoaXAiLCJuYW1lIiwic2hpcCIsInB1c2giLCJwbGFjZVNoaXAiLCJ2ZXNzZWwiLCJyb3ciLCJjb2wiLCJkaXIiLCJvY2VhbkJvYXJkIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYm9hcmQiLCJpIiwicmVjZWl2ZWRBdGsiLCJoaXQiLCJzaGlwV3JlY2tzIiwic2hpcHMiLCJzaGlwR3JhdmUiLCJpc1N1bmsiLCJldmVyeSIsInNoaXBTdW5rIiwiT2JqZWN0IiwiZnJlZXplIiwiY3JlYXRlQm9hcmQiLCJvcHRpb24iLCJwbGF5ZXJPbmVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJUd29Db250YWluZXIiLCJib2FyZE9uZUNvbnRhaW5lciIsImJvYXJkVHdvQ29udGFpbmVyIiwiZm9yRWFjaCIsInJvd0luZGV4IiwiY29sSW5kZXgiLCJjb2xDZWxsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlR2FtZSIsImRpdiIsImNvbnRhaW5lciIsImZvcm1Db250YWluZXIiLCJzdGFydCIsInBsYXllck9uZU5hbWVDb250YWluZXIiLCJwbGF5ZXJUd29OYW1lQ29udGFpbmVyIiwicDFOYW1lIiwicDJOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZU5hbWUiLCJ2YWx1ZSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiR2FtZSIsIlBvcnRhZ2UiLCJEb21TdGF0ZSIsIkRvbUNvbnRyb2xsZXIiLCJwbGFjZVNoaXBCdG4iLCJnYW1lIiwiY3JlYXRlUGxheWVyQW5kQm9hcmQiLCJwbGF5ZXJzIiwiYm9hcmRFdmVudCIsImdhbWVPdmVyIiwid2luQ29udGFpbmVyIiwiaXNTdW5rQWxsIiwicCIsIndpbm5lciIsImdldEFjdGl2ZVBsYXllciIsInVwZGF0ZVNjcmVlbiIsImNlbGwiLCJjb250YWlucyIsInBsYXlMb2dpYyIsInRhcmdldCIsImRhdGFzZXQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwidmFsIiwiY2hpbGQiLCJwb2ludGVyRXZlbnRzIiwiaHVtYW5JbnB1dCIsInRoZW4iLCJjb21wdXRlcklucHV0IiwiZXJyb3IiLCJFcnJvciIsImRhdGEiLCJIZWxwZXIiLCJyZW5kZXJTaGlwcyIsImJ1dHRvbiIsImRpcmVjdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkcmFnZ2VkIiwic291cmNlIiwiaG9yaXpvbnRhbFBvcyIsInJlbW92ZSIsImluZGV4Iiwic2VsZWN0ZWRDaGlsZCIsImZpbHRlciIsInJlbW92ZUNoaWxkIiwiQ3JlYXRlQm9hcmQiLCJDcmVhdGVQbGF5ZXIiLCJpc0dhbWVTdGFydGVkIiwiY3VycmVudFBsYXllciIsImJvYXJkcyIsIndhaXQiLCJtcyIsImNyZWF0ZUFsbFNoaXBzIiwicGxheWVyIiwic3dpdGNoUGxheWVyIiwiYXRrRW5lbXkiLCJhcnJheSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImxlZ2FsTW92ZXMiLCJsZWdhbEF0dGFja3MiLCJfIiwiUGxheWVyIiwiZW5lbXlCb2FyZCIsImlzQ29tcHV0ZXIiLCJpc0FpIiwicGxheWVyTmFtZSIsImhlbHBlciIsInNoaXBCbHVlUHJpbnRzIiwicXVldWUiLCJjdXJyZW50U2hpcCIsInJhbmRvbVJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvbCIsInJhbmRvbURpciIsInNoaWZ0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiYXZhaWxhYmxlSW5kZXgiLCJjaG9pY2UiLCJoZWFsdGgiLCJyZXNldEhlYWx0aCIsImRvbSJdLCJzb3VyY2VSb290IjoiIn0=
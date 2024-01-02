export default function Player(name, board1, board2, isComputer = false) {
    const isAi = isComputer;
 
    const board = board1;
 
    const enemyBoard = board2;
 
     return Object.freeze({
         get name() { return name},
         get isAi() { return isAi},
         get board() { return board},
         get enemyBoard() { return enemyBoard},
     });
 };
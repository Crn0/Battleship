const gameOver = (option) => {
    const winContainer = document.querySelector(".winner");
    const board = document.querySelector(".computer-board");
    if(!option.isSunkAll()) return false;

    const p = document.createElement("p");
    
    let winner;
    winner = option.getActivePlayer().name === option.players[0].name ? winner = option.players[1].name : winner = option.players[0].name;
    p.textContent = `Winner: ${winner}`;

    board.childNodes.forEach((child) => {
        const node = child
        node.style.pointerEvents = "none"
    })
    board.style.pointerEvents = "none"
    winContainer.appendChild(p)
    return true;
}; 

const updateScreen = (option) => {
    // human board
    option[0].board.shipAttacks.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
        if(col !== false) {
            const cell = document.querySelector(`.cell-human[data-row="${rowIndex}"][data-col="${colIndex}"]`)
            if(!cell.classList.contains("hit") && !cell.classList.contains("ship")) {
                cell.textContent = "miss";
                cell.classList.add("hit");
            };

            if(cell.classList.contains("ship")) {
                cell.textContent = "hit";
                cell.classList.add("sink"); 
            };
        };

        return false;
    })); 

    // computer board
    option[1].board.shipAttacks.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
        if(col === true) {
            const cell = document.querySelector(`.cell-computer[data-row="${rowIndex}"][data-col="${colIndex}"]`)
            if(!cell.classList.contains("hit") && !cell.classList.contains("ship-computer")) {
                cell.classList.add("hit");
                cell.textContent = "miss";
            };

            if(cell.classList.contains("ship-computer")) {
                cell.textContent = "sink";
                cell.classList.add("sink");
          };
        };

        return false;
    })); 

    
};

const playLogic = async (e,option) => {
    const {row} = e.target.dataset
    const {col} = e.target.dataset
        
        // let playerCreationDon = false;
    try {
        if(option.isSunkAll()) return gameOver(option);

        if(row !== undefined && col !== undefined) {
            if(e.target.classList.contains("hit") || e.target.classList.contains("boards")) {
                    // errorMessage.textContent = "";
                return false
            };
              
            const parent = e.target.parentNode;
            const children = parent.childNodes;
                // disable pointer
            children.forEach((val) => {
                const child = val;
                child.style.pointerEvents = "none";
            });
       
            await option.humanInput(+row, +col)

            await option.computerInput().then(() => {
                // updateScreen(option.players);
                // enable pointer
                children.forEach((val) => {
                    const child = val;
                    child.style.pointerEvents = "auto";
                });
            });

            await updateScreen(option.players);
         
            return option;
        };
        
        const error = Error("you clicked the board frame");
        throw(error);
        } catch (error) {

            return error; 
        };
};



export default function DomState(option) {
    const board = document.querySelector(".computer-board");

    board.addEventListener("click", (e) => {
        playLogic(e, option)
    });

    return true;
};

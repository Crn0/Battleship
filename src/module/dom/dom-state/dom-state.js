const gameOver = (option) => {
    const winContainer = document.querySelector(".winner");
    if(!option.isSunkAll()) return false;

    const p = document.createElement("p");
    
    let winner;
    winner = option.getActivePlayer().name === option.players[0].name ? winner = option.players[1].name : winner = option.players[0].name;
    p.textContent = `Winner: ${winner}`;

    winContainer.appendChild(p)
    return true;
}; 

const updateScreen = (option) => {
    // human board
    option[0].board.shipAttacks.map((row, rowIndex) => row.map((col, colIndex) => {
        if(col !== false) {
            const cell = document.querySelector(`.cell-human[data-row="${rowIndex}"][data-col="${colIndex}"]`)
            if(!cell.classList.contains("hit") && !cell.classList.contains("ship")) {
                
                cell.classList.add("hit");
            };

            if(cell.classList.contains("ship")) {
                cell.textContent = "hit";
                cell.classList.add("sink"); 
                return cell;
            };

            cell.textContent = "miss"

            return cell;
        };

        return false;
    })); 

    // computer board
    option[1].board.shipAttacks.map((row, rowIndex) => row.map((col, colIndex) => {
        if(col === true) {
            const cell = document.querySelector(`.cell-computer[data-row="${rowIndex}"][data-col="${colIndex}"]`)
            if(!cell.classList.contains("hit") && !cell.classList.contains("ship-computer")) {
                
                cell.classList.add("hit");
                cell.textContent = "miss"
                return cell
            };

            if(cell.classList.contains("ship-computer")) {
                cell.textContent = "sink";
                cell.classList.add("sink")
                return cell;
            };

            return true;
        };

        return false;
    })); 

    
};

const playLogic = async (e,option) => {
    const {row} = e.target.dataset
    const {col} = e.target.dataset
        
        // let playerCreationDon = false;
    try {
        if(option.isSunkAll()) return false;

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
       
            await option.humanInput(+row, +col).then(() => {
                updateScreen(option.players);
            });

            await option.computerInput().then(() => {
                updateScreen(option.players);
                // enable pointer
                children.forEach((val) => {
                    const child = val;
                    child.style.pointerEvents = "auto";
                });
            });
         
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
        playLogic(e, option).then((data) => {
            // check if game is over
            
            if(data === false || typeof data.isSunkAll !== "function") return null;

            if(data.isSunkAll()) return gameOver(option);

            // return otherwise
            return null;
        });
    });

    return true;
};

const createBoard = (option) => {
    // player container
    const playerOneContainer = document.querySelector(".p1-container");
    const playerTwoContainer = document.querySelector(".p2-container");
    // player board container
    const boardOneContainer = document.querySelector(".human-board");
    const boardTwoContainer = document.querySelector(".computer-board");

    // boardOneContainer.className = "boards"
    // boardOneContainer.classList.add("human-board")

    // boardTwoContainer.className = "boards"
    // boardTwoContainer.classList.add("computer-board")

    option[0].board.ocean.map((row, rowIndex) => {
        row.map((col, colIndex) => {
            const colCell = document.createElement("button");

            colCell.className = "cell";
            colCell.setAttribute("data-row", rowIndex);
            colCell.setAttribute("data-col", colIndex);
            colCell.classList.add("cell-human");
            colCell.classList.add("drop-target")
           
            return boardOneContainer.appendChild(colCell)
        });

        return playerOneContainer.appendChild(boardOneContainer);
    });
    
    option[1].board.ocean.map((row, rowIndex) => {
        row.map((col, colIndex) => {
            const colCell = document.createElement("button");
            colCell.className = "cell";

            colCell.setAttribute("data-row", rowIndex);
            colCell.setAttribute("data-col", colIndex);
            colCell.classList.add("cell-computer");
        
            return boardTwoContainer.appendChild(colCell)
        });
      
        return playerTwoContainer.appendChild(boardTwoContainer);
    });
};

export default function createGame(option, div, button) {
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
    p2Name.classList.add("player-name")

    start.addEventListener("click", (e) => {
        e.preventDefault();
        const changeName = option[0];
    
        if(name.value !== "") {
            changeName.name = name.value;
        };
        
        // console.log( name.value , option[0].name)
        p1Name.textContent = `Commander ${option[0].name}`;
        p2Name.textContent = `Commander ${option[1].name}`;

        playerOneNameContainer.appendChild(p1Name);
        playerTwoNameContainer.appendChild(p2Name);

        playerOneContainer.appendChild(playerOneNameContainer);

        playerTwoContainer.appendChild(playerTwoNameContainer)

        container.appendChild(playerOneContainer);
        container.appendChild(playerTwoContainer);

       
        // updateScreen(option, container)
        
        formContainer.style.display = "none";
        // placeShipBtn.style.display = "block";
        container.style.display = "grid";
        
        createBoard(option);
        // return true;
    });
    
    
};
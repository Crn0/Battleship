const createBoard = (option) => {
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
            colCell.classList.add("drop-target")
           
            boardOneContainer.appendChild(colCell)
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
        
            boardTwoContainer.appendChild(colCell)
        });
      
        playerTwoContainer.appendChild(boardTwoContainer);
    });
};

export default function createGame(option, div) {
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
        
        p1Name.textContent = `Commander ${option[0].name}`;
        p2Name.textContent = `Commander ${option[1].name}`;

        playerOneNameContainer.appendChild(p1Name);
        playerTwoNameContainer.appendChild(p2Name);

        playerOneContainer.appendChild(playerOneNameContainer);

        playerTwoContainer.appendChild(playerTwoNameContainer)

        container.appendChild(playerOneContainer);
        container.appendChild(playerTwoContainer);
        
        formContainer.style.display = "none";
    
        container.style.display = "grid";
        
        createBoard(option);
        return true;
    });
    
    
};
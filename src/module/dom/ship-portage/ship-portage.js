import Helper from "../../helper/helper";

const renderShips = (option) => {
    option[0].board.ocean.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const ship = document.querySelector(`.cell-human[data-row="${rowIndex}"][data-col="${colIndex}"]`);
            if(col !== false) {
                ship.classList.add("ship");
            };
        });
    });
    
    option[1].board.ocean.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const ship = document.querySelector(`.cell-computer[data-row="${rowIndex}"][data-col="${colIndex}"]`);
            if(col !== false) {
                ship.classList.add("ship-computer");
            };
        });
    });
};


export default function placeShip(option, button) {
    const direction = document.querySelector(".direction");
    const placeShipBtn = button;
    const start = document.querySelector(".place-ship");

    const posAvailable = (ship, row, col, dir, board) => Helper().posAvailable(ship, row, col, dir, board)
    placeShipBtn.addEventListener("click", () => {
        
        placeShipBtn.style.display = "none";
   
        const ships = document.querySelectorAll(".cell-computer");
        ships.forEach(val => {
            const ship = val;
            ship.style.pointerEvents = "auto";
        });
        // place computer ship;
        option.players[1].placeShip()
        renderShips(option.players)
    });

    let dragged = null;    
    const source = document.querySelector(".dock");
    const dir = document.querySelector("#dir-select")

    dir.addEventListener("click", (e) => {
 
        const parent = document.querySelector(".dock");
        const child = parent.children

        const horizontalPos = [
            "carrier-horizontal-height",
            "battleship-horizontal-height",
            "cruiser-submarine-horizontal-height",
            "cruiser-submarine-horizontal-height",
            "destroyer-horizontal-height"
        ];
   
        if(e.target.value === "horizontal") {
        
            parent.classList.remove("vertical-dock");

            parent.classList.add("horizontal-dock");
        
            Array.from(child).forEach((val, index) => {
                if(typeof val.classList === "undefined") return false;
                if(val.classList.contains(horizontalPos[index])) return false;
            
                return child[index].classList.add(horizontalPos[index]);
            });

            return true;
        };

        if(e.target.value === "vertical") {
            parent.classList.add("vertical-dock");

            parent.classList.remove("horizontal-dock");
       
            Array.from(child).forEach((val, index) => {
                if(typeof val.classList === "undefined") return false;
                if(!val.classList.contains(horizontalPos[index])) return false;
            
                return child[index].classList.remove(horizontalPos[index]);
            });
                
            return true;
        };

        return false;
    });

    source.addEventListener("dragstart", (e) => {
        const parent = e.target.parentNode;
        const children = parent.childNodes;
 
        const selectedChild = Array.from(children).filter((val) => {
            if(typeof val.classList !== "undefined" ) {
                return val.dataset.name === e.target.dataset.name
            };

            return false;
        });

   
        dragged = selectedChild
    });

    const target = document.querySelector(".human-board");

    target.addEventListener("dragover", (e) => {
        // prevent default to allow drop
        e.preventDefault();
   
        },
        false,
    );

    target.addEventListener("dragenter", () => {

    });

    target.addEventListener("dragleave", () => {
   
    });

    target.addEventListener("drop", (e) => {
        const parent = dragged[0].parentNode;
        const child = dragged[0];
        const {row} = e.target.dataset;
        const {col} = e.target.dataset;
        const {index} = dragged[0].dataset;
        const ship = option.players[0].dock[+index]

        if(!posAvailable(ship, +row, +col, dir.value, option.players[0].board.ocean)) return false;
      


        option.players[0].placeShip(ship, +row, +col, dir.value)
        parent.removeChild(child)
        if(parent.children.length === 0) {
            start.classList.remove("hide-btn");
            start.classList.add("show");

            direction.style.display = "none";
            
        };
      
        return renderShips(option.players)
    });

        
};

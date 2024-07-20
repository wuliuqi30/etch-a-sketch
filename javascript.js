
sketchContainer = document.querySelector('.sketchContainer');

// Put in a single row of evenly spaced flex boxes inside the sketchContainer

//const boxArray = [];
function createGrid(numBoxesOnSide = 16) {
    
    for (i = 0; i < numBoxesOnSide ** 2; i++) {
        const box = document.createElement('div');

        // Style
        box.className = 'box';

        // Calculate desired width of box based on how many total boxes
        // 2 elements, 1 gap, 3 elements 2 gaps 
        // Split up 90% of the space
        let boxWidthPercent = 100 / numBoxesOnSide;
        box.style.width = `${boxWidthPercent}%`
        // Height distribution matches the width
        let boxHeightPercent = boxWidthPercent;
        box.style.height = `${boxWidthPercent}%`

        //console.log(box);
        sketchContainer.appendChild(box);

        // add a listener to each box to change its background color on hover

        box.addEventListener('mouseenter', () => {
            //console.log(box.style.opacity);
            if (isMouseDown) {
                box.style.opacity = Math.min(Number(box.style.opacity) + 0.2, 1);
                //console.log(box.style.opacity);
            }
        });
    }
}

const body = document.querySelector("body");
body.addEventListener("dragstart", (event) => {
    console.log("A DRAG START!", event);
    return false;
    event.preventDefault();
});

let isMouseDown = 0;
let mouseDownCounter = 0;
let mouseUpCounter = 0;
// Listen for the mousedown event to set the flag to true
document.addEventListener('mousedown', () => {
    isMouseDown = true;
    mouseDownCounter++;
    console.log(`MOUSE DOWN OCCURED,mouseDownCounter = ${mouseDownCounter}`)
});

// Listen for the mouseup event to reset the flag to false
document.addEventListener('mouseup', () => {
    isMouseDown = false;
    mouseUpCounter++;
    console.log(`MOUSE UP OCCURED mouseUpCounter = ${mouseUpCounter}`)
});

button = document.getElementById('numberOfSquaresButton')

button.addEventListener("click", () => {
    let numBoxesPerRow = 0; 
    do {
        numBoxesPerRow = prompt("How many squares per side for a new game?", "");
        if (numBoxesPerRow >100){
            alert("Please choose 100 or less rows!");
        }
    } while (numBoxesPerRow > 100)
    deleteGrid();
    console.log(`about to create a new grid with ${numBoxesPerRow} boxes per row`);
    createGrid(numBoxesPerRow); 
});

function deleteGrid() {
    allBoxes = document.querySelectorAll(".box");
    console.log("deleting grid");
    allBoxes.forEach(
        function(node,index) {
            node.remove();
        }    
    )
}


let defaultNumBoxesPerRow = 5;
console.log("about to create grid");
createGrid(defaultNumBoxesPerRow); 
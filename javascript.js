
sketchContainer = document.querySelector('.sketchContainer');

// Put in a single row of evenly spaced flex boxes inside the sketchContainer

//const boxArray = [];
function createGrid(numBoxesOnSide = 50) {

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

        box.addEventListener('mouseenter', (event) => {

            if (isMouseDown) {
                handleMouseEnter(event.target);
            }

        });

        box.addEventListener('touchmove', (event) => {
            event.preventDefault();
            if (isTouching) {
                const box = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
                // Get randomized RGB value:
                //console.log(event.touches[0]);
                if (box && box !== lastTouchedBox && box.className === 'box') {
                    handleMouseEnter(box);
                    lastTouchedBox = box;
                }

            }
        });

        box.addEventListener('touchstart', (event) => {

            const box = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
            handleMouseEnter(box);
            lastTouchedBox = box;


        });
    }

    // Try one event listener on the parent box
    // sketchContainer.addEventListener('mouseover', (event) => {
    //         //console.log("Adding a single sketch container event listener");
    //         const target = event.target;
    //         if (isMouseDown && target.className === 'box' ) {
    //             target.style.opacity = Math.min(Number(target.style.opacity) + 0.2, 1);
    //             //console.log(box.style.opacity);
    //         }
    //     });

}

function handleMouseEnter(element) {
    const randomColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    element.style.backgroundColor = `rgb(${randomColor})`;
    element.style.opacity = Math.min(Number(element.style.opacity) + 0.2, 1);
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


let isTouching = 0;
let lastTouchedBox = 'null';
// Listen for touchstart
document.addEventListener('touchstart', (event) => {
    isTouching = true;
    lastTouchedBox = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
    console.log(`Touch start OCCURED,mouseDownCounter = ${mouseDownCounter}`)
});

// Listen for the mouseup event to reset the flag to false
document.addEventListener('touchend', () => {
    isTouching = false;

    console.log(`Touch end OCCURED mouseUpCounter = ${mouseUpCounter}`)
});


button = document.getElementById('numberOfSquaresButton')

button.addEventListener("click", () => {
    let numBoxesPerRow = 0;
    do {
        numBoxesPerRow = prompt("How many squares per side for a new game?", "");
        if (numBoxesPerRow > 100) {
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
        function (node, index) {
            node.remove();
        }
    )
}


let defaultNumBoxesPerRow = 50;
console.log("about to create grid");
createGrid(defaultNumBoxesPerRow); 

sketchContainer = document.querySelector('.sketchContainer');

// Put in a single row of evenly spaced flex boxes inside the sketchContainer

let numBoxesPerRow = 40;
//const boxArray = [];

for (i = 0; i < numBoxesPerRow ** 2; i++) {
    const box = document.createElement('div');

    // Style
    box.className = 'box';

    // Calculate desired width of box based on how many total boxes
    // 2 elements, 1 gap, 3 elements 2 gaps 
    // Split up 90% of the space
    let boxWidthPercent = 90 / numBoxesPerRow;
    box.style.width = `${boxWidthPercent}%`
    // Height distribution matches the width
    let boxHeightPercent = boxWidthPercent;
    box.style.height = `${boxWidthPercent}%`

    console.log(box);
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

let isMouseDown = 0;
// Listen for the mousedown event to set the flag to true
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

// Listen for the mouseup event to reset the flag to false
document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

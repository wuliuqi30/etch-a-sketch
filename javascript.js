
sketchContainer = document.querySelector('.sketchContainer');

// Put in a single row of evenly spaced flex boxes inside the sketchContainer

let numBoxesPerRow = 3;
//const boxArray = [];

for (i = 0; i < numBoxesPerRow ** 2; i++) {
    const box = document.createElement('div');
    box.textContent = `BOX`;

    // Style
    box.className = 'box';

    // Calculate desired width of box based on how many total boxes
    // 2 elements, 1 gap, 3 elements 2 gaps 
    // Split up 90% of the space
    let boxWidthPercent = 90/numBoxesPerRow;
    box.style.width = `${boxWidthPercent}%`
    // Height distribution matches the width
    let boxHeightPercent = boxWidthPercent;
    box.style.height = `${boxWidthPercent}%`

    console.log(box);
    sketchContainer.appendChild(box);

    // add a listener to each box to change its background color on hover

    box.addEventListener('mouseenter', ()=> mouseEnterEffect(box));


}

function mouseEnterEffect(element){
    //this.setAttribute("class","highlight");
    currentOpacity = element.style.opacity;
    console.log(element.style.opacity);
}

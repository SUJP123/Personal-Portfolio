// polymer.js

console.log('Polymer.js is running!');

// Function to generate image paths based on the number of images
function generateImagePaths(numImages) {
    const imagePaths = [];
    imagePaths.push('./slide_img/initial_position.png');

    for (let i = 1; i <= 9; i++) {
        imagePaths.push(`./slide_img/sim000${i}.png`);
    }

    for (let i = 10; i <= numImages - 1; i++) {
        imagePaths.push(`./slide_img/sim00${i}.png`);
    }
    return imagePaths;
}

const numImages = 100; // Change this to the actual number of images
const imagePaths = generateImagePaths(numImages);

let currentImageIndex = 0;
let simulationInterval;

const simulationImage = document.getElementById('simulationImage');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let check = false;

// Function to start the simulation
function startSimulation() {
    if (!check) {
        console.log('Simulation started!');
    
    
        simulationInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % numImages;
        simulationImage.src = imagePaths[currentImageIndex]; 
    }, 50);
    check = true
}

}

// Function to stop the simulation
function stopSimulation() {
    clearInterval(simulationInterval);
    console.log('Simulation stopped!');
    check = false;
}

// Function to reset the simulation to the initial image
function resetSimulation() {
    clearInterval(simulationInterval);
    currentImageIndex = 0;
    simulationImage.src = imagePaths[currentImageIndex];
    console.log('Simulation reset!');
    check = false;
}

// Attach click events to the buttons
startButton.addEventListener('click', startSimulation);
stopButton.addEventListener('click', stopSimulation);
resetButton.addEventListener('click', resetSimulation);

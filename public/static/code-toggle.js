// Get all "Run Code" buttons
const runCodeButtons = document.querySelectorAll('.runCodeButton');

// Attach click event listener to each button
runCodeButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        // Toggle the visibility of the plot based on the button's index
        togglePlot(index);
    });
});

// Function to toggle the visibility of the plot based on the index
function togglePlot(index) {
    const plotImage = document.querySelector(`.plotContainer[data-index="${index}"] img`);

    // Toggle the "hidden" class to show/hide the plot image
    plotImage.classList.toggle('hidden');
}

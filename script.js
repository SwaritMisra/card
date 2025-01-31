// Function to open the card and reveal the paper
function openCard() {
    const card = document.querySelector('.card');
    const paper = document.querySelector('.paper');

    // Move the card down
    card.style.transform = 'translateY(100%)';

    // Reveal the paper
    paper.style.transform = 'translateY(0)';
}

// Function to flip the paper
function flipPaper() {
    const paper = document.querySelector('.paper');
    paper.classList.toggle('flipped');
}

// Function to trigger confetti
function celebrate() {
    confetti({
        particleCount: 100, // Number of confetti particles
        spread: 70, // How far the confetti spreads
        origin: { y: 0.6 } // Start confetti from the bottom
    });
}

// Add event listener to the YES button
const yesButton = document.getElementById('yes-button');
yesButton.addEventListener('click', celebrate);

// Get the name from the URL and display it
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
if (name) {
    document.getElementById('card-name').textContent = name;
}
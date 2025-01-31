// Function to open the card and reveal the paper
function openCard() {
    const card = document.querySelector('.card');
    const paper = document.querySelector('.paper');

    // Move the card down
    card.style.transform = 'translateY(80%)';

    // Reveal the paper
    paper.style.transform = 'translateY(0)';
}

// Function to flip the paper
function flipPaper() {
    const paper = document.querySelector('.paper');
    paper.classList.toggle('flipped');
}

// Get the name from the URL and display it
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
if (name) {
    document.getElementById('card-name').textContent = name;
}
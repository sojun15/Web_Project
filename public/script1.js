// Dynamic Title Animation
const title = "Learn From the Best Tutors";
const titleElement = document.getElementById("dynamic-title");

let index = 0;
function typeText() {
    if (index < title.length) {
        titleElement.innerHTML += title.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust speed by changing this value
    }
}
typeText();

// Typewriter effect for the span with classes .txt-type
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 200;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type .txt');
    const words = JSON.parse(txtElement.parentElement.getAttribute('data-words'));
    const wait = txtElement.parentElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

// Modal Handling
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".open-modal").addEventListener("click", openModal);


// Function to handle the rotation effect before navigating to the next page
function handlePageTransition(event) {
    event.preventDefault(); // Prevent immediate navigation

    // Get the clicked link
    const targetUrl = event.target.href;

    // Add the rotate class to the body
    document.body.classList.add('rotate');

    // Delay navigation until the animation completes (1 second)
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 1000); // Match the duration of the rotate animation (1s)
}

// Add event listeners to all navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handlePageTransition);
});

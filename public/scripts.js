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
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.getElementById('services-btn').addEventListener('click', () => openModal('services-modal'));
document.getElementById('about-btn').addEventListener('click', () => openModal('about-modal'));
document.getElementById('contact-btn').addEventListener('click', () => openModal('contact-modal'));

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle the form submission, e.g., sending the data to the server
    console.log('Contact Form Submitted:', { username, email, message });

    // Optionally close the modal and clear the form
    closeModal('contact-modal');
    this.reset();
});

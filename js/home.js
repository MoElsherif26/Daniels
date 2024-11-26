// start home script
const roles = [" Designer", " Developer", " Larry Daniels"];
let roleIndex = 0;
let charIndex = 0;

// Faster typing and erasing speeds
const typingSpeed = 30;  // Reduced for faster typing
const erasingSpeed = 35; // Reduced for faster erasing
const newWordDelay = 1500; // Shortened delay before typing the next word
const roleElement = document.getElementById('role');
const cursorElement = document.getElementById('cursor');

function type() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    }
}

// Start the typewriter effect
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newWordDelay); // Initial delay before typing starts
});
// end home script 
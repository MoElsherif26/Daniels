// start nav script
// Get all sections that have an id defined
const sections = document.querySelectorAll('section[id]');

// Get all navigation links
const navLinks = document.querySelectorAll('.my-nav-link');

// Function to remove active class from all links and add it to the clicked one
function setActiveLink(link) {
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('my-active-link'));

    // Add active class to the clicked link
    link.classList.add('my-active-link');
}

// Scroll spy functionality
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    // Special case for Home: If scroll is near the top, set Home as active
    if (scrollY < 100) { // Adjust this value based on your layout
        const homeLink = document.querySelector('.my-nav-link[href="#home"]');
        setActiveLink(homeLink);
    } else {
        sections.forEach(section => {
            // Get the current section's position relative to the viewport
            const sectionTop = section.offsetTop - 50; // Adjust offset for better accuracy
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            // Check if the section is in the viewport
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Find the corresponding link
                const navLink = document.querySelector(`.my-nav-link[href="#${sectionId}"]`);
                if (navLink) {
                    setActiveLink(navLink);
                }
            }
        });
    }
});

// Get references to the navbar, nav links, and home section
const navbar = document.getElementById('web-nav-bar');
const menuicon = document.getElementById('my-menu-icon');
const homeSection = document.querySelector('#home');

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Check if the page has been scrolled past the home section
    if (window.scrollY > homeSection.offsetHeight) {
        navbar.classList.add('my-fixed');
        navbar.classList.remove('my-absloute');

        menuicon.classList.add('menu-icon-black');
        menuicon.classList.remove('menu-icon-white');
    } else {
        navbar.classList.add('my-absloute');
        navbar.classList.remove('my-fixed');

        menuicon.classList.remove('menu-icon-black');
        menuicon.classList.add('menu-icon-white');
    }
});

// // start counter script
// // Function to handle the counting animation
// function countUp() {
//     const counters = document.querySelectorAll('.counter');
//     const speed = 150; // Adjust the speed for the animation

//     counters.forEach(counter => {
//         // Reset the counter to 0
//         counter.innerText = '0';

//         const updateCount = () => {
//             const target = +counter.getAttribute('data-target');
//             const count = +counter.innerText;

//             // Increase the number gradually
//             const increment = target / speed;

//             if (count < target) {
//                 counter.innerText = Math.ceil(count + increment);
//                 setTimeout(updateCount, 10); // Control the update speed
//             } else {
//                 counter.innerText = target;
//             }
//         };

//         // Run the update count function
//         updateCount();
//     });
// }

// // Function to check if the element is in view
// function isInView(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     );
// }

// // Trigger the counting animation when the section enters the viewport
// let hasAnimated = false;

// document.addEventListener('scroll', function () {
//     const statSection = document.getElementById('stat');
//     if (isInView(statSection)) {
//         if (!hasAnimated) {
//             countUp();
//             hasAnimated = true; // Set to true to ensure it only animates once
//         }
//     }
// });

// // end counter script



// Function to handle the counting animation
function countUp() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Adjust the speed for the animation

    counters.forEach(counter => {
        // Reset the counter to 0
        counter.innerText = '0';

        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Increase the number gradually
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Control the update speed
            } else {
                counter.innerText = target;
            }
        };

        // Run the update count function
        updateCount();
    });
}

// Function to check if the element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Trigger the counting animation when the stat section enters the viewport
let hasAnimated = false;

document.addEventListener('scroll', function () {
    const statSection = document.getElementById('stat');
    if (isInView(statSection)) {
        if (!hasAnimated) {
            countUp();
            hasAnimated = true;
        }
    } else {
        hasAnimated = false;  // Reset to allow counting again when section is out of view
    }
});
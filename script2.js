// // // Smooth Scroll for Navigation Links
// // document.querySelectorAll('nav ul li a').forEach(anchor => {
// //     anchor.addEventListener('click', function(event) {
// //         event.preventDefault();
// //         const targetId = this.getAttribute('href').substring(1);
// //         document.getElementById(targetId).scrollIntoView({
// //             behavior: 'smooth'
// //         });
// //     });
// // });

// // // Add Fade-in Animations on Scroll
// // const sections = document.querySelectorAll('section');

// // const fadeInOnScroll = () => {
// //     sections.forEach(section => {
// //         const sectionTop = section.getBoundingClientRect().top;
// //         const triggerBottom = window.innerHeight * 0.8;

// //         if (sectionTop < triggerBottom) {
// //             section.classList.add('visible');
// //         } else {
// //             section.classList.remove('visible');
// //         }
// //     });
// // };

// // window.addEventListener('scroll', fadeInOnScroll);
// // fadeInOnScroll(); // Run on load

// // // Adding a fade-in effect
// // document.addEventListener("DOMContentLoaded", () => {
// //     document.body.classList.add("loaded");
// // });

// // Smooth Scroll for Navigation Links
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(event) {
//         event.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Add Fade-in Animations on Scroll
// const sections = document.querySelectorAll('section');

// const fadeInOnScroll = () => {
//     sections.forEach(section => {
//         const sectionTop = section.getBoundingClientRect().top;
//         const triggerBottom = window.innerHeight * 0.8;

//         if (sectionTop < triggerBottom) {
//             section.classList.add('visible');
//         } else {
//             section.classList.remove('visible');
//         }
//     });
// };

// window.addEventListener('scroll', fadeInOnScroll);
// fadeInOnScroll();

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Project button click effect
    document.querySelectorAll(".project-link").forEach(button => {
        button.addEventListener("click", function() {
            alert("This project is under development!");
        });
    });
});

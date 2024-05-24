// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');



// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('fa-xmark');
//     navbar.classList.toggle('active')
// }

// // <--------------------scroll section active link--------------------->

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>{
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height){
//             navLinks.forEach(link=>{
//                 link.classList.remove('active');                
//             });
//             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//         };
        
//     });
//     // <---------------sticky navbar----------------->

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY > 100);

//     // <-----------remove toggle icon and navbar ------------>
    

//     menuIcon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// };






// // <----------------------scroll reveal--------------------->

// ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// });


// ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


 
// //<------------ typed js----------------->

// const typed= new Typed('.multiple-text',{
//     strings: ['Frontend Developer','Problem Solver'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,

// });


document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('header nav a');

    // Initially hide the navbar
    navbar.style.display = 'none';

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('fa-xmark');
        navbar.style.display = (navbar.style.display === 'none') ? 'block' : 'none';
    });

    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop + 150 &&
                section.offsetTop + section.offsetHeight > fromTop + 150
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        if (fromTop > 100) {
            document.querySelector('header').classList.add('sticky');
        } else {
            document.querySelector('header').classList.remove('sticky');
        }

        if (navbar.style.display === 'block' && !navbar.classList.contains('active')) {
            menuIcon.classList.remove('fa-xmark');
            navbar.style.display = 'none';
        }
    });

    // ScrollReveal and Typed.js initialization
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Problem Solver'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});


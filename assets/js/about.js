// Select elements
const hamburger = document.querySelector('.hamburger-menu');
const navOverlay = document.querySelector('.nav-overlay');
const menuContainer = document.querySelector('.menu-container');
const navLinks = document.querySelectorAll('.nav-links li');

// GSAP Timeline for overlay menu
const tl = gsap.timeline({ paused: true });

tl.to(navOverlay, {
  left: 0,
  duration: 0.5,
  ease: "power2.out"
})
.from(menuContainer, {
  opacity: 0,
  scale: 0.95,
  duration: 0.3,
  ease: "power2.out"
})
.from(navLinks, {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out"
}, "-=0.3");

// Hamburger menu animation
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();

  if (!navOverlay.classList.contains('active')) {
    tl.play();
  } else {
    tl.reverse();
  }

  navOverlay.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu on click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-overlay') && navOverlay.classList.contains('active')) {
    tl.reverse();
    navOverlay.classList.remove('active');
    hamburger.classList.remove('active');
  }
});





gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-header", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-header",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

gsap.to(".hero-description", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});






gsap.registerPlugin(ScrollTrigger);

// Animate the left-side text (fade in and move up)
gsap.from(".sticky-heading", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".sticky-heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Animate each content block on the right side as it enters the viewport
gsap.utils.toArray(".content-block").forEach(block => {
    gsap.from(block, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});


      // GSAP animation
        gsap.from(".header", {
            opacity: 0,
            y: -50,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".description", {
            opacity: 0,
            y: 30,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out"
        });




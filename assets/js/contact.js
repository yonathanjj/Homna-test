// Select elements
const hamburger = document.querySelector('.hamburger-menu');
const navOverlay = document.querySelector('.nav-overlay');
const menuContainer = document.querySelector('.menu-container');
const navLinks = document.querySelectorAll('.nav-links li');
const serviceLink = document.querySelector('.service-link');
const solutionsGrid = document.querySelector('.solutions-grid');
const goBackButton = document.querySelector('.go-back-button');

// Select the Return Path button
const returnPathButton = document.querySelector('.return-path-button');

// Add click event to go back to the previous page
returnPathButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    history.back(); // Go back to the previous page
});

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

// Toggle solutions grid
serviceLink.addEventListener('click', (e) => {
  e.preventDefault();
  solutionsGrid.classList.add('active'); // Show solutions grid

  // Hide other nav links when solutions grid is active
  navLinks.forEach(link => {
    if (!link.contains(serviceLink)) {
      link.style.display = 'none';
    }
  });

  // Animate the solutions grid in
  gsap.from(solutionsGrid.children, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out"
  });
});

// Go Back to Main Menu with Animation
goBackButton.addEventListener('click', () => {
  // Animate the solutions grid out
  gsap.to(solutionsGrid, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      solutionsGrid.classList.remove('active'); // Hide solutions grid
    }
  });

  // Show other nav links again
  navLinks.forEach(link => {
    link.style.display = 'block';
  });

  // Ensure the main menu is visible
  navOverlay.classList.add('active');
  hamburger.classList.add('active');
  tl.play(); // Play the main menu animation
});



gsap.from("h2", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".subtext", {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.3
});

gsap.from(".divider", {
    duration: 1,
    scaleX: 0,
    transformOrigin: "left",
    stagger: 0.2
});

gsap.from(".left-content > *", {
    duration: 0.8,
    x: -30,
    opacity: 0,
    stagger: 0.15,
    delay: 0.5
});

gsap.from(".map-item", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.8
});

gsap.from(".form-group", {
    duration: 0.6,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".contact-form"
    }
});

gsap.from(".faq-item", {
    duration: 0.5,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".faq-section"
    }
});
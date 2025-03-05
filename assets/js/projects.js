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




// Filter Functionality
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.project-card').forEach(project => {
            project.style.display =
                (filter === 'all' || project.dataset.category === filter)
                ? 'block'
                : 'none';
        });
    });
});

// Popup Functionality
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card");
    const popup = document.getElementById("projects-popup");
    const popupTitle = document.querySelector(".popup-title");
    const popupDescription = document.querySelector(".popup-description");
    const popupGallery = document.querySelector(".popup-gallery");

    function openPopup(title, description, images) {
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupGallery.innerHTML = "";

        images.forEach(image => {
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("popup-image");
            imgDiv.style.backgroundImage = `url('${image}')`;
            popupGallery.appendChild(imgDiv);
        });

        popup.style.display = "flex";
    }

    projects.forEach(project => {
        project.addEventListener("click", () => {
            const title = project.querySelector(".project-title").textContent;
            const description = project.dataset.description;
            const images = JSON.parse(project.dataset.images);
            openPopup(title, description, images);
        });
    });

    document.querySelector(".close-btn").addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
});

// GSAP Animations (keep from original)
gsap.from(".header", { opacity: 0, y: -50, duration: 1 });
gsap.from(".projects-header p", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
gsap.from(".filter-buttons button", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, delay: 0.5 });
gsap.from(".project-card", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.2, delay: 0.8 });

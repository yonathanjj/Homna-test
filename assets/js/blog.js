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



  // GSAP Animations
        gsap.to(".blog-card", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".container",
                start: "top center"
            }
        });

        // GSAP Animations
        // Hover animation
        gsap.utils.toArray(".post-image-container").forEach(container => {
            gsap.to(container.querySelector(".post-image"), {
                scale: 1,
                paused: true,
                ease: "power2.out"
            });

            container.addEventListener("mouseenter", () => {
                gsap.to(container.querySelector(".post-image"), {
                    scale: 1.05,
                    duration: 0.4
                });
            });

            container.addEventListener("mouseleave", () => {
                gsap.to(container.querySelector(".post-image"), {
                    scale: 1,
                    duration: 0.4
                });
            });
        });

        // Popup functionality
        gsap.utils.toArray("[data-popup]").forEach(trigger => {
            const popup = document.querySelector(trigger.dataset.popup);
            const closeBtn = popup.querySelector(".close-btn");

            // Open popup
            trigger.addEventListener("click", () => {
                gsap.to(popup, {
                    autoAlpha: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            // Close popup
            closeBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                gsap.to(popup, {
                    autoAlpha: 0,
                    duration: 0.2
                });
            });
        });

        // Initial animation
        gsap.from(".post-card", {
            duration: 0.8,
            autoAlpha: 0,
            y: 30,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".posts-grid",
                start: "top 80%"
            }
        });


        function openPopup(title, image, content) {
            const popup = document.querySelector('.popup');
            const popupTitle = document.getElementById('popup-title');
            const popupImage = document.getElementById('popup-image');
            const popupText = document.getElementById('popup-text');

            // Set content dynamically
            popupTitle.textContent = title;
            popupImage.src = image;
            popupText.textContent = content;

            // Display the popup
            popup.style.display = 'flex';
            setTimeout(() => {
                popup.classList.add('show');
            }, 50);

            // Close the popup when clicking outside the content area
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    closePopup();
                }
            });
        }

        function closePopup() {
            const popup = document.querySelector('.popup');
            popup.classList.remove('show');
            setTimeout(() => {
                popup.style.display = 'none';
            }, 300);
        }

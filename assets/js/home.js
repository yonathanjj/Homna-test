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





window.onload = function() {
  const heroImage = document.querySelector('.hero-image');
  const heroText = document.querySelector('.hero-text');

  // Add class to trigger image animation after 2 seconds
  setTimeout(() => {
    heroImage.classList.add('loaded');
  }, 1000);

  // Fade in hero text after image expands
  setTimeout(() => {
    heroText.classList.add('visible');
  }, 1000); // Fade-in text after the image expansion is complete
}


// Select all expertise cards
const expertiseCards = document.querySelectorAll('.expertise-card');

// Function to animate cards
function animateCards() {
  expertiseCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate');
    }, index * 200); // Stagger delay (200ms per card)
  });
}

// Trigger animations when the section is in view
const expertiseSection = document.querySelector('.expertise-section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCards();
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

observer.observe(expertiseSection);

// Remove all Intersection Observer code

const allProjectsButton = document.querySelector('.all-projects-btn');

// Remove hidden class on button onload
document.addEventListener('DOMContentLoaded', () => {
  allProjectsButton.classList.remove('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card");
    const popup = document.getElementById("projects-popup");
    const popupTitle = document.querySelector(".popup-title");
    const popupGallery = document.querySelector(".popup-gallery");

    // Function to open popup
    function openProjectsPopup(title, image) {
        popupTitle.textContent = title;

        // Dynamically generate 6 images for the gallery
        popupGallery.innerHTML = "";
        for (let i = 1; i <= 6; i++) {
            let imgDiv = document.createElement("div");
            imgDiv.classList.add("popup-image");
            imgDiv.style.backgroundImage = `url('${image}')`;
            popupGallery.appendChild(imgDiv);
        }

        popup.style.display = "flex";
    }

    // Assign click event to each project card
    projects.forEach((project) => {
        project.addEventListener("click", function () {
            const projectTitle = project.getAttribute("data-title");
            const projectImage = project.getAttribute("data-image");
            openProjectsPopup(projectTitle, projectImage);
        });
    });

    // Close popup function
    function closeProjectsPopup() {
        popup.style.display = "none";
    }

    // Close popup when clicking outside
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closeProjectsPopup();
        }
    });

    // Attach close function globally
    window.closeProjectsPopup = closeProjectsPopup;
});



 gsap.from(".partner-logo", {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: 0.3, // Adds stagger effect to the logos and names
        ease: "power3.out"
    });

    gsap.from(".partner-name", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "power3.out",
        delay: 0.5 // Slight delay to make the text appear after the logo animation
    });



    // GSAP Animation for Blog Section
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".blog-card", {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none none",
      }
    });


function openPopup(title, image, content) {
    const popup = document.querySelector('.popup');
    const popupContent = popup.querySelector('.popup-content');
    const popupTitle = popupContent.querySelector('h2');
    const popupImage = popupContent.querySelector('img');
    const popupText = popupContent.querySelector('p');

    // Set content dynamically
    popupTitle.textContent = title;
    popupImage.src = image;
    popupText.textContent = content;

    // Display the popup
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.classList.add('show');
    }, 50); // Small delay to ensure the transition works

    // Close the popup when clicking outside the content area
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
}

// Close popup function
function closePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Match the transition time
}

// Close button click event
document.querySelector('.close').addEventListener('click', closePopup);

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector('.image-container');
  const containerWidth = imageContainer.scrollWidth / 2; // Adjusted to ensure it's based on the total content width
  const speed = 100; // Adjust this value to control speed (higher = slower)

  // Set animation duration based on the content width and desired speed
  const duration = containerWidth / speed; // Make sure the duration is based on the content width
  imageContainer.style.animationDuration = `${duration}s`;
});


document.addEventListener("DOMContentLoaded", function () {
    const footerPopup = document.getElementById("footer-popup");
    const footerPopupTitle = document.getElementById("footer-popup-title");
    const footerPopupText = document.getElementById("footer-popup-text");
    const footerCloseButton = document.querySelector(".footer-close-btn");

    // Information for each link
    const footerPopupContent = {
        "Commitment": "We are committed to excellence in our services and ensuring customer satisfaction.",
        "Privacy Policy": "Your privacy is important to us. We do not share your data with third parties.",
        "Legal Information": "All content on this site is legally protected and follows regulations.",
        "Suppliers": "We work with trusted suppliers to provide high-quality products and services.",
        "Cookie Policy": "We use cookies to enhance your experience. You can manage your preferences anytime."
    };

    // Using event delegation to handle clicks on all footer links
    document.querySelector(".footer-bottom-links").addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const linkText = event.target.textContent.trim();
            if (footerPopupContent[linkText]) {
                footerPopupTitle.textContent = linkText;
                footerPopupText.textContent = footerPopupContent[linkText];
                footerPopup.style.display = "block";
            }
        }
    });

    // Close popup when clicking close button
    footerCloseButton.addEventListener("click", () => {
        footerPopup.style.display = "none";
    });

    // Close popup when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === footerPopup) {
            footerPopup.style.display = "none";
        }
    });
});

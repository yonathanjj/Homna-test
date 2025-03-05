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


document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.from(".services-section", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".company-card", { opacity: 0, scale: 0.8, duration: 0.8, stagger: 0.2 });

    // Modal
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const categoryContent = document.getElementById("category-content");
    const closeModal = document.querySelector(".close-modal");

    const companies = {
        Sika: {
            description: "Leading provider of waterproofing, flooring, and concrete solutions.",
            categories: {
                "Waterproofing": ["assets/image/1.jpg", "assets/image/1.jpg", "assets/image3.jpg", "assets/image4.jpg"],
                "Ceiling Bonding": ["assets/image/1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
                "Flooring": ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
                "Concrete Admixture": ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]
            }
        },
        Simba: {
            description: "Specializes in high-quality cement production.",
            categories: {
                Cement: ["image1.jpg", "image2.jpg", "image3.jpg"]
            }
        },
        ACO: {
            description: "Provides drainage solutions for various infrastructures.",
            categories: {
                "Drainage": ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]
            }
        },
        GRACO: {
            description: "Industry leader in machine solutions for construction.",
            categories: {
                Machines: ["image1.jpg", "image2.jpg"]
            }
        },
        PLASCON: {
            description: "Expert in high-quality paints and coatings.",
            categories: {
                Paints: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"]
            }
        }
    };

    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            let companyName = this.parentElement.querySelector("h3").innerText;
            const company = companies[companyName];

            modalTitle.innerText = companyName;
            modalDescription.innerText = company.description;

            // Populate categories
            let categoriesHTML = '';
            for (let category in company.categories) {
                categoriesHTML += `<div class="category-item">
                                    <h4>${category}</h4>`;
                company.categories[category].forEach(image => {
                    categoriesHTML += `<img src="assets/image/${image}" alt="${category} Image">`;
                });
                categoriesHTML += `</div>`;
            }
            categoryContent.innerHTML = categoriesHTML;

            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

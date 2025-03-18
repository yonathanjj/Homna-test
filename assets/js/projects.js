// Select elements for navigation menu
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

// Sample project data (8 projects)
const projects = [
  {
    title: "Disner Basha Ram",
    description: "We’ve just been trying to help me see someone you want and we don’t understand it. It’s better than our own.",
    image: "assets/image/1.jpg",
    gallery: ["assets/image/1.jpg", "assets/image/2.jpg", "assets/image/3.jpg"],
    requirements: "This project required extensive planning and coordination with multiple stakeholders. The goal was to create a sustainable and innovative design that meets the needs of the community.",
    products: ["Product A", "Product B", "Product C"],
    tags: ["BASH", "Cafe Bashan, Johannes"]
  },
  {
    title: "Cerfener Platte Lifestojetordism",
    description: "Looking at us for our natural passion that you’re looking for is a good thing!",
    image: "assets/image/2.jpg",
    gallery: ["assets/image/2.jpg", "assets/image/3.jpg", "assets/image/1.jpg"],
    requirements: "The project involved advanced architectural techniques and eco-friendly materials to create a modern living space.",
    products: ["Product D", "Product E", "Product F"],
    tags: ["CERFENT ARRECTURE", "Karma, Rana"]
  },
  {
    title: "Tunnel Swimcujazzas",
    description: "The goal is to learn, so I can read the instructions and discuss all kinds of matters in this room according to a beautiful...",
    image: "assets/image/3.jpg",
    gallery: ["assets/image/3.jpg", "assets/image/1.jpg", "assets/image/2.jpg"],
    requirements: "This project focused on creating a seamless underground tunnel system with state-of-the-art technology.",
    products: ["Product G", "Product H", "Product I"],
    tags: ["TRANSFORMATION INTRACTING TIME", "Minnipeg, David"]
  },
  {
    title: "Karma Mine",
    description: "This way you are pleased to accept my condition.",
    image: "assets/image/4.jpg",
    gallery: ["assets/image/4.jpg", "assets/image/1.jpg", "assets/image/2.jpg"],
    requirements: "The project aimed to develop a sustainable mining solution with minimal environmental impact.",
    products: ["Product J", "Product K", "Product L"],
    tags: ["CONCEPT: MINING", "Karma, Samba"]
  },
  {
    title: "Mohammed VI Tower",
    description: "Café is close to a central building in harmony with the community of Mennipeg VI Tower. It will be built from a museum.",
    image: "assets/image/5.jpg",
    gallery: ["assets/image/5.jpg", "assets/image/1.jpg", "assets/image/2.jpg"],
    requirements: "The project involved constructing a high-rise tower with a mix of residential and commercial spaces.",
    products: ["Product M", "Product N", "Product O"],
    tags: ["3 July, Morocco"]
  },
  {
    title: "Moments Club",
    description: "High energy weather for free summer products.",
    image: "assets/image/6.jpg",
    gallery: ["assets/image/6.jpg", "assets/image/1.jpg", "assets/image/2.jpg"],
    requirements: "The project focused on creating a vibrant social club with modern amenities and a luxurious atmosphere.",
    products: ["Product P", "Product Q", "Product R"],
    tags: ["CEMENT ARRECTURE", "Samba, Clib"]
  },
  {
    title: "Aura Home Apartments",
    description: "If you have used your assistance for your activities or accommodations?",
    image: "assets/image/7.jpg",
    gallery: ["assets/image/7.jpg", "assets/image/1.jpg", "assets/image/2.jpg"],
    requirements: "The project aimed to design affordable yet stylish apartments for urban living.",
    products: ["Product S", "Product T", "Product U"],
    tags: ["IMAGE: BRANTHENE*", "Marek, Sale"]
  },
  {
    title: "Bendsburg Canal Tunnel",
    description: "The mountains are warm, warm and peaceful throughout the country. The mountain has a wide variety of vegetation and terrain.",
    image: "assets/image/8.jpg",
    gallery: ["assets/image/8.jpg", "assets/image/1.jpg", "assets/image/2.jpg"],
    requirements: "The project involved building a tunnel under a canal to improve transportation infrastructure.",
    products: ["Product V", "Product W", "Product X"],
    tags: ["4 Parking, Germany"]
  }
];

// Function to create project cards
function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.title;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tags = document.createElement("div");
  tags.classList.add("tags");
  project.tags.forEach(tag => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tags.appendChild(tagElement);
  });

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(tags);

  // Add click event to open popup
  card.addEventListener("click", () => openPopup(project));

  return card;
}

// Function to render projects
function renderProjects() {
  console.log("Rendering projects..."); // Debugging line
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) {
    console.error("projects-grid element not found!"); // Debugging line
    return;
  }
  projects.forEach(project => {
    const card = createProjectCard(project);
    projectsGrid.appendChild(card);
  });
}

// Function to open popup
function openPopup(project) {
  console.log("Opening popup for project:", project.title); // Debugging line

  // Select popup elements
  const popup = document.getElementById("project-popup");
  const popupImage = popup.querySelector(".popup-image");
  const popupDescription = popup.querySelector(".popup-description");
  const galleryMainImage = popup.querySelector(".gallery-main-image");
  const galleryDots = popup.querySelector(".gallery-dots");
  const requirementsText = popup.querySelector(".requirements-text");
  const popupProducts = popup.querySelector(".popup-products ul");

  if (!popup || !popupImage || !popupDescription || !galleryMainImage || !galleryDots || !requirementsText || !popupProducts) {
    console.error("One or more popup elements not found!"); // Debugging line
    return;
  }

  // Set full-width image and description
  popupImage.src = project.image;
  popupImage.alt = project.title;
  popupDescription.textContent = project.description;

  // Set gallery images and dots
  galleryDots.innerHTML = ""; // Clear previous dots
  project.gallery.forEach((img, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      galleryMainImage.src = img; // Update main image
      galleryDots.querySelectorAll(".dot").forEach(d => d.classList.remove("active")); // Remove active class from all dots
      dot.classList.add("active"); // Add active class to clicked dot
    });
    galleryDots.appendChild(dot);
  });
  galleryMainImage.src = project.gallery[0]; // Set the first image as default

  // Set project requirements
  requirementsText.textContent = project.requirements;

  // Set products used
  popupProducts.innerHTML = ""; // Clear previous products
  project.products.forEach(product => {
    const productItem = document.createElement("li");
    productItem.textContent = product;
    popupProducts.appendChild(productItem);
  });

  // Show popup
  popup.style.display = "block";
  console.log("Popup displayed successfully!"); // Debugging line
}

// Function to close popup
function closePopup() {
  const popup = document.getElementById("project-popup");
  popup.style.display = "none";
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed"); // Debugging line
  renderProjects(); // Render projects
  const closeBtn = document.querySelector(".close-popup");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePopup);
  } else {
    console.error("close-popup button not found!"); // Debugging line
  }
});
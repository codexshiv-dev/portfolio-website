const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

themeToggle.onclick = () => {
  body.classList.toggle("light-mode");
  themeToggle.classList.toggle("bx-sun");
  themeToggle.classList.toggle("bx-moon");
};


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector('.navbar a[href*=' + id + ']').classList.add("active");
      });
    }
  });
};
let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 50);
});

//multiple typing roles 
const roles = [
  "Learning Backend",
  "JavaScript Evolv..",
  "Building Real Projects",
  "Learning DevOps"
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing-role").textContent =
    currentRole.substring(0, j);

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


//cursor glow
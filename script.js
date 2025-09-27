// Smooth scroll animation on nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector('.nav-links').classList.remove("show");
  });
});

// Scroll reveal effect
const sections = document.querySelectorAll('.fade-in');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Mobile nav toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

console.log("Modern Portfolio Loaded Successfully!");

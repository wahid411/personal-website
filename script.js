let navlinks = document.getElementById("navlinks");
let menu_icon = document.getElementById("menu-icon");

menu_icon.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});


const cards = document.querySelectorAll('.row-1 .card');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target); // ek dafa animate hone ke baad dobara na chale
    }
  });
}, { threshold: 0.25 });

cards.forEach(card => io.observe(card));




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

const progressBars = document.querySelectorAll(".progress"); window.addEventListener("load", () => { progressBars.forEach((bar) => { const width = bar.classList.contains("html") ? "95%" : bar.classList.contains("css") ? "90%" : bar.classList.contains("js") ? "85%" : bar.classList.contains("python") ? "80%" : "75%"; setTimeout(() => { bar.style.width = width; }, 300); }); });




  const boxes = document.querySelectorAll('.custom-img, .right-hand-content');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }

    });

}, {
    threshold: 0.3
});

boxes.forEach((box) => {
    observer.observe(box);
});




const elements = document.querySelectorAll(
  '.black-hidden, .another-hidden'
);

const observer2 = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

}, {
  threshold: 0.3
});

elements.forEach((el) => {
  observer2.observe(el);
});
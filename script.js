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

const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.3
});

document.querySelectorAll(".innovative-container").forEach((item)=>{
    observer3.observe(item);
});

// Heading

const headingObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:.3
});

headingObserver.observe(document.querySelector(".desgin-heading"));


// Cards

const cardObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:.2
});

document.querySelectorAll(".desing-card").forEach(card=>{
    cardObserver.observe(card);
});

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".new-section, .creative-box").forEach((el) => {
  observer4.observe(el);
});

const observerAction = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show2");
    }
  });
}, {
  threshold: 0.2
});

const animationItems = document.querySelectorAll(
  ".inovation-heading, .brand-box, .action-sec"
);

animationItems.forEach((item) => {
  observerAction.observe(item);
});


const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show3");
    }
  });
}, {
  threshold: 0.2
});

const businessHeading = document.querySelector(".bussnies-heading");
observer6.observe(businessHeading);


// Classes add karo
document.querySelector(".mini-title").classList.add("animate-skill");
document.querySelector(".skills-heading").classList.add("animate-skill");
document.querySelector(".skills-para").classList.add("animate-skill");
document.querySelector(".small-line").classList.add("animate-skill");

document.querySelectorAll(".stat-card").forEach(card => {
  card.classList.add("animate-skill");
});

document.querySelector(".learning-box").classList.add("animate-skill");

document.querySelectorAll(".skill-item").forEach(item => {
  item.classList.add("animate-skill");
});

// Observer
const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show4");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".animate-skill").forEach((item) => {
  observer7.observe(item);
});

// Animate class add karo
document.querySelector(".faq-badge").classList.add("animate-faq");
document.querySelector(".faq-left h2").classList.add("animate-faq");
document.querySelector(".underline").classList.add("animate-faq");
document.querySelector(".faq-left > p").classList.add("animate-faq");
document.querySelector(".faq-illustration").classList.add("animate-faq");
document.querySelector(".contact-box").classList.add("animate-faq");

document.querySelectorAll(".faq-right details").forEach((item) => {
  item.classList.add("animate-faq");
});

// Observer
const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show5");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".animate-faq").forEach((item) => {
  observer8.observe(item);
});



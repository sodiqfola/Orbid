//jshint esversion:8

//making burger navbar work
let nav = document.querySelector(".header");
let open = document.querySelector('.icon-mobile[name="menu-outline"]');
let close = document.querySelector('.icon-mobile[name="close-outline"]');

open.addEventListener("click", function () {
  nav.classList.add("nav-open");
});
close.addEventListener("click", function () {
  nav.classList.remove("nav-open");
});

//sticky navbar
const hero = document.querySelector(".section-hero");
const toUp = document.querySelector(".scroll-top");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      toUp.classList.add("d-vis");
      
    } else {
      document.body.classList.remove("sticky");
      toUp.classList.remove("d-vis");
    }
  },
  {
    //helpfull in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(hero);

//for tabs to work

const tabWrapper = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".content");

tabWrapper.addEventListener("click", (e) => {
  // console.log(e, e.target.dataset.id);
  const id = e.target.dataset.id;
  //   console.log(id);
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("tab-active");
    });
    e.target.classList.add("tab-active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

/// year to auto update
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

///smooth scroll///
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      nav.classList.remove("nav-open");
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///for auto-scroll feature section

const splide = new Splide("#feature", {
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 4,
  autoScroll: {
    speed: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: false,
  },
});

const heroSplide = new Splide("#hero-img", {
  type: "loop",
  autoplay: "play",
  perPage: 1,
  intersection: {
    inView: {
      autoplay: true,
    },
  },
});

heroSplide.mount(window.splide.Extensions.intersection);
splide.mount(window.splide.Extensions);


// tabButton.forEach((button, i) =>{
//    button.addEventListener("click", (e) =>{
//      const id = e.target.dataset.id;
//      console.log(id,i);
//      if (id) {
//        tabButton.forEach((btn) => {
//          btn.classList.remove("tab-active");
//        });
//        e.target.classList.add("tab-active");

//        contents.forEach((content) => {
//          content.classList.remove("active");
//        });
//        const element = document.getElementById(id);
//        element.classList.add("active");
//      }
//    });
// });

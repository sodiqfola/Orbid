//jshint esversion:8


const sr = ScrollReveal({
  distance: "50px",
  duration: 2500,
  origin: "bottom",

});


//
sr.reveal(".header", { origin: "top" });
sr.reveal(".hero-text-box", { delay: 200});
sr.reveal(".hero-img", {delay: 600, distance: "70px" });
// sr.reveal(".features", { delay: 200 });
sr.reveal(".tp", { delay: 500, origin: "top" });
sr.reveal(".tabs-bar", { delay: 700 });
sr.reveal(".drop-grid", { delay: 700});
sr.reveal(".creator-grid", { delay: 600 });
sr.reveal(".cta, .footer-grid", {delay: 500 });
sr.reveal(".tp2", { delay: 600 });
sr.reveal(".copyright", { delay: 900 });


//!NAVIGATION BAR
let visibleNavBar = document.querySelector(".visible-nav-bar");
let hiddenNavBar = document.querySelector(".hidden-nav-bar");

window.addEventListener("scroll", function (e) {
   e.preventDefault();
   if (scrollY > 50) {
      visibleNavBar.style.opacity = "0";
      visibleNavBar.style.zIndex = "-1";
      hiddenNavBar.style.zIndex = "5";
      hiddenNavBar.style.opacity = "1";
   } else {
      visibleNavBar.style.opacity = "1";
      hiddenNavBar.style.opacity = "0";
      hiddenNavBar.style.zIndex = "-1";
      visibleNavBar.style.zIndex = "5";
   }
});

// //! Navigation Menu
// const bar = document.querySelectorAll(".fa-bars");
// const downA = document.getElementById("down-a");
// const upA = document.getElementById("up-a");

// let hidden = document.querySelector(".hidden");
// let listEl = document.querySelectorAll(".l");
// let browseClick = document.getElementById("browse-click");
// let dark = document.querySelector(".dark");

// bar.forEach((m) =>
//    m.addEventListener("click", function () {
//       hidden.classList.add("active");
//       dark.style.zIndex = "6";
//    })
// );
// dark.addEventListener("click", function (e) {
//    e.preventDefault();
//    hidden.classList.remove("active");
//    dark.style.zIndex = "-2";
// });
// listEl.forEach((n) =>
//    n.addEventListener("click", function (e) {
//       e.preventDefault();
//       hidden.classList.remove("active");
//       dark.style.zIndex = "-2";
//    })
// );

// downA.addEventListener("click", function (e) {
//    e.preventDefault();
//    browseClick.style.display = "flex";
//    downA.style.display = "none";
//    upA.style.display = "flex";
// });
// upA.addEventListener("click", function (e) {
//    e.preventDefault();
//    browseClick.style.display = "none";
//    downA.style.display = "flex";
//    upA.style.display = "none";
// });

// //! LOGIN SECTION
// const join = document.querySelectorAll(".join-btn");
// let log = document.querySelector(".log-container");

// join.forEach((l) =>
//    l.addEventListener("click", function (e) {
//       e.preventDefault();
//       log.style.display = "flex";
//       dark.style.zIndex = "6";
//    })
// );
// dark.addEventListener("click", function (e) {
//    e.preventDefault();
//    log.style.display = "none";
//    dark.style.zIndex = "-2";
// });
// window.addEventListener("DOMContentLoded", popLogin);
// let popInt = setTimeout(popLogin, 3000);

// function popLogin() {
//    log.style.display = "flex";
//    dark.style.zIndex = "6";
// }

//! SLIDE MOVE
const slideArray = [
   { img: "url(src/images/slide/green.jpg)" },
   { img: "url(src/images/slide/salmon.jpg)" },
   { img: "url(src/images/slide/yellow.jpg)" },
   { img: "url(src/images/slide/green.jpg)" },
   { img: "url(src/images/slide/red3.jpg)" },
   { img: "url(src/images/slide/pink.jpg)" },
];
let hero = document.querySelector(".hero");
let curentSlide = 0;
let slideInt;

function slideMove() {
   let item = slideArray[curentSlide];
   if (curentSlide === 5) {
      curentSlide = 0;
   } else if (window.innerWidth < 1000) {
      hero.classList, add("res");
   } else {
      curentSlide++;
   }
   hero.style.backgroundImage = item.img;
}
function clrInt() {
   clearInterval(slideInt);
   slideInt = setInterval(slideMove, 5000);
}

function resBg() {
   if (window.innerWidth < 1000) {
      return;
   } else {
      clrInt();
   }
}
resBg();

//!SERVICES SECTION
const leftMove = document.getElementById("left");
const rightMove = document.getElementById("right");

let servicesContainer = document.querySelector(".services-container");

rightMove.addEventListener("click", function () {
   servicesContainer.classList.add("right");
   servicesContainer.classList.remove("left");
});
leftMove.addEventListener("click", function () {
   servicesContainer.classList.remove("right");
   servicesContainer.classList.add("left");
});
bgChange();

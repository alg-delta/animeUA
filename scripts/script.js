// start модальне вікно
const text = [
  "KonoSuba — серія комедійних романів, написаних Нацуме Акацукі. Спочатку роман публікувався на сайті для письменників-початківців Shōsetsuka ni Narō з грудня 2012 року до жовтня 2013 року.",
  "Overlord (яп. オーバーロード, О:ба:ро:до, «Оверлорд») — серія ранобе авторства Кугане Маруями з ілюстраціями so-bin. Перший роман серії почав публікуватися онлайн в 2010 році, потім права на книги були придбані видавництвом Enterbrain . З 30 липня 2012 року було видано 13 томів",
  "«One-Punch Man» (яп. ワンパンマン — Ванпанман, укр. Ванпанчмен) — японська вебманґа ONE, яка почала видаватися на сайті автора в 2009.",
  "Sword Art Online (яп. ソードアート・オンライン Со:до А:то Онрайн) — серия ранобэ японского писателя Рэки Кавахары с иллюстрациями художника, выступающего под псевдонимом abec",
  "",
  "",
  "",
  "",
  "",
  "",

];
let cardBig = document.querySelector(".cardBig");
let textMod = document.querySelector(".mod");
let openModel = document.querySelectorAll(".card-img");
let closeModel = document.querySelector(".close-modal");
// let btnModel = document.querySelector(".modal-btn");
let modalWrapper = document.querySelector(".modal-wrapper");

// console.log(openModel);була створена анімаційною студією Studio Deen, як режисера виступив Канасакі Такаомі.

// console.log(closeModel);
// console.log(btnModel);
// console.log(modalWrapper);

// for (item of openModel) {
//   item.addEventListener("click", function (event) {
//     modalWrapper.style.display = "flex";

//     let activecard = event.target;
//     let srcActiveCard = activecard.getAttribute("src");
//     cardBig.setAttribute("src", srcActiveCard);
//   });
// }

for (let i = 0; i < openModel.length; i = i + 1) {
  openModel[i].addEventListener("click", function (event) {
    modalWrapper.style.display = "flex";

    let activecard = openModel[i];
    let srcActiveCard = activecard.getAttribute("src");
    cardBig.setAttribute("src", srcActiveCard);
    textMod.innerText = text[i];
  });
}

closeModel.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

modalWrapper.addEventListener("click", function () {
  if (event.target === modalWrapper) modalWrapper.style.display = "none";
});

// btnModel.addEventListener("click", function () {
//   modalWrapper.style.display = "none";
// });

document.addEventListener("keydown", onPress);

function onPress(event) {
  if (event.code === "Escape") {
    modalWrapper.style.display = "none";
  }
}

// end модальне вікно

// start модальне вікно2

let openModel1 = document.querySelectorAll(".banner-btn-explore");
let closeModel1 = document.querySelector(".close-modal1");
let btnModel1 = document.querySelector(".modal-btn1");
let modalWrapper1 = document.querySelector(".modal-wrapper1");

// console.log(openModel);
// console.log(closeModel);
// console.log(btnModel);
// console.log(modalWrapper);

for (item of openModel1) {
  item.addEventListener("click", function () {
    modalWrapper1.style.display = "flex";
  });
}

closeModel1.addEventListener("click", function () {
  modalWrapper1.style.display = "none";
});

modalWrapper1.addEventListener("click", function (event) {
  if (event.target === modalWrapper1) modalWrapper1.style.display = "none";
});

btnModel1.addEventListener("click", function () {
  modalWrapper1.style.display = "none";
});

document.addEventListener("keydown", onPress);

function onPress(event) {
  if (event.code === "Escape") {
    modalWrapper1.style.display = "none";
  }
}

// end модальне вікно2

// start напрямки

let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".card");

for (tab of tabs) {
  tab.addEventListener("click", onClickTab);
}

function onClickTab(event) {
  for (tab of tabs) {
    tab.classList.remove("tabs-active");
  }

  event.target.classList.add("tabs-active");

  let filter = event.target.getAttribute("data-target");
  console.log(filter);
  for (card of cards) {
    let cardId = card.getAttribute("data-id");
    if (cardId === filter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

for (card of cards) {
  let cardId = card.getAttribute("data-id");
  if (cardId === "centre") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}

// end tabs
// Start slider

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let sliderNext = document.querySelector(".nextBtn");
let sliderBack = document.querySelector(".backBtn");
// console.log(slides);
// console.log(dots);
// console.log(sliderNext);
// console.log(sliderBack);
let activeSlide = 0;
showSlide(activeSlide);
function showSlide(n) {
  if (n > slides.length - 1) {
    activeSlide = 0;
  }
  if (n < 0) {
    activeSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[activeSlide].style.display = "flex";
  dots[activeSlide].classList.add("active");
}

sliderNext.addEventListener("click", function () {
  activeSlide = activeSlide + 1;
  showSlide(activeSlide);
});

sliderBack.addEventListener("click", function () {
  activeSlide = activeSlide - 1;
  showSlide(activeSlide);
});

for (let i = 0; i < slides.length; i = i + 1) {
  dots[i].addEventListener("click", function () {
    activeSlide = i;
    showSlide(activeSlide);
  });
}

// кнопка верх

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 500) {
      $(".upButton").fadeIn(500);
    } else {
      $(".upButton").fadeOut(500);
    }
  });

  $(".upButton").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
  });
});

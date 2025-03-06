import { servicesCards } from "./data.js";

const servicesWrapperNode = document.querySelector(".services__wrapper");

const createServicesCards = ({ id, text, icon }) => {
  const serviceCard = document.createElement("article");
  serviceCard.className = "service-card";
  serviceCard.id = id;
  serviceCard.innerHTML = `
  <div class="service-card__box">
  <p class="service-card__text text">${text}</p>
  <img class="service-card__icon" src=${icon} alt="icon">
  </div>
  <div class="service-card__gradient"></div>
  `;

  return serviceCard;
};
const renderServicesCards = (cards) => {
  servicesWrapperNode.innerHTML = "";
  cards.forEach((cards) => {
    const createCard = createServicesCards(cards);
    servicesWrapperNode.append(createCard);
  });
};

renderServicesCards(servicesCards);

const menuContainers = document.querySelectorAll(".header__menu-container");

menuContainers.forEach((el) => {
  const buttonNode = el.querySelector(".header__menu-btn");
  const listNode = el.querySelector(".header__dev-list");
  const iconNode = el.querySelector(".header__menu-icon");

  el.addEventListener("click", (evt) => {
    if (listNode.contains(evt.target)) return;

    menuContainers.forEach((otherContainer) => {
      if (otherContainer !== el) {
        otherContainer
          .querySelector(".header__dev-list")
          .classList.remove("active");
        otherContainer
          .querySelector(".header__menu-icon")
          .classList.remove("active");
      }
    });

    buttonNode.classList.toggle("active");
    listNode.classList.toggle("active");
    iconNode.classList.toggle("active");
  });
});

const burgerCheckboxNode = document.getElementById("burger-checkbox");
const burgerMenuListNode = document.getElementById("burgerMenuList");
const overlayNode = document.getElementById("overlay");
const bodyNode = document.body;

burgerCheckboxNode.addEventListener("change", () => {
  if (burgerCheckboxNode.checked) {
    burgerMenuListNode.classList.add("active");
    overlayNode.classList.add("active");
    bodyNode.classList.add("no-scroll");
  } else {
    burgerMenuListNode.classList.remove("active");
    overlayNode.classList.remove("active");
    bodyNode.classList.remove("no-scroll");
  }
});

overlayNode.addEventListener("click", () => {
  burgerCheckboxNode.checked = false;
  burgerMenuListNode.classList.remove("active");
  overlayNode.classList.remove("active");
  bodyNode.classList.remove("no-scroll");
});

document.querySelectorAll(".burger__menu-list a").forEach((link) => {
  link.addEventListener("click", () => {
    burgerCheckboxNode.checked = false;
    burgerMenuListNode.classList.remove("active");
    overlayNode.classList.remove("active");
    bodyNode.classList.remove("no-scroll");
  });
});

import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import resto from "../DATA.json";

const navEl = document.querySelector("#nav");
const navLink = document.querySelector(".nav-item");
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelectorAll(".bar");

window.onscroll = () => {
  if (window.scrollY > 70) {
    navEl.classList.add("navbar-active");
  } else {
    navEl.classList.remove("navbar-active");
  }
};

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("nav-item-open");
  bar.forEach((element) => {
    element.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const restoListEl = document.querySelector(".resto-list");
  const datas = resto.restaurants;
  let index = 6;
  datas.map(
    (data) => (
      (restoListEl.innerHTML += `
          <div class="resto-item" tabindex="${index}">
            <div class="card">
              <img
                src="${data.pictureId}"
                alt="restaurant image"
                class="resto-thumb"
              />
              <div class="card-text">
                <h1 class="card-title">${data.name}</h1>
                <div class="resto-rate">
                  Rating: <span class="rate">${data.rating}</span>
                </div>
                ${data.description}
              </div>
              <div class="resto-place">${data.city}</div>
            </div>
          </div>
      `),
      index++
    )
  );
});

console.log("Hello Coders! :)");

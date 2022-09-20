import "./style.css";
import headerComponent from "./components/header/header.js";
import mainComponent from "./components/home/home.js";
import menuComponent from "./components/menu/menu.js";
import contactComponent from "./components/contact/contact.js";

document.body.appendChild(document.createElement("header"));

const header = document.querySelector("header");

document.body
  .appendChild(document.createElement("div"))
  .setAttribute("id", "content");

const content = document.getElementById("content");

window.addEventListener("DOMContentLoaded", () => {
  headerComponent(header);
  mainComponent(content);
  handleTabChange();
});

function handleTabChange() {
  const headerBtns = document.querySelector(".nav-list");

  headerBtns.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-btn")) {
      content.innerHTML = "";
      menuComponent(content);
    } else if (e.target.classList.contains("contact-btn")) {
      content.innerHTML = "";
      contactComponent(content);
    } else if (e.target.classList.contains("home-btn")) {
      content.innerHTML = "";
      mainComponent(content);
    }
    handleTabStyle(e.target.classList);
  });
}

function handleTabStyle(targetClass) {
  const activeTab = document.querySelector(".active-tab");

  if (activeTab) activeTab.classList.remove("active-tab");
  targetClass.add("active-tab");
}
console.log("Hi Bebo! <3");

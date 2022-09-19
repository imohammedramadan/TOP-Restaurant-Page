import "./style.css";
import headerComponent from "./header.js";
import mainComponent from "./home.js";
import menuComponent from "./menu";
// import menuComponent from "./menu.js";
document.body.appendChild(document.createElement("header"));
const header = document.querySelector("header");

document.body
  .appendChild(document.createElement("div"))
  .setAttribute("id", "content");

const content = document.getElementById("content");

headerComponent(header);
mainComponent(content);

function handleTabChange() {
  const headerBtns = document.querySelector(".nav-list");

  headerBtns.addEventListener("click", (e) => {
    if (e.target.classList.value === "menu-btn") {
      content.innerHTML = "";
      menuComponent(content);
    } else if (e.target.classList.value === "contact-btn") {
      contactComponent(content);
    } else if (e.target.classList.value === "home-btn") {
      content.innerHTML = "";
      mainComponent(content);
    }
    console.log(e.target.parentNode.parentNode);
  });
}

handleTabChange();

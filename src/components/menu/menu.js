import "./style.css";
import steakImg from "./assets/steak.jpg";
import pizzaImg from "./assets/pizza.jpg";
import burgerImg from "./assets/burger.jpg";

export default function menuComponent(parent) {
  const menu = document.createElement("div");

  menu.classList.add("menu-container");
  menu.innerHTML = `<ul class="menu-list">
  <li class="menu-item">
    <div class="item-title">
      <h2>Pizza</h2>
    </div>
    <div class="item-img">
      <img src="${pizzaImg}" height="200px">
    </div>
    <div class="item-price">
      <p>3.99$</p>
    </div>
  </li>
  <li class="menu-item">
    <div class="item-title">
      <h2>Burger</h2>
    </div>
    <div class="item-img">
      <img src="${burgerImg}" height="200px">
    </div>
    <div class="item-price">
      <p>5.99$</p>
    </div>
  </li>
  <li class="menu-item">
    <div class="item-title">
      <h2>Steak</h2>
    </div>
    <div class="item-img">
      <img src="${steakImg}" height="200px">
    </div>
    <div class="item-price">
      <p>10.99$</p>
    </div>
  </li>
</ul>`;

  parent.appendChild(menu);
}

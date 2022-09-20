import "./style.css";
import pizzaImg from "./assets/pizza.jpg";
import pizzaRollsImg from "./assets/pizza-rolls.jpg";
import omeletteImg from "./assets/special-omelette.jpg";
import burgerImg from "./assets/egyptian-style-burger.jpg";

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
      <h2>Pizza Rolls</h2>
    </div>
    <div class="item-img">
      <img src="${pizzaRollsImg}" height="200px">
    </div>
    <div class="item-price">
      <p>6.99$</p>
    </div>
  </li>
  <li class="menu-item">
    <div class="item-title">
      <h2>Egyptian Style Burger</h2>
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
      <h2>Special Omelette</h2>
    </div>
    <div class="item-img">
      <img src="${omeletteImg}" height="200px">
    </div>
    <div class="item-price">
      <p>6.99$</p>
    </div>
  </li>
</ul>`;

  parent.appendChild(menu);
}

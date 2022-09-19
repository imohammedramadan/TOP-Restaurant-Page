export default function menuComponent(parent) {
  const menu = document.createElement("div");

  menu.classList.add("menu-container");
  menu.innerHTML = `<ul class="menu-list">
  <li class="menu-item">
    <div class="item-title">
      <h2>Pizza</h2>
    </div>
    <div class="item-price">
      <p>3.99$</p>
    </div>
  </li>
  <li class="menu-item">
    <div class="item-title">
      <h2>Cake</h2>
    </div>
    <div class="item-price">
      <p>5.99$</p>
    </div>
  </li>
  <li class="menu-item">
    <div class="item-title">
      <h2>Steak</h2>
    </div>
    <div class="item-price">
      <p>10.99$</p>
    </div>
  </li>
  <li class="menu-item">
    <div class="item-title">
      <h2>A whole Cow!</h2>
    </div>
    <div class="item-price">
      <p>199.99$</p>
    </div>
  </li>
</ul>`;

  parent.appendChild(menu);
}

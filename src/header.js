export default function headerComponent(parent) {
  const navbar = document.createElement("div");

  navbar.classList.add("nav-container");
  navbar.innerHTML = `<nav>
  <ul class="nav-list">
    <li class="nav-item nav-home">
      <button type="button" class="home-btn">Home</button>
    </li>
    <li class="nav-item nav-menu">
      <button type="button" class="menu-btn">Menu</button>
    </li>
    <li class="nav-item nav-contact">
      <button type="button" class="contact-btn">Contact</button>
    </li>
  </ul>
</nav>`;

  parent.appendChild(navbar);
}

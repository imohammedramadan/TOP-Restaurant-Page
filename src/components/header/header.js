import "./style.css";

export default function headerComponent(parent) {
  const navbar = document.createElement("div");

  navbar.classList.add("nav-container");
  navbar.innerHTML = `
  <div class="logo">
      <h1>Bebo's</h1>
    </div>
    <nav>
      <ul class="nav-list">
        <li class="nav-item nav-home">
          <button type="button" class="nav-btn home-btn active-tab">Home</button>
        </li>
        <li class="nav-item nav-menu">
          <button type="button" class="nav-btn menu-btn ">Menu</button>
        </li>
        <li class="nav-item nav-contact">
          <button type="button" class="nav-btn contact-btn">Contact</button>
        </li>
      </ul>
    </nav>`;

  parent.appendChild(navbar);
}

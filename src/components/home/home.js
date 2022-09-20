import "./style.css";

export default function homeComponent(parent) {
  const hero = document.createElement("div");

  hero.classList.add("hero-container");
  hero.innerHTML = `<div class="headline">
  <h1>Welcome to Bebo's</h1>
</div>
<div class="self-adv">
  <p>We're a cool restaurant, please Checkout our menu and visit us!</p>
</div>
`;

  parent.appendChild(hero);
}

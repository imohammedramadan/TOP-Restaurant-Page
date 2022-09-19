import Img from "./logo-UnkSq.png";

export default function homeComponent(parent) {
  const hero = document.createElement("div");

  hero.classList.add("hero-container");
  hero.innerHTML = `<div class="headline">
  <h1>Welcome to UnknownSquad Restaurant</h1>
</div>
<div class="self-adv">
  <p>Hi! this is a cool restaurant, please visit!</p>
</div>
<div class="adv-img">
  <img src="${Img}" alt="" />
</div>`;

  parent.appendChild(hero);
}

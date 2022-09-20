import "./style.css";

export default function contactComponent(parent) {
  const contactContainer = document.createElement("div");

  contactContainer.classList.add("contact-container");
  contactContainer.innerHTML = `<div class="call-container">
  <h2>Call us here!</h2>
  <p>+01234567890</p>
</div>
<div class="address-container">
  <h2>Visit us here!</h2>
  <p>221B Baker Street</p>
</div>`;

  parent.appendChild(contactContainer);
}

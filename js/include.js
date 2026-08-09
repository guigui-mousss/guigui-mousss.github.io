// Petits comportements communs à toutes les pages :
// surligne le lien de navigation actif, gère le menu mobile,
// met à jour l'année dans le footer.

function setActiveNavLink() {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll("[data-nav] a").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("is-active");
    }
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".site-header__menu-toggle");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setFooterYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = new Date().getFullYear();
}

function setupCarousels() {
  document.querySelectorAll(".project-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".project-carousel__track");
    const prev = carousel.querySelector(".project-carousel__btn--prev");
    const next = carousel.querySelector(".project-carousel__btn--next");
    if (!track) return;

    const scrollByOneCard = (direction) => {
      const card = track.querySelector("img");
      const amount = card ? card.getBoundingClientRect().width + 6 : 300;
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    if (prev) prev.addEventListener("click", () => scrollByOneCard(-1));
    if (next) next.addEventListener("click", () => scrollByOneCard(1));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLink();
  setupMobileMenu();
  setFooterYear();
  setupCarousels();
});

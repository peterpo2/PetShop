const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const mobileCta = document.querySelector(".mobile-cta");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const closeNav = () => {
  document.body.classList.remove("nav-open");
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNav();
  }
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
  mobileCta?.classList.toggle("is-visible", window.scrollY > 420);
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("nav-open")) {
    return;
  }

  const target = event.target;
  if (target instanceof Node && !nav?.contains(target) && !navToggle?.contains(target)) {
    closeNav();
  }
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

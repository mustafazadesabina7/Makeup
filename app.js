/*1.All Beauty Chat New, Shop Store & Delivery, Services & Events, Sign In (siçanla üzərinə gəldikdə qutunun açılıb-bağlanması)*/
const containers = document.querySelectorAll(".fresnel_container");

containers.forEach((container) => {
  const box = container.querySelector(".hover_box");

  container.addEventListener("mouseenter", () => {
    box.style.display = "block";
  });

  container.addEventListener("mouseleave", () => {
    box.style.display = "none";
  });
});

/*2.Header hissede urek ikonu ile sebet ikonun uzerine gelende acilmasi ve rengin deyismesi*/
const iconBoxe = document.querySelectorAll(".icon_box");
iconBoxe.forEach((iconBoxe) => {
  const icon = iconBoxe.querySelector(".loves i");
  const dropdown = iconBoxe.querySelector(".dropdown");

  iconBoxe.addEventListener("mouseenter", () => {
    dropdown.style.display = "block";
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  });

  iconBoxe.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  });
});

/*3.Arxa fonu qara rengli header hissesi*/
const navItems = document.querySelectorAll(".nav_item");

navItems.forEach((item) => {
  const dropdown = item.querySelector(".dropdown1");

  item.addEventListener("mouseenter", () => {
    dropdown.style.display = "block";
  });

  item.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });
});

/*4.Sort by: Relevance main hisse*/
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("sortWrapper");
  const btn = document.getElementById("sortBtn");
  const items = document.querySelectorAll(".sort-dropdown li");
  const selected = document.getElementById("selectedSort");

  // Aç / bağla
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    wrapper.classList.toggle("active");
  });

  // Item seçimi
  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      selected.textContent = this.dataset.value;
      wrapper.classList.remove("active");
    });
  });

  // Çöldə klik → bağla
  document.addEventListener("click", function () {
    wrapper.classList.remove("active");
  });
});

/* 5. Footer hisse.Sephora Events*/
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.querySelector(".nav_menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

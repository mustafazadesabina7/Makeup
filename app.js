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
// document.addEventListener("DOMContentLoaded", function () {
//   const wrapper = document.getElementById("sortWrapper");
//   const btn = document.getElementById("sortBtn");
//   const items = document.querySelectorAll(".sort-dropdown li");
//   const selected = document.getElementById("selectedSort");

//   // Aç / bağla
//   btn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     wrapper.classList.toggle("active");
//   });

//   // Item seçimi
//   items.forEach((item) => {
//     item.addEventListener("click", function (e) {
//       e.stopPropagation();
//       selected.textContent = this.dataset.value;
//       wrapper.classList.remove("active");
//     });
//   });

//   // Çöldə klik → bağla
//   document.addEventListener("click", function () {
//     wrapper.classList.remove("active");
//   });
// });

/* 5. Footer hisse.Sephora Events*/
// const menuIcon = document.getElementById("menuIcon");
// const navMenu = document.querySelector(".nav_menu");

// menuIcon.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
// });

// 6*. Header, Events hisse.
// const filter_header1 = document.querySelector(".filter_header1");
// const filter_options = document.querySelector(".filter_options");

// filter_header1.addEventListener("click", () => {
//   filter_options.classList.toggle("active");
// });

// // 7*.Sign in
// const registrationForm = document.getElementById("registrationForm");

// registrationForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   validateForm();
// });

// function validateForm() {
//   let errors = {};

//   const email = document.getElementById("emailInput").value.trim();
//   const password = document.getElementById("passwordInput").value.trim();
//   const checkbox = document.getElementById("checkbox").checked;

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     errors.emailInput = "Düzgün email daxil edin";
//   }

//   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   if (!passwordRegex.test(password)) {
//     errors.passwordInput =
//       "Minimum 8 simvol, ən azı 1 böyük hərf, 1 rəqəm olmalıdır";
//   }

//   if (!checkbox) {
//     errors.checkbox = "Keep me signed in seçilməlidir";
//   }

//   showErrors(errors);

//   if (Object.keys(errors).length === 0) {
//     submitForm();
//   }

//   function showErrors(errors) {
//     document
//       .querySelectorAll("span")
//       .forEach((error) => (error.innerText = ""));
//     for (let key in errors) {
//       let errorElement = document.getElementById(key + "Error");
//       if (errorElement) {
//         errorElement.innerText = errors[key];
//       }
//     }
//   }

//   function submitForm() {
//     document.getElementById("successMessage").innerText =
//       "Qeydiyyat uğurla tamamlandı";
//     document.getElementById("registrationForm").reset();
//   }
// }

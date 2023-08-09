document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuItems = document.querySelector(".menu-items");
  
    menuIcon.addEventListener("click", function () {
      menuIcon.classList.toggle("active");
      menuItems.classList.toggle("active");
    });
  });
  
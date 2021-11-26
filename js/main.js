window.onload = function () {
  const body = document.body;
  const header = document.querySelector("header");
  const smoothLinksList = document.querySelectorAll('a[href^="#"]');
  const viewBtnsList = document.querySelectorAll("button[data-block-id]");
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelectorAll(".navbar a");
  const burger = document.querySelector(".burger");

  // Toggle "sticky" class for "header"
  document.addEventListener("scroll", function () {
    window.pageYOffset > 0
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  });

  // Work with navbar burger
  burger.addEventListener("click", function () {
    const navIsActive = navbar.classList.value.includes("active");
    !navIsActive ? showNav() : hideNav();
  });


  for (const link of navbarLinks) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      hideNav();
    });
  }

  // Work with smooth links
  for (const link of smoothLinksList) {
    const id = link.getAttribute("href").trim();
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Work with buttons that can display additional content
  for (const button of viewBtnsList) {
    const id = button.getAttribute("data-block-id");
    const block = document.querySelector(id);

    button.addEventListener("click", function () {
      const isActive = block.classList.value.includes("active");
      const contentHeight = block.querySelector("div").offsetHeight;

      if (!isActive) {
        block.style.height = `${contentHeight}px`;
        block.classList.add("active");
        button.innerHTML = "View Less";
      } else {
        block.style.height = "";
        block.classList.remove("active");
        button.innerHTML = "View All";
      }
    });
  }

  // Mobile Navbar Functions
  function showNav() {
    body.style.overflow = "hidden";
    header.classList.remove("sticky");
    navbar.classList.add("active");
    burger.querySelector("img").setAttribute("src", "images/close-icon.svg");
  }
  function hideNav() {
    body.style.overflow = "";
    header.classList.add("sticky");
    navbar.classList.remove("active");
    burger.querySelector("img").setAttribute("src", "images/menu-icon.svg");
  }
};

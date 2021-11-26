window.onload = function () {
  const header = document.querySelector("header");
  const smoothLinksList = document.querySelectorAll('a[href^="#"]');
  const viewBtnsList = document.querySelectorAll("button[data-block-id]");

  // Toggle "sticky" class for "header"
  document.addEventListener("scroll", function () {
    window.pageYOffset > 0
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  });

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

      console.log(isActive);
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
};

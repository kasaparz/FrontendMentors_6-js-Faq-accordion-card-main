const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".icon");

  header.addEventListener("click", () => {
    header.classList.toggle("active");
    icon.classList.toggle("up");
    accordionItems.forEach((other) => {
      if (other !== item) {
        other.querySelector(".accordion-content").style.display = "none";
        other.querySelector(".accordion-header").classList.remove("active");
        other.querySelector(".icon").classList.remove("up");
      }
    });

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

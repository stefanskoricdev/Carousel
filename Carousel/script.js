const pics = document.querySelectorAll(".title");

pics.forEach((pic) => {
  const style = window.getComputedStyle(pic);
  const transform = style.getPropertyValue("transform");
  pic.addEventListener("mouseover", () => {
    pic.style.transform = `${transform} scale(1.2)`;
    pic.style.opacity = "1";
  });
  pic.addEventListener("mouseout", () => {
    pic.style.transform = `${transform}`;
    pic.style.opacity = "0.85";
  });
});

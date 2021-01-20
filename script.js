const pics = document.querySelectorAll(".title");

pics.forEach((pic) => {
  const getStyle = window.getComputedStyle(pic);
  const getTransformValue = getStyle.getPropertyValue("transform");
  pic.addEventListener("mouseover", () => {
    pic.style.transform = `${getTransformValue} scale(1.2)`;
    pic.style.opacity = "1";
  });
  pic.addEventListener("mouseout", () => {
    pic.style.transform = `${getTransformValue}`;
    pic.style.opacity = "0.85";
  });
});

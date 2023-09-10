
const elements = document.getElementsByClassName("has-tooltip");
Array.from(elements).forEach((element) => {
   element.addEventListener("click", function(event) {
    event.preventDefault(); 
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip")
    tooltip.classList.toggle("tooltip_active");
    tooltip.innerHTML = element.getAttribute("title")
    element.insertAdjacentElement("afterend", tooltip);
    const elementCoords = element.getBoundingClientRect();
    const tooltipCoords = tooltip.getBoundingClientRect();
    const left = elementCoords.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
    const top = elementCoords.top + element.offsetHeight;
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  });
});


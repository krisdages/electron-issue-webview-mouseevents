const mousedownDiv = document.getElementById("mousedownDiv");
const mousemoveDiv = document.getElementById("mousemoveDiv");

function setActive(div, isActive) {
	if (isActive) {
		div.classList.add("active");
	}
	else {
		div.classList.remove("active");
	}
}

window.addEventListener("mousedown", () => setActive(mousedownDiv, true));
window.addEventListener("mouseup", () => setActive(mousedownDiv, false));

window.addEventListener("mouseover", () => setActive(mousemoveDiv, true));
window.addEventListener("mouseout", () => setActive(mousemoveDiv, false));


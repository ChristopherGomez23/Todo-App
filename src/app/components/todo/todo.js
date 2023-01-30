const input = document.querySelector(".input");
const button = document.querySelector(".button");
const display = document.querySelector(".display_task");

button.addEventListener("click", () => {
	if (!input.value) {
		return;
	}
	display.innerHTML += `<li class="lists"><a href="#" class="links"><span class="task_text">${input.value}</span><i class="fa-solid fa-trash delete"></i></a></li>`;
	input.value = "";
});

display.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		const li = e.target.parentElement;
		const ol = li.parentElement.parentElement;
		ol.removeChild(li.parentElement);
	}
});
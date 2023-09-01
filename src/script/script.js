const body = document.getElementById("body");

const div = document.createElement("div");
	div.classList.add("bg-red-400");
	body.appendChild(div);

const text = document.createTextNode("Yayeet");
	div.appendChild(text);
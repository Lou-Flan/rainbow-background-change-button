var yellow = document.getElementById("yellow");
var pink = document.getElementById("pink");
var green = document.getElementById("green");
var inner = document.getElementById("inner");
var cover = document.getElementById("cover");
var body = document.querySelector("body");
var cloud = document.getElementById("cloud");

function changeColour(element) {
	body.style.background = element;
	inner.style.background = element;
	cover.style.background = element;
}

yellow.addEventListener("click", () => {
	changeColour("#ffce00");
});
pink.addEventListener("click", () => {
	changeColour("#ff3675");
});
green.addEventListener("click", () => {
	changeColour("#30d6af");
});

outer.addEventListener(
	"click",
	function (event) {
		event.preventDefault;
		outer.classList.remove("run-animation");
		void outer.offsetWidth;
		outer.classList.add("run-animation");
	},
	false
);

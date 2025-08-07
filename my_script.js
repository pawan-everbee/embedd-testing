
const button = document.getElementsByClassName("pdp-add-to-cart")[0];
if (button) {
	button.textContent = "modified by script";
} else {
	console.warn("Button not found");
}

console.log('see');

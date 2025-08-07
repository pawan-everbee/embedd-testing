console.log('Script logic running ✅');
console.log('working');
document.addEventListener("DOMContentLoaded", function () {
	console.log('buttons', document.getElementsByClassName("pdp-add-to-cart"));
	const button = document.getElementsByClassName("pdp-add-to-cart")[0];
	if (button) {
		button.textContent = "modified by script";
	} else {
		console.warn("Button not found");
	}
});

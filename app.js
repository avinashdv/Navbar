$(document).ready(() => {
	// dropdown code
	$("#dd-l").click(() => {
		$("#dropdown-large").slideToggle("fast");
	});

	// hamburger code
	$(".small .content-one .r").click(() => {
		$("#bars").slideToggle("fast");
	});

	// dropdown in hamburger.
	$("#dd-s").click(() => {
		$("#dropdown-small").slideToggle("fast");
	});
});
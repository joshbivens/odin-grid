$(document).ready(function() {
	$("div:not(.container) > div").on("mouseenter", function() {
		$(this).css("background-color", "lightcoral");
	});
});
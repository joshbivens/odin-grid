$(document).ready(function() {
	$("#clear").on("click", function() {
		$(".column > div").css("background", "#FFF");
	});
	
	$(".column > div").on("mouseenter", function() {
		$(this).css("background-color", "lightcoral");
	});
});
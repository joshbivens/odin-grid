$(document).ready(function() {

  var clicked = false;

  newGrid(7);

	$("#clear").on("click", function() {
		$(".grid div").css("background", "none");
	});

	$(".grid div").on("mouseenter", function() {
		$(this).css("background-color", "tomato");
	});

  $("#restart").on("click", function() {
    $(".grid").empty();
    var size = prompt("Enter the size of the new grid: ");
    newGrid(size);
  });

  $("#random").on("click", function() {
    $(".grid div").on("mouseenter", function() {
      $(this).css("background-color", (clicked ? "#" + Math.floor(Math.random()*16777215).toString(16) : "salmon"));
    });
    clicked = !clicked;
  });
});


function newGrid(size) {
  var width = ($(".grid").width() / size) - 4;

  for (var j = 0, y = size * size; j < y; j++) {
    $(".grid").append("<div></div>");
  }

  $(".grid div").css({"width": width, "height": width});
}

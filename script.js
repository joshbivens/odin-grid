$(document).ready(function() {

  var clicked = false;
  var initialColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  newGrid(15, initialColor);

	$("#clear").on("click", function() {
		$(".grid div").css("background", "none");
	});

  $("#restart").on("click", function() {
    var color = "#" + Math.floor(Math.random()*16777215).toString(16);
    $(".grid").empty();
    var size = prompt("Enter the size of the new grid");
    newGrid(size, color);
  });

  $("#random").on("click", function() {
    $(".grid div").on("mouseenter", function() {
      $(this).css("background-color", (clicked ? "#" + Math.floor(Math.random()*16777215).toString(16) : null));
    });
    clicked = !clicked;
  });

  function newGrid(size, color) {
    var width = ($(".grid").width() / size);
    for (var j = 0, y = size * size; j < y; j++) {
      $(".grid").append("<div></div>");
    }
    $(".grid div").css({"width": width, "height": width});
    $("span").text(color);
    $(".grid div").on("mouseenter", function() {
  		$(this).css("background-color", color);
  	});
  }

});

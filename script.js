$(document).ready(function() {
  var clicked = false;
  
	$("#clear").on("click", function() {
		$(".column > div").css("background", "none");
	});
	
	$(".column > div").on("mouseenter", function() {
		$(this).css("background-color", "salmon");
	});
  
  $("#restart").on("click", function() {
    $(".grid").empty();
    var size = prompt("Enter the size of the new grid: ");
    newGrid(size);
  });
  
  $("#random").on("click", function() {
    $(".column > div").on("mouseenter", function() {
      $(this).css("background-color", (clicked ? "#" + Math.floor(Math.random()*16777215).toString(16) : "salmon"));
    });
    clicked = !clicked;
  });
});

function newGrid(size) {
  var column = $(".column");
  
  for (var i = 0, x = size; i < x; i++) {
    column += "<div></div>";
    console.log(column);
  }
  
  for (var j = 0, y = size; j < y; j++) {
    $(".grid").append(column);
  }
  
}
var c = document.getElementById("canvasse");
var clr = document.getElementById("clear");

var ctx = c.getContext("2d");

var clean = function(event) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect( 0, 0, 1300, 500 );
};

var shape = function(event) {
  ctx.fillStyle = "#ff0000";
  ctx.fillRect( event.clientX - 25, event.clientY - 25, 50, 50 );
};

clr.addEventListener("mousedown", clean);
c.addEventListener("mousedown", shape);
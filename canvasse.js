var c = document.getElementById("canvasse");
var clr = document.getElementById("clear");

var ctx = c.getContext("2d");

var clean = function(event) {
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect( 0, 0, 1300, 500 );
};

var path = function(event) {
  ctx.lineTo(event.clientX, event.clientY);
  shape(event);
  ctx.stroke();
  ctx.moveTo(event.clientX, event.clientY);
};

var shape = function(event) {
  ctx.fillStyle = "#00ff00";
  ctx.moveTo(event.clientX + 25, event.clientY);
  ctx.arc( event.clientX, event.clientY, 25, 0, 2 * Math.PI );
  ctx.fill()
};

ctx.beginPath();
clr.addEventListener("mousedown", clean);
c.addEventListener("mousedown", path);
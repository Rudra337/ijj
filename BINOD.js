canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(153, 143, 430, 200 );
ctx.stroke();
color = "red";

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(250, 200, 40, 0 , 2*Math.PI);
ctx.stroke();

color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350, 200, 40, 0 , 2*Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(450, 200, 40, 0 , 2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 250, 40, 0 , 2*Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 250, 40, 0 , 2*Math.PI);
ctx.stroke();
var canvas=document.getElementById("CNAVAS");

ctx=canvas.getContext("2d");
color="darkturquoise";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(500,500,40,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    console.log("X= "+mouseX+", Y= "+mouseY);
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke();
}
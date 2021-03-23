let btn = document.querySelector("#startBtn");
        
btn.addEventListener( "click", function(){
    // alert("버튼을 못 누르셨군요");
});

let canvas = document.querySelector("#gameCanvas");

let ctx = canvas.getContext("2d");

let cp = document.querySelector("#colorPicker");

let nb = document.querySelector("#bold");

let rad = document.querySelector("#drawRadio");

let rar = document.querySelector("#removeRadio");


let isDown = false;
let x = 0;
let y = 0;

canvas.addEventListener("mousedown", function(e){
    isDown = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", function(e){
    isDown = false;
});




canvas.addEventListener("mousemove", function(e){
    if(!isDown) return;
    ctx.beginPath();
    ctx.strokeStyle = cp.value;
    ctx.lineCap = "round";
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineWidth = nb.value;
    x = e.offsetX;
    y = e.offsetY;
    ctx.stroke();
});
ctx.clearRect(x, y, 5, 5);
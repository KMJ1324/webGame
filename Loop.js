
let canvas = document.querySelector("#gameCanvas");
let ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
let bx = 0;
let by = 0;

let width = 40;
let height = 40;

let ex = 250;
let ey = 160;
let eWidth = 300;
let eHeight = 100;

let ex2 = 0;
let ey2 = 160;
let eWidth2 = 100;
let eHeight2 = 200;

let l = 1;
let l2 = 1;

let keyArr = [];
document.addEventListener("keydown", function(e){
    keyArr[e.keyCode] = true;
});

document.addEventListener("keyup", function(e){
    keyArr[e.keyCode] = false;
});


let speed = 200;
function update()
{
    bx = x;
    by = y;
    ey += 45 * 1/60 * l;
    ex2 += 90 * 1/60 * l2;

    if(ey + eHeight > 480)
        l *= -1;
    if(ey < 0)
        l *= -1;

    if(ex2 + eWidth2 > 960)
        l2 *= -1;
    if(ex2 < 0)
        l2 *= -1;    

    if(keyArr[37]){
        x -= speed * 1/60;
    }
    if(keyArr[38]){
        y -= speed * 1/60;
    }
    if(keyArr[39]){
        x += speed * 1/60;
    }
    if(keyArr[40]){
        y += speed * 1/60;
    }

    if(ex-width < x && ey-height < y && ex+eWidth > x && ey+eHeight> y || ex2-width < x && ey2-height < y && ex2+eWidth2 > x && ey2+eHeight2 > y)
    {
        x = 0;
        y = 0;
    }


}
function render()
{
    ctx.clearRect(0,0,960, 480);

    


    if(x > 960 - width)
        x = 960 - width;
    if(x < 0)
        x = 0;
    if(y > 480 - height)
        y = 480 - height;
    if(y < 0)
        y = 0;    

    ctx.clearRect(0,0,960, 480);
    ctx.fillStyle = "rgba(0,255,0,1)";
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = "rgba(255, 0, 0, 1)";
    ctx.fillRect(ex, ey, eWidth, eHeight);
    ctx.fillStyle = "rgba(255, 150, 0, 1)";
    ctx.fillRect(ex2, ey2, eWidth2, eHeight2);
}

setInterval(function(){
    update();
    render();
}, 1000/60);
// bonus question -
/* document.onload = setInterval(drawCircles, 100);


function drawCircles() {
    var canvas = document.querySelector("#mycanvas");
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    if (centerX > centerY) {
    var radius = centerY;
    } else {
        var radius = centerX;
    }
    
    for (var i = 1; i <= radius; i++) {
    context.beginPath();
    context.arc(centerX, centerY, i, 0, 2 * Math.PI, false);
   
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
    }
}
*/
var btn = document.querySelector("#calculate");
btn.addEventListener("click", calculate);

function calculate() {
    var r = document.querySelector("#inputRadius").value;

    if (r === "") {
        alert("Please enter a valid number!");
        return;
    } else if (!isNaN(r)) {
        var soutput = document.querySelector("#output");
        var res = 4 * Math.PI * Math.pow(r, 2);
        soutput.innerHTML = "The volume is: " + res;
    }

    
    var canvas = document.querySelector("#mycanvas");
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = r;
    if (r > canvas.width / 2 || r > canvas.height / 2) { 
        alert("Circle is out of canvas borders!");
        return; 
    } else {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
   
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
    }
    
}
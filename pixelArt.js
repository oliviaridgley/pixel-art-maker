"use strict";

//create canvas//


var canvas = document.createElement("div");
  canvas.style.className = ".canvas";
  canvas.style.width = "588px";
  canvas.style.height = "560px";
  canvas.style.border = "2px solid #293033";
document.body.appendChild(canvas);


//create pixel//


for (var i = 0; i < 1680; i++){
  var pixel = document.createElement("div");
    pixel.style.className = ".pixel";
    pixel.style.width = "12px";
    pixel.style.height = "12px";
    pixel.style.float = "right";
    pixel.style.backgroundColor = "white";
    pixel.style.boxSizing = "borderBox";
    pixel.style.border = "1px solid #293033";
  canvas.appendChild(pixel);
}

// create my palette //


var palette = document.createElement("div");
  palette.style.className = ".palette";
  palette.style.width = "588px";
  palette.style.height = "100px";
  palette.style.border = ".5px solid #293033";
  palette.style["margin-top"] = "10px";
document.body.appendChild(palette);

// Add colors to palette //


for (var i = 0; i < 28; i++){
var color = document.createElement("div");
  color.style.display = "inline-block";
  color.style.className = ".color";
  color.style.border = ".5px solid";
  color.style.borderRadius = "15px";
  color.style.height = "20px";
  color.style.width = "20px";
  color.style.margin = "10px";
  color.id = [i];
palette.appendChild(color);
}

// event listener for color change//


document.addEventListener('click', function(event){
  event.target.style.backgroundColor = "black";
  console.log(event);
});

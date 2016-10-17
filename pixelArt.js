"use strict";

//create canvas//


var canvas = document.createElement("div");
  canvas.className = ("canvas");
  canvas.style.width = "588px";
  canvas.style.height = "560px";
  canvas.style.marginLeft = "20%";
  canvas.style.marginRight = "30%";
  canvas.style.border = "2px solid #f5e7cd";
document.body.appendChild(canvas);


//create pixel//


for (var i = 0; i < 1680; i++){
  var pixel = document.createElement("div");
    pixel.className = ("pixel");
    pixel.style.width = "12px";
    pixel.style.height = "12px";
    pixel.style.float = "right";
    pixel.style.backgroundColor = "white";
    pixel.style.boxSizing = "borderBox";
    pixel.style.border = "1px solid #f5e7cd";
  canvas.appendChild(pixel);
}


//create my palette //


var palette = document.createElement("div");
  palette.className = ("palette");
  palette.style.width = "588px";
  palette.style.height = "90px";
  palette.style.marginLeft = "20%";
  palette.style.marginRight = "30%";
  palette.style.border = ".5px solid #293033";
  palette.style["margin-top"] = "10px";
document.body.appendChild(palette);


// Add colors to palette //


for (var i = 0; i < 28; i++){
var color = document.createElement("div");
  color.style.display = "inline-block";
  color.className = ("color");
  color.style.border = ".5px solid";
  color.style.borderRadius = "15px";
  color.style.height = "20px";
  color.style.width = "20px";
  color.style.margin = "10px";
  color.id = [i];
palette.appendChild(color);
}


// color selection indictor //


var colorStorage = "";


// colors by ID //


document.getElementById('0').style.backgroundColor = "colorStorage";
document.getElementById('1').style.backgroundColor = "black";
document.getElementById('2').style.backgroundColor = "#404040";
document.getElementById('3').style.backgroundColor = "#794044";
document.getElementById('4').style.backgroundColor = "#c17a76";
document.getElementById('5').style.backgroundColor = "#fa8072";
document.getElementById('6').style.backgroundColor = "#90143b";
document.getElementById('7').style.backgroundColor = "#d3d67a";
document.getElementById('8').style.backgroundColor = "#64ba82";
document.getElementById('9').style.backgroundColor = "#96756a";
document.getElementById('10').style.backgroundColor = "#a79d8a";
document.getElementById('11').style.backgroundColor = "#384e50";
document.getElementById('12').style.backgroundColor = "#315e87";
document.getElementById('13').style.backgroundColor = "#9adfb6";
document.getElementById('14').style.backgroundColor = "#206b43";
document.getElementById('15').style.backgroundColor = "#c4bd8c";
document.getElementById('16').style.backgroundColor = "#ab6d6a";
document.getElementById('17').style.backgroundColor = "#f6ac98";
document.getElementById('18').style.backgroundColor = "#bcd193";
document.getElementById('19').style.backgroundColor = "#b0ab01";
document.getElementById('20').style.backgroundColor = "#fa8072";
document.getElementById('21').style.backgroundColor = "#d35409";
document.getElementById('22').style.backgroundColor = "#a0c83e";
document.getElementById('23').style.backgroundColor = "#5d703b";
document.getElementById('24').style.backgroundColor = "#508176";
document.getElementById('25').style.backgroundColor = "#7a4d67";
document.getElementById('26').style.backgroundColor = "#f7d4cc";
document.getElementById('27').style.backgroundColor = "white";


// event listener for pixel selection & color change//


document.querySelector('.canvas').addEventListener('click', function (event){
  event.target.style.backgroundColor = colorStorage;
  console.log('click');
});


// selecting color from palette //


document.querySelector(".palette").addEventListener('click', function (event){
  colorStorage = event.target.style.backgroundColor;
  document.getElementById('0').style.backgroundColor = colorStorage;

});

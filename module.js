let bulebutton = document.querySelector("#blue_button");
let redbutton = document.querySelector("#red_button");
let greenbutton = document.querySelector("#green_button");
let yellowbutton = document.querySelector("#yellow_button");
let graybutton = document.querySelector("#gray_button");
let violetbutton = document.querySelector("#violet_button");
let lightgraybutton = document.querySelector("#lightgray_button");
let blackbutton = document.querySelector("#black_button");
let contentText = document.querySelector(".contain_text");

bulebutton.addEventListener("click", bluefunction);
function bluefunction() {
  contentText.style.backgroundColor = "blue";
}

redbutton.addEventListener("click", redfunction);
function redfunction() {
  contentText.style.backgroundColor = "red";
}

greenbutton.addEventListener("click", greenfunction);
function greenfunction() {
  contentText.style.backgroundColor = "green";
}
 
yellowbutton.addEventListener("click", yellowfunction)
function yellowfunction() {
  contentText.style.backgroundColor = "yellow";
}

graybutton.addEventListener("click", grayfunction)
function grayfunction() {
  contentText.style.backgroundColor = "gray";
}

violetbutton.addEventListener("click", violetfunction)
function violetfunction() {
  contentText.style.backgroundColor = "lightblue";
}

lightgraybutton.addEventListener("click", lightgrayfunction)
function lightgrayfunction() {
  contentText.style.backgroundColor = "lightgray";
}

graybutton.addEventListener("click", grayfunction)
function grayfunction() {
  contentText.style.backgroundColor = "gray";
}

blackbutton.addEventListener("click", blackfunction)
function blackfunction() {
  contentText.style.backgroundColor = "black";
}

let name = document.querySelector("#name");

name.textContent = prompt("hello name please");

 // this is reference

 let paragraph = document.getElementById("orginal_text");
 paragraph.textContent ="type the text in below textarea to change heres content and change the color ";

// this is  for text area

 let textarea = document.getElementById("text_area_text");
 
textarea.addEventListener("change", changeText);

function changeText()
{
 let content = textarea.value;

 paragraph.textContent = content;
}
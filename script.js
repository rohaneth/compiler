// taking those values from 3 textareas and based on that show in iframe
const htmlCode = document.getElementById("html-code");
  let cssCode = document.getElementById("css-code");
  let jsCode = document.getElementById("js-code");
function catchCode() {
  
  let output = document.getElementById("output");

  //   showing values from html css and js textarea into the iframe:
  output.contentDocument.body.innerHTML =
    htmlCode.value + "<style>" + cssCode.value + "</style>";
  output.contentWindow.eval(jsCode.value);
  //   evaluate js code
  //   css is not text and a styling component, ao it is inside style tag

  // similar for js
}

function copyh() {
  let textarea = document.getElementById("html-code");
  textarea.select();
  document.execCommand("copy");
}
function copyc() {
  let textarea = document.getElementById("css-code");
  textarea.select();
  document.execCommand("copy");
}
function copyj() {
  let textarea = document.getElementById("js-code");
  textarea.select();
  document.execCommand("copy");
}
function smallSize(){
  
  htmlCode.style.fontSize = "smaller";
  cssCode.style.fontSize = "smaller";
  jsCode.style.fontSize = "smaller";
}
function larger(){
  
  htmlCode.style.fontSize = "larger";
  cssCode.style.fontSize = "larger";
  jsCode.style.fontSize = "larger";
}

var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function(){
  var theColor = theInput.value;
  console.log(theColor)
  htmlCode.style.color = theColor;
  cssCode.style.color = theColor;
  jsCode.style.color = theColor;

  // Do something with `theColor` here.
});

function reset(){
  htmlCode.value = " ";
  cssCode.value = " ";
  jsCode.value = " ";
}

function italic() { 
  //function to make the text italic using DOM method 
  htmlCode.style.fontStyle = "italic"; 
  css.style.fontStyle = "italic"; 
  jsCode.style.fontStyle = "italic "; 
} 


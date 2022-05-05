function sayHello() {
  alert("Hello, world!");
}

function increaseTextSize() {
  document.getElementById("textInput").style.fontSize = "24pt";
}

function fancify() {
  document.getElementById("textInput").style.fontWeight = "bold";
  document.getElementById("textInput").style.color = "blue";
  document.getElementById("textInput").style.textDecoration = "underline";
}

function boringify() {
  document.getElementById("textInput").style.fontWeight = "";
  document.getElementById("textInput").style.color = "";
  document.getElementById("textInput").style.textDecoration = "";
}

function mooify() {
  let text = document.getElementById("textInput").value;
  document.getElementById("textInput").value =
    text
      .split(".")
      .join("-Moo.");
}

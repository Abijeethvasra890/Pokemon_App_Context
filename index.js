document.getElementById("title").innerText = "Calculator";

function add() {
  let val1 = parseFloat(document.getElementById("val1").value);
  let val2 = parseFloat(document.getElementById("val2").value);
  let temp = val1 + val2;
  document.getElementById("res").innerText = temp;
}

function sub() {
  let val1 = parseFloat(document.getElementById("val1").value);
  let val2 = parseFloat(document.getElementById("val2").value);
  let temp1 = val1 - val2;
  document.getElementById("res").innerText = temp1;
}


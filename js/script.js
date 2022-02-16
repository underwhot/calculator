// ADDITION
document.getElementById("addition").onclick = function(){
  let number_one = document.querySelectorAll(".item___number") [0].value;
  let number_two = document.querySelectorAll(".item___number") [1].value;
  let new_number = number_one + number_two;
  document.getElementById("addition-result").innerHTML = new_number;
}

document.getElementById("addition-clear").onclick = function(){
  document.getElementById("addition-result").innerHTML = "";
}


// SUBTRACTION
document.getElementById("subtraction").onclick = function(){
  let number_one = document.querySelectorAll(".item___number") [2].value;
  let number_two = document.querySelectorAll(".item___number") [3].value;
  let new_number = number_one - number_two;
  document.getElementById("subtraction-result").innerHTML = new_number;
}

document.getElementById("subtraction-clear").onclick = function(){
  document.getElementById("subtraction-result").innerHTML = "";
}


// MULTIPLY
document.getElementById("multiply").onclick = function(){
  let number_one = document.querySelectorAll(".item___number") [4].value;
  let number_two = document.querySelectorAll(".item___number") [5].value;
  let new_number = number_one * number_two;
  document.getElementById("multiply-result").innerHTML = new_number;
}

document.getElementById("multiply-clear").onclick = function(){
  document.getElementById("multiply-result").innerHTML = "";
}


// DIVISION
document.getElementById("division").onclick = function(){
  let number_one = document.querySelectorAll(".item___number") [6].value;
  let number_two = document.querySelectorAll(".item___number") [7].value;
  let new_number = number_one / number_two;
  document.getElementById("division-result").innerHTML = new_number;
}

document.getElementById("division-clear").onclick = function(){
  document.getElementById("division-result").innerHTML = "";
}
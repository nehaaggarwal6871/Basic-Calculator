let result = document.getElementById("store-value");
let key = document.querySelector(".key");
let evaluated = document.getElementById("evaluate");
//   console.log(key);
function display(val) {
  result.innerText += val;
  // console.log(val);
}
function equal() {
  let x = result.innerHTML;
  // console.log(typeof 1.7);
  y = eval(x);
  if (typeof y == Number && !isNaN(y)) {
    if (Number.isInteger(y)) {
      y = eval(x);
    } else {
      y = eval(x).toFixed(2);
    }
  }
  evaluated.innerHTML = "=" + y;
}
function clr() {
  result.innerHTML = "";
  evaluated.innerHTML = "";
}

let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
      value.style.color = "red";
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = "green";
    } else {
      count = 0;
      value.style.color = "black";
    }

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});

// Without forEach
/*
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnIncrease = document.querySelector(".increase");
const value = document.getElementById("value");

let counter = 0;

btnDecrease.addEventListener("click", function () {
  counter--;
  value.textContent = counter;

  if (counter == 0) {
    value.style.color = "black";
  } else if (counter < 0) {
    value.style.color = "red";
  }
});

btnReset.addEventListener("click", function () {
  counter = 0;
  value.textContent = counter;

  if (counter == 0) value.style.color = "black";
});

btnIncrease.addEventListener("click", function () {
  counter++;
  value.textContent = counter;

  if (counter == 0) {
    value.style.color = "black";
  } else if (counter > 0) {
    value.style.color = "green";
  }
});
*/

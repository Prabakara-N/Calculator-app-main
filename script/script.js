//elements
const outPutScreenEl = document.getElementById("display");
const toggleEl = document.getElementById("theme-toggle");
const errorMsg = document.querySelector(".error");

// functions
// numbers
function display(num) {
  outPutScreenEl.value += num;
  errorMsg.style.display = "none";
}

// equal btn
function calculate() {
  if (outPutScreenEl.value === "") {
    errorMsg.style.display = "block";
  } else {
    try {
      outPutScreenEl.value = eval(outPutScreenEl.value);
    } catch (error) {
      errorMsg.style.display = "block";
    }
  }
}

// to clear the display
function reset() {
  outPutScreenEl.value = "";
  errorMsg.style.display = "none";
}

// to del the number one by one
function del() {
  outPutScreenEl.value = outPutScreenEl.value.slice(0, -1);
  errorMsg.style.display = "none";
}

// event listneres
toggleEl.addEventListener("click", () => {
  // to change a backgeround , colors

  // selecting the elements
  const bodyEl = document.getElementById("body");
  const headingEl = document.getElementById("h1");
  const paraEl = document.getElementById("theme");
  const displayEl = document.getElementById("display");
  const btnContainerEl = document.getElementById("btn-container");
  const allBtns = document.querySelectorAll(".violet-btn");
  const btnDte = document.getElementById("delete");
  const btnReset = document.getElementById("reset");
  const btnEqual = document.getElementById("equal");

  bodyEl.classList.toggle("blue-bg");
  bodyEl.classList.toggle("violet-bg");

  headingEl.classList.toggle("blue-h");
  headingEl.classList.toggle("violet-h");

  paraEl.classList.toggle("blue-p");
  paraEl.classList.toggle("violet-p");

  displayEl.classList.toggle("blue-d");
  displayEl.classList.toggle("violet-d");

  btnContainerEl.classList.toggle("blue-c");
  btnContainerEl.classList.toggle("violet-c");

  btnDte.classList.toggle("violet-delbtn");
  btnDte.classList.toggle("blue-delbtn");

  btnReset.classList.toggle("violet-re-btn");
  btnReset.classList.toggle("blue-re-btn");

  btnEqual.classList.toggle("violet-eq-btn");
  btnEqual.classList.toggle("blue-eq-btn");

  errorMsg.classList.toggle("v-err");
  errorMsg.classList.toggle("b-err");

  allBtns.forEach((val) => {
    val.classList.toggle("blue-btn");
  });
});

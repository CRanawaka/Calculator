let resultElement = document.getElementById("tbResult");
let currentValue = "";
let diplayValue;

function appendToResult(dat) {
  console.log("Appending...");
  currentValue += dat;
  resultElement.value = currentValue;
  console.log("Current Input: " + dat);
  console.log("Current Value: " + currentValue);
}

function calculateResult() {
  console.log("Calculating...");
  try {
    diplayValue = currentValue;
    currentValue = eval(currentValue);
    resultElement.value = diplayValue + " = " + currentValue;
    console.log("Result: " + resultElement.value);
  } catch (error) {
    resultElement.value = "Error";
    console.log("Caught: " + error);
  }
}

function clearResult() {
  console.log("Clearing........");
  currentValue = "";
  resultElement.value = "";
}

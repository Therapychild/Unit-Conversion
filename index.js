const mainInput = document.getElementById("input-amount");
const error = document.getElementById("error");
const metricInput = document.getElementById("metric");
const imperialInput = document.getElementById("imperial");
const length = document.getElementById("length");
const lengthTitle = document.getElementById("length-title");
const volume = document.getElementById("volume");
const volumeTitle = document.getElementById("volume-title");
const weight = document.getElementById("weight");
const weightTitle = document.getElementById("weight-title");
/*
Conversions
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

mainInput.addEventListener("input", (event) => {
  if (mainInput.value > 0 && mainInput.value < 999 && error.hidden === false) {
    error.hidden = true;
  }
});

metricInput.addEventListener("click", (event) => {
  if (weightTitle.innerText !== "Weight (Kilograms => Pounds)") {
    weightTitle.innerText = "Weight (Kilograms => Pounds)";
  }
  if (lengthTitle.innerText !== "Length (Meters => Feet)") {
    lengthTitle.innerText = "Length (Meters => Feet)";
  }
  if (volumeTitle.innerText !== "Volume (Liters => Gallons)") {
    volumeTitle.innerText = "Volume (Liters => Gallons)";
  }

  if (mainInput.value > 0) {
    convert();
  }
});

imperialInput.addEventListener("click", (event) => {
  if (weightTitle.innerText !== "Weight (Pounds => Kilograms)") {
    weightTitle.innerText = "Weight (Pounds => Kilograms)";
  }
  if (lengthTitle.innerText !== "Length (Feet => Meters)") {
    lengthTitle.innerText = "Length (Feet => Meters)";
  }
  if (volumeTitle.innerText !== "Volume (Gallons => Liters)") {
    volumeTitle.innerText = "Volume (Gallons => Liters)";
  }

  if (mainInput.value > 0) {
    convert();
  }
});

function convert() {
  const value = mainInput.value;

  if (value <= 0 || value > 999) {
    reset(true);
    return;
  } else {
    error.hidden = true;
    if (metricInput.checked) {
      length.innerText = `${value} Meters => ${(value * 3.281).toFixed(3) } Feet`;
      weight.innerText = `${value} Kilograms => ${(value * 2.204).toFixed(3)} Pounds`;
      volume.innerText = `${value} Liters => ${(value * .264 ).toFixed(3) } Gallons`;
    } else {
      length.innerText = `${value} Feet => ${(value / 3.281).toFixed(3)} Meters`;
      weight.innerText = `${value} Pounds => ${(value / 2.204).toFixed(3)} Kilograms`;
      volume.innerText = `${value} Gallons => ${(value / .264).toFixed(3)} Liters`;
    }
  }
};

function reset(showError) {
  length.innerText = `0 | 0`;
  weight.innerText = `0 | 0`;
  volume.innerText = `0 | 0`;
  mainInput.value = 0;
  if (showError === true) {
    error.hidden = false;
  } else if (showError === false) {
    error.hidden = true;
  }
}
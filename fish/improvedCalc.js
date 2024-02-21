// Constants
const DENSIMETER_MULTIPLIER = 1e6;
const POOL_CONCENTRATION_MULTIPLIER = 50;
const VOLUME_DIVISOR = 1e10;

function calculate() {
  let densimeterInput = parseFloat(document.getElementById("densimeter").value);
  if (isNaN(densimeterInput)) {
    alert("Invalid densimeter input");
    return;
  }
  densimeterInput *= DENSIMETER_MULTIPLIER;

  let volume = parseFloat(document.getElementById("volume").value);
  if (isNaN(volume)) {
    alert("Invalid volume input");
    return;
  }

  const poolConcentration = (Math.exp(1.4166 * Math.log(densimeterInput) - 6.4076) * POOL_CONCENTRATION_MULTIPLIER);

  const volumeFinal = (volume * poolConcentration) / VOLUME_DIVISOR;
  const volumeAdded = volumeFinal - volume;

  const concentrationInital = 1 / volumeAdded;

  let roundedPoolConcentration = (poolConcentration / 10000000000).toFixed(3);
  document.getElementById("concentrationInital").value = concentrationInital.toFixed(3);
  document.getElementById("volumeFinal").value = volumeFinal.toFixed(3);
  document.getElementById("volumeAdded").value = volumeAdded.toFixed(3);
  document.getElementById("concentrationFinal").value = roundedPoolConcentration;
}

const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculate);

// Function 2: Reset the Calculator
function resetForm() {
  document.getElementById("densimeter").value = "";  
  document.getElementById("volume").value = "";
  document.getElementById("concentrationInital").value = "";
  document.getElementById("volumeFinal").value = "";
  document.getElementById("volumeAdded").value = "";
  document.getElementById("concentrationFinal").value = "";
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetForm);

function calculateBMI() {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  let bmi = weight / ((height / 100) * (height / 100));
  let category = getBMICategory(bmi);

  document.getElementById('result').innerHTML = `Your BMI is : ${bmi.toFixed(2)} and you are comes in ${category}`;
}

function resetForm() {
  document.getElementById('weight').value = "";
  document.getElementById('height').value = "";
  document.getElementById('result').innerHTML = "";
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
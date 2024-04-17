function calculateTax() {
  const grossIncome =
    parseFloat(document.getElementById("grossIncome").value) || 0;
  const extraIncome =
    parseFloat(document.getElementById("extraIncome").value) || 0;
  const deductions =
    parseFloat(document.getElementById("deductions").value) || 0;
  const age = document.getElementById("age").value;

  let tax = 0;

  if (grossIncome + extraIncome - deductions > 8) {
    if (age === "<40") {
      tax = 0.3 * (grossIncome + extraIncome - deductions - 8);
    } else if (age === ">=40&<60") {
      tax = 0.4 * (grossIncome + extraIncome - deductions - 8);
    } else if (age === ">=60") {
      tax = 0.1 * (grossIncome + extraIncome - deductions - 8);
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Tax: ${tax.toFixed(2)} Lakhs`;

  const resultModal = document.getElementById("resultModal");
  resultModal.style.display = "block";
}

function showErrorIcon() {
  const errorIcon = document.getElementById("errorIcon");
  errorIcon.style.display = "block";
}

document.getElementById("grossIncome").addEventListener("input", () => {
  document.getElementById("errorIcon").style.display = "none";
});

document.getElementById("extraIncome").addEventListener("input", () => {
  document.getElementById("errorIcon").style.display = "none";
});

document.getElementById("deductions").addEventListener("input", () => {
  document.getElementById("errorIcon").style.display = "none";
});

document.getElementById("age").addEventListener("change", () => {
  document.getElementById("errorIcon").style.display = "none";
});
document.getElementById("grossIncome").addEventListener("input", () => {
  const grossIncomeInput = document.getElementById("grossIncome");
  const errorIcon = document.getElementById("grossIncomeErrorIcon");
  const tooltip = document.getElementById("errorTooltip");

  if (isNaN(parseFloat(grossIncomeInput.value))) {
    errorIcon.style.display = "inline";
    tooltip.style.display = "block";
    tooltip.textContent = "Invalid input. Please enter a valid number.";
    tooltip.style.top = `${grossIncomeInput.offsetTop}px`;
    tooltip.style.left = `${
      grossIncomeInput.offsetLeft + grossIncomeInput.offsetWidth
    }px`;
  } else {
    errorIcon.style.display = "none";
    tooltip.style.display = "none";
  }
});

document.getElementById("extraIncome").addEventListener("input", () => {
  const extraIncomeInput = document.getElementById("extraIncome");
  const errorIcon = document.getElementById("extraIncomeErrorIcon");
  const tooltip = document.getElementById("errorTooltip");

  if (isNaN(parseFloat(extraIncomeInput.value))) {
    errorIcon.style.display = "inline";
    tooltip.style.display = "block";
    tooltip.textContent = "Invalid input. Please enter a valid number.";
    tooltip.style.top = `${extraIncomeInput.offsetTop}px`;
    tooltip.style.left = `${
      extraIncomeInput.offsetLeft + extraIncomeInput.offsetWidth
    }px`;
  } else {
    errorIcon.style.display = "none";
    tooltip.style.display = "none";
  }
});

document.getElementById("deductions").addEventListener("input", () => {
  const deductionsInput = document.getElementById("deductions");
  const errorIcon = document.getElementById("deductionsErrorIcon");
  const tooltip = document.getElementById("errorTooltip");

  if (isNaN(parseFloat(deductionsInput.value))) {
    errorIcon.style.display = "inline";
    tooltip.style.display = "block";
    tooltip.textContent = "Invalid input. Please enter a valid number.";
    tooltip.style.top = `${deductionsInput.offsetTop}px`;
    tooltip.style.left = `${
      deductionsInput.offsetLeft + deductionsInput.offsetWidth
    }px`;
  } else {
    errorIcon.style.display = "none";
    tooltip.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Function to compare parameters
  function compareParameters() {
    const parameters = [
      { id: "bod", max: 30 },
      { id: "cod", max: 250 },
      { id: "tds", max: 1500 },
      { id: "no2", max: 1 },
      { id: "no3", max: 10 },
      { id: "tn", max: 10 },
      { id: "tkn", max: 10 },
      { id: "tss", max: 30 },
      { id: "nh4", max: 1 },
      { id: "nh3", max: 1 },
      { id: "cn", max: 0.2 },
      { id: "fog", max: 10 },
      { id: "hg", max: 0.002 },
      { id: "ag", max: 0.1 },
      { id: "fe", max: 0.3 },
      { id: "mg", max: 30 },
      { id: "cl", max: 250 },
      { id: "f", max: 1.5 },
      { id: "as", max: 0.01 },
      { id: "se", max: 0.05 }
    ];

    parameters.forEach(param => {
      const value = parseFloat(document.getElementById(param.id).value);
      const result = document.getElementById(`result-${param.id}`);

      if (isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        return;
      }

      if (value > param.max) {
        result.textContent = "Out of Range";
        result.style.color = "red";
      } else {
        result.textContent = "Good Parameter";
        result.style.color = "green";
      }
    });
  }

  // Event listener for the button
  document.getElementById("analyze-btn").addEventListener("click", compareParameters);
});

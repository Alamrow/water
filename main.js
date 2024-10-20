document.addEventListener("DOMContentLoaded", function() {
  function analyzeParameter(value, threshold) {
    return value > threshold ? "Out Range Parameter" : "Good Parameter";
  }

  function compareParameters() {
    const parameters = [
      { id: "bod", name: "BOD", threshold: 30, unit: "ppm" },
      { id: "cod", name: "COD", threshold: 250, unit: "ppm" },
      { id: "tds", name: "TDS", threshold: 1500, unit: "ppm" },
      { id: "nh4", name: "NH4", threshold: 0.5, unit: "ppm" },
      { id: "nh3", name: "NH3", threshold: 0.05, unit: "ppm" },
      { id: "cn", name: "CN", threshold: 0.2, unit: "ppm" },
      { id: "fog", name: "FOG", threshold: 15, unit: "ppm" },
      { id: "hg", name: "Hg", threshold: 2, unit: "ppb" },
      { id: "ag", name: "Ag", threshold: 10, unit: "ppb" },
      { id: "fe", name: "Fe", threshold: 0.3, unit: "ppm" },
      { id: "mg", name: "Mg", threshold: 50, unit: "ppm" },
      { id: "cl", name: "Cl", threshold: 250, unit: "ppm" },
      { id: "f", name: "F", threshold: 4, unit: "ppm" },
      { id: "as", name: "As", threshold: 10, unit: "ppb" },
      { id: "se", name: "Se", threshold: 50, unit: "ppb" }
    ];

    parameters.forEach(param => {
      const value = parseFloat(document.getElementById(param.id).value);
      const result = document.getElementById(`${param.id}-result`);
      
      if (isNaN(value)) {
        result.textContent = `Please enter a valid number for ${param.name}.`;
      } else {
        result.textContent = `${analyzeParameter(value, param.threshold)} (${param.unit})`;
      }
    });
  }

  document.getElementById("analyze-btn").addEventListener("click", compareParameters);
});

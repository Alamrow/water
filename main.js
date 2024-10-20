document.addEventListener("DOMContentLoaded", function() {
  function analyzeParameter(value, threshold) {
    return value > threshold ? "Out Range Parameter" : "Good Parameter";
  }

  function compareParameters() {
    const parameters = [
      { id: "bod", name: "BOD", threshold: 30, unit: "ppm" },
      { id: "cod", name: "COD", threshold: 250, unit: "ppm" },
      { id: "tds", name: "TDS", threshold: 1500, unit: "ppm" },
      { id: "no2", name: "NO2", threshold: 0.1, unit: "ppm" },
      { id: "no3", name: "NO3", threshold: 10, unit: "ppm" },
      { id: "tn", name: "TN", threshold: 10, unit: "ppm" },
      { id: "tkn", name: "TKN", threshold: 0.5, unit: "ppm" },
      { id: "tss", name: "TSS", threshold: 30, unit: "ppm" },
      { id: "nh4", name: "NH4", threshold: 0.1, unit: "ppm" },
      { id: "nh3", name: "NH3", threshold: 0.1, unit: "ppm" },
      { id: "cn", name: "CN", threshold: 0.01, unit: "ppm" },
      { id: "fog", name: "FOG", threshold: 100, unit: "ppm" },
      { id: "hg", name: "Hg", threshold: 0.002, unit: "ppm" },
      { id: "ag", name: "Ag", threshold: 0.1, unit: "ppm" },
      { id: "fe", name: "Fe", threshold: 0.3, unit: "ppm" },
      { id: "mg", name: "Mg", threshold: 50, unit: "ppm" },
      { id: "cl", name: "Cl", threshold: 250, unit: "ppm" },
      { id: "f", name: "F", threshold: 1.5, unit: "ppm" },
      { id: "as", name: "As", threshold: 0.01, unit: "ppm" },
      { id: "se", name: "Se", threshold: 0.05, unit: "ppm" },
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

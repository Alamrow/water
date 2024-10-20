document.addEventListener("DOMContentLoaded", function() {
    // Function to compare parameters
    function compareParameters() {
      const bod = parseFloat(document.getElementById("bod").value);
      const cod = parseFloat(document.getElementById("cod").value);
      const tds = parseFloat(document.getElementById("tds").value);

      const result = document.getElementById("result");
  
      if (isNaN(bod) || isNaN(cod) || isNaN(tds)) {
        result.textContent = "Please enter valid numbers for all parameters.";
        return;
      }
  
      let analysis = `BOD: ${bod}, COD: ${cod}, TDS: ${tds} - `;
      if (bod > 30 || cod > 250 || tds > 1500) {
        analysis += "Water quality is poor.";
      } else {
        analysis += "Water quality is good.";
      }
  
      result.textContent = analysis;
    }
  
    // Event listener for the button
    document.getElementById("analyze-btn").addEventListener("click", compareParameters);
  });
  

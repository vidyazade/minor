document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("homeSection");
    const aboutSection = document.getElementById("aboutSection");
    const predictionTheory = document.getElementById("predictionTheory");
  
    // Navigation Button Clicks
    document.getElementById("homeBtn").addEventListener("click", function () {
      showSection(homeSection);
    });
  
    document.getElementById("aboutBtn").addEventListener("click", function () {
      showSection(aboutSection);
    });
  
    document.getElementById("settingsBtn").addEventListener("click", function () {
      alert("Settings feature coming soon!");
    });
  
    function showSection(section) {
      homeSection.classList.add("d-none");
      aboutSection.classList.add("d-none");
      predictionTheory.classList.add("d-none");
      section.classList.remove("d-none");
    }
  });
  
  // Image Analysis Functionality
  function analyzeImage() {
    const imageInput = document.getElementById("imageInput");
    const resultDiv = document.getElementById("analysisResult");
  
    if (!imageInput.files.length) {
      resultDiv.innerHTML = `<p class="text-danger">Please upload an image!</p>`;
      return;
    }
  
    // Simulated analysis result - Replace this with actual prediction logic
    const simulatedDisease = "Blast Disease"; // Example: Change this to test different outputs
  
    let recommendation = "";
    if (simulatedDisease === "Brown Spot") {
      recommendation = `
        <p><strong>Disease Detected:</strong> Brown Spot</p>
        <p><strong>Recommendation:</strong> Seed treatment with Agrosan or Ceresan 2.5 g/kg seed to ward off seedling blight stage. 
        Since the fungus is seed transmitted, a hot water seed treatment (53-54°C) for 10-12 minutes may be effective before sowing. 
        This treatment controls primary infection at the seedling stage.</p>
      `;
    } else if (simulatedDisease === "False Smut") {
      recommendation = `
        <p><strong>Disease Detected:</strong> False Smut</p>
        <p><strong>Recommendation:</strong> Spraying of copper oxychloride at 2.5 g/litre or Propiconazole at 1.0 ml/litre at boot leaf and milky stages will be 
        more useful to prevent the fungal infection. Seed treatment with carbendazim 2.0g/kg of seeds. At tillering and preflowering stages, spray 
        Hexaconazole @ 1ml/lit or Chlorothalonil 2g/lit.</p>
      `;
    } else if (simulatedDisease === "Blast Disease") {
      recommendation = `
        <p><strong>Disease Detected:</strong> Blast Disease</p>
        <p><strong>Recommendation:</strong> Seed treatment at 2.0 g/kg seed with Captan or Carbendazim or Thiram or Tricyclazole. Systemic fungicides such as 
        pyroquilon and tricyclazole are possible chemicals for controlling the disease.</p>
      `;
    } else if (simulatedDisease === "Bacterial Blight") {
      recommendation = `
        <p><strong>Disease Detected:</strong> Bacterial Blight</p>
        <p><strong>Recommendation:</strong> Seed treatment with bleaching powder (100g/l) and zinc sulfate (2%) reduce bacterial blight. 
        Seed treatment - seed soaking for 8 hours in Agrimycin (0.025%) and wettable ceresan (0.05%) followed by hot water treatment for 30 min at 52-54°C.</p>
      `;
    } else {
      recommendation = `<p class="text-warning">Disease could not be detected. Please upload a clearer image or try again.</p>`;
    }
  
    // Display the recommendation
    resultDiv.innerHTML = recommendation;
  }
  
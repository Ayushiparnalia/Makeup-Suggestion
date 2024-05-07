document.getElementById("colorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var colorInput = document.getElementById("colorInput").value.toLowerCase();

    var makeupSuggestions = document.getElementById("makeupSuggestions");

    // Clear previous suggestions
    makeupSuggestions.innerHTML = "";

    // Match color with makeup type
    var makeupType;
    switch(colorInput) {
        case "red":
            makeupType = "Bold red lipstick";
            break;
        case "blue":
            makeupType = "Smoky eye with blue eyeliner";
            break;
        case "green":
            makeupType = "Neutral eye makeup with green accent";
            break;
        // Add more color cases as needed
        default:
            makeupType = "No specific makeup suggestion for this color";
    }

    // Display makeup suggestion
    var suggestionText = document.createElement("p");
    suggestionText.textContent = "Makeup suggestion for " + colorInput + " dress: " + makeupType;
    makeupSuggestions.appendChild(suggestionText);
});

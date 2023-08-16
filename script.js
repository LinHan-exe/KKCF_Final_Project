// Define an array of button IDs
const buttonIds = ["unique", "unique1", "button1", "button2", "button3"];

// Function to toggle button color
const toggleButtonColor = (button, isEntering) => {
  button.querySelector("a").style.backgroundColor = isEntering ? '#3F5E5A' : '#2D2D2A';
  button.style.backgroundColor = isEntering ? '#3F5E5A' : '#2D2D2A'; // Change color for hover
};

// Loop through button IDs and add event listeners
buttonIds.forEach(buttonId => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("mouseenter", () => toggleButtonColor(button, true));
    button.addEventListener("mouseleave", () => toggleButtonColor(button, false));
  }
});

// Get the navbar buttons
const homeButton = document.getElementById("button1");
const businessButton = document.getElementById("button2");
const contactButton = document.getElementById("button3");

// Add event listeners for hover
homeButton.addEventListener("mouseenter", () => toggleButtonColor(homeButton, true));
homeButton.addEventListener("mouseleave", () => toggleButtonColor(homeButton, false));

businessButton.addEventListener("mouseenter", () => toggleButtonColor(businessButton, true));
businessButton.addEventListener("mouseleave", () => toggleButtonColor(businessButton, false));

contactButton.addEventListener("mouseenter", () => toggleButtonColor(contactButton, true));
contactButton.addEventListener("mouseleave", () => toggleButtonColor(contactButton, false));

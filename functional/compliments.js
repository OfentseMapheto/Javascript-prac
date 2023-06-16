// Array 
const compliments = [
    "You are an inspiration to others.",
    "Your smile brightens everyone's day.",
    "You have a heart of gold.",
    "You make a positive impact on those around you.",
    "Your kindness knows no bounds.",
    "You have a contagious enthusiasm for life.",
    "You bring out the best in people.",
    "Your generosity is unmatched.",
    "You have a beautiful soul.",
    "You are loved and appreciated."
  ];
  
  // Generate a random compliment
  function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  }
  
  // Function
  function displayCompliment() {
    const compliment = generateCompliment();
    console.log(`Compliment: ${compliment}`);
  }
  
  // Display a random 
  displayCompliment();
  
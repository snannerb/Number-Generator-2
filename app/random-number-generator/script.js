// Function to generate a random number with adjusted odds
function generateRandomNumber() {
  // Generate a random number between 0 and 999
  let randomNumber = Math.floor(Math.random() * 1000);

  // Adjust odds for specific numbers
  const specialNumbers = [111, 222, 333, 444, 555, 666, 777, 888, 999];
  const singleDigitNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 500% higher odds for special numbers
  if (Math.random() < 0.5) {
    randomNumber = specialNumbers[Math.floor(Math.random() * specialNumbers.length)];
  }
  // 300% higher odds for single-digit numbers
  else if (Math.random() < 0.3) {
    randomNumber = singleDigitNumbers[Math.floor(Math.random() * singleDigitNumbers.length)];
  }

  return randomNumber;
}

// Function to get description based on the generated number
function getDescription(number) {
  if (number >= 111 && number <= 999 && number % 111 === 0) {
    return "Special Triple Number! 🎉";
  } else if (number >= 1 && number <= 9) {
    return "Lucky Single Digit! 🍀";
  } else {
    return "Regular Number. 😐";
  }
}

// DOM elements
const generateBtn = document.getElementById('generateBtn');
const numberDisplay = document.getElementById('numberDisplay');
const descriptionDisplay = document.getElementById('descriptionDisplay');

// Error handling for missing DOM elements
if (!generateBtn || !numberDisplay || !descriptionDisplay) {
  console.error("Required DOM elements not found!");
} else {
  // Event listener for the generate button
  generateBtn.addEventListener('click', () => {
    const randomNumber = generateRandomNumber();
    const description = getDescription(randomNumber);

    numberDisplay.textContent = randomNumber;
    descriptionDisplay.textContent = description;
  });
}
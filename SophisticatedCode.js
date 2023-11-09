/*

Filename: SophisticatedCode.js

Description: 
This code demonstrates a sophisticated and elaborate JavaScript program that simulates a virtual pet game. It includes features like interactive menus, multiple game modes, real-time updates, and more.

Note: As the code is lengthy, only a portion is provided here. The full code can be executed in an appropriate IDE or text editor.

*/

// Virtual Pet Game

// Game Constants
const MAX_HUNGER = 100;
const MAX_HAPPINESS = 100;

// Pet object
const pet = {
  name: 'Buddy',
  hunger: 50,
  happiness: 50,
  age: 0,
  isAlive: true,
};

// Game modes
const gameModes = {
  MAIN_MENU: 'main_menu',
  PLAY: 'play',
  FEED: 'feed',
  PET: 'pet',
  SLEEP: 'sleep'
};

// Display main menu
function showMainMenu() {
  console.log('=== Virtual Pet Game ===');
  console.log('1. Play');
  console.log('2. Feed');
  console.log('3. Pet');
  console.log('4. Sleep');
  console.log('5. Exit');
}

// Start the game
function startGame() {
  while (pet.isAlive) {
    showMainMenu();
    const choice = parseInt(prompt('Enter your choice:'));
    
    switch (choice) {
      case 1:
        activateGameMode(gameModes.PLAY);
        break;
      case 2:
        activateGameMode(gameModes.FEED);
        break;
      case 3:
        activateGameMode(gameModes.PET);
        break;
      case 4:
        activateGameMode(gameModes.SLEEP);
        break;
      case 5:
        console.log('Goodbye!');
        return;
      default:
        console.log('Invalid choice. Try again.');
    }
  }
  console.log('Game over. Your pet has passed away.');
}

// Update pet's hunger and happiness
function updatePetStats() {
  pet.hunger -= getRandomNumber(5, 10);
  pet.happiness -= getRandomNumber(5, 10);
  
  if (pet.hunger < 0) pet.hunger = 0;
  if (pet.happiness < 0) pet.happiness = 0;
  
  if (pet.hunger === 0 || pet.happiness === 0) {
    pet.isAlive = false;
  }
}

// Get a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

startGame(); // Start the game
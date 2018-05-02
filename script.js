"use strict";

const startGame = function(){

  // prompt to play
  let startPrompt = prompt("Would you like to play a game? Y or N?");

  // if yes, prompt for name & call startCombat
  if (startPrompt.toLowerCase() === "y") {
  const userName = prompt("Please enter your name.");
  startCombat(userName);

  // if no, goodbye message
  } else if (startPrompt.toLowerCase() === "n") {
    console.log(`See you next time!`);
  };
};

let userWins = 0;
let userHealth = 40;
let grantHealth = 10;

// Start Combat
const startCombat = function(userName){
  console.log(`Welcome ${userName}!`);
  console.log(`Combat started`);
  const getDamage = function(){
    return Math.floor(Math.random() * 5 + 1);
  };
  while (userHealth > 0 && userWins < 3) {
    
    if (grantHealth > 0) {
      let combatPrompt = prompt("Do you want to Attack (A) or Quit (Q)?");
      if (combatPrompt === "a") {
        console.log("You attack!");
        // continue;
      } else {
        console.log("quitter");
        break;
      };
      
      
    // User's Turn
    let userDamage = getDamage();
    grantHealth -= userDamage;
    console.log(`${userName} inflicted ${userDamage} damage. Grant's health is ${grantHealth}`);
    
    // Grant's Turn
    let grantDamage = getDamage();
    userHealth -= grantDamage;
    console.log(`Grant inflicted ${grantDamage} damage. ${userName}'s health is ${ userHealth}`);

    // This happens if the user wins the round
    } else if (userWins < 2) { 
    userWins++;
    console.log(`***You win round ${userWins}!***`);
    grantHealth = 10;
    } else {
      userWins++;
      console.log(`***You win round ${userWins}!***`);
    };
  };

  // This is in startCombat but after the while loop
  if (userHealth < 0) {
    console.log("Sorry, you lose");
  } else if (grantHealth <= 0) {
    console.log("You win the game!");
  } else if (userHealth > 0 && grantHealth > 0) {
    console.log(`Oh. So you're just giving up then? kbye`);
  // } 
  // else {
  //   console.log("You win the game!");
  };
};


startGame();
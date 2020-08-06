//*Constant Variables
let maxScore = 21;
//Put lose here after logic is figured out
//Put win here
let totalCash = null;



//You can save highest Cash reached with WebStorage API https://www.youtube.com/watch?v=NmXEJIBsN-4


//*Cached Elements
let leaderboarddBtn = document.getElementById("leaderboardButton"); //Actual button
let leaderboardList = document.getElementById("leaderboardList"); //Parent List
let leaderboardNames = document.getElementById("leaderboardNames"); //<li>

let resetBtn = document.getElementById("resetButton"); //Gets reset button

totalCash = document.getElementById("cashTotal").innerHTML; //Grabs cash ammount


//* Things to do: 
//Create way to bet - needs to take off the total and also be stored to see if bet is won
//Double down stuff
//Make push, hit, and stand, splitting, doubling down and deal buttons
//Bust logic


//hitting: add another card to your total
//standing: you're happy with your total, no new cards 
//doubling down: only available for your first two cards or when you split
    //Places equal bet to original bet.



//Card values: 2-10 are of face value. Face cards = 10, Ace = 1 or 11

//Wining: 
//Push = when dealer has same value as player, don't win or lose
//10 + ace = automatic 1.5 times win 
//Once dealer flips second card, if 16 or under, they have to take another card, otherwise stay, if dealer busts then you win 2x. 
//If dealer doesn't bust with 17 or over  - you have to beat the value without busting
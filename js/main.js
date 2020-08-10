//*Constant Variables

let maxScore = 21;
let deck2, deck3, deck4; //8 Decks


//Put lose here after logic is figured out
//Put win here
let totalCash = null;
let playerCardAmount = 0;
const deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
let dealerCardAmount = 0;
let player = {
    name: "Will",
    totalCash: 3000,
    turnNumber: 0,
    totalCurrentScore: 0,
    cardsSelected: [],
    cardPicked: [],
};

let dealer = {
    cardsSelected: [],
    cardsPicked: [],
    totalCurrentScore: 0,
    loss: false;
}

//Initialization:
init();

//Six decks combined:


//There are EIGHT decks of cards now.





//You can save highest Cash reached with WebStorage API https://www.youtube.com/watch?v=NmXEJIBsN-4

//*Cached Elements
let leaderboarddBtn = document.getElementById("leaderboardButton"); //Actual button
let leaderboardList = document.getElementById("leaderboardList"); //Parent List
let leaderboardNames = document.getElementById("leaderboardNames"); //<li>
let resetBtn = document.getElementById("resetButton"); //Gets reset button
totalCash = document.getElementById("cashTotal").innerHTML; //Grabs cash ammount
let hitBtn = document.getElementById("hitButton"); //Grabs hit button
let betInput = document.getElementById("betInput");
let betBtn = document.getElementById("betButton")


//* Event Listeners
hitBtn.addEventListener('click',hitFunction) //Listens for player to press hit and runs the hitFunction






//* FUNCTIONS:
function init(){

    //Initilization functions:
    deckRandomizer();
}

function deckRandomizer(){ //Randomizes 8 different decks
    deck2 = deck1.slice(0, deck1.length)
    deck = deck1.concat(deck2)
    
    deck3 = deck.slice(0, deck.length)
    deck = deck3.concat(deck)
    
    deck4 = deck.slice(0, deck.length)
    deck = deck4.concat(deck)
    
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    return deck;
}

function hitFunction(){ //*NEEDS ADJUSTING
    if (player.turnNumber === 0){ //If player has zero cards, give them two and the dealer one and a face down.
        for (let i = 0; i < 2; i++) { //Gets player cards
            let randIdx = Math.floor(Math.random()*deck.length);
            player.cardPicked = deck.splice(randIdx, 1);
            player.cardsSelected.push(player.cardPicked);
        }

        player.turnNumber += 1; //Gives dealer one random card
        let randIdx = Math.floor(Math.random()*deck.length);
        dealer.cardPicked = deck.splice(randIdx, 1);
        dealer.cardsSelected.push(dealer.cardPicked)


    } else {
        let randIdx = Math.floor(Math.random()*deck.length);
        player.cardPicked = deck.splice(randIdx, 1);
        player.cardsSelected.push(player.cardPicked)

    }

}

function scoreCalc(person){
    for (let i = 0; i < person.cardsSelected.length; i++) {
        if (person.cardsSelected[i].includes('K') || person.cardsSelected[i].includes('J') || person.cardsSelected[i].includes('Q') || person.cardsSelected[i].includes('10')){
            person.totalCurrentScore += 10
        } else if (person.cardsSelected[i].includes('2')){
                person.totalCurrentScore += 2
        } else if(person.cardsSelected[i].includes('3')){
                person.totalCurrentScore += 3
        }   else if (person.cardsSelected[i].includes('4')){
                person.totalCurrentScore += 4
        } else if (person.cardsSelected[i].includes('5')){
            person.totalCurrentScore += 5
        } else if  (person.cardsSelected[i].includes('6')){
            person.totalCurrentScore += 6
        } else if  (person.cardsSelected[i].includes('7')){
            person.totalCurrentScore += 7
        } else if  (person.cardsSelected[i].includes('8')){
            person.totalCurrentScore += 8
        } else if (person.cardsSelected[i].includes('9')){
            person.totalCurrentScore += 9
        }
    }   
    return person.totalCurrentScore
}

//Bet Input function:
function betInput(){
    if (betInput > player.totalCash){
        return alert("Bet must be lower than total money.")

}

//If player gets blackjack
function checkBlackJack(){  //Add rewards
    if (player.totalCurrentScore === 21 && dealer.totalCurrentScore !== 21) {
        console.log("Blackjack! Automatic 1.5x win.")
    }
}

function checkLoss(){
    if (player.totalCurrentScore > 21) {
        console.log("Player loses. You broke.")
    } if (dealer.loss === false && player.totalCurrentScore < dealer.totalCurrentScore){
        console.log("Player loses, dealer beat you.")
    } 
}



    
//Push = when dealer has same value as player, don't win or lose
//10 + ace = automatic 1.5 times win 
//Once dealer flips second card, if 16 or under, they have to take another card, otherwise stay, if dealer busts then you win 2x. 
//If dealer doesn't bust with 17 or over  - you have to beat the value without busting
//When dealer and player tie = push, you get your money back
//If one the first 








//Card deck
//Create way to bet - needs to take off the total and also be stored to see if bet is won
//Double down stuff
//Make push, hit, and stand, splitting, insurance, doubling down and deal buttons
//Bust logic


//hitting: add another card to your total
//standing: you're happy with your total, no new cards 
//doubling down: only available for your first two cards or when you split
    //it places equal bet to original bet. you can't hit after doubling.
//splitting: when two cards are of equal value, then you can place another equal bet out
    //pair of aces can only get one hit, basically adds another hand
//Insurance: If dealer has an ace, you can add half your bet as insurance.
    //Insurance pays 2 to 1 so you break even.



//Card values: 2-10 are of face value. Face cards = 10, Ace = 1 or 11
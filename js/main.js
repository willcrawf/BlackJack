//*Constant Variables

let maxScore = 21;
let deck2, deck3, deck4; //8 Decks
let hit = false;

//Put lose here after logic is figured out
//Put win here
let totalCash = null;
let playerCardAmount = 0;
const deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
let dealerCardAmount = 0;



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
    totalCash = document.getElementById("cashTotal"); //Grabs cash ammount
let hitBtn = document.getElementById("hitButton"); //Grabs hit button
let betBtn = document.getElementById("betButton")
let betAmount = document.getElementById("betAmount").innerHTML
let standBtn = document.getElementById("standButton");
betAmount = parseInt(betAmount);
let dealerScore = document.getElementById("dealerCurrentScore").innerHTML
let playerScore = document.getElementById("playerCurrentScore").innerHTML
parseInt(dealerScore)
playerScore = parseInt(playerScore)
dealerScore = parseInt(dealerScore)
let dealerCard1 = document.getElementById("dealerCard1");
let dealerCard2 = document.getElementById("dealerCard2");
let playerCard1 = document.getElementById("playerCard1");
let playerCard2 = document.getElementById("playerCard2");
let hitAndStand = document.getElementById("buttonLine")

let player = {
    name: "Will",
    totalCash: totalCash,
    betAmount: betAmount,
    currentScore: playerScore,
    turnNumber: 0,
    cardsSelected: [],
    cardPicked: [],
    stand: false,
};

let dealer = {
    cardsSelected: [],
    cardsPicked: [],
    currentScore: dealerScore,
    loss: false,
}

//* Event Listeners
hitBtn.addEventListener('click',hitFunction) //Listens for player to press hit and runs the hitFunction
betBtn.addEventListener('click',betFunct)



//* FUNCTIONS:
function init(){

    //Initilization functions:
    deckRandomizer();
}
init()

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
hit = true;
     if (player.turnNumber === 0){ //If player has zero cards, give them two and the dealer one and a face down.
        for (let i = 0; i < 2; i++) { //Gets player cards
            let randIdx = Math.floor(Math.random()*deck.length);
            player.cardPicked = deck.splice(randIdx, 1);
            player.cardsSelected.push(player.cardPicked);
            player.turnNumber = 1
        }
            let randIdx = Math.floor(Math.random()*deck.length);
            dealer.cardPicked = deck.splice(randIdx, 1);
            dealer.cardsSelected.push(dealer.cardPicked)

        } else {
            let randIdx = Math.floor(Math.random()*deck.length);
            player.cardPicked = deck.splice(randIdx, 1);
            player.cardsSelected.push(player.cardPicked)
        }
       
getTotals();
console.log(`"Dealer score: " ${dealerScore}`)
console.log(playerScore)
console.log(player.cardsSelected)
checkBlackJack();
    }



function getTotals() {
    // This will eventually need to account for A being 1/11
    for (let i=0; i < dealer.cardsSelected.length; i++) {
        dealerScore += cardLookup(`${dealer.cardsSelected[i]}`)
    }
    for (let i=0; i < player.cardsSelected.length; i++) {
        playerScore += cardLookup(`${player.cardsSelected[i]}`)
    }
}

function cardLookup(card) {
    let cardValue;
    if (card === "dA" || card === "hA" || card ==="cA" || card === "sA"){
        cardValue = 11;
    }
    if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
        card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
        card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
        card === "d10" || card === "h10" || card === "c10" || card === "s10"){
        cardValue = 10;
    }
    if (card === "d09" || card === "h09" || card ==="c09" || card === "s09"){
        cardValue = 9;
    }
    if (card === "d08" || card === "h08" || card ==="c08" || card === "s08"){
        cardValue = 8;
    }
    if (card === "d07" || card === "h07" || card ==="c07" || card === "s07"){
        cardValue = 7;
    }
    if (card === "d06" || card === "h06" || card ==="c06" || card === "s06"){
        cardValue = 6;
    }
    if (card === "d05" || card === "h05" || card ==="c05" || card === "s05"){
        cardValue = 5;
    }
    if (card === "d04" || card === "h04" || card ==="c04" || card === "s04"){
        cardValue = 4;
    }
    if (card === "d03" || card === "h03" || card ==="c03" || card === "s03"){
        cardValue = 3;
    }
    if (card === "d02" || card === "h02" || card ==="c02" || card === "s02"){
        cardValue = 2;
    }    
    return cardValue
}


//Render function:
function render(){
    if (player.turnNumber === 0) {
        playerCard1.className = player.cardsSelected[0]
        console.log(player.cardsSelected[0])
        playerCard1.className = player.cardsSelected[1]

    }
}

//Bet Input function:
function betFunct(){
    
    if (player.totalCash === 0) {
    betButton.style.display = "none";
    } else if ((player.totalCash - betAmount) < 0) {
        player.betAmount = 0;
        betButton.style.display = "none";
    } else {
        totalCash.innerHTML = totalCash.innerHTML - betAmount;
        player.totalCash = totalCash.innerHTML
        console.log(player.totalCash)
    }
}

//If player gets blackjack
function checkBlackJack(){  //Add rewards
    if (playerScore === 21 && dealerScore !== 21) {
        player.totalCash += player.betAmount*1.5
        console.log("Blackjack!")
    }
}

function checkPush(){ //If dealer 
    if (playerScore === dealerScore && stand === true){
        player.totalCash += player.betAmount;
        console.log("Push")
    }
}

function checkLoss(){
    if (playerScore > 21) {
    loss()
    } if (dealer.loss === false && playerScore < dealerScore){
        console.log("Player loses, dealer beat you.")
    } 
}

function loss(){
    player.totalCash -= player.betAmount
    console.log(player.totalCash)
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
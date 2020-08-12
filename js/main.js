//*Constant Variables

let maxScore = 21;
let deck2, deck3, deck4; //8 Decks
let hit = false;
let stand = false;

//Put lose here after logic is figured out
//Put win here
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
let hitBtn = document.getElementById("hitButton"); //Grabs hit button
let betBtn = document.getElementById("betButton")
let standBtn = document.getElementById("standButton");

let totalCash = document.getElementById("cashTotal").innerHTML; //Grabs cash ammount
totalCash = parseInt(totalCash)
let betAmount = document.getElementById("betAmount").innerHTML
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
standBtn.addEventListener('click',standFunction)


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
stand = false;
dealerScore = 0;
playerScore = 0;
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
    // } else if (player.turnNumber === 1) {
    //     dealerAction();
    //     player.turnNumber += 1
    //     let randIdx = Math.floor(Math.random()*deck.length);
    //     player.cardPicked = deck.splice(randIdx, 1);
    //     player.cardsSelected.push(player.cardPicked)
    } else {
        let randIdx = Math.floor(Math.random()*deck.length);
        player.cardPicked = deck.splice(randIdx, 1);
        player.cardsSelected.push(player.cardPicked)
    }
getTotals();
hitChecker();
}

function standFunction(){
hit = false;
stand = true;
if (player.turnNumber > 0) {
    dealerStand()
    standTest()
}
}
function dealerStand(){
    while (stand === true && dealerScore <= 17) {
        dealerAction()
    }
stand = false
}

function standTest(){
    stand = true;
    checkResults();
}

//After 1st hit, dealer reveals second card. you then decide hit or stand
//If you decide to stand 

function dealerAction() {
    let randIdx = Math.floor(Math.random()*deck.length);
    dealer.cardPicked = deck.splice(randIdx, 1);
    dealer.cardsSelected.push(dealer.cardPicked)
    getTotals()
}        

function hitChecker(){
    hit = true;
    checkResults();
}

function getTotals() {
    playerScore = 0;
    dealerScore = 0;
    // This will eventually need to account for A being 1/11
    for (let i=0; i < dealer.cardsSelected.length; i++) {
        dealerScore += cardLookup(`${dealer.cardsSelected[i]}`)
    }
    for (let i=0; i < player.cardsSelected.length; i++) {
        playerScore += cardLookup(`${player.cardsSelected[i]}`)
    }
scoreRender();
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
function scoreRender(){
    document.getElementById("dealerCurrentScore").innerText = dealerScore
    document.getElementById("playerCurrentScore").innerText = playerScore
}

//Bet Input function:
function betFunct(){
    if (totalCash === 0) { //If player has no money, 
        hitBtn.style.display = "none";
        standBtn.style.display = "none";
    } else if ((totalCash - betAmount) < 0) {
        player.betAmount = 0;
        hitBtn.style.display = "none";
        standBtn.style.display = "none";
    } else {
        totalCash.innerHTML = totalCash.innerHTML - betAmount;
        totalCash = totalCash.innerHTML
    }
}


//MAKE Hit and standing in proper order

function checkResults(){
    if (stand === true){
        if (dealerScore > playerScore && dealerScore < 21){
            loss(); 
        } else if (playerScore > dealerScore && playerScore < 21){
            win()
        } else if (playerScore === 21 && dealerScore !== 21) {
            blackJack() 
        } else if (playerScore === dealerScore && playerScore <= 21){
            push()
        } else if (dealerScore === 21 && playerScore !== 21) {
            loss();
        } else if (dealerScore > 21 && playerScore < 21) {
            win()
        }
    }
    if (hit === true){
        if (playerScore > 21){
            bust();
        } else if (playerScore === 21){
            blackJack()
        }}
    }

    
//If player gets blackjack
function blackJack(){  //Add rewards
    totalCash += player.betAmount*1.5;
    document.getElementById("cashTotal").innerHTML = totalCash
    console.log(totalCash)
    console.log("Blackjack!")
    setTimeout(roundReset, 4000)
}

function push(){ //If dealer 
    totalCash += player.betAmount
    document.getElementById("cashTotal").innerHTML = totalCash
    console.log(totalCash)
    console.log("Push")
    setTimeout(roundReset, 4000)
}

function bust(){
    totalCash -= player.betAmount
    document.getElementById("cashTotal").innerHTML = totalCash
    console.log(totalCash)
    console.log("bust")
    setTimeout(roundReset, 4000)
}

function win(){
    totalCash += player.betAmount*2
    document.getElementById("cashTotal").innerHTML = totalCash
    console.log(totalCash)
    console.log("Win")
    setTimeout(roundReset, 4000)
}

function loss(){
    console.log(totalCash)
    console.log("loss")
    setTimeout(roundReset, 4000)
}

function roundReset(){ //*ADD Message render
    player.turnNumber = 0;
    hit = false;
    stand = false;

    player.cardsSelected= [];
    dealer.cardsSelected = [];
    player.cardPicked = '';
    dealer.cardPicked = '';
    getTotals()

    document.getElementById("dealerCurrentScore").innerText = dealerScore
    document.getElementById("playerCurrentScore").innerText = playerScore
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
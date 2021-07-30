// Identify the elements used within the HTML
let card1img = document.getElementById('imageCard1');
let card2img = document.getElementById('imageCard2');
let card1Name = document.getElementById('cardOneName');
let card2Name = document.getElementById('cardTwoName');
let card1TopSpeedValue = document.getElementById('topSpeedVal1');
let card2TopSpeedValue = document.getElementById('topSpeedVal2');
let card1EngineSizeValue = document.getElementById('engineSizeVal1');
let card2EngineSizeValue = document.getElementById('engineSizeVal2');
let card1CoolFactorValue = document.getElementById('coolFactorVal1');
let card2CoolFactorValue = document.getElementById('coolFactorVal2');
let card1InnovationValue = document.getElementById('innovationVal1');
let card2InnovationValue = document.getElementById('innovationVal2');
let card1YearLaunchedValue = document.getElementById('yearLaunchedVal1');
let card2YearLaunchedValue = document.getElementById('yearLaunchedVal2');
let playerOneRemaining = document.getElementById('p1Remaining');
let playerTwoRemaining = document.getElementById('p2Remaining');

let playerOneTurn = true;
let playerTwoTurn = false;

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card1Back = document.getElementById('cardBack1');
const card2Back = document.getElementById('cardBack2');
const shuffleButton = document.getElementById('shuffle');
const nextButton = document.getElementById('next');
let startButton = document.getElementById('start');

// To keep track of how many games have been played
let gamesPlayed = 0;
let curCardPos = 0;

// To keep track of how many games have been won by each player, used in the 'currently winning' count.
let playerOneWins = 0;
let playerTwoWins = 0;



// Create a car object with specified parameters.
function makeCar(model, topSpeed, engineSize, coolFactor, innovation, yearLaunched, image) {
    this.model = model,
    this.topSpeed = topSpeed,
    this.engineSize = engineSize,
    this.coolFactor = coolFactor,
    this.innovation = innovation,
    this.yearLaunched = yearLaunched
    this.image = image;
}

// Holds the cards assigned to each player once a game has started.
let playerOneCards = [];
let playerTwoCards = [];

 // These are the Car Card objects - add any additional Cards here, must have an even number of cards
const mini = new makeCar('Mini Cooper', 100, 1.6, 7, 2, 2012, './images/mini.jpg');
const clio = new makeCar('Renault Clio', 70, 1.2, 3, 5, 2009, './images/clio.jpg');
const ds3 = new makeCar('Citroen DS3', 80, 1.6, 5, 5, 2010, './images/ds3.jpg');
const polo = new makeCar('VW Polo', 110, 1.2, 6, 7, 2005, './images/polo.jpg');
const swift = new makeCar('Suzuki Swift', 70, 1.2, 3, 3, 2005, './images/swift.jpg');
const landRover = new makeCar('Land Rover', 120, 2.0, 7, 7, 1990,'./images/landrover.jpg')


// Array of all Car cards within the game deck - any cards to be used from the objects above should be added to this array
const allCars = [mini, clio, ds3, polo, swift, landRover];



// Randomise the order of the objects (cards) in the array
function shuffleCards(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Shuffle the cards and assign them to each player
function assignCards() {
    cards = shuffleCards(allCars);

    for(i = 0; i < cards.length; i++) {
        if(i < (cards.length/2)) {
            playerOneCards.push(cards[i]);
        }
        else {
            playerTwoCards.push(cards[i]);
        }
    }
    //console.log("Cards Assigned");
}

// Starts the game - cards are shuffled, dealt and first card drawn
function startGame() {
    // player cards are reset to empty in case this is a second game or higher
    playerOneCards = [];
    playerTwoCards = [];
    assignCards();
    updateCurrentCards();
    if(gamesPlayed === 0){
        gamesPlayed++;
        let i = 0;
        card1Back.classList.add('hiddenLeft');    
        displayCard(i);        
    }
    else {
        gamesPlayed++;
        let i = 0;  
        displayCard(i);
        startButton.innerText = 'START';
        card1Back.classList.add('hiddenLeft');
        card1.classList.remove('hiddenLeft');
        card2.classList.remove('hiddenRight');
    }
}


function displayCard(i) {
    i = 0;
    // Determines whether or not there are cards remaining in both players decks.
    // The first condition is executed if either player has won the game.
    if(playerOneCards.length === 0 || playerTwoCards.length === 0) {
        card1.classList.add('hiddenLeft');
        card2.classList.add('hiddenRight');
        card1Back.classList.remove('hiddenLeft');
        card2Back.classList.remove('hiddenRight');
        startButton.innerText = 'PLAY AGAIN';

        // Adds a winning point to the winner's tally
        if(playerOneCards.length === 0) {
            playerTwoWins++;
        }
        else if(playerTwoCards.length === 0) {
            playerOneWins++;
        }

        // Updates the 'Currently Winning' display to reflect the player with the most won games
        if(playerOneWins > playerTwoWins) {
            document.getElementById('currentWinner').innerText = "P1";
        }
        else if(playerTwoWins > playerOneWins) {
            document.getElementById('currentWinner').innerText = "P2";
        }
        else {
            document.getElementById('currentWinner').innerText = "-";
        }
        return;
    }
    // The else condition is executed if both players have remaining cards, and the next card values are displayed
    else {    
        card1Name.innerText = `${playerOneCards[i].model}`;
        card1img.setAttribute('src', `${playerOneCards[i].image}`);
        card1TopSpeedValue.innerText = `${playerOneCards[i].topSpeed}`;
        card1EngineSizeValue.innerText = `${playerOneCards[i].engineSize}`;
        card1CoolFactorValue.innerText = `${playerOneCards[i].coolFactor}`;
        card1InnovationValue.innerText = `${playerOneCards[i].innovation}`;
        card1YearLaunchedValue.innerText = `${playerOneCards[i].yearLaunched}`;

        card2Name.innerText = `${playerTwoCards[i].model}`;
        card2img.setAttribute('src', `${playerTwoCards[i].image}`);
        card2TopSpeedValue.innerText = `${playerTwoCards[i].topSpeed}`;
        card2EngineSizeValue.innerText = `${playerTwoCards[i].engineSize}`;
        card2CoolFactorValue.innerText = `${playerTwoCards[i].coolFactor}`;
        card2InnovationValue.innerText = `${playerTwoCards[i].innovation}`;
        card2YearLaunchedValue.innerText = `${playerTwoCards[i].yearLaunched}`;}
}



function findWinningCard() {
    // Finds the element that has been clicked on the page
    let chosenValue = window.event.target;
    
    // Won't run if a game has been won or not started
    if(playerOneCards.length === 0 || playerTwoCards.length === 0) {
        return;
    }
    // Determines if the player 1 or player 2 card has been clicked
    else {
        if(chosenValue.parentElement.classList.contains('card1')){
            //console.log('card 1 clicked');
            leftCardClicked(chosenValue);
        }
        else if(chosenValue.parentElement.classList.contains('card2')){
            //console.log('card 2 clicked');
            rightCardClicked(chosenValue);
        }
        // Delays the card count update to allow the animation to finish
        wait(2000).then(() => 
        updateCurrentCards());
    }
    
}

// Starts the game when the start button is clicked
startButton.addEventListener('click', startGame);

// Finds which card has won on the click, only if there is a game in play
document.addEventListener('click', findWinningCard);



// If player 1's card wins, the losing card is moved to their deck
function shiftCardToPlayer1() {
    let a = playerTwoCards.shift();
    let b = playerOneCards.shift();
    playerOneCards.push(a);
    playerOneCards.push(b);

    playerOneTurn = true;
    playerTwoTurn = false;

    let el1 = document.getElementById("card1");
    let el2 = document.getElementById("card2");
    winningCard(el1);
    losingCard(el2);
}

// If player 2's card wins, the losing card is moved to their deck
function shiftCardToPlayer2() {
    let a = playerOneCards.shift();
    let b = playerTwoCards.shift();
    playerTwoCards.push(a);
    playerTwoCards.push(b);

    playerOneTurn = false;
    playerTwoTurn = true;

    let el1 = document.getElementById("card1");
    let el2 = document.getElementById("card2");
    winningCard(el2);
    losingCard(el1);
}

// Adds the winning card animation
function winningCard(el) {
    showAll();
    el.classList.add('winningCard');
    wait(2000).then(() =>
        el.classList.remove('winningCard'));
};



// Adds the losing card animation
function losingCard(el) {
    el.classList.add('losingCard');
    wait(2000).then(() => 
        el.classList.remove('losingCard'))
};


// Displays or hides the player's card depending on whether or not it is currently their turn
function hiddenOrShown() {
    if(playerOneTurn !== true) {
        card1Back.classList.remove('hiddenLeft');
        card2Back.classList.add('hiddenRight');
    }
    else if(playerTwoTurn !== true) {
        card1Back.classList.add('hiddenLeft');
        card2Back.classList.remove('hiddenRight');
    }
}

// Reveals both cards to the user during the win/lose animations
function showAll() {
    card1Back.classList.add('hiddenLeft');
    card2Back.classList.add('hiddenRight');
}




/*
    For both the left and right card being clicked, the category clicked is determined and the values
    of the categories from both cards are compared. Then, the losing card is transferred to the winner's
    deck and the win/lose animations are executed.
*/
function leftCardClicked(chosenValue) {
    if(chosenValue.innerText === "TOP SPEED") {
        console.log("TOP SPEED CLICKED");
        if(parseInt(card1TopSpeedValue.innerHTML) >= parseInt(card2TopSpeedValue.innerHTML)) {
            shiftCardToPlayer1(i);
        }
        else {
            shiftCardToPlayer2(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "ENGINE SIZE") {
        console.log("ENGINE SIZE CLICKED");
        if(parseInt(card1EngineSizeValue.innerHTML) >= parseInt(card2EngineSizeValue.innerHTML)) {
            shiftCardToPlayer1(i);
        }
        else {
            shiftCardToPlayer2(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "COOL FACTOR") {
        console.log("COOL FACTOR CLICKED");
        if(parseInt(card1CoolFactorValue.innerHTML) >= parseInt(card2CoolFactorValue.innerHTML)) {
            shiftCardToPlayer1(i);
        }
        else {
            shiftCardToPlayer2(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "INNOVATION") {
        console.log("INNOVATION CLICKED");
        if(parseInt(card1InnovationValue.innerHTML) >= parseInt(card2InnovationValue.innerHTML)) {
            shiftCardToPlayer1(i);
        }
        else {
            shiftCardToPlayer2(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "YEAR LAUNCHED") {
        console.log("YEAR LAUNCHED CLICKED");
        if(parseInt(card1YearLaunchedValue.innerHTML) <= parseInt(card2YearLaunchedValue.innerHTML)) {
            shiftCardToPlayer1(i);
        }
        else {
            shiftCardToPlayer2(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
};

function rightCardClicked(chosenValue) {
    if(chosenValue.innerText === "TOP SPEED") {
        console.log("TOP SPEED CLICKED");
        if(parseInt(card2TopSpeedValue.innerHTML) >= parseInt(card1TopSpeedValue.innerHTML)) {
            shiftCardToPlayer2(i);
        }
        else {
            shiftCardToPlayer1(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "ENGINE SIZE") {
        console.log("ENGINE SIZE CLICKED");
        if(parseInt(card2EngineSizeValue.innerHTML) >= parseInt(card1EngineSizeValue.innerHTML)) {
            shiftCardToPlayer2(i);
        }
        else {
            shiftCardToPlayer1(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "COOL FACTOR") {
        console.log("COOL FACTOR CLICKED");
        if(parseInt(card2CoolFactorValue.innerHTML) >= parseInt(card1CoolFactorValue.innerHTML)) {
            shiftCardToPlayer2(i);
        }
        else {
            shiftCardToPlayer1(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "INNOVATION") {
        console.log("INNOVATION CLICKED");
        if(parseInt(card2InnovationValue.innerHTML) >= parseInt(card1InnovationValue.innerHTML)) {
            shiftCardToPlayer2(i);
        }
        else {
            shiftCardToPlayer1(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
    if(chosenValue.innerText === "YEAR LAUNCHED") {
        console.log("YEAR LAUNCHED CLICKED");
        if(parseInt(card2YearLaunchedValue.innerHTML) <= parseInt(card1YearLaunchedValue.innerHTML)) {
            shiftCardToPlayer2(i);
        }
        else {
            shiftCardToPlayer1(i);
        }
        wait(1800).then(() => 
            hiddenOrShown());
        wait(2000).then(() =>
        displayCard());
    }
};

// Adds a delay before executing a function or event.
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

// Updates the 'Cards Remaining' tally of each player with the number of cards left
function updateCurrentCards() {
    playerOneRemaining.innerText = playerOneCards.length;
    playerTwoRemaining.innerText = playerTwoCards.length;
}
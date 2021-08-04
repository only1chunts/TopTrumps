// Identify the elements used within the HTML
let card1img = document.getElementById('imageCard1');
let card2img = document.getElementById('imageCard2');
let card1url = document.getElementById('urlCard1');
let card2url = document.getElementById('urlCard2');
let card1Name = document.getElementById('cardOneName');
let card2Name = document.getElementById('cardTwoName');
let card1Cat1Value = document.getElementById('Cat1Val1');
let card2Cat1Value = document.getElementById('Cat1Val2');
let card1Cat2Value = document.getElementById('Cat2Val1');
let card2Cat2Value = document.getElementById('Cat2Val2');
let card1Cat3Value = document.getElementById('Cat3Val1');
let card2Cat3Value = document.getElementById('Cat3Val2');
let card1Cat4Value = document.getElementById('Cat4Val1');
let card2Cat4Value = document.getElementById('Cat4Val2');
let card1Cat5Value = document.getElementById('Cat5Val1');
let card2Cat5Value = document.getElementById('Cat5Val2');
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
function theCards(model, Cat1, Cat2, Cat3, Cat4, Cat5, url, image) {
//function theCards(model, Cat1, Cat2, Cat3, Cat4, Cat5, image) {
    this.model = model,
    this.Cat1 = Cat1,
    this.Cat2 = Cat2,
    this.Cat3 = Cat3,
    this.Cat4 = Cat4,
    this.Cat5 = Cat5
	this.url = url,
    this.image = image;
}

// Holds the cards assigned to each player once a game has started.
let playerOneCards = [];
let playerTwoCards = [];

 // These are the Car Card objects - add any additional Cards here, must have an even number of cards
const cards1 = new theCards('Darwins Finch', 2012.08, 1, 5, 284, 0.29, 'https://doi.org/10.5524/100040' ,'./images/100040.jpg');
const cards2 = new theCards('Puerto Rican Parrot', 2012.09, 1, 24, 568, 1.8,'https://doi.org/10.5524/100039', './images/100039.jpg');
const cards3 = new theCards('Pigeonpea', 2011.12, 1, 5, 157.6, 0.18, 'https://doi.org/10.5524/100028' ,'./images/100028.jpg');
const cards4 = new theCards('Crab-Eating Macaque', 2011.06, 1, 29, 1024, 2.4,'https://doi.org/10.5524/100003' ,'./images/100003.jpg');
const cards5 = new theCards('Tibetan antelope', 2011.12, 1, 468, 2317, 232,'https://doi.org/10.5524/100027' ,'./images/100027.jpg');
const cards6 = new theCards('Cucumber', 2011.12, 1, 16, 67, 0.76,'https://doi.org/10.5524/100025' ,'./images/100025.jpg')
const cards7 = new theCards('Rhesus Macaque', 2011.06, 1, 10, 776, 0.98 ,'https://doi.org/10.5524/100002' ,'./images/100002.jpg')
const cards8 = new theCards('Bald Eagle', 2014.05, 1, 5, 8.16, 384,'https://doi.org/10.5524/101040' ,'./images/101040.png')
const cards9 = new theCards('Fonio Millet', 2021.01, 1, 48, 6768, 7.03, 'https://doi.org/10.5524/100857' ,'./images/100857.png');
const cards10 = new theCards('Hazelnut', 2021.03, 2, 35, 353.56, 1.21, 'https://doi.org/10.5524/100877' ,'./images/100877.png');
const cards11 = new theCards('Yellowhorn Tree', 2019.03, 5, 35, 485.86, 2.24, 'https://doi.org/10.5524/100606' ,'./images/100606.png');
const cards12 = new theCards('Pink Ipê Tree', 2017.11, 2, 16, 140.1, 0.2, 'https://doi.org/10.5524/100379' ,'./images/100379.jpg');

//const cards1 = new theCards('Darwins Finch', 2012.08, 1.6, 7, 2, 2012, 'https://doi.org/10.5524/100040' ,'./images/mini.jpg');
//const cards2 = new theCards('Puerto Rican Parrot', 2012.09, 1.2, 3, 5, 2009, 'https://doi.org/10.5524/100039', './images/clio.jpg');
//const cards3 = new theCards('Pigeonpea', 2011.12, 1.6, 5, 5, 2010, 'https://doi.org/10.5524/100028' ,'./images/ds3.jpg');
//const cards4 = new theCards('Crab-Eating Macaque', 2011.06, 1.2, 6, 7, 2005, 'https://doi.org/10.5524/100003' ,'./images/polo.jpg');
//const cards5 = new theCards('Tibetan antelope', 2011.12, 1.2, 3, 3, 2005, 'https://doi.org/10.5524/100027' ,'./images/swift.jpg');
//const cards6 = new theCards('Cucumber', 2011.12, 2.0, 7, 7, 1990, 'https://doi.org/10.5524/100025' ,'./images/landrover.jpg');
//const cards7 = new theCards('Rhesus Macaque', 2011.06, 2.0, 7, 7, 1990, 'https://doi.org/10.5524/100002' ,'./images/landrover.jpg');
//const cards8 = new theCards('Bald Eagle', 2014.05, 2.0, 7, 7, 1990, 'https://doi.org/10.5524/101040' ,'./images/landrover.jpg')


// Array of all Car cards within the game deck - any cards to be used from the objects above should be added to this array
const allCars = [cards1, cards2, cards3, cards4, cards5, cards6, cards7, cards8, cards9, cards10, cards11, cards12];



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
		card1url.setAttribute('href', `${playerOneCards[i].url}`);
        card1Cat1Value.innerText = `${playerOneCards[i].Cat1}`;
        card1Cat2Value.innerText = `${playerOneCards[i].Cat2}`;
        card1Cat3Value.innerText = `${playerOneCards[i].Cat3}`;
        card1Cat4Value.innerText = `${playerOneCards[i].Cat4}`;
        card1Cat5Value.innerText = `${playerOneCards[i].Cat5}`;

        card2Name.innerText = `${playerTwoCards[i].model}`;
        card2img.setAttribute('src', `${playerTwoCards[i].image}`);
		card2url.setAttribute('href', `${playerTwoCards[i].url}`);
        card2Cat1Value.innerText = `${playerTwoCards[i].Cat1}`;
        card2Cat2Value.innerText = `${playerTwoCards[i].Cat2}`;
        card2Cat3Value.innerText = `${playerTwoCards[i].Cat3}`;
        card2Cat4Value.innerText = `${playerTwoCards[i].Cat4}`;
        card2Cat5Value.innerText = `${playerTwoCards[i].Cat5}`;}
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
    if(chosenValue.innerText === "Release Date") {
        console.log("Release Date CLICKED");
        if(parseInt(card1Cat1Value.innerHTML) <= parseInt(card2Cat1Value.innerHTML)) {
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
    if(chosenValue.innerText === "No.Samples") {
        console.log("No.Samples CLICKED");
        if(parseInt(card1Cat2Value.innerHTML) >= parseInt(card2Cat2Value.innerHTML)) {
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
    if(chosenValue.innerText === "No.Files") {
        console.log("No.Files CLICKED");
        if(parseInt(card1Cat3Value.innerHTML) >= parseInt(card2Cat3Value.innerHTML)) {
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
    if(chosenValue.innerText === "Largest File(Mb)") {
        console.log("Largest File(Mb) CLICKED");
        if(parseInt(card1Cat4Value.innerHTML) >= parseInt(card2Cat4Value.innerHTML)) {
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
    if(chosenValue.innerText === "Total Volume(Gb)") {
        console.log("Total Volume(Gb) CLICKED");
        if(parseInt(card1Cat5Value.innerHTML) >= parseInt(card2Cat5Value.innerHTML)) {
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
    if(chosenValue.innerText === "Release Date") {
        console.log("Release Date CLICKED");
        if(parseInt(card2Cat1Value.innerHTML) <= parseInt(card1Cat1Value.innerHTML)) {
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
    if(chosenValue.innerText === "No.Samples") {
        console.log("No.Samples CLICKED");
        if(parseInt(card2Cat2Value.innerHTML) >= parseInt(card1Cat2Value.innerHTML)) {
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
    if(chosenValue.innerText === "No.Files") {
        console.log("No.Files CLICKED");
        if(parseInt(card2Cat3Value.innerHTML) >= parseInt(card1Cat3Value.innerHTML)) {
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
    if(chosenValue.innerText === "Largest File(Mb)") {
        console.log("Largest File(Mb) CLICKED");
        if(parseInt(card2Cat4Value.innerHTML) >= parseInt(card1Cat4Value.innerHTML)) {
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
    if(chosenValue.innerText === "Total Volume(Gb)") {
        console.log("Total Volume(Gb) CLICKED");
        if(parseInt(card2Cat5Value.innerHTML) >= parseInt(card1Cat5Value.innerHTML)) {
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
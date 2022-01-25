// Contador 
let count = 0
const counter = document.getElementById("counter")

// Acrescenta os números
    function increment() {
        count++
        counter.innerText = count;
    }

// Corrigir/ Apagar

    function erase() {
        count--
    if(count < 0) {
        count = 0
    } else {count = count}
        counter.innerText = count;
    }


let saveP = document.getElementById("p-save")

// Salva os números
    function save() {
        let counterStr = count + " - "
    // innerText apenas pega "Legíveis". textContent, neste caso, é melhor por pegar tudo do elemento incluindo os " "
        saveP.textContent += counterStr
        count = 0;
        counter.innerText = count;
}

//Blackjack

let player = {
    name: "player",
    credit: 150
}

let cards = [] // Array para armazenar as cartas
let sum = 0
let isAlive = false // Falso até começar o jogo

messageGame = document.getElementById("message-game");
sumEl = document.getElementById("message-sum");
cardsEl = document.getElementById("message-cards");
result = document.getElementById("message-result");

let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": $" + player.credit

// Começando o jogo
function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// function randomCard()
function randomCard() {
    // return Math.floor(Math.random()*13) + 1

    // Agora para validar K, Q, J
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
// function renderGame 
function renderGame() {
    messageGame.textContent = "Nice, lesgo"
    cardsEl.textContent = "Cards: " // Este serve como um "reset" para não repetir a primeira e segunda carta após comprar a terceira. A primeira e a segunda são escritas novamente junto da terceira, sem repeti-lás
    for (card in cards) {
        cardsEl.textContent += cards[card] + " "
    }

    sumEl.textContent = ("Sum: "+ sum)
    if(sum < 21) {
        result.textContent = "Ok, você quer pegar uma nova carta?"
    } else if (sum === 21) {
        result.textContent = "Uau! Você conseguiu um BlackJack :))"
    } else {
        result.textContent = "Você está fora do jogo :("
        isAlive = false
    }
}

// Função comprar nova carta
function drawCard() {
    if(isAlive === true) {
    let newCard = randomCard()
    cards.push(newCard) // Adicionando ao array
    sum += newCard      // Adicionando à soma
    renderGame()
}}


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

let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard] // Array para armazenar as cartas
let sum = firstCard + secondCard


messageGame = document.getElementById("message-game");
sumEl = document.getElementById("message-sum");
cardsEl = document.getElementById("message-cards");
result = document.getElementById("message-result");

// Função startGame ainda faz sentido no html
function startGame() {
    renderGame()
}
// foi renomeado de "renderGame" pois não faz sentido uma função "começar jogo" ser chamada novamente com o jogo já começado
 
function renderGame() {
    messageGame.textContent = "Nice, lesgo"
    cardsEl.textContent = "Cards: " // Este serve como um "reset" para não repetir a primeira e segunda carta após comprar a terceira. A primeira e a segunda são escritas novamente junto da terceira, sem repeti-lás
    for (card in cards) {
        cardsEl.textContent += cards[card] + " "
    }
    sumEl.textContent = ("Sum: "+ sum)

    if(sum < 21) {
        result.textContent = "Okay, do you wanna draw another card?"
    } else if (sum === 21) {
        result.textContent = "Woah, you've got a BlackJack :))"
    } else {
        result.textContent = "You're out of the game! :("
    }
}

// Função comprar nova carta

function drawCard() {
    let newCard = 2
    cards.push(newCard) // Adicionando ao array
    sum += newCard      // Adicionando à soma
    renderGame()
}


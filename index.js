let count = 0
const counter = document.getElementById("counter")

function increment() {
    count++
    counter.innerText = count;
}


let saveP = document.getElementById("p-save")

function save() {
    let counterStr = count + " - "
// innerText apenas pega "Legíveis". textContent, neste caso, é melhor por pegar tudo do elemento incluindo os " "
    saveP.textContent += counterStr
    count = 0;
    counter.innerText = count;
    // aparece a poha do código
}

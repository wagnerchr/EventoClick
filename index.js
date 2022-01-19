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

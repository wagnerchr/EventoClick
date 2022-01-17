let num = 0
const counter = document.getElementById("counter")

function increment() {
    num++
    counter.innerText = num;
}


let saveP = document.getElementById("p-save")

function save() {
    let counterStr = num + "-"
    saveP.innerText += counterStr
}

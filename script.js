const ButtonSound = document.getElementById("button-sound")
const ClearSound = document.getElementById("clear-sound")

function Add() {
    let Num1 = parseFloat(document.getElementById("first-number").value);
    let Num2 = parseFloat(document.getElementById("second-number").value);


    let Result = Num1 + Num2
    Result = Result.toFixed(4)
    document.getElementById("result").innerHTML = `Result: ${Result}`
    ButtonSound.play()
}

function Subtract() {
    let Num1 = parseFloat(document.getElementById("first-number").value);
    let Num2 = parseFloat(document.getElementById("second-number").value);


    let Result = Num1 - Num2
    Result = Result.toFixed(2)
    document.getElementById("result").innerHTML = `Result: ${Result}`
    ButtonSound.play()
}

function Multiply() {
    let Num1 = parseFloat(document.getElementById("first-number").value);
    let Num2 = parseFloat(document.getElementById("second-number").value);
    


    let Result = Num1 * Num2
    Result = Result.toFixed(2)
    document.getElementById("result").innerHTML = `Result: ${Result}`
    ButtonSound.play()
}

function Divide() {
    let Num1 = parseFloat(document.getElementById("first-number").value);
    let Num2 = parseFloat(document.getElementById("second-number").value);


    let Result = Num1 / Num2
    Result = Result.toFixed(2)
    document.getElementById("result").innerHTML = `Result: ${Result}`
    ButtonSound.play()
}

function Clear() {
    document.getElementById("first-number").value = ""
    document.getElementById("second-number").value = ""
    document.getElementById("result").innerHTML = `Result: `
    ClearSound.play()
}
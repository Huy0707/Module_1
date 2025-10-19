function add() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Addition's result: " + (a + b);
}

function subtract() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Subtraction's result: " + (a - b);
}

function multiply() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Multiplication's result: " + (a * b);
}

function divide() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);

    if (b === 0) {
        document.getElementById("result").innerText = "❌ Cannot divide by zero!";
    } else {
        document.getElementById("result").innerText = "Division's result: " + (a / b);
    }
}
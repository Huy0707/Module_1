    function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = document.getElementById("result");

    let converted;
    const rate = 25000; // 1 USD = 25,000 VND

    if (from === "USD" && to === "VND") {
    converted = amount * rate;
} else if (from === "VND" && to === "USD") {
    converted = amount / rate;
} else {
    converted = amount; // cùng loại tiền
}

    result.innerText = ` ${amount} ${from} = ${converted.toLocaleString()} ${to}`;
}
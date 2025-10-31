let value = null
do {
    value = prompt("Enter a number from 1 -> 10");
}while (value < 1 || value > 10);
alert("Your number is " + value);
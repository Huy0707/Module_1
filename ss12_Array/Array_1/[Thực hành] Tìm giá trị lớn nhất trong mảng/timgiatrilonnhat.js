let numbers = [];
for (let i = 0; i < 5; i++) {
    let value = parseInt(prompt("Enter number " + (i + 1) + ": "));
    numbers.push(value);}
let max = numbers[0];
let index = 0;
for (i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
        index = i;
    }
}
alert("Max: " + max + " found at " + index);
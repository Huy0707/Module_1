let value = prompt("Enter a value: ");
let numbers = [1,3,5,7,8,9,];
let index = -1;
for (i=0 ; i< numbers.length; i++) {
    if(Number(value) === numbers[i]) {
        index = i;
        break;
    }
}
if (index > -1){
    alert("Value " + numbers[i] + " found at " + i);
}else{alert("Value didn't found")}
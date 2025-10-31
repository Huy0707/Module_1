let num = (prompt("Enter a number: "));
let total = 0;

while (num != -1){
    num = parseInt(prompt("Enter a number: "));
    total += num;
    alert( "Tong la: " + total);
}
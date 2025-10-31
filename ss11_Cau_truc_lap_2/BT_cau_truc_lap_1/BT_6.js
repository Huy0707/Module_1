let n1 = 1;
let count = 0;
let sum = 0;
while(count < 30){
    if(n1 % 7 === 0 && n1 != 0 ){
        count++;
        sum += n1;
        document.write(n1 + "<br>" + "");
    }
    n1++;
}
document.write("30 số tự nhiên đầu tiên chia hết cho 7 là: " + sum);
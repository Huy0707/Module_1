let n1 = 0;
let n2 = 1;
let nextNum;

while(true){
    if(n1 %5 === 0 && n1!==0){
        document.write("Số đầu tiên chia hết cho 5 là: " + n1);
        break;
    }
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}

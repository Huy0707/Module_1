let n1 = 0;
let n2 = 1;
let nextNum;

document.write("20 số Fibonacci đầu tiên là: <br>");

for (let i = 1; i <= 20; i++) {
    document.write(n1 + "<br>" + " ");
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}

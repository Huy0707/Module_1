let n1 = 0;
let n2 = 1;
let nextNum;
let sum;

document.write("Tổng của 20 số đầu trong dãy fibonacci là: ");

for (let i = 1; i <= 20; i++) {
    document.write(n1 + "<br>" + "");
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}
    sum = nextNum;
    document.write("Tổng của 20 số đầu trong dãy là: " + sum);

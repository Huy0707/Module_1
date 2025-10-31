let numbers = parseInt(prompt("Enter number: "));
let count = 0;
let N = 2;
while ( count < numbers){
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(N); i++){
        if (N % i === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        document.write(N + "<br>" + "");
        count++;
    }
    N++;
}
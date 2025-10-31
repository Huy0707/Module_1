let degree = parseInt(prompt("Enter degree"));
while (degree < 20 || degree >100){
    if(degree > 100){
        alert("Temp too high! Pls decrease temp")
    }else if(degree < 20){
        alert("Temp too low! Pls increase temp")
    }
    degree = parseInt(prompt("Enter degree again."));
}
alert("Normal temp");
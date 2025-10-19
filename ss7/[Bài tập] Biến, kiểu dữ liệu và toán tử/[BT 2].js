function chuyendoi() {
    let DoC = parseInt(document.getElementById('Cdegree').value);
    let result = (DoC*9/5)+32;
    document.getElementById('result').innerHTML =
        DoC.toFixed(2) + " C = " + result.toFixed(2) + " F";
}
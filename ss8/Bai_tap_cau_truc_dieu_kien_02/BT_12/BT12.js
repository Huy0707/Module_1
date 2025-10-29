let a = parseFloat(prompt("Nhập số tiền ban đầu (VND):"));
let b = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let c = parseInt(prompt("Nhập số tháng gửi:"));

let A = a * Math.pow((1 + b), c);
let lai = A - a;

alert("Sau " + c + " tháng, số tiền bạn nhận được là: " + A.toFixed(2) + " VND\nLãi thu được: " + lai.toFixed(2) + " VND");

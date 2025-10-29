let a=parseInt(prompt("nhap vao gia tri a"));
let b=parseInt(prompt("nhap vao gia tri b"));
if (a%b == 0) {
    alert (a + "chia het cho" + b);
}else if (b==0){
    alert ("loi gia tri")
}else {alert(a + "khong chia het cho" + b);}
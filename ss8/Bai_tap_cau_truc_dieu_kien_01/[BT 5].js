let a= parseInt(prompt("nhập điểm kiểm tra"))
let b= parseInt(prompt("nhập điểm giữa kỳ"))
let c= parseInt(prompt("nhập điêmr cuối kỳ"))
if ((a+b+c)/3 >= 8){
    alert("Bạn là học sinh giỏi")
}else if((a+b+c)/3 >= 6.5 && (a+b+c)/3 < 8){
    alert("Bạn là học sinh khá")
}else{alert("Bạn là học sinh trung bình")}
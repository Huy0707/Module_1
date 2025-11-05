let storage=prompt("Enter numbers")
let arr=storage.split("");    //tách chuỗi thành mảng ký tự
let result=arr.reduce((acc, curr, i) => {

    // .reduce  duyệt từng phần tử và tích luỹ kết quả
    // acc accumulator Bộ tích lũy – nơi lưu kết quả sau mỗi vòng lặp.
    // curr current value Giá trị hiện tại trong mảng đang được duyệt.

    if (i > 0 && arr[i - 1] % 2 === 0 && curr % 2 === 0) {
        return acc + "-" + curr;    // chèn dấu -
    }else {
        return acc + curr ;
    }
});
document.write("Ket qua: "+ result);
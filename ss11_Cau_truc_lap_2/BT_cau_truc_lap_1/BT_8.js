function playGame() {
    debugger;
    let number;
    do {
        number = +prompt("Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu?");
        if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
            alert("Vui lòng nhập một số nguyên lớn hơn hoặc bằng 0!");
        }
    } while (isNaN(number) || number < 0 || !Number.isInteger(number));
    let number_ran = Math.floor(Math.random() * (number + 1));
    console.log(number_ran);
    let number_check;
    let count = 0;
    do {
        number_check = +prompt("Nhập số bạn đoán:");
        if (isNaN(number_check) || number_check < 0 || !Number.isInteger(number_check)) {
            alert("Vui lòng nhập một số nguyên lớn hơn hoặc bằng 0!");
        }
    } while (isNaN(number_check) || number_check < 0 || !Number.isInteger(number_check));
    while (number_check !== number_ran) {
        count++;
        if (count == 4) {
            alert("Bạn hết số lần đoán");
            break;
        } else if (number_check < number_ran) {
            alert("Số bạn đoán bé hơn");
        } else {
            alert("Số bạn đoán lớn hơn");
        }
        do {
            number_check = +prompt("Nhập số bạn đoán:");
            if (isNaN(number_check) || number_check < 0 || !Number.isInteger(number_check)) {
                alert("Vui lòng nhập một số nguyên lớn hơn hoặc bằng 0!");
            }
        } while (isNaN(number_check) || number_check < 0 || !Number.isInteger(number_check));
    }
    if (count == 4) {
        document.write("Bạn hết số lần đoán");
    } else {
        document.write("Bạn đã đoán đúng số. Chúc mừng bạn!");
    }
}

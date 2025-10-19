function tinhdiem() {
    let vatly = parseInt(document.getElementById('physic').value);
    let hoa =parseInt(document.getElementById('chemistry').value);
    let sinhhoc = parseInt(document.getElementById('biology').value);

    let tong = vatly + hoa + sinhhoc;
    let trungbinh = tong / 3;

    document.getElementById('trungbinh').innerHTML =
        "Tổng điểm: " + tong.toFixed(2) + "<br>" +
        "Điểm trung bình: " + trungbinh.toFixed(2);
}
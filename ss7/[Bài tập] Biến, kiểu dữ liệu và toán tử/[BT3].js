function tinhdientich() {
    let ban_kinh = parseInt(document.getElementById('r').value);
    let S = 3.14*(ban_kinh**2);
    document.getElementById('result').innerHTML =
        "Diện tích hình tròn là: " + S.toFixed(1);
}
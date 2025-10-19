function tinhchuvihinhtron() {
    let ban_kinh= document.getElementById("r").value;
    let chu_vi= 2*3.14*ban_kinh;
    document.getElementById("result").innerHTML =
        "Chu vi hình tròn là: " + chu_vi.toFixed(1);
}
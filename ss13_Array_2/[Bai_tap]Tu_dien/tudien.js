var Englishword=["book", "door", "chair", "table"];
var Vietnameseword=["sách", "cửa", "ghế", "bàn"];
function translateWord() {
    let word = document.getElementById("wordInput").value.toLowerCase().trim();
    let index = Englishword.indexOf(word);

    if (index !== -1) {
        document.getElementById("result").innerHTML =
            " Nghĩa tiếng Việt: <b>" + Vietnameseword[index] + "</b>";
    } else {
        document.getElementById("result").innerHTML =
            "Không tìm thấy từ này trong từ điển.";
    }
}
let thuNhap = parseFloat(prompt("Nhập tổng thu nhập (VNĐ):"));
let nguoiPhuThuoc = parseInt(prompt("Nhập số người phụ thuộc:"));

let giamTruBanThan = 11000000;
let giamTruPhuThuoc = 4400000;
let thuNhapChiuThue = thuNhap - giamTruBanThan - nguoiPhuThuoc * giamTruPhuThuoc;
let thue = 0;

if (thuNhapChiuThue <= 0) {
    alert("Không phải nộp thuế!");
} else if (thuNhapChiuThue <= 5000000) {
    thue = thuNhapChiuThue * 0.05;
} else if (thuNhapChiuThue <= 10000000) {
    thue = 5000000 * 0.05 + (thuNhapChiuThue - 5000000) * 0.10;
} else if (thuNhapChiuThue <= 18000000) {
    thue = 5000000 * 0.05 + 5000000 * 0.10 + (thuNhapChiuThue - 10000000) * 0.15;
} else if (thuNhapChiuThue <= 32000000) {
    thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + (thuNhapChiuThue - 18000000) * 0.20;
} else if (thuNhapChiuThue <= 52000000) {
    thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + 14000000 * 0.20 + (thuNhapChiuThue - 32000000) * 0.25;
} else if (thuNhapChiuThue <= 80000000) {
    thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + 14000000 * 0.20 + 20000000 * 0.25 + (thuNhapChiuThue - 52000000) * 0.30;
} else {
    thue = 5000000 * 0.05 + 5000000 * 0.10 + 8000000 * 0.15 + 14000000 * 0.20 + 20000000 * 0.25 + 28000000 * 0.30 + (thuNhapChiuThue - 80000000) * 0.35;
}

if (thuNhapChiuThue > 0) {
    alert("Thu nhập chịu thuế: " + thuNhapChiuThue.toLocaleString() + " VNĐ\n" +
        "Thuế phải nộp: " + thue.toLocaleString() + " VNĐ");
}

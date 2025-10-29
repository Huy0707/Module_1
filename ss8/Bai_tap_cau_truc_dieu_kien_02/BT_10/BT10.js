let soDien = parseFloat(prompt("Nhap so dien (Kwh):"));
let tienDien;

if (soDien <= 0) {
    alert("So dien ko hop le");
} else if (soDien <= 50) {
    tienDien = soDien * 1800;
} else if (soDien <= 100) {
    tienDien = 50 * 1800 + (soDien - 50) * 2000;
} else if (soDien <= 200) {
    tienDien = 50 * 1800 + 50 * 2000 + (soDien - 100) * 2500;
} else {
    tienDien = 50 * 1800 + 50 * 2000 + 100 * 2500 + (soDien - 200) * 3000;
}

if (soDien > 0) {
    alert("Tien dien phai tra la: " + tienDien + " VNĐ");
}

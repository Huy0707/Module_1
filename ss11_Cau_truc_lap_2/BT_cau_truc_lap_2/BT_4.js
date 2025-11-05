let dai = 13;
let rong = 5;

for (let i = 1; i <= rong; i++) {
    if (i === 1 || i === rong) {
        document.write("*".repeat(dai) + "<br>");
    } else {
        document.write("*" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;".repeat(dai - 2) + "*" + "<br>");
    }
}
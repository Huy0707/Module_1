document.write("<table border='1' cellspacing='0' cellpadding='5' width='500'>");
for (let i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (let j = 2; j <= 9; j++) {
        document.write("<td>" + j + "x" + i + "=" + (i * j) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
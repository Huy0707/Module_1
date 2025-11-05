let n = 5;
for (let i = 1; i <= n; i++) {
    document.write("*".repeat(i) + "<br>");
}
document.write("<br>");
for (let i = n; i >= 1; i--) {
    document.write("*".repeat(i) + "<br>");
}
document.write("<br>");
for (let i = 1; i <= n; i++) {
    document.write("&nbsp;".repeat(n - i) + "*".repeat(i) + "<br>");
}
document.write("<br>");
for (let i = n; i >= 1; i--) {
    document.write("&nbsp;".repeat(n - i) + "*".repeat(i) + "<br>");
}
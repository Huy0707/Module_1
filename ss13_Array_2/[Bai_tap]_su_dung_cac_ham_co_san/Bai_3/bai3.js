var str= prompt("Enter a string");
var UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
var lowercase = "abcdefghijklmnopqrstuvwyz";
var result = [];
for (var x=0; x <str.length; x++) {
    if (UPPERCASE.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    }else if (lowercase.indexOf(str[x]) !== -1) {
        result.push(str[x].toUpperCase());
    }else{
        result.push(str[x]);
    }
}
document.write(result.join(""));
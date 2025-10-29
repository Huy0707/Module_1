var year = parseInt(prompt('Enter a year: '));

var isleapyear = false;

var isdivisivleby4 = year % 4 == 0 ;
if (isdivisivleby4) {
    var isdivisivleby100 = year % 100 == 0 ;
    if (isdivisivleby100) {
        var isdivisivleby400 = year % 400 == 0 ;
        if (isdivisivleby400) {
            isleapyear = true;
        }
    } else{
        isleapyear = true;
    }
}
if (isleapyear) {
    alert(year + " is a leap year")
}
    else {alert(year + " is not a leap year")
    }

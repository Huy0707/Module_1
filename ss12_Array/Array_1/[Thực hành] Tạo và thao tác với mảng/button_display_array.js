let x = 0;
let array = Array();
function add_element(){
    array [x] = document.getElementById("txtValue").value;
    alert("Element: " + array [x] + " Added at index " + x);
    x++;
    document.getElementById("txtValue").value = "";
}
function display_array(){
    let e = "<hr/>";
    for (var i=0; i<array.length; i++){
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}
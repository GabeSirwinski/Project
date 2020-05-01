var X = 5;

function myFunction() {
    var Y = X + 5;
    return Y;
}



function anotherFunction() {
   var Z = myFunction();
   return Z + 10;
}



function thirdFunction() {
    var A = anotherFunction();
    var B = fourthFunction();
    A = A * 5 + B;
    return A;
}

function fourthFunction() {
    var C = myFunction();
    C = C * 2;
    return C;
}

document.getElementById("output").innerHTML = thirdFunction();

function seeAttribute() {
    var see = document.getElementById('button').getAttribute('onclick');
    document.getElementById('output2').innerHTML = see;
}
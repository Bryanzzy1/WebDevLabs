let x = 5;
let y = 7;

let A = "Hello ";
let B = "world!";

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

function findTheBanana(item) {
    if (item === "Banana") {
        alert("We foud a banana in the " + arrays + " array");
    }
}


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();

    let E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Good morning, I am Bryan Zhong";
    } else if (h < 18) {
        E.innerHTML = "Good afternoon, I am Bryan Zhong";
    } else if (h < 20) {
        E.innerHTML = "Good evening, I am Bryan Zhong";
    } else if (h < 24 || h < 5) {
        E.innerHTML = "Good night, I am Bryan Zhong";
    }

}

function myFirstFunction(){
    var z = x + y;
    console.log(z);
    var C = A + B;
    console.log(C);

    SumNPrint(x, y);
    SumNPrint(A, B);

    if (C.length > z) {
        console.log(C);
    } else if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }

    L1.forEach(function(item){
        if (item === "Banana") {
            alert("We foud a banana in the first array");
        }
    });
    L2.forEach(function(item){
        if (item === "Banana") {
            alert("We foud a banana in the second array");
        }
    });

    if (window.location.href.includes('index.html')) {
        greetingFunc();
    } else {
        console.log("Greeting function does not execute on this page.");
    }
}


myFirstFunction();

// let x = 5;
// let y = 7;

// let A = "Hello ";
// let B = "world!";

// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function SumNPrint(x1, x2) {
//     let x3 = x1 + x2;
//     console.log(x3);
// }

// function findTheBanana(item) {
//     if (item === "Banana") {
//         alert("We foud a banana in the " + arrays + " array");
//     }
// }


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();

    let E = document.getElementById("greeting");
    if (h < 12) {
        E.innerHTML = "Good morning, my name is Bryan Zhong";
    } else if (h < 18) {
        E.innerHTML = "Good afternoon, my name is Bryan Zhong";
    } else if (h < 20) {
        E.innerHTML = "Good evening, my name is Bryan Zhong";
    } else if (h < 24 || h < 5) {
        E.innerHTML = "Good night, my name is Bryan Zhong";
    }

}

// function myFirstFunction(){
//     var z = x + y;
//     console.log(z);
//     var C = A + B;
//     console.log(C);

//     SumNPrint(x, y);
//     SumNPrint(A, B);

//     if (C.length > z) {
//         console.log(C);
//     } else if (C.length < z) {
//         console.log(z);
//     } else {
//         console.log("good job!");
//     }

//     L1.forEach(function(item){
//         if (item === "Banana") { 
//             alert("We foud a banana in the first array");
//         }
//     });
//     L2.forEach(function(item){
//         if (item === "Banana") {
//             alert("We foud a banana in the second array");
//         }
//     });

//     if (window.location.href.includes('index.html')) {
//         greetingFunc();
//     } else {
//         console.log("Greeting function does not execute on this page.");
//     }
// }


// myFirstFunction();

if (window.location.href.includes('index.html')) {
    greetingFunc();
} else {
    console.log("Greeting function does not execute on this page.");
}

//
if (window.location.href.includes("fun.html")) {
    document.getElementById(".adviceBtn").onclick = getAdvice;
}

function addYear() {
    let year = new Date().getFullYear();
    let D = document.getElementById("copyYear");
    D.innerHTML = "Designed and coded by Bryan Zhong © " + year;
}

// function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("showButton").style.display = "none";
// }

$(function () {
    $("#fullBio, #readLessBtn").hide();

    $("#readMoreBtn").click(function () {
        $("#fullBio").show();
        $(this).hide();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function () {
        $("#fullBio").hide();
        $(this).hide();
        $("#readMoreBtn").show();
    });
});

function formValidation() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let comment = document.getElementById("comment");
    let formError = document.getElementById("formError");

    if (!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()) {
        formError.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    } else {
        formError.innerHTML = "";
    }
};

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(() => {
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
        });
}

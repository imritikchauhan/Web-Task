var color = "cyan";
var secondColor = "red";

function changeBackgroundColor() {
    if (document.getElementById("elementOne").style.backgroundColor != color) {
        document.getElementById("elementOne").style.backgroundColor = color;
    } else {
        document.getElementById("elementOne").style.backgroundColor =
            secondColor;
    }
}

// function whatTimeIsIt() {
//     let today = new Date();

//     let date = `${today.getFullYear()}-${
//         today.getMonth() + 1
//     }-${today.getDate()}`;

//     let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

//     alert(date + "  " + time);

// }

function whatTimeIsIt() {
    let today = new Date();

    let date = `${today.getFullYear()}-${
        (today.getMonth() + 1).toString().padStart(2, '0')
    }-${today.getDate().toString().padStart(2, '0')}`;

    let time = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}:${today.getSeconds().toString().padStart(2, '0')}`;

    let greeting = getGreeting(today.getHours());

    alert(`Current date: ${date}\nCurrent time: ${time}\n${greeting}`);
}

function getGreeting(hour) {
    let greeting = "Hello!";

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon!";
    } else if (hour >= 18 && hour < 24) {
        greeting = "Good evening!";
    }

    return greeting;
}

whatTimeIsIt();

  

// function roll(userNum) {
//     let result = Math.floor(Math.random() * 6) + 1;
//     switch (result == userNum) {
//         case true:
//             str = `Congrats! The number is ${result}`;
//             document.getElementById(
//                 "rollOutcome"
//             ).innerHTML = `<span>${str}</span>`;
//             break;
//         case false:
//             str = `Sorry! The number is ${result}`;
//             document.getElementById(
//                 "rollOutcome"
//             ).innerHTML = `<span>${str}</span>`;
//     }
// }

function calculateAverage() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (num1 == null || num2 == null) {
        str = "Please make sure to enter two numbers.";
        //document.getElementById("average").innerHTML = `<b>${str}</b>`;
        alert(str);
    } else {
        var average = (num1 + num2) / 2;
        document.getElementById("average").innerHTML = average;
    }
}

// function generatePassword() {
//     var passwordChars =
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//     var password = "";

//     for (var i = 0; i < 14; i++) {
//         password += passwordChars.charAt(
//             Math.floor(Math.random() * passwordChars.length)
//         );
//     }

//     document.getElementById("password").innerHTML = password;
// }

// document.getElementById("newPass").addEventListener("click", copyText);

// function copyPass() {
//     var text = document.getElementById("newPass").innerText;
//     navigator.clipboard.writeText(text);
// }

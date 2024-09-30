//         .... QUESTION 1 ....
// function greetUser() {
//     let userName = document.getElementById("name").value;
//     if (userName) {
//         document.getElementById("greeting").innerHTML = "Hello, " + userName + "! Welcome!";
//     } else {
//         document.getElementById("greeting").innerHTML = "Please enter your name!";
//     }
// }

//         ..... QUESTION 2 ....
// function greetUserByGender() {
//     let gender = document.getElementById("gender").value.trim().toLowerCase();
//     if (gender === "male") {
//         document.getElementById("genderGreeting").innerHTML = "Good Morning Sir!";
//     } else if (gender === "female") {
//         document.getElementById("genderGreeting").innerHTML = "Good Morning Ma'am!";
//     } else {
//         document.getElementById("genderGreeting").innerHTML = "Please enter a valid gender (Male/Female).";
//     }
// }

//            .... QUESTION 3 ....
// function showSignalMessage() {
//     let signalColor = document.getElementById("signal").value.trim().toLowerCase();
//     if (signalColor === "red") {
//         document.getElementById("signalMessage").innerHTML = "Red: MUST STOP";
//     } else if (signalColor === "yellow") {
//         document.getElementById("signalMessage").innerHTML = "Yellow: READY TO MOVE";
//     } else if (signalColor === "green") {
//         document.getElementById("signalMessage").innerHTML = "Green: MOVE NOW";
//     } else {
//         document.getElementById("signalMessage").innerHTML = "Please enter a valid signal color (Red/Yellow/Green).";
//     }
// }

//         .... QESTION 4 ....  
// function checkFuel() {
//     let remainingFuel = parseFloat(document.getElementById("fuel").value);
//     if (remainingFuel < 0.25) {
//         document.getElementById("fuelMessage").innerHTML = "Please refill the fuel in your car.";
//     } else {
//         document.getElementById("fuelMessage").innerHTML = "Your fuel level is sufficient.";
//     }
// }

//          .... QUESTION 5 ....
// function checkDivisibility() {
//     let number = parseInt(document.getElementById("number").value);
//     if (number % 3 === 0) {
//         document.getElementById("divisibilityMessage").innerHTML = "The number " + number + " is divisible by 3.";
//     } else {
//         document.getElementById("divisibilityMessage").innerHTML = "The number " + number + " is not divisible by 3.";
//     }
// } 
//                 .... QUESTION 6 .... 
// function checkEvenOrOdd() {
//     let number = parseInt(document.getElementById("number").value);
//     if (number % 2 === 0) {
//         document.getElementById("resultMessage").innerHTML = "The number " + number + " is even.";
//     } else {
//         document.getElementById("resultMessage").innerHTML = "The number " + number + " is odd.";
//     }
// }

//               .... QUESTION 7 ....
// function checkTemperature() {
//     let temperature = parseFloat(document.getElementById("temperature").value);
//     if (temperature > 40) {
//         document.getElementById("temperatureMessage").innerHTML = "It is too hot outside.";
//     } else if (temperature > 30) {
//         document.getElementById("temperatureMessage").innerHTML = "Today's weather is normal.";
//     } else if (temperature > 20) {
//         document.getElementById("temperatureMessage").innerHTML = "Today's weather is cool.";
//     } else if (temperature > 10) {
//         document.getElementById("temperatureMessage").innerHTML = "Today's weather is so cool.";
//     } else {
//         document.getElementById("temperatureMessage").innerHTML = "It's very cold outside.";
//     }
// } 

//                  .... QUESTION 8 ..... 
function calculate() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let operation = document.getElementById("operation").value.trim();
    
    let result;
    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            result = "Error: Division by zero is not allowed.";
        }
    } else if (operation === "%") {
        result = firstNumber % secondNumber;
    } else {
        result = "Error: Invalid operation. Please enter one of +, -, *, /, %.";
    }
    document.getElementById("resultMessage").innerHTML = "The result is: " + result;
}
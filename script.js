// Function to add value to the input field
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}

// Function to calculate and display the result
function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1); // Evaluate the expression
        document.getElementById('res').value = num2;
    } catch (e) {
        document.getElementById('res').value = "Error"; // Handle errors
    }
}

// Function to clear the input field
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}

// Function to remove the last character from the input field
function Delete() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1); // Remove the last character
}

// Function to calculate the factorial of a number
function Factorial() {
    var num = document.getElementById('res').value;
    var fact = 1;
    if (num === '') {
        document.getElementById('res').value = "Error";
        return;
    }
    num = parseInt(num);
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    document.getElementById('res').value = fact;
}

// Function to calculate the square of a number
function Square() {
    var num = document.getElementById('res').value;
    if (num === '') {
        document.getElementById('res').value = "Error";
        return;
    }
    num = parseFloat(num);
    document.getElementById('res').value = num * num;
}

// Function to calculate the square root of a number
function SquareRoot() {
    var num = document.getElementById('res').value;
    if (num === '') {
        document.getElementById('res').value = "Error"; // Handle empty input
        return;
    }

    try {
        num = eval(num); // Evaluate the expression first
        if (num < 0) {
            document.getElementById('res').value = "Error"; // Handle negative numbers
        } else {
            document.getElementById('res').value = Math.sqrt(num); // Calculate the square root
        }
    } catch (e) {
        document.getElementById('res').value = "Error"; // Handle any evaluation errors
    }
}


function CubeRoot() {
    var inp = document.getElementById('res');
    inp.value = Math.cbrt(eval(inp.value));
}
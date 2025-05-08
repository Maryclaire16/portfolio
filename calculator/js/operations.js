function addition() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    
    // Handle continuous solving or switching operators
    if (display2 !== "") {
        let answer;
        if (operator == "+") {
            answer = Number(display2) + Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } else {
        // First number input before operator is pressed
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = "+";
}

function subtraction() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    
    if (display2 !== "") {
        let answer;
        if (operator == "-") {
            answer = Number(display2) - Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } else {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = "-";
}

function division() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    
    if (display2 !== "") {
        let answer;
        if (operator == "/") {
            answer = Number(display2) / Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } else {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = "/";
}

function multiplication() {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    
    if (display2 !== "") {
        let answer;
        if (operator == "*") {
            answer = Number(display2) * Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } else {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = "*";
}

function equals() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    let answer;

    if (operator == '+') {
        answer = Number(num) + Number(num2);
    } else if (operator == '-') {
        answer = Number(num2) - Number(num);
    } else if (operator == '*') {
        answer = Number(num) * Number(num2);
    } else if (operator == '/') {
        answer = Number(num2) / Number(num);
    }

    document.getElementById('display').value = answer;
    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = " ";
}

function dot() {
    // Ensures the dot is added only once.
    const display = document.getElementById('display').value;
    if (!display.includes(".")) {
        document.getElementById('display').value = display + ".";
    }
}

function number(num) {
    const display = document.getElementById('display').value;
    if (display === "0") {
        document.getElementById('display').value = num;
    } else {
        document.getElementById('display').value = display + num;
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
    document.getElementById('display2').value = "";
    document.getElementById('operator').value = "";
}

function roundNumber() {
    let number = document.getElementById("inputText").value;
    if (number === "") {
        alert('Please Enter Your Number')
        return;
    }

    let roundTheNumber = Math.round(number);
    let html = "<h1 class = 'text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    document.getElementById('output').innerHTML = html
}

//............................ Ceil a Number.........................................//

function ceilNumber() {
    let number = document.getElementById("inputText").value;
    if (number === "") {
        alert('Please Enter Your Number')
        return;
    }

    let ceilTheNumber = Math.ceil(number);
    let html = "<h1 class = 'text-primarytheme mb-0'>" + ceilTheNumber + "</h1>"
    document.getElementById('output').innerHTML = html
}

//............................ Floor a Number.........................................//

function floorNumber() {
    let number = document.getElementById("inputText").value;
    if (number === "") {
        alert('Please Enter Your Number')
        return;
    }

    let floorTheNumber = Math.floor(number);
    let html = "<h1 class = 'text-primarytheme mb-0'>" + floorTheNumber + "</h1>"
    document.getElementById('output').innerHTML = html
}

//............................ Generate Random Number.........................................//

function generateRandomNumber() {

    let generateRandomNumber = Math.random();
    let html = "<h1 class = 'text-primarytheme mb-0'>" + generateRandomNumber + "</h1>"
    document.getElementById('output').innerHTML = html
}

//............................throw a Dice .........................................//

function throwDice() {
    let randomNumber = Math.random();
    randomNumber = (randomNumber * 6) + 1;
    let throwDice = Math.floor(randomNumber)
    let html = "<h1 class = 'text-primarytheme mb-0'>" + throwDice + "</h1><br>Generating a random number between <span <span class= 'text-danger fw-bold'> '1 to 6' </span>"
    document.getElementById('output').innerHTML = html
}

//............................Generate a Strong Password .........................................//

function generateStrongPassword() {

    let length = document.getElementById("inputText").value;
    if (length === "") {
        alert('Please Enter Your Number')
        return;
    }


    let randomString = "";
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    let number = "1234567890"
    let symbols = "!@#$%^&*()_-=~?><,.}{[]:;"
    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + number + symbols;
    let limit = length;
    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random();
        randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length));

    }
    let html = "<h5 class = 'text-primarytheme mb-0'>" + randomString + "</h5>" + '<br> Generate Random String &amp; the length is <span class= "text-success fw-bold fw-16">' + length + '</span>'
    document.getElementById('output').innerHTML = html
}

//............................converting Strings .........................................//

function convertingStrings() {

    // let number = document.getElementById("inputText").value;
    // if (!number) {
    //     alert('Please Enter Your Number')
    //     return;
    // }

    let num = '25.1234'

    console.log(num)  //25.12345  in String 

    console.log(typeof num)  //  in String

    num = parseInt(num)  //25.12345  in number

    // num = parseFloat(num)  //25.12345  in number

    // num = Number(num)  //25.12345  in number

    // num = num.toFixed(2)//25.12345  in String

    // num = Number(num)  //25.12345  in number

    // console.log(typeof num)  //  in number

    // console.log(num)  //  in number

    // console.log(typeoF num)  //  in number

}

//............................ controlling Length.........................................//

function controllingLength() {

    // let num = document.getElementById("inputText").value;
    // if (num === "") {
    //     alert('Please Enter Your Number')
    //     return;
    // }
    let num = "25.1234"
    num = Number(num)
    console.log(typeof num)
    num = num.toFixed(2)
    num = Number(num)
    console.log(typeof num)
    console.log(num)
}

//............................ calculate GST.........................................//

function calculateGst() {

    let cost = document.getElementById("inputText").value;
    if (cost === "") {
        alert('Please Enter Your Number')
        return;
    }
    cost = Number(cost);
    let taxInput = +prompt("Enter your Tax rate");
    let tax = cost * (taxInput / 100);
    let totalCost = cost + tax;
    totalCost = Math.round(totalCost);

    document.getElementById('output').innerHTML = 'your bill = <span class= "text-primaryTheme fw-bold fw-16">' + cost + '</span>'
    document.getElementById('output').innerHTML += '<br> Tax' + taxInput + '% = <span class= "text-danger fw-bold"> ' + tax.toFixed(2) + '</span>'
    document.getElementById('output').innerHTML += '<br> Total amount including Tax = <span class= "text-success fw-bold fw-16">' + totalCost + '</span>'
}
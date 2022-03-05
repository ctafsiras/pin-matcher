function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('click-number').addEventListener('click', function (event) {
    const inputNumber = document.getElementById('input-number');
    const newNumber = event.target.innerText;
    const oldNumber = inputNumber.value;
    if (isNaN(newNumber)) {
        if (newNumber == 'C') {
            inputNumber.value = '';
        }
    } else {


        inputNumber.value = oldNumber + newNumber;
    }


})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const inputNumber = document.getElementById('input-number').value;
    const notifyWrong = document.getElementById('notify-wrong');
    const notifyRight = document.getElementById('notify-right');
    if (pin == inputNumber) {
        notifyRight.style.display = 'block';
        notifyWrong.style.display = 'none';
    }
    else {
        notifyRight.style.display = 'none';
        notifyWrong.style.display = 'block';
    }
}

const product = 5; 
console.log(product);
const price = "7"; 
console.log(price);
const subTotal = product * price; 
console.log(subTotal);
const tax = subTotal/10; 
console.log(tax);
const total = subTotal + tax; 
console.log(total);
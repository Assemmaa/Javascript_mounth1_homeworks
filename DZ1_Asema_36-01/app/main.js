//TODO - TASK - 1

var num1 = Number(prompt('Enter first number: '))
var num2 = Number( prompt('Enter second number: '))

var choose = prompt('Enter case (+ or - or * or / )')
if (num1 < 0 || num2 < 0) {
    alert('ERROR')
} else if (choose === '+') {
    alert('Result: ' + (num1 + num2))
}else if (choose === '-') {
    alert('Result: ' + (num1 - num2))
}else if (choose === '*') {
    alert('Result: ' + (num1 * num2))
}else if (choose === '/') {
    if (num1 === 0 || num2 === 0) {
        alert('Error')
    }else {
        alert('Result: ' + (num1 / num2))
    }
}else {
    alert('error')
}


//TODO - TASK - 2

var userAsk = prompt('Enter month: ')
userAsk = userAsk.toLowerCase()
if (userAsk === 'march' || userAsk === 'april' || userAsk === 'may') {
    alert('Season is: Spring')
}else if (userAsk  === 'june' || userAsk === 'july' || userAsk === 'august') {
    alert('Season is: Summer')
}else if (userAsk  === 'september' || userAsk === 'october' || userAsk === 'november') {
    alert('Season is: Autumn')
}else if (userAsk  === 'december' || userAsk === 'january' || userAsk === 'february') {
    alert('Season is: Winter')
}else {
    console.error('error')
}



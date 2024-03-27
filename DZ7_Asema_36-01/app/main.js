function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkNumber() {
    const userInput = parseInt(document.getElementById('userInput').value);
    const randomNumber = getRandomNumber(1, 100);
    const resultElement = document.getElementById('result')

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        resultElement.textContent = "Введите число от 1 до 100";
        resultElement.style.color = "black";
    } else if (userInput < randomNumber) {
        resultElement.textContent = "Загаданное число больше";
        resultElement.style.color = "green";
    } else if (userInput > randomNumber) {
        resultElement.textContent = "Загаданное число меньше";
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = "Вы угадали!";
    }
}

document.getElementById("playButton").addEventListener("click", function() {
    // Генерируем случайное число от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess = null;

    while (userGuess !== randomNumber) {
        userGuess = parseInt(prompt("Угадайте число от 1 до 100:"));

        if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
            alert("Пожалуйста, введите число от 1 до 100.");
        } else if (userGuess < randomNumber) {
            alert("Загаданное число больше. Попробуйте еще раз.");
        } else if (userGuess > randomNumber) {
            alert("Загаданное число меньше. Попробуйте еще раз.");
        } else {
            alert("Поздравляем! Вы угадали число " + randomNumber + "!");
        }
    }
})


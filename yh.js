// Генерируем случайное число от 1 до 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = null;

alert("Угадайте число от 1 до 100!");

while (userGuess !== randomNumber) {
    // Запрашиваем у пользователя ввод
    userGuess = prompt("Введите ваше число:");

    // Проверяем, если пользователь нажал "Отмена"
    if (userGuess === null) {
        alert("Игра окончена. Спасибо за игру!");
        break;
    }

    // Преобразуем ввод в число
    userGuess = Number(userGuess);

    // Проверяем, является ли ввод числом
    if (isNaN(userGuess)) {
        alert("Пожалуйста, введите корректное число.");
        continue;
    }

    // Даем подсказки
    if (userGuess < randomNumber) {
        alert("Ваше число меньше загаданного. Попробуйте снова.");
    } else if (userGuess > randomNumber) {
        alert("Ваше число больше загаданного. Попробуйте снова.");
    } else {
        alert("Поздравляю! Вы угадали число: " + randomNumber);
    }
}

document.getElementById("perevButton").addEventListener("click", function() {
// Функция для переворота текста
function reverseText() {
    // Запрашиваем текст у пользователя
    let userInput = prompt("Введите текст для переворота:");

    // Проверяем, введен ли текст
    if (userInput !== null) {
        // Переворачиваем текст с помощью метода split, reverse и join
        let reversed = userInput.split('').reverse().join('');

        // Выводим перевернутый текст через alert
        alert("Перевернутый текст: " + reversed);
    } else {
        alert("Вы не ввели текст.");
    }
}

// Вызываем функцию при загрузке страницы
reverseText()
})
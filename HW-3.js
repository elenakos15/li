// 1. Проверка пароля
let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// 2. Проверка числа c
let c = 5; // например, любое число в диапазоне от 1 до 9
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// 3. Проверка переменных d и e
let d = 150; // любое число для примера
let e = 50;  // любое число для примера
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// 4. Преобразование типов для вывода числа
let a = '2';
let b = '3';
alert(Number(a) + Number(b)); // Преобразуем строки в числа

// 5. Определение сезона по номеру месяца
let monthNumber = 12; // Пример месяца, можно изменить для тестирования
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Неверный номер месяца');
}
// 1. Преобразовать строку 'js' в верхний регистр.
alert("Преобразовать строку 'js' в верхний регистр");
const str = 'js';
const upperStr = str.toUpperCase();
alert(upperStr); // Вывод: JS

// 2. Функция, которая принимает массив строк и строку, возвращает массив, содержащий элементы, начинающиеся со второй строки.
function filterStrings(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

const words = ['Javascript', 'Java', 'C++', 'Python', 'JS'];
const filteredWords = filterStrings(words, 'js');
console.log(filteredWords); // Вывод: ['Javascript', 'JS']

// 3. Округлить число 32.58884 до меньшего, большего и ближайшего целого.
const number = 32.58884;
console.log(Math.floor(number)); // Вывод: 32
console.log(Math.ceil(number)); // Вывод: 33
console.log(Math.round(number)); // Вывод: 33

// 4. Найти минимальное и максимальное значения из чисел.
alert("Найти минимальное и максимальное значения из чисел.52, 53, 49, 77, 21, 32")
const numbersArray = [52, 53, 49, 77, 21, 32];
alert(Math.min(...numbersArray)); // Вывод: 21
alert(Math.max(...numbersArray)); // Вывод: 77

// 5. Функция, которая выводит случайное число от 1 до 10.
function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}

getRandomNumber(); // Вывод: случайное число от 1 до 10

// 6. Функция, которая возвращает массив случайных чисел от 0 до заданного числа.
// Длина массива должна быть в два раза меньше переданного числа.
function randomNumbersArray(n) {
    const length = Math.floor(n / 2);
    const randomNumbers = [];
    for (let i = 0; i < length; i++) {
        randomNumbers.push(Math.floor(Math.random() * n));
    }
    return randomNumbers;
}

console.log(randomNumbersArray(10)); // Вывод: массив из 5 случайных чисел от 0 до 10

// 7. Функция, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 15)); // Вывод: случайное число от 5 до 15

// 8. Вывести в консоль текущую дату.
const currentDate = new Date();
console.log(currentDate.toString()); // Вывод: текущая дата

// 9. Вывести дату, которая наступит через 73 дня после текущей.
const dateIn73Days = new Date(currentDate);
dateIn73Days.setDate(currentDate.getDate() + 73);
console.log(dateIn73Days.toString()); // Вывод: дата через 73 дня

// 10. Функция, которая принимает дату и возвращает ее в заданном формате.
function formatDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(currentDate)); // Вывод: отформатированная текущая дата и время


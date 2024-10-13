//Вывод элементов массива до 10
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  if (arr1[i] === 10) {
    break;
  }
}

//Нахождение индекса значения 4
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
console.log(i);
break;
    }
}


//3.Вывод элементов массива через пробел с помощью join

const arr2 = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

//4.Создание многомерного массива
const arr3 = [];

for (let i = 0; i < 3; i++) {
  const arr4 = [];
    for (let i = 0; i < 3; i++) {
    arr4.push(1);
  }
  arr3.push(arr4);
}
console.log(arr3);


//5Добавление значений в массив

const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//6.Сортировка массива и удаление буквы 'a'

const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort(); 
console.log(arr6);

//7.Угадывание числа

const arr7 = [9, 8, 7, 6, 5];
const guessedNumber = +prompt("Угадайте число из массива: " + arr7);
if (arr7.includes(Number(guessedNumber))) {
  alert("Угадал");
} else {
  alert("Не угадал");
}


//8.перевертыш строки

const str8 = 'abcdef';
const reversedStr8 = str8.split('').reverse().join('');
console.log(reversedStr8);


// 9.вывод двумерного массива


const arr9 = [[1, 2, 3], [4, 5, 6]];
const newArr = [];
for (let i = 0; i < arr9.length; i++){
  newArr.push(...arr9[i]);
}
console.log(newArr);




//10.Сумма текущего и следующего элементов


const arr10 = [1, 2, 3, 4, 5, 6]; // Пример массива
for (let i = 0; i < arr10.length - 1; i++) {
  console.log(arr10[i] + arr10[i + 1]);
}


//11.Функция для квадратов чисел


function squareArray(arr) {
  return arr.map(num => num * num);
}
console.log(squareArray([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]


//12.Функция для длины слов


function wordLengths(arr) {
  return arr.map(word => word.length);
}
console.log(wordLengths(['apple', 'banana', 'cherry'])); // [5, 6, 6]


//13.Функция для отрицательных значений


function negativeNumbers(arr) {
  return arr.filter(num => num < 0);
}
console.log(negativeNumbers([-1, 2, -3, 4, -5])); // [-1, -3, -5]


//14.Случайные числа и четные значения


const arr14 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenNumbers = arr14.filter(num => num % 2 === 0);
console.log(arr14, evenNumbers);


//15.Среднее арифметическое случайных чисел


const arr15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const average = arr15.reduce((total, num) => total + num, 0) / arr15.length;
console.log(arr15, average);
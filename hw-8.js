// 1: Сортировка массива по возрасту

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Сортируем массив по возрастанию возраста
console.log(people.sort((a, b) => a.age - b.age));

// 2: Реализация функции filter
function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}
console.log(filter([5, -4, 1, 9], isPositive));

const peple = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peple, isMale));

//3: Программа выводящая время

let counter = 0;
const interval = setInterval(() => {
    const currentDate = new Date();
    console.log(currentDate);
    counter += 3;
    if (counter >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000);

//4: Отложенное приветствие

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000); 
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// 5: Исправление порядка вызовов

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб')); // Передаем функцию, которая вызывает sayHi
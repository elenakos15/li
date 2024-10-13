//функция возвращает меньшее число
function min(a, b) {
   if (a < b){
    return a;
   } else {
    return b;
   } 
}

console.log(min(8, 4)); // 4
console.log(min(6, 6)); // 6

//Четное или нечетное

function checkEvenOrOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(checkEvenOrOdd(4)); // Число четное
console.log(checkEvenOrOdd(5)); // Число нечетное

//квадрат числа

function printSquare(n) {
    console.log(n * n);
}

function returnSquare(n) {
    return n * n;
}

printSquare(3); // 9
console.log(returnSquare(4)); // 16

//Сколько тебе лет?

function askAge() {
    let age = +prompt('Сколько вам лет?');

    if (isNaN(age) || age < 0) {
        alert('Вы наверное шутите?');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

askAge(); 
// являтся ли числами

function multiplyIfValid(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
    return a * b;
}
}
console.log(multiplyIfValid(5, 10)); // 50
console.log(multiplyIfValid(5, 'test')); // Одно или оба значения не являются числом

//проверка является ли числом

function checkNumberAndCube() {
    let number = prompt('Введите число:');
        if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
    
    return `n в кубе равняется ${number ** 3}`;
}
}

console.log(checkNumberAndCube()); 

//площадь круга и длина окружности

const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};


console.log(circle1.getArea()); // Площадь круга с радиусом 5
console.log(circle1.getPerimeter()); // Периметр круга с радиусом 5

console.log(circle2.getArea()); // Площадь круга с радиусом 10
console.log(circle2.getPerimeter()); // Периметр круга с радиусом 10
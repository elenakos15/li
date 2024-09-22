//Создаем переменную a и присваиваем ей значение 10
let a = 10;
alert(a); 
a = 20;
alert(a); 

//выпуск первого iPhon
let yearOfFirstIphone = 2007;
alert(yearOfFirstIphone); 

//имЯ создателя языка JavaScript
let creatorOfJavaScript = "Brendan Eich";
alert(creatorOfJavaScript);

//сумма, разность, произведение и частное
let num1 = 10;
let num2 = 2;
alert("Сумма: " + (num1 + num2)); 
alert("Разность: " + (num1 - num2)); 
alert("Произведение: " + (num1 * num2));
alert("Частное: " + (num1 / num2));

//возведи 2 в 5-ю степень
let result = Math.pow(2, 5);
alert(result);

// остаток от деления c на b:
let c = 9;
let b = 2;
let remainder = c % b;
alert(remainder);

// код с использованием операторов присваивания и инкремента/декремента:
let num = 1;
num += 5; // num = num + 5;
num -= 3; // num = num - 3;
num *= 7; // num = num * 7;
num /= 3; // num = num / 3;
num++;    // num = num + 1;
num--;    // num = num - 1;
alert(num);

//Создать переменную age с использованием prompt() и вывести её с помощью alert():

let age = prompt("Сколько вам лет?");
alert(age);

//Создать объект user с произвольными значениями:
    let user = {
    name: "Иван",
    age: 30,
    isAdmin: true
};

//Запрос имени у пользователя и вывод приветствия:

let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);
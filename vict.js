document.getElementById("victButton").addEventListener("click", function() {
// Массив вопросов и правильных ответов
const quizQuestions = [
    {
        question: "Какой цвет у неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Функция запуска викторины
function startQuiz() {
    let score = 0; // Счетчик правильных ответов
// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
    // Проходим по каждому вопросу
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        // Формируем сообщение с вопросом и вариантами
        let questionText = question.question + "\\n";
        for (let j = 0; j < question.options.length; j++) {
            questionText += question.options[j] + "\\n";
        }

        // Запрашиваем ответ у пользователя
        const userAnswer = prompt(questionText);

        // Проверяем, что пользователь ввел число и оно соответствует правильному ответу
        if (parseInt(userAnswer) === question.correctAnswer) {
            score++; // Увеличиваем счетчик, если ответ правильный
        }
    }

    // Выводим результат
    alert("Вы ответили правильно на " + score + " из " + quiz.length + " вопросов.");
}

// Запуск викторины
startQuiz();
})

document.getElementById("decideButton").addEventListener("click", function() {
   
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function generateQuestion() {
        const operators = ['+', '-', '*', '/'];
        const num1 = getRandomInt(1, 20);
        const num2 = getRandomInt(1, 20);
        const operator = operators[getRandomInt(0, operators.length - 1)];
    
        // Важно: проверка на деление на 0 для операции деления
        if (operator === '/' && num2 === 0) {
            return generateQuestion(); // генерируем вопрос заново
        }
    
        const question = `${num1} ${operator} ${num2}`;
        let correctAnswer;
    
        switch (operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '/':
                correctAnswer = num1 / num2;
                break;
        }
    
        return { question, correctAnswer };
    }
    
    function startGame() {
        const { question, correctAnswer } = generateQuestion();
        const userAnswer = parseFloat(prompt(`Решите задачу: ${question}`));
    
        if (userAnswer === correctAnswer) {
            alert('Правильно! Молодец!');
        } else {
            alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }
    }
    
// Запуск игры
startGame();
})
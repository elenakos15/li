document.getElementById("rockButton").addEventListener("click", function() {
function getComputerChoice() {
    const options = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Ничья!";
    }
    if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        return "Вы победили!";
    } else {
        return "Вы проиграли!";
    }
}

const userChoice = prompt("Введите ваш выбор (камень, ножницы, бумага):").toLowerCase();
const computerChoice = getComputerChoice();

if (!["камень", "ножницы", "бумага"].includes(userChoice)) {
    alert("Некорректный ввод. Пожалуйста, введите камень, ножницы или бумагу.");
} else {
    alert(`Ваш выбор: ${userChoice}\\nВыбор компьютера: ${computerChoice}`);
    const result = determineWinner(userChoice, computerChoice);
    alert(result);
}
})
document.getElementById("colorButton").addEventListener("click", function() {
    
        // Генерируем случайный цвет в формате HEX
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Меняем цвет фона
        document.querySelector('.main').style.backgroundColor = randomColor;
       
        // Выводим цвет в alert
        alert('Новый цвет фона: ' + randomColor);
    })


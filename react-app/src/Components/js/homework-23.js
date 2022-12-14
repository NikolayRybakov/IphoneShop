// Упр № 1.

// Напишите таймер обратного отсчёта. При открытии страницы со скриптом необходимо спросить у пользователя число и запустить таймер обратного 
// отсчёта, который, начиная с этого числа, каждую секунду будет уменьшать число на единицу и выводить в консоль сообщение “Осталось n”, 
// где n это данное число. Как только число станет равно нулю, необходимо остановить таймер и вывести в консоль “Время вышло!”. 
// Дополнительно, но не обязательно: Необходимо учесть в коде, что пользователь может ввести не число (выводим ошибку в консоль, 
// текст наваше усмотрение) Попробуйте решить задачу с помощью Promise.


function timer() {
    let time = prompt("Введите число");
    if (time == null || time == "" || isNaN(time)) {
        console.log("Ошибка!");
        return;
    }
    return function timerInner() {
        let interval = setInterval(() => {
            time--;
            console.log(`Осталось ${time}`)
            if (time == 0) {
                clearInterval(interval);
                console.log("Все!");
            }
        }, 1000)
    }
}

let timerID = timer();
timerID()


// Выполните запрос на бэкенд по адресу https://reqres.in/api/users и выведите в консоль количество пользователей в ответе, 
// а также имя, фамилию и email каждого пользователя в таком формате (соблюдение формата обязательно). Получили пользователей: 
// 2 — Yury Kundin (yury.kundin@yandex.ru) — Иван Наполеонов (test@mail.com). Дополнительно, но не обязательно: Добавьте обработку ошибки 
// на тот случай, если бэкенд недоступен (текст на ваше усмотрение). Проверить можно, если вместо реального адреса указать несуществующий. 
// Попробуйте написать код, который посчитает сколько времени выполнялся данный запрос и выведет это вконсоль (с точностью до миллисекунды).


function getRequest() {
    let person = fetch("https://reqres.in/api/users");
        person
            .then(data => data.json())
            .then((list) => {
                let users = list.data;
                console.log(`Получили пользователей: ${users.length}`)
                users.map(person => {
                    console.log(`${person.first_name}, ${person.last_name}, ${person.email}`)
                    })
                })
}

getRequest();





// Упражнение № 1

let obj = {
    name: "Nikolay",
    age: 31
}

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

let newObj = isEmpty(obj);
console.log(newObj);

// -----------------

function isEmpty(obj) {
    if (Object.entries(obj).length === 0) {
        return true;
    }
    return false;
}

let newObj1 = isEmpty(obj);
console.log(newObj1);


// Упражнение № 3

// У нас есть объект, в котором хранятся зарплаты нашейкоманды:
// let salaries= {John:100000,Ann:160000,Pete:130000,};
// Необходимо написать функцию raiseSalary(perzent),которая позволит произвести повышение зарплаты на определенный
// процент и будет возвращать объект с новыми зарплатами.Например, если мы передаем внутрь этой функции число 5, то зарплата 
// каждого сотрудника должна быть повышена на 5%(применить округление до целого числа в меньшую сторону).После чего необходимо 
// вывести в консоль общий бюджет нашей команды, т.е. суммарное значение всех зарплат после изменения. Добавить для этой функции 
// описание в формате JSDoc.

let salaries= {
    John: 100000,
    Ann: 160000,
    Pete: 130000
}

function raiseSalary(perzent) {
    let newSalaries = {};
    let sum = 0;
    for (let prop in salaries) {
        newSalaries[prop] = salaries[prop] * (perzent/100 + 1);
        Math.floor(newSalaries[prop]).toFixed();
        sum += salaries[prop];
    }
    console.log(sum)
    return newSalaries;
}

let newSalaries = raiseSalary(5);
console.log(newSalaries)


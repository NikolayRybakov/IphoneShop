// Задача № 1

// Напишите функцию getSumm(arr), которая принимает любой массив и возвращает сумму чисел в этом массиве. Обратите внимание, что в качестве 
// элементов массива могут приходитьне только числа и такие элементы необходимо пропускать.
// Пример правильной работы функции:

let arr1 = [1, 2, 10, 5];
let arr2 = ["a", {}, 3, 3, -2];

let sum1 = 0;

function getSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i] == 'number')) {
            sum1 += arr[i];
        } 
    }
    return sum1;
}

let res1 = getSum(arr1);
console.log(res1)

let sum2 = 0;

function getSum2(arr) {
    arr.forEach((value) => {
        if (!isNaN(value)) {
            sum2 += value;
        }
    })
    return sum2;
}

let res2 = getSum2(arr2);
console.log(res2);



// Урок № 3

// Реализуйте упрощенную корзину в интернет-магазине.
// Представим, что мы храним в корзине идентификаторы товаров, 
// которые пользователь добавил в корзину и нам нужно реализовать 
// две функции: добавить в корзину и удалить из корзины. 
// Причём в корзину нельзя добавить два одинаковых товара.

let cart = [4884];

function addToCart(el) {
    if (cart.includes(el)) return;
    cart.push(el);
}

addToCart(555)
addToCart(666)

function removeFromCart(el) {
    cart = cart.filter(value => {
        return value != el;
    })
}

removeFromCart(555)
console.log(cart)

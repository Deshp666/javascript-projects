// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = prompt('product:') // Название товара 1
let price1 = prompt('price:') // Стоимость товара  1
let count1 = prompt('count:') // Количесто товара 1
let cost1 = price1 * count1

console.log(product1, cost1) // Вывод в консоль

let product2 = prompt('product:') // Название товара 2
let price2 = prompt('price:')  // Стоимость товара  2
let count2 = prompt('count:') // Количесто товара 2
let cost2 = price2 * count2

console.log(product2, cost2) // Вывод в консоль

let product3 = prompt('product:') // Название товара 3
let price3 = prompt('price:') // Стоимость товара  3
let count3 = prompt('count:') // Количесто товара 3
let cost3 = price2 * count2

console.log(product3, cost3) // Вывод в консоль
let total_cost = cost1 + cost2 + cost3
console.log('Total cost:', total_cost);
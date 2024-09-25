let counter = 1
const current_year = 2024

let first = prompt('Name:')
let first_year = prompt('Year:')

let second = prompt('Name:')
let second_year = prompt('Year:')

let third = prompt('Name:')
let third_year = prompt('Year:')

let first_age = current_year - first_year
let second_age = current_year - second_year
let third_age = current_year - third_year

console.log(counter++, first, first_age)
console.log(counter++, second, second_age)
console.log(counter++, third, third_age)

let average_age = (first_age + second_age + third_age) / 3

console.log('Average age:', average_age);
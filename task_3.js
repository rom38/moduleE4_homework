// Задание 3.
// Написать функцию, которая создает
// пустой объект, но без прототипа.

function emptyObj() {
    // return {}
    // return Object()
    return Object.create(null)
}
console.log(emptyObj()) // {}

console.log(Object.getPrototypeOf(emptyObj())) // null

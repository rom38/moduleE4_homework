// Задание 2.
// Написать функцию, которая принимает в качестве аргументов
// строку и объект, а затем проверяет есть ли у переданного
// объекта свойство с данным именем.
// Функция должна возвращать true или false.


const obj_1 = { prop_1: '11', prop_2: '22' }
const obj_2 = Object.create(obj_1)
obj_2.prop_3 = '333'

function hasStrProperties(askKeyStr, getObj) {
    for (let key in getObj) {
        // console.log(`${key}  -  ${getObj[key]}`);

        if (key === askKeyStr) {

            // console.log(`${key}  -  ${getObj[key]}`);
            return true
        }
    }
    return false


}
console.log(hasStrProperties('prop_4', obj_2))
console.log(hasStrProperties('prop_1', obj_2))
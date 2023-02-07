// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента
// объект и выводит в консоль все ключи и значения только
// собственных свойств. Данная функция не должна возвращать
// значение.

const obj_1 = {prop_1:'11', prop_2:'22'}
const obj_2 = Object.create(obj_1)
obj_2.prop_3 = '333'

function getObjProperties (getObj){
    for (let key in getObj) {

        if (getObj.hasOwnProperty(key)) {
    
            console.log(key);
        }   
        // console.log(key);

    }
}
getObjProperties(obj_2)
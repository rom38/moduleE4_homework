// Задание 4.
// Реализовать следующее консольное приложение подобно
// примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определить иерархию электроприборов.
// Включить некоторые в розетку. Посчитать потребляемую мощность.

// Таких приборов должно быть, как минимум, два
// (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// 1. Определить родительскую функцию с методами, которые
//    включают/выключают прибор из розетки.
// 2. Создать делегирующую связь [[Prototype]] для двух
//    конкретных приборов.
// 3. У каждого из приборов должны быть собственные свойства
//    и, желательно, методы, отличные от родительских методов.
// 4. Создать экземпляры каждого прибора.
// 5. Вывести в консоль и посмотреть результаты работы,
//    гордиться собой. :)

// Общие требования:
// 1. Имена функций, свойств и методов должны быть информативными.
// 2. Соблюдать best practices:
// 3. использование camelCase нотации для переменных и методов,
// 4. PascalCase для названия функций-конструкторов и классов;
// 5. информативные имена (а не a, b);
// 6. четкая связь между классом и его экземплярами
//    (класс описывает множество, а экземпляр конкретную реализацию);
// 7. использование синтаксиса ES6 (кроме
//    функции-конструкторов) и т. д.

// let lamp = { wattPower: 10 }
// let comp = { wattPower: 20 }

function soketSumPower() {
    let summPower = 0
    for (let arg = 0; arg < arguments.length; ++arg) {
        if (isPlugged(arguments[arg])) {
            summPower += getWattPower(arguments[arg])

        }
    }
    return `Summ power - ${summPower} watts`

    function getWattPower(electricDevice) {
        for (let key in electricDevice) {
            if (key === 'wattPower') {
                return electricDevice[key]
            }
        }
    }
    function isPlugged(electricDevice) {
        for (let key in electricDevice) {
            if (key === 'isPlugged') {
                return electricDevice[key]
            }
        }
    }
}

function ElectricDevices(wattPower) {
    this.wattPower = wattPower
    // New device is unplgged
    this.isPlugged = false
}

ElectricDevices.prototype.plugSocket = function () {
    if (!this.isPlugged) {
        this.isPlugged = true
        console.log('device is plug in socket')
    }
}

ElectricDevices.prototype.unPlugSocket = function () {
    if (this.isPlugged) {
        console.log('device is unplug in socket')
        this.isPlugged = false

    }
}


function Lamps() {
    this.light = false
}

Lamps.prototype = new ElectricDevices(60)
Lamps.prototype.lightOn = function () {
    if (!this.light) {
        if (this.isPlugged) {
            console.log('Lamp is on')

            this.light = true
        }
        else {
            console.log('plug lamp in socket first')
        }
    }
}

Lamps.prototype.lightOff = function () {
    if (this.light) {
        console.log('Lamp turn off')

        this.light = false
    }
}


function Computers() {
}

Computers.prototype = new ElectricDevices(150)
Computers.prototype.runServer = function () {
    if (this.isPlugged) {
        console.log('server run')
    }
    else {
        console.log('plug comp in socket first')
    }
}

Computers.prototype.playGame = function () {
    if (this.isPlugged) {
        console.log('Game is playing')
    }
    else {
        console.log('plug comp in socket first')
    }
}

// testing

myLamp = new Lamps()
myComp = new Computers()

console.log(myLamp)
console.log(myComp)
myLamp.lightOn()
myLamp.plugSocket()
myLamp.lightOn()
myComp.runServer()
console.log(soketSumPower(myLamp, myComp))
myComp.plugSocket()
myComp.runServer()
console.log(soketSumPower(myLamp, myComp))


// debugger

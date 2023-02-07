// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
//Общие требования:
//    Имена классов, свойств и методов должны быть информативными;
//    Соблюдать best practices;
//    Использовать синтаксис ES6.


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

class ElectricDevices {
    constructor(wattPower) {
        this.wattPower = wattPower
        // New device is unplgged
        this.isPlugged = false
    }

    plugSocket() {
        if (!this.isPlugged) {
            this.isPlugged = true
            console.log('device is plug in socket')
        }
    }

    unPlugSocket() {
        if (this.isPlugged) {
            console.log('device is unplug in socket')
            this.isPlugged = false

        }
    }
}

class Lamps extends ElectricDevices {
    constructor(wattPower) {
        super(wattPower)
        this.light = false
    }

    lightOn() {
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

    lightOff() {
        if (this.light) {
            console.log('Lamp turn off')

            this.light = false
        }
    }
}

class Computers extends ElectricDevices {
    constructor(wattPower){
        super(wattPower)
    }
    runServer() {
        if (this.isPlugged) {
            console.log('Server run')
        }
        else {
            console.log('plug comp in socket first')
        }
    }

    playGame() {
        if (this.isPlugged) {
            console.log('Game is playing')
        }
        else {
            console.log('plug comp in socket first')
        }
    }
}

// testing

myLamp = new Lamps(60)
myComp = new Computers(150)

console.log(myLamp)
console.log(myComp)
myLamp.lightOn()
myLamp.plugSocket()
myLamp.lightOn()
myComp.runServer()
console.log(soketSumPower(myLamp, myComp))
myComp.plugSocket()
myComp.runServer()
myComp.playGame()
console.log(soketSumPower(myLamp, myComp))


// debugger
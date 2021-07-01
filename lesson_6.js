
// Установка прототипадля объекта
const protoPerson = {
  position: 'developer',
  sayHi: function () {
    console.log(`Приветствую! Я ${this.name}`)
  }
}
конструктор
function Person(name) {
  this.name
}

Person.prototype = Object.create(protoPerson)

const captain = new Person('Константин Константинопольский')
console.log(captain)
console.log(captain.sayHi())

// Работа с методами прототипа
// const captainProto = Object.getPrototypeOf(captain)
// console.log(captainProto)
//
// // function TeamMember() {
// //   this.name = name
// //   this.avatar = ''
// // }
// //
// // TeamMember.prototype = Object.create(captainProto)
// //
// // const spaceMarine = new TeamMember('Mr. Twister')
// // // console.log(spaceMarine);

//  Изменение прототипа и влияние на объекты-потомки
//
//
// console.log(captain.position);
// console.log(spaceMarine.position);
//
// // protoPerson.position = 'Dr. Web'
// //
// // console.log(captain.position);
// // console.log(spaceMarine.position);

// Собственные и унаследованные  свойства
// for (let key in spaceMarine) {
//   console.log(key, spaceMarine[key])
// }
//
// // for (let key in spaceMarine) {
// //   if (spaceMarine.hasOwnProperty(key)) {
// //     console.log(key, spaceMarine[key])
// //   }
// // }
//
// // // Object.entries(spaceMarine).forEach(item => console.log(item))

// Изменение встроенных прототипов
//
// String.prototype.show = function () {
//   console.log(this)
// }
//
// const newString = 'Hi!'
//
// newString.show()
// console.log(newString)

// Создание класса и объектов с помощью класса
//
// class SpaceShip {
//   constructor(name) {
//     this.name = name
//   }
//   speed = 6
//   statPosition = {x:0, y: 0}
//   engineOn(stopMoment = 3000) {
//     const tick = () => {
//       const currentPosition = this.statPosition
//       this.statPosition = {
//         x: currentPosition.x + 0.5 * this.speed,
//         y: currentPosition.y + this.speed
//       }
//       console.log(this.statPosition)
//     }
//     const internalID = setInterval(tick, 1000)
//     setTimeout(() => clearInterval(internalID), stopMoment)
//   }
// }
//
// const istuFalcon = new SpaceShip('istu Falcon')
//
// console.log(istuFalcon)
// console.log(istuFalcon.engineOn(5000))

// Наследование классов, переопределение методов и конструктора
//
// class spaceCruiser extends  SpaceShip{
//   constructor(name, gunsNumber) {
//     super();
//     this.gunsNumber = gunsNumber
//   }
//
//   speed = 1000
//   fireOn () {
//     console.log('звуки стрельбы')
//   }
// }
//
// const istuCruiser = new spaceCruiser('istu Cruiser', 1200)

// Генерация классов в зависимости от условий (паттерн фабрика)
//
// function shipConstructor(speed, gunsNumber, fire) {
//   return class {
//     speed = speed
//     gunsnumber = gunsNumber
//     fireOn () {
//       console.log(fire)
//     }
//   }
// }
//
// class BattleShip extends shipConstructor(40, 5, 'пиу-пиу')
//
//   new BattleShip().fireOn()

// Примеси
//
// let renderMixin = {
//   render(blockSelector) {
//     const block = document.querySelector(blockSelector)
//     block.innerHTML = '<span>Тут должна быть рекламавашей ракеты</span>'
//   }
// }
//
// Object.assign(BattleShip.prototype, renderMixin)
//
// const newBattleShip = new BattleShip()
//
// newBattleShip.render('.rocket')

// Защищенные свойства классов
//
// class SpaceShip {
//   constructor(name) {
//     this.name = name
//   }
//   _speed = 6
//
//   getSpeed() {
//     return this._speed
//   }
//
//   setSpeed(value) {
//     this._speed = value
//   }
//
// }

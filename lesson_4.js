// Область видимости
//
// let a = 1;
// if (a) {
//   let b = 2;
//   // var b = 2;
// }
// console.log(a);
// console.log(b);

// Преобразование типов
//
// const a = 5;
// const b = '2';
//
// console.log(a + Number(b))

//Логические операторы
// a = true;
// b = false;
// console.log(a || b);
// console.log(a && b);
//
// //console.log(!a, !b)

// работа с DOM
//
// const mainContainer = document.querySelector('.main-section')
// let name = 'Алексей'
// let info = 'teacher ISTU'
// let content = `<div>${name}</div>`
// mainContainer.innerHTML = content
// // mainContainer.textContent = info

//Поиск подстроки в строке
//
// const user = 'Константин Констатинопольский'
// const searchString = 'конст'
//
// const result = user.includes(searchString)
// console.log(result)

//Пример добавления строки в массив
// const users = ['Константин Констатинопольский', 'Иван Иванов', 'Анастасия Преображенская']
//
// users.splice(1,0, 'Олег Петров')
// console.log(users)
// // const admins = users.slice(1,3)
// // console.log(admins)
// // // const managers = ['Jhone Doe', 'Mr. Smidth']
// // // const allUsers = users.concat(managers)
// // // console.log(allUsers)
//

// Фильтрация массива
// const users = ['Константин Констатинопольский', 'Иван Иванов', 'Анастасия Преображенская', 'Константин Важенин']
// const searchUser = ' константин'
// const result = users.find(function(user) {
//   return user.toLowerCase().includes(searchUser)
// })
// console.log(result)
// // const result = users.filter( user => user.includes(searchUser))
// // console.log(result)

//Преобразование массивов
// const mainContainer = document.querySelector('.main-section')
// const users = ['Константин Констатинопольский', 'Иван Иванов', 'Анастасия Преображенская', 'Константин Важенин']
//
// const usersContent = users.map(user => `<div>${user}</div>`)
//
// mainContainer.innerHTML = usersContent.join('')

//пример опасности
//
// const user1 = {
//   name: 'Джиген',
//   age: '30'
// }
//
// const user2 = {
//   name: 'Джиген',
//   age: '30'
// }
//
// console.log(user1 === user2)
// // const user3 = user1
// // console.log(user1 === user3)
// //
// // // user3.age = 100
// // // console.log(user1)
// // //
// // // // user3 = {
// // // //   x: 2,
// // // //   y: 1
// // // // }

//тест this
// let fullName = 'Neo';
// let newUser = {
//   fullName: 'Trinity',
//   prop: {
//     fullName: 'Morpheus',
//     getFullName: function() {
//       return this.fullName
//     },
//     getFullName2: () => this.fullName
//   }
// }
//
// console.log(newUser.prop.getFullName())
// console.log(newUser.prop.getFullName2())

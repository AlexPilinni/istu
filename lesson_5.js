//Hoisting var let const

// console.log(a);
// console.log(b);
// console.log(c);
// var a = 1;
// let b = 2;
// const c = 3;

//параметры функций

// const users = ['Константин Констатинопольский', 'Иван Иванов', 'Анастасия Преображенская', 'Константин Важенин']
//
// const firstContainer = document.querySelector('.first-section')
// // const secondContainer = document.querySelector('.second-section')
// // const usersList = users.map(function(user) {
// //   return`<li>${user}</li>`
// // })
// function createComponent(componentTag = 'div', componentClass,...children) {
//   return `<${componentTag} class="${componentClass}">
//               ${children.join('')}
//           </${componentTag}>`
// }
//
// firstContainer.innerHTML = createComponent('p', 'text', '<span>ололо</span>', '777')
//
// // secondContainer.innerHTML = createComponent('ul','iist', ...usersList)


// Hoisting для функций


// const firstContainer = document.querySelector('.first-section')
//
// // insertComponent(firstContainer, 'section', 'paragraph', `<p>asdasd</p>`)
//
// //expression
// const insertComponent = function(block, componentTag = 'div', componentClass, ...children) {
//   block.innerHTML = createComponent(componentTag, componentClass, ...children)
//
// //declaration
//   function createComponent(componentTag = 'div', componentClass,...children) {
//     return `<${componentTag} class="${componentClass}">
//                 ${children.join('')}
//             </${componentTag}>`
//   }
// }
//
// insertComponent(firstContainer, 'section', 'paragraph', `<p>Абра кадабра</p>`)


// внутренние и внешние перменные (замыкание - счётчик)

// let outer = function () {
//   let x = 0
//   return function inner() {
//     x+=1
//     console.log(x)
//   }
// }
//
// let sum = outer();
// console.log(sum())
// console.log(sum())
// console.log(sum())
// console.log(sum())

//контекст

// function foo1() {
//   console.log(this)
// }
//
// const foo2 = () => console.log(this)
//
// foo1()
// foo2()
//
// // const obj = {
// //   foo1,
// //   foo2
// // }
// //
// // obj.foo1()
// // obj.foo2()
// //
// // // const users = ['Константин Констатинопольский', 'Иван Иванов', 'Анастасия Преображенская', 'Константин Важенин']
// // // const employees = {
// // //   title: 'Имя',
// // //   list: [...users],
// // //   showUser() {
// // //     this.list.forEach(item => {
// // //       console.log(`${this.title} ${item}`)
// // //     })
// // //   }
// // // }
// // //
// // // employees.showUser()


// bind call apply


// const tiger = {
//   name: 'Р-р-руди'
// }
//
// function meow (endPhrase = '', question= '') {
//   console.log('Меня зовут', this.name, endPhrase, question)
// }
// meow()
// // meow.apply(tiger, ['рррррр', 'Куснуть за бочок?'])
// // // meow.call(tiger, 'рррррр', 'Куснуть за бочок?')
// // // // meow.bind(tiger, '!!')

// Потеря контекста

// const cat = {
//   name: 'Барсик',
//   meow() {
//     console.log('меня зовут', this.name)
//   }
// }
//
// cat.meow()
//
// setTimeout(cat.meow, 2000)

//Каррирование
//
// const sum = (a, b) => a + b;
//
// const sub = (a, b) => a - b;
//
// const formula = (a,b, func, mul) => console.log(func(a, b)*mul)
//
// formula(3,4, sum, 2)
// formula(3,4, sub, 2)

